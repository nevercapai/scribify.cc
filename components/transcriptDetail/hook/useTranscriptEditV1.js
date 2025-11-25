import { ref, nextTick, computed, watch, onMounted, onUnmounted } from "vue";
import { debounce, cloneDeep } from "lodash-es";
import { v4 } from "uuid";
import {
  getParagraphElement,
  scrollToSpecificWord,
  isChildInParentViewport
} from "./utils";
import { sleep } from "~/utils/tools";
/**
 * 优化的转录文本编辑逻辑
 */
export default function useTranscriptEditOptimized(
  transcriptData,
  dynamicScroller,
  updateSubtitle,
  emit,
  props
) {
  const useScroll = useScrollTitleStore();
  // 编辑模式状态
  const isEditRightTranscript = ref(false);
  const isComposing = ref(false);

  // 段落级别的编辑状态管理
  const activeEditElement = ref({
    paragraphId: null, // 当前编辑的段落ID
    editingSentenceId: null // 当前编辑的句子ID
  });
  let lastCursorPos = -1;
  // 优化的编辑历史记录 - 使用更高效的数据结构
  const editHistory = ref([]);
  const currentHistoryIndex = ref(-1);
  const MAX_HISTORY_SIZE = 50; // 限制历史记录大小以提高性能

  // 光标位置跟踪 - 基于段落级别
  const cursorPositionTracker = ref({
    paragraphId: null,
    position: 0,
    lastUpdateTime: 0
  });

  // 计算属性
  const canUndo = computed(() => currentHistoryIndex.value >= 0);
  const canRedo = computed(
    () => currentHistoryIndex.value < editHistory.value.length - 1
  );
  const editEventHandle = async ({ taskId, fileId }) => {
    const { useCommonApi } = await import("~/api/common");
    const { collectEvent } = useCommonApi;
    await collectEvent({ eventType: "edit", taskId, fileId });
  };

  /**
   * 启用编辑模式
   */
  const handleEditRightTranscript = (val) => {
    isEditRightTranscript.value = true;
    useScroll.setNewTitle(`Editing: ${val.fileName} - Nevercap`);
    editEventHandle(val);
  };

  /**
   * 检查是否为当前活跃编辑的句子
   */
  const isActiveEditingSentence = (sentenceId) => {
    return activeEditElement.value.editingSentenceId === sentenceId;
  };

  /**
   * 重置活跃编辑元素
   */
  const resetActiveEditElement = () => {
    // 重置光标跟踪器
    cursorPositionTracker.value = {
      paragraphId: null,
      position: 0,
      lastUpdateTime: 0
    };

    activeEditElement.value = {
      paragraphId: null,
      editingSentenceId: null
    };
  };
  // 保存到数据库
  const saveTranscript = async (data) => {
    const { transcriptApi } = await import("~/api/transcript");
    await transcriptApi.editFileTranscriptInfo({
      pid: data.pid,
      fileId: props.fileBaseInfo.id,
      taskId: props.fileBaseInfo.taskId,
      editContent: JSON.stringify(data.sentences)
    });
  };
  /**
   * 获取段落的完整数据快照
   */
  const getParagraphSnapshot = (paragraphId) => {
    const paragraph = transcriptData.value.paragraphs?.find(
      (p) => p.pid === paragraphId
    );
    if (!paragraph) return null;

    return cloneDeep(paragraph);
  };

  /**
   * 恢复段落数据快照
   */
  const restoreParagraphSnapshot = (paragraphSnapshot) => {
    if (!paragraphSnapshot) return false;

    const paragraphIndex = transcriptData.value.paragraphs?.findIndex(
      (p) => p.pid === paragraphSnapshot.pid
    );
    if (paragraphIndex === -1) return false;

    // 恢复整个段落数据
    transcriptData.value.paragraphs[paragraphIndex] = JSON.parse(
      JSON.stringify(paragraphSnapshot)
    );
    transcriptData.value.paragraphs[paragraphIndex].pk =
      paragraphSnapshot.pid + v4();
    return true;
  };

  /**
   * 优化的历史记录管理 - 保存段落级别的数据
   */
  const addToHistory = (operation) => {
    // 移除当前索引之后的所有历史记录
    editHistory.value = editHistory.value.slice(
      0,
      currentHistoryIndex.value + 1
    );
    const beforePos = lastCursorPos;
    const afterPos = cursorPositionTracker.value.position;
    const optimizedOperation = {
      id: `op-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...operation,
      beforePos,
      afterPos
    };
    lastCursorPos = -1;
    // 添加优化后的操作
    const modifyIdsMap = {};
    operation.afterState.modifiedSentences.forEach((item) => {
      modifyIdsMap[item.sid] = item;
    });
    const originSentences = operation.beforeState.paragraphSnapshot.sentences;
    originSentences.forEach((sentence) => {
      if (modifyIdsMap[sentence.sid]) {
        sentence.contents = [
          {
            cid: sentence.contents[0].cid,
            content: modifyIdsMap[sentence.sid].originalContent,
            start_time: sentence.start_time,
            stop_time: sentence.stop_time
          }
        ];
      }
    });

    editHistory.value.push(optimizedOperation);
    currentHistoryIndex.value = editHistory.value.length - 1;

    // 限制历史记录大小
    if (editHistory.value.length > MAX_HISTORY_SIZE) {
      editHistory.value.shift();
      currentHistoryIndex.value--;
    }
  };
  const inferDirection = (selection) => {
    if (!selection.rangeCount) return null;

    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;

    // 同一节点内的选择方向判断
    if (startContainer === endContainer) {
      return range.startOffset <= range.endOffset ? "forward" : "backward";
    }

    // 跨节点选择方向判断
    const position = startContainer.compareDocumentPosition(endContainer);
    const START_TO_END = 4; // Node.DOCUMENT_POSITION_FOLLOWING

    return position === START_TO_END ? "forward" : "backward";
  };

  /**
   * 获取当前光标位置
   */
  const getCurrentCursorPosition = (element) => {
    if (!element || !element.isContentEditable) return 0;

    try {
      const selection = window.getSelection();
      if (selection.rangeCount === 0) return 0;
      // forward：从前往后  backward 从后往前
      let direction = selection.direction;
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      console.log("🚀 ~ file:window.getSelection =》direction： 🚀", direction);
      if (direction === undefined || direction === "none") {
        direction = inferDirection(selection);
      }
      console.log("🚀 ~当前range的direction方向", direction);
      if (direction === "forward") {
        preCaretRange.setEnd(range.endContainer, range.endOffset);
      } else {
        preCaretRange.setEnd(range.startContainer, range.startOffset);
      }
      return preCaretRange.toString().length;
    } catch (error) {
      console.warn("Failed to get cursor position:", error);
      return 0;
    }
  };

  /**
   * 更新光标位置跟踪器 - 段落级别
   */
  const updateCursorTracker = (paragraphId, position) => {
    cursorPositionTracker.value = {
      paragraphId,
      position,
      lastUpdateTime: Date.now()
    };
  };

  /**
   * 设置光标位置到指定元素的指定位置
   */
  const setCursorPosition = (element, position) => {
    if (!element || !element.isContentEditable) return;

    const range = document.createRange();
    const selection = window.getSelection();

    try {
      // 确保元素有文本内容
      const textContent = element.textContent || "";
      const targetPosition = Math.min(
        Math.max(0, position),
        textContent.length
      );

      if (
        element.firstChild &&
        element.firstChild.nodeType === Node.TEXT_NODE
      ) {
        range.setStart(element.firstChild, targetPosition);
        range.setEnd(element.firstChild, targetPosition);
      } else {
        // 如果没有文本节点，创建一个
        const textNode = document.createTextNode(textContent);
        element.appendChild(textNode);
        range.setStart(textNode, targetPosition);
        range.setEnd(textNode, targetPosition);
      }

      selection.removeAllRanges();
      selection.addRange(range);
      console.log("🚀 ~  🚀", 1);
      element.focus();

      // 更新光标跟踪器
      const sentenceId =
        element.getAttribute("data-sid") ||
        element.closest("[data-sid]")?.getAttribute("data-sid");
      if (sentenceId) {
        updateCursorTracker(sentenceId, targetPosition);
      }
    } catch (error) {
      console.warn("Failed to set cursor position:", error);
      // 备用方案：简单聚焦元素
      console.log("🚀 ~  🚀", 1);
      element.focus();
    }
  };

  /**
   * 获取编辑元素并设置光标位置
   */
  const focusAndSetCursor = (sentenceId, cursorPosition = "end") => {
    console.trace("focusAndSetCursor");
    nextTick(() => {
      const sentenceElement = document.querySelector(
        `[data-sid="${sentenceId}"]`
      );
      if (!sentenceElement) return;

      // 查找可编辑的元素
      const editableElement =
        sentenceElement.querySelector(".sentence-editor") ||
        sentenceElement.querySelector('[contenteditable="true"]');

      if (editableElement) {
        const textContent = editableElement.textContent || "";
        let position;

        if (cursorPosition === "start") {
          position = 0;
        } else if (cursorPosition === "end") {
          position = textContent.length;
        } else if (typeof cursorPosition === "number") {
          position = cursorPosition;
        } else {
          position = textContent.length; // 默认到末尾
        }

        setCursorPosition(editableElement, position);
      }
    });
  };

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;

    const activeElement = document.activeElement;
    if (!activeElement.isContentEditable) return;

    const range = selection.getRangeAt(0);
    const container = range.startContainer.parentElement;
    const pId = container.getAttribute("data-pid");
    const sid = container.getAttribute("data-sid");

    if (pId && isEditRightTranscript.value) {
      const position = getCurrentCursorPosition(activeElement);
      console.log("🚀 ~ 段落光标实时位置 🚀", pId, position);
      updateCursorTracker(pId, position);
      // 更新选中句子
      activeEditElement.value = {
        paragraphId: pId,
        editingSentenceId: sid
      };
    }
  };
  /**
   * 监听光标位置变化
   */
  const setupCursorTracking = () => {
    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  };
  const scrollCore = async (pid, sid) => {
    await sleep(10);
    let targetParagraph = null;
    if (dynamicScroller.value && typeof getParagraphElement === "function") {
      targetParagraph = await getParagraphElement(
        transcriptData.value.paragraphs,
        pid,
        dynamicScroller.value
      );
    }
    if (!sid) {
      return await sleep(20);
    }
    // 如果scrolled为true, 说明虚拟滚动了
    if (targetParagraph?.scrolled) {
      scrollToSpecificWord(targetParagraph?.paragraphElement, sid);
    } else {
      const targetParent = document.querySelector(".transcript-container");
      const targetChild = document.querySelector(
        `.transcript-container .sentence-wrapper[data-sid="${sid}"]`
      );
      if (
        targetChild &&
        !isChildInParentViewport(targetParent, targetChild, false)
      ) {
        scrollToSpecificWord(targetParagraph?.paragraphElement, sid);
      }
    }
    await sleep(100);
  };
  /**
   * 撤销操作 - 基于变化数据的优化版本
   * 撤销后光标精确定位到调整后的位置
   */
  const undoOperation = async () => {
    if (!canUndo.value) return;
    console.log("🚀 ~ undo 当前历史索引 🚀", currentHistoryIndex.value);
    const operation = editHistory.value[currentHistoryIndex.value];

    // 获取当前光标位置（如果在同一个段落中）
    let adjustedCursorPosition = 0;

    adjustedCursorPosition = Math.max(0, operation.beforePos);
    console.log("🚀 ~ file: 撤销前的光标位置 🚀", adjustedCursorPosition);
    const scrollPid = operation.beforeState.paragraphId;
    // 使用段落快照进行恢复
    if (operation.beforeState?.paragraphSnapshot) {
      // 这里的段落可能没在视图内，需要先滚动到视图内
      await scrollCore(scrollPid);

      const restored = restoreParagraphSnapshot(
        operation.beforeState.paragraphSnapshot
      );
      if (!restored) {
        console.warn(
          "Failed to restore paragraph snapshot during undo, falling back to legacy method"
        );
      }
    }

    // 更新编辑状态并使用 adjustedCursorPosition 恢复光标位置
    // 段落编辑的撤销：恢复段落的所有句子变化
    console.log("Undoing paragraph edit:", operation.beforeState.paragraphId);

    // 设置编辑状态并恢复光标位置
    const firstModifiedSentence = operation.afterState.modifiedSentences[0];
    // 优化的光标位置恢复逻辑：根据段落级别光标位置查找对应的句子
    if (adjustedCursorPosition > 0) {
      // 延迟恢复光标位置，等待DOM更新
      await nextTick();
      const cursorInfo = findSentenceAndPositionFromParagraphCursor(
        operation.beforeState.paragraphId,
        adjustedCursorPosition
      );
      if (cursorInfo.sentenceId) {
        await scrollCore(scrollPid, cursorInfo.sentenceId);
        // 在正确的句子中恢复光标位置
        restoreCursorPositionInSentence(
          cursorInfo.sentenceId,
          cursorInfo.positionInSentence
        );
      } else {
        // 如果找不到对应的句子，使用默认逻辑
        await scrollCore(scrollPid, firstModifiedSentence.sid);
        focusAndSetCursor(firstModifiedSentence.sid, "start");
        activeEditElement.value = {
          paragraphId: operation.beforeState.paragraphId,
          editingSentenceId: firstModifiedSentence.sid
        };
      }
    } else {
      // 如果不是当前段落或没有光标位置，默认定位到末尾
      await scrollCore(scrollPid, firstModifiedSentence.sid);
      focusAndSetCursor(firstModifiedSentence.sid, "start");
    }
    currentHistoryIndex.value--;
    updateSubtitle();
    saveTranscript(operation.beforeState.paragraphSnapshot);
  };

  /**
   * 重做操作 - 基于段落数据快照的优化版本
   * 重做后光标精确定位到调整后的位置
   */
  const redoOperation = async () => {
    if (!canRedo.value) return;
    console.log("🚀 ~ redo 当前历史索引 🚀", currentHistoryIndex.value);
    currentHistoryIndex.value++;
    const operation = editHistory.value[currentHistoryIndex.value];

    console.log("Redoing operation:");
    // 获取当前光标位置（如果在同一个段落中）
    let adjustedCursorPosition = 0;

    adjustedCursorPosition = Math.max(0, operation.afterPos);
    const scrollPid = operation.afterState.paragraphId;

    // 优先使用段落数据快照进行恢复
    if (operation.afterState?.paragraphSnapshot) {
      // 这里的段落可能没在视图内，需要先滚动到视图内
      await scrollCore(scrollPid);
      const restored = restoreParagraphSnapshot(
        operation.afterState.paragraphSnapshot
      );
      if (!restored) {
        console.warn(
          "Failed to restore paragraph snapshot during redo, falling back to legacy method"
        );
      }
    }

    // 更新编辑状态并设置光标位置
    // 段落编辑的重做：恢复段落的所有句子变化
    console.log("Redoing paragraph edit:", scrollPid);

    // 段落已经通过快照恢复，重新设置编辑状态
    const firstModifiedSentence = operation.afterState.modifiedSentences[0];
    // 优化的光标位置恢复逻辑：根据段落级别光标位置查找对应的句子
    if (adjustedCursorPosition > 0) {
      // 延迟恢复光标位置，等待DOM更新
      await nextTick();

      const cursorInfo = findSentenceAndPositionFromParagraphCursor(
        operation.beforeState.paragraphId,
        adjustedCursorPosition
      );
      console.log("🚀 ~ file: cursorInfo**** 🚀", cursorInfo);
      if (cursorInfo.sentenceId) {
        await scrollCore(scrollPid, cursorInfo.sentenceId);
        // 在正确的句子中恢复光标位置
        restoreCursorPositionInSentence(
          cursorInfo.sentenceId,
          cursorInfo.positionInSentence
        );
      } else {
        // 如果找不到对应的句子，使用默认逻辑
        await scrollCore(scrollPid, firstModifiedSentence.sid);
        focusAndSetCursor(firstModifiedSentence.sid, "start");
      }
    } else {
      // 如果不是当前段落或没有光标位置，默认定位到句头
      await scrollCore(scrollPid, firstModifiedSentence.sid);
      focusAndSetCursor(firstModifiedSentence.sid, "start");
    }

    updateSubtitle();
    saveTranscript(operation.afterState.paragraphSnapshot);
  };

  /**
   * 保存编辑内容
   */
  const handleSaveRightTranscript = async (cb) => {
    try {
      // 退出编辑模式
      isEditRightTranscript.value = false;
      useScroll.setNewTitle(useScroll.oldTitle);
      resetActiveEditElement();

      // 清空历史记录
      editHistory.value = [];
      currentHistoryIndex.value = -1;
      cb();
      emit("saveConfig");
    } catch (error) {
      console.error("Failed to save transcript:", error);
    }
  };

  /**
   * 容器级别的实时编辑输入处理 - 处理整个段落的变化
   */
  const handleRealTimeInputCore = async (event) => {
    if (isComposing.value) return; // 输入法编辑时不触发保存
    const containerElement = event.target;
    // 确保是 sentence-container 元素
    if (!containerElement.classList.contains("sentence-container")) return;

    // 获取段落 ID
    const paragraphElement = containerElement.closest("[data-pid]");
    if (!paragraphElement) return;

    const paragraphId = paragraphElement.getAttribute("data-pid");
    if (!paragraphId) return;

    // 获取段落数据
    const paragraph = transcriptData.value.paragraphs?.find(
      (p) => p.pid === paragraphId
    );
    if (!paragraph) return;

    // 获取编辑前的段落快照（用于历史记录）
    const beforeSnapshot = getParagraphSnapshot(paragraphId);

    // 处理段落级别的编辑变化
    await handleParagraphLevelEdit(containerElement, paragraph, beforeSnapshot);

    // 触发防抖保存
  };
  const handleRealTimeInputHandle = debounce(handleRealTimeInputCore, 300);
  const handleRealTimeInput = (e) => {
    if (lastCursorPos === -1) {
      lastCursorPos = cursorPositionTracker.value.position;
    }
    handleRealTimeInputHandle(e);
  };
  /**
   * 处理段落级别的编辑变化
   */
  const handleParagraphLevelEdit = async (
    containerElement,
    paragraph,
    beforeSnapshot
  ) => {
    const modifiedSentences = [];
    const deletedSentences = [];
    let hasLengthChanges = false;
    // 获取容器中所有的句子元素
    const sentenceElements = containerElement.querySelectorAll(
      ".sentence-wrapper[data-pid]"
    );
    const sentenceElementsMap = new Map();

    // 构建 DOM 句子映射
    sentenceElements.forEach((element) => {
      const sid = element.getAttribute("data-sid");
      if (sid) {
        sentenceElementsMap.set(sid, element);
      }
    });
    // 遍历原始数据中的所有句子
    paragraph.sentences?.forEach((sentence, sentenceIndex) => {
      const sentenceElement = sentenceElementsMap.get(sentence.sid);
      if (!sentenceElement) {
        console.log("句子被删除", sentence.sid);
        deletedSentences.push(sentence.sid);
        // 句子被删除
        hasLengthChanges = true;
      }
      // 获取 DOM 中的实际内容
      const currentDOMContentArr =
        extractSentenceContentFromDOM(sentenceElement);
      const currentDOMContent = currentDOMContentArr.join("");
      const originalContent =
        sentence.contents?.map((word) => word.content).join("") || "";
      // 判断当前句子是否被修改
      if (currentDOMContent !== originalContent) {
        console.log("🚀 ~ file: 当前改动的句子.🚀", sentence.sid);
        // 合并句子下的词语更新句子数据
        const contents = mergeSentenceContents(sentence, currentDOMContentArr);
        hasLengthChanges = contents.length !== sentence.contents.length;
        sentence.contents = contents;

        modifiedSentences.push({
          sid: sentence.sid,
          originalContent,
          newContent: currentDOMContent
        });
      }
    });

    // 过滤删除的句子
    paragraph.sentences = paragraph.sentences.filter(
      (sentence) => !deletedSentences.includes(sentence.sid)
    );
    nextTick(() => {
      const pid = paragraph.pid;
      const cursorInfo = findSentenceAndPositionFromParagraphCursor(
        pid,
        cursorPositionTracker.value.position
      );
      if (cursorInfo.sentenceId) {
        // 在正确的句子中恢复光标位置
        restoreCursorPositionInSentence(
          cursorInfo.sentenceId,
          cursorInfo.positionInSentence
        );
      }
    });
    // 句子被删除了，后者有句子合并
    if (hasLengthChanges) {
      paragraph.pk = paragraph.pid + v4();
    }
    if (modifiedSentences.length === 0) {
      return;
    }
    // 创建历史记录
    const afterSnapshot = cloneDeep(paragraph);
    addToHistory({
      type: "PARAGRAPH_EDIT",
      timestamp: Date.now(),
      beforeState: {
        paragraphId: paragraph.pid,
        paragraphSnapshot: beforeSnapshot
      },
      afterState: {
        paragraphId: paragraph.pid,
        paragraphSnapshot: afterSnapshot,
        modifiedSentences
      }
    });
    updateSubtitle();
    saveTranscript(paragraph);
  };

  /**
   * 从 DOM 元素中提取句子内容
   */
  const extractSentenceContentFromDOM = (sentenceElement) => {
    if (!sentenceElement) return [];
    // 获取句子元素下所有词语元素的内容
    const wordElements = sentenceElement.querySelectorAll(".word-span");
    let contentArr = [];

    wordElements.forEach((wordElement) => {
      wordElement.textContent && contentArr.push(wordElement.textContent);
    });

    return contentArr;
  };

  /**
   * 根据段落级别光标位置查找对应的句子和句子内位置
   */
  const findSentenceAndPositionFromParagraphCursor = (
    paragraphId,
    paragraphCursorPosition
  ) => {
    try {
      // 获取段落数据
      const paragraph = transcriptData.value.paragraphs?.find(
        (p) => p.pid === paragraphId
      );
      if (!paragraph || !paragraph.sentences) {
        return { sentenceId: null, positionInSentence: 0 };
      }

      // 获取段落容器元素
      const paragraphElement = document.querySelector(
        `[data-pid="${paragraphId}"] .sentence-container`
      );
      if (!paragraphElement) {
        return { sentenceId: null, positionInSentence: 0 };
      }

      // 遍历段落中的所有句子，计算累积位置
      let cumulativePosition = 0;

      for (const sentence of paragraph.sentences) {
        const sentenceElement = paragraphElement.querySelector(
          `[data-sid="${sentence.sid}"]`
        );
        if (!sentenceElement) continue;

        // 获取句子的文本内容长度
        const sentenceText = sentenceElement.textContent || "";
        const sentenceLength = sentenceText.length;

        // 检查光标是否在当前句子范围内
        if (
          paragraphCursorPosition >= cumulativePosition &&
          paragraphCursorPosition <= cumulativePosition + sentenceLength
        ) {
          // 计算在句子内的相对位置
          const positionInSentence =
            paragraphCursorPosition - cumulativePosition;

          console.log(`Found cursor in sentence ${sentence.sid}:`, {
            paragraphCursorPosition,
            cumulativePosition,
            sentenceLength,
            positionInSentence
          });

          return {
            sentenceId: sentence.sid,
            positionInSentence: Math.min(positionInSentence, sentenceLength)
          };
        }

        // 更新累积位置
        cumulativePosition += sentenceLength;
      }

      // 如果没有找到对应的句子，返回最后一个句子
      const lastSentence = paragraph.sentences[paragraph.sentences.length - 1];
      if (lastSentence) {
        const lastSentenceElement = paragraphElement.querySelector(
          `[data-sid="${lastSentence.sid}"]`
        );
        const lastSentenceLength =
          lastSentenceElement?.textContent?.length || 0;

        return {
          sentenceId: lastSentence.sid,
          positionInSentence: lastSentenceLength
        };
      }

      return { sentenceId: null, positionInSentence: 0 };
    } catch (error) {
      console.warn(
        "Failed to find sentence from paragraph cursor position:",
        error
      );
      return { sentenceId: null, positionInSentence: 0 };
    }
  };

  /**
   * 恢复句子内的光标位置
   */
  const restoreCursorPositionInSentence = (sentenceId, position) => {
    try {
      const sentenceElement = document.querySelector(
        `.sentence-wrapper[data-sid="${sentenceId}"]`
      );
      if (!sentenceElement) return;

      // 获取所有文本节点和可编辑元素
      const getAllTextNodes = (element) => {
        const textNodes = [];
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );

        let node;
        while ((node = walker.nextNode())) {
          textNodes.push(node);
        }
        return textNodes;
      };

      // 获取所有文本节点
      const textNodes = getAllTextNodes(sentenceElement);
      if (textNodes.length === 0) return;

      // 计算总文本长度和每个节点的累积偏移
      let totalLength = 0;
      const nodeOffsets = [];

      textNodes.forEach((node) => {
        nodeOffsets.push({
          node,
          startOffset: totalLength,
          endOffset: totalLength + node.textContent.length,
          length: node.textContent.length
        });
        totalLength += node.textContent.length;
      });

      // 确保位置不超出总文本长度
      const safePosition = Math.min(position, totalLength);

      // 找到目标位置所在的文本节点
      let targetNodeInfo = null;
      let positionInNode = 0;

      for (const nodeInfo of nodeOffsets) {
        if (
          safePosition >= nodeInfo.startOffset &&
          safePosition <= nodeInfo.endOffset
        ) {
          targetNodeInfo = nodeInfo;
          positionInNode = safePosition - nodeInfo.startOffset;
          break;
        }
      }

      // 如果没找到合适的节点，使用最后一个节点
      if (!targetNodeInfo && nodeOffsets.length > 0) {
        targetNodeInfo = nodeOffsets[nodeOffsets.length - 1];
        positionInNode = targetNodeInfo.length;
      }

      if (!targetNodeInfo) return;

      // 设置光标位置
      const range = document.createRange();
      const selection = window.getSelection();

      range.setStart(targetNodeInfo.node, positionInNode);
      range.setEnd(targetNodeInfo.node, positionInNode);

      selection.removeAllRanges();
      selection.addRange(range);

      // 确保包含目标节点的可编辑元素获得焦点
      let editableElement = targetNodeInfo.node.parentElement;
      while (
        editableElement &&
        !editableElement.contentEditable &&
        editableElement !== sentenceElement
      ) {
        editableElement = editableElement.parentElement;
      }

      if (editableElement && editableElement.contentEditable) {
        editableElement.focus();
      } else {
        // 回退到查找第一个可编辑的词语元素
        const wordElement = sentenceElement.querySelector(".word-span");
        if (wordElement) {
          wordElement.focus();
        }
      }

      console.log(
        `Cursor restored to position ${safePosition} (node position: ${positionInNode}) in sentence ${sentenceId}`
      );
    } catch (error) {
      console.warn("Failed to restore cursor position in sentence:", error);
    }
  };

  /**
   * 合并句子下的词语
   */
  const mergeSentenceContents = (sentence, newContent) => {
    if (newContent?.length === 0) {
      return [];
    }
    const allContents = newContent.reduce((content, word) => {
      content += word;
      return content;
    }, "");
    return [
      {
        ...sentence.contents[0],
        cid: sentence.contents[0].cid,
        content: allContents,
        start_time: sentence.start_time,
        stop_time: sentence.stop_time
      }
    ];
  };

  /**
   * 输入法处理
   */
  const handleCompositionStart = () => {
    isComposing.value = true;
  };

  const handleCompositionEnd = (event) => {
    isComposing.value = false;
    // 触发编辑事件
    nextTick(() => {
      const customEvent = new Event("input", { bubbles: true });
      event.target.dispatchEvent(customEvent);
    });
  };

  // 光标跟踪清理函数
  let cursorTrackingCleanup = null;

  // 监听编辑模式变化
  watch(isEditRightTranscript, (newValue) => {
    if (newValue) {
      nextTick(() => {
        // 启动光标跟踪
        cursorTrackingCleanup = setupCursorTracking();
      });
    } else {
      // 清理光标跟踪
      if (cursorTrackingCleanup) {
        cursorTrackingCleanup();
        cursorTrackingCleanup = null;
      }
      // 重置光标跟踪器
      cursorPositionTracker.value = {
        sentenceId: null,
        position: 0,
        lastUpdateTime: 0
      };
    }
  });
  const handlePaste = (e) => {
    // 阻止默认粘贴行为
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    console.log("🚀 ~ 剪切板内容 🚀", text);
    if (!text) {
      console.log("🚀 无粘贴内容🚀");
      return;
    }
    // 获取当前选区
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    // 删除选区内容
    const range = selection.getRangeAt(0);
    range.deleteContents();

    // 插入剪贴板内容到选区位置
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);

    // 更新光标位置
    range.setStartAfter(textNode);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    // 创建input事件
    const event = new Event("input", {
      bubbles: false, // 事件是否冒泡
      cancelable: false // 事件能否被取消
    });
    const target = e.target;
    const pid = target.dataset.pid;
    const container = document.querySelector(
      `.sentence-container[data-pid="${pid}"]`
    );
    container?.dispatchEvent(event);
  };
  // 撤销事件
  const revokeHandle = (event) => {
    if (
      isEditRightTranscript.value &&
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "z" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      console.log("Ctrl+Z/Cmd+Z 触发撤销");
      undoOperation();
    }
  };
  // 监听ipad 的键盘空格事件
  onMounted(async () => {
    await nextTick();
    document.addEventListener("keydown", revokeHandle);
  });
  onUnmounted(() => {
    document.removeEventListener("keydown", revokeHandle);
  });
  return {
    // 状态
    isEditRightTranscript,
    activeEditElement,
    canUndo,
    canRedo,
    editHistory,
    currentHistoryIndex,

    // 方法
    handleEditRightTranscript,
    handleSaveRightTranscript,
    isActiveEditingSentence,
    resetActiveEditElement,
    undoOperation,
    redoOperation,
    handleCompositionStart,
    handleCompositionEnd,

    // 光标定位方法
    setCursorPosition,
    focusAndSetCursor,
    getCurrentCursorPosition,
    updateCursorTracker,
    setupCursorTracking,

    // 光标跟踪状态
    cursorPositionTracker,

    // 段落数据快照管理
    getParagraphSnapshot,
    restoreParagraphSnapshot,

    // 事件处理器
    handleRealTimeInput,
    handlePaste
  };
}
