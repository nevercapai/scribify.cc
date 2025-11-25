import { ref, computed, watch } from "vue";
import { cloneDeep } from "lodash-es";
import { useMediaQuery, useWindowSize } from "@vueuse/core";

export default function useSpeaker(transcriptData, initSpeakers, emit, props) {
  // 说话人弹窗相关状态
  const editSpeakerDialogVisible = ref(false);
  const originSelectedSpeakerId = ref("");
  const selectedSpeakerId = ref("");
  const editingSpeakerId = ref("");
  const editingSpeakerName = ref("");
  const applyToAllMatching = ref(0);
  const speakerPopoverRef = ref(null);
  const speakerPopoverVisible = ref(false);
  const selectedPid = ref(""); // 选中的段落id
  const speakerBtnRef = ref(null);
  const scrollbarRef = ref(null);
  const speakerSaveLoading = ref(false);
  const hoverSelectedSpeakerId = ref("");
  const { isShowSpeaker } = toRefs(props.fileBaseInfo);
  isShowSpeaker.value ??= true;
  if (!props.fileBaseInfo.diarizeEnabled) {
    isShowSpeaker.value = false;
  }
  const speakers = ref(cloneDeep(initSpeakers.value));
  //
  const speakerItemsRef = ref([]);
  const speakerItemRef = ref(null);
  const popoverDupRef = ref(null);
  const speakerItemPopVisible = ref(false);
  const { t } = useI18n();
  const chooseTypes = ref([
    {
      label: t("TranscriptionPage.applyToCurrentParagraph"),
      id: 0
    },
    {
      label: t("TranscriptionPage.applyToAllMatchingSpeakers"),
      id: 1
    }
  ]);
  watch(
    initSpeakers,
    (newVal) => {
      speakers.value = cloneDeep(newVal);
    },
    {
      deep: true
    }
  );
  watch(speakerPopoverVisible, (newVal) => {
    if (newVal) {
      setTimeout(() => {
        const wrapRef = scrollbarRef.value?.wrapRef;
        if (wrapRef) {
          const activeEl = wrapRef.querySelector(".is-active");
          activeEl &&
            activeEl.scrollIntoView({
              block: "center"
            });
        }
      }, 10);
    }
  });
  let maxSpeakerId = Math.max(...speakers.value.map((item) => item.id));
  // 获取所有唯一的说话人
  const uniqueSpeakers = computed(() => {
    return speakers.value;
  });
  // 说话人映射表
  const uniqueSpeakersMap = computed(() => {
    return speakers.value.reduce((acc, cur) => {
      acc[cur.id] = cur.name;
      return acc;
    }, {});
  });
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { width } = useWindowSize();
  const speakerPopWidth = computed(() => {
    if (isDesktop.value) return "18rem";
    return Math.floor(width.value * 0.9) + "px";
  });
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("🚀 出现了 🚀");
      } else {
        console.log("🚀 隐藏了 🚀");
        handleSpeakerPopoverHide(true);
      }
    });
  });
  const editSpeakerCore = async (data) => {
    const { transcriptApi } = await import("~/api/transcript");
    await transcriptApi.editSpeaker({
      fileId: props.fileBaseInfo.id,
      taskId: props.fileBaseInfo.taskId,
      pid: selectedPid.value,
      applyAll: applyToAllMatching.value,
      ...data
    });
  };
  // 是否有重复的说话人
  const hasDuplicateSpeakers = computed(() => {
    if (!speakers.value.length) return false;

    // 检查当前选中的说话人count是否大于1
    const currentSpeaker = speakers.value.find(
      (s) => s.id === originSelectedSpeakerId.value
    );
    return currentSpeaker && currentSpeaker.count > 1;
  });

  // 处理说话人popover显示
  const handleSpeakerPopoverShow = (speakerId, pid, isShare, e) => {
    if (isShare) return;
    speakerPopoverVisible.value = true;
    selectedPid.value = pid;
    originSelectedSpeakerId.value = speakerId;

    // 检查当前speakerId是否在speakers中存在，如果存在则勾选
    const existingSpeaker = speakers.value.find((s) => s.id === speakerId);
    if (existingSpeaker) {
      selectedSpeakerId.value = existingSpeaker.id;
    } else {
      selectedSpeakerId.value = -1;
    }
    observer.observe(e.target);
  };

  // 处理说话人popover隐藏
  const handleSpeakerPopoverHide = (outside = false) => {
    // 重置状态
    selectedSpeakerId.value = "";
    originSelectedSpeakerId.value = "";
    applyToAllMatching.value = 0;
    speakerPopoverVisible.value = false;
    selectedPid.value = "";
    speakerItemsRef.value = [];
    speakerItemRef.value = null;
    speakerItemPopVisible.value = false;
    applyToAllMatching.value = 0;
    speakerSaveLoading.value = false;
    hoverSelectedSpeakerId.value = "";
    editingSpeakerId.value = "";
    editingSpeakerName.value = "";
    isInSpeakerPopover.value = false;
    if (outside) {
      speakers.value = cloneDeep(initSpeakers.value);
    }
    observer?.disconnect();
  };

  // 确认说话人选择
  const confirmSpeakerSelection = async (extraSpeaker) => {
    selectedSpeakerId.value =
      hoverSelectedSpeakerId.value || selectedSpeakerId.value;
    if (selectedSpeakerId.value === "") {
      return handleSpeakerPopoverHide();
    }
    // 获取选中的说话人信息
    let selectedSpeaker = speakers.value.find(
      (s) => s.id === selectedSpeakerId.value
    );

    if (!selectedSpeaker) {
      return handleSpeakerPopoverHide();
    }

    // 原说话人
    const originSpeaker = speakers.value.find(
      (item) => item.id === originSelectedSpeakerId.value
    );
    let targetSpeaker = selectedSpeaker;
    // 编辑说话人名字
    if (extraSpeaker) {
      targetSpeaker = originSpeaker;
      selectedSpeaker = originSpeaker;
    }
    if (!applyToAllMatching.value) {
      // 目标说话人数量+1
      targetSpeaker.count++;
      // 原说话人数量-1
      originSpeaker.count--;
    } else {
      // 两个说话人名称相同时
      if (targetSpeaker.id === originSpeaker.id) {
        console.log("🚀 ~ file: 两个说话人名称相同 不做数量处理🚀");
      } else {
        // 目标说话人数量 + 原说话人数量
        targetSpeaker.count = targetSpeaker.count + originSpeaker.count;
        // 原说话人数量 设置 为0
        originSpeaker.count = 0;
      }
    }
    const params = {
      sourceSpeakerId: originSelectedSpeakerId.value,
      targetSpeakerId: selectedSpeaker.id,
      targetSpeaker: selectedSpeaker.name,
      originSpeakers: speakers.value.map(({ id, name }) => ({
        speakerId: id,
        speaker: name
      }))
    };
    speakerSaveLoading.value = true;
    console.log("🚀 ~ params 🚀", params, speakers.value);
    try {
      await editSpeakerCore(params);
    } catch (e) {
    } finally {
      speakerSaveLoading.value = false;
    }
    emit(
      "updateSpeakers",
      speakers.value.map(({ id, name, count }) => ({ id, name, count }))
    );
    // 如果选择了应用到所有匹配的说话人
    if (applyToAllMatching.value) {
      // 更新所有匹配的说话人
      if (transcriptData.value && transcriptData.value.paragraphs) {
        transcriptData.value.paragraphs.forEach((p) => {
          if (p.speakerId === originSelectedSpeakerId.value) {
            p.speakerId = selectedSpeaker.id;
            p.speaker = selectedSpeaker.name;
          } else if (p.speakerId === extraSpeaker?.id) {
            p.speakerId = extraSpeaker.id;
            p.speaker = extraSpeaker.name;
          }
        });
      }
    } else {
      // 只更新当前说话人（根据pid）
      const paragraph = transcriptData.value.paragraphs.find(
        (p) => p.pid === selectedPid.value
      );
      if (paragraph) {
        paragraph.speakerId = selectedSpeaker.id;
        paragraph.speaker = selectedSpeaker.name;
      }
    }
    applyToAllMatching.value = 0;
  };
  const handleChooseType = async (id) => {
    applyToAllMatching.value = id;
    await confirmSpeakerSelection();
    // 关闭弹窗
    handleSpeakerPopoverHide();
  };
  // 打开编辑说话人弹窗
  const openEditSpeakerDialog = (speaker = null) => {
    if (speaker) {
      editingSpeakerId.value = speaker.id;
      editingSpeakerName.value = speaker.name;
    } else {
      // 新增说话人
      editingSpeakerId.value = "";
      editingSpeakerName.value = "";
    }

    editSpeakerDialogVisible.value = true;
  };
  const speakerPopoverMouseLeave = () => {
    hoverSelectedSpeakerId.value = "";
    speakerItemPopVisible.value = false;
    isInSpeakerPopover.value = false;
  };
  // 选择说话人-点击
  const selectSpeaker = (speakerId, index) => {
    if (speakerId === originSelectedSpeakerId.value) {
      if (!isDesktop.value) {
        selectedSpeakerId.value = speakerId;
      }
      return speakerPopoverMouseLeave();
    }
    // 只有一个说话人
    if (!hasDuplicateSpeakers.value) {
      selectedSpeakerId.value = speakerId;
      return handleChooseType(0);
    }
    if (isDesktop.value) {
      return;
    }
    selectedSpeakerId.value = speakerId;
    applyToAllMatching.value = 0;
    speakerItemPopVisible.value = true;
    speakerItemRef.value = speakerItemsRef.value[index];
  };

  const handleSpeakerItemMouseEnter = (speakerId, index) => {
    if (speakerId === originSelectedSpeakerId.value) {
      return speakerPopoverMouseLeave();
    }
    if (isDesktop.value && hasDuplicateSpeakers.value) {
      hoverSelectedSpeakerId.value = speakerId;
      applyToAllMatching.value = 0;
      speakerItemPopVisible.value = true;
      speakerItemRef.value = speakerItemsRef.value[index];
    }
  };
  const isSpeakerDuplicate = computed(() => {
    return speakers.value.find(
      (speaker) =>
        speaker.name === editingSpeakerName.value &&
        speaker.id !== editingSpeakerId.value
    );
  });
  // 弹窗-确认编辑说话人
  const confirmEditSpeaker = async () => {
    const trimmedName = editingSpeakerName.value;
    // 如果没有输入，取消编辑
    if (!trimmedName) {
      editSpeakerDialogVisible.value = false;
      return;
    }
    // 不允许重名
    if (isSpeakerDuplicate.value) {
      return;
    }

    // 生成或保留说话人ID
    let newSpeakerId = editingSpeakerId.value;
    let newSpeakerName = trimmedName;
    let updateParams = null;
    // 新增说话人
    if (editingSpeakerId.value === "") {
      newSpeakerId = ++maxSpeakerId;
      // 添加到speakers数组
      speakers.value.push({
        id: newSpeakerId,
        name: newSpeakerName,
        count: 0
      });
      applyToAllMatching.value = 0;
    } else {
      // 编辑
      const cur = speakers.value.find((s) => s.id === editingSpeakerId.value);
      cur.name = newSpeakerName;
      applyToAllMatching.value = 1;
      updateParams = {
        id: editingSpeakerId.value,
        name: newSpeakerName
      };
    }
    await confirmSpeakerSelection(updateParams);
    // 关闭编辑弹窗
    editSpeakerDialogVisible.value = false;
    setTimeout(() => {
      const wrapRef = scrollbarRef.value?.wrapRef;
      if (wrapRef) {
        let activeEl = null;
        if (editingSpeakerId.value === "") {
          activeEl = wrapRef.querySelector(".speaker-item:last-child");
        } else {
          activeEl = wrapRef.querySelector(
            `.speaker-item[data-speaker-id="${editingSpeakerId.value}"]`
          );
        }
        activeEl &&
          activeEl.scrollIntoView({
            block: "center"
          });
      }
    }, 10);
  };

  // 处理显示/隐藏说话人
  const handleShowSpeaker = () => {
    isShowSpeaker.value = !isShowSpeaker.value;
  };

  // 处理点击外部关闭弹窗
  const handleOutsideClick = (e) => {
    if (!selectedPid.value) return;
    const nuxtRoot = document.querySelector("#__nuxt");
    const target = e.target;
    if (nuxtRoot?.contains(target)) {
      handleSpeakerPopoverHide(true);
    }
  };
  const dialogOpen = (dialogClass, handle) => {
    const el = document.querySelector(dialogClass);
    el._enterCloseHandler = (e) => {
      if (e.keyCode !== 13) return;
      setTimeout(() => {
        handle();
      }, 10);
    };
    document.addEventListener("keydown", el._enterCloseHandler);
  };
  const dialogClose = (dialogClass) => {
    const el = document.querySelector(dialogClass);
    document.removeEventListener("keydown", el._enterCloseHandler);
    delete el._enterCloseHandler;
  };
  const isInSpeakerPopover = ref(false);
  const isInSpeakerList = ref(false);
  watch([isInSpeakerPopover, isInSpeakerList], () => {
    setTimeout(() => {
      if (
        isDesktop.value &&
        !isInSpeakerPopover.value &&
        !isInSpeakerList.value
      ) {
        speakerPopoverMouseLeave();
      }
    }, 100);
  });
  return {
    editSpeakerDialogVisible,
    selectedSpeakerId,
    originSelectedSpeakerId,
    editingSpeakerId,
    editingSpeakerName,
    applyToAllMatching,
    speakerPopoverRef,
    speakerPopoverVisible,
    selectedPid,
    speakerBtnRef,
    isShowSpeaker,
    speakers,
    uniqueSpeakers,
    uniqueSpeakersMap,
    hasDuplicateSpeakers,
    handleSpeakerPopoverShow,
    handleSpeakerPopoverHide,
    openEditSpeakerDialog,
    selectSpeaker,
    confirmEditSpeaker,
    handleShowSpeaker,
    handleOutsideClick,
    scrollbarRef,
    speakerSaveLoading,
    dialogOpen,
    dialogClose,
    speakerItemsRef,
    speakerItemRef,
    popoverDupRef,
    speakerItemPopVisible,
    chooseTypes,
    handleChooseType,
    isSpeakerDuplicate,
    handleSpeakerItemMouseEnter,
    hoverSelectedSpeakerId,
    speakerPopoverMouseLeave,
    isInSpeakerPopover,
    isInSpeakerList,
    speakerPopWidth
  };
}
