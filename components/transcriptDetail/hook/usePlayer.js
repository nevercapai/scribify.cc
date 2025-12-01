import { ref, toRefs, watch, computed } from "vue";
import Player, { Events, I18N, Util, Plugin, Sniffer } from "xgplayer";
import "xgplayer/dist/index.min.css";
import { TmControl } from "../customPlugins.js";
import { useIntervalFn, useMediaQuery, useDebounceFn } from "@vueuse/core";
import { isChildInParentViewport } from "./utils";
const retryCount = 3;

export default function usePlayer(transcriptData, props) {
  const { reportSystemError } = useErrorReporting();
  const playerAudio = ref(null);
  const currentTime = ref(0);
  const dynamicScroller = ref(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { locale } = useI18n();
  const activeLanguage = useState("locale", () => locale.value);
  const isRtl = computed(() => ["he-IL", "ar-SA"].includes(activeLanguage.value));
  const retry = ref(0);
  // 区分双击还是单击
  let clickTimer = null;
  let isScrolling = false;
  const lastActiveWord = ref({});
  const lastSentenceId = ref("");
  const isInitPlay = ref(true);
  const { hasPlayed } = toRefs(props.fileBaseInfo);
  const getLastWord = () => {
    const lastParagraph = transcriptData.value?.paragraphs?.slice(-1)[0] || {};
    if (lastParagraph?.sentences) {
      const lastSen = lastParagraph.sentences?.slice(-1)[0] || {};
      const word = lastSen?.contents?.slice(-1)[0] || {};
      return {
        ...word,
        paraIndex: transcriptData.value.paragraphs.length - 1,
        sentIndex: lastParagraph.sentences.length - 1,
        contentIndex: lastSen.contents.length - 1
      };
    }
    return {};
  };
  // 更新当前播放时间
  const updateCurrentTime = (time) => {
    // 处理精度问题，保留3位小数
    currentTime.value = parseFloat(time.toFixed(3));
  };
  const getActivePlayer = () => {
    return playerAudio.value;
  };
  // 自定义图标创建函数
  const createCustomIcon = (iconName, className = "text-black", style = "font-size:1rem") => {
    return () => {
      return Util.createDom("div", `<span class="iconfont ${iconName}" style="${style}"></span>`, {}, className);
    };
  };
  const keyboard = {
    keyCodeMap: {
      space: {
        action: "customPlayPause", //
        disable: false
      },
      up: {
        disable: true
      },
      down: {
        disable: true
      },
      left: {
        disable: true
      },
      right: {
        disable: true
      },
      esc: {
        action: "exitFullscreen",
        disable: false
      }
    }
  };
  // 播放器配置
  const commonConfig = {
    width: "100%",
    height: "100%",
    miniprogress: true,
    keyboard,
    seekedStatus: "auto",
    customDuration: props.fileBaseInfo.duration,
    volume: {
      default: 0.6,
      showValueLabel: true,
      index: 1000
    },
    videoConfig: {
      crossOrigin: "anonymous"
    },
    videoAttributes: {
      preload: "auto"
    }
  };
  // 生成播放速率列表
  const genPlaybackRateList = (range) => {
    return range.map((rate) => {
      return {
        text: rate + "X",
        rate: parseFloat(rate)
      };
    });
  };

  const generateUrl = (info) => {
    let { fileUrl: url, mimeType, fileType } = info;
    if (!Sniffer.os.isPhone) return url;
    if (!mimeType) {
      mimeType = `audio/${fileType}`;
    }
    return [
      {
        src: url,
        type: mimeType
      }
    ];
  };
  // 初始化播放器
  const initPlayers = (fileBaseInfo, locale) => {
    retry.value = 0;
    let url = generateUrl(fileBaseInfo);
    playerAudio.value = new Player({
      ...commonConfig,
      lang: locale.value,
      id: "audioID",
      url,
      seekedStatus: "auto",
      plugins: [TmControl],
      ignores: [
        "start",
        "cssFullScreen",
        "fullscreen",
        "pip",
        "enter",
        "replay",
        "pc",
        "loading",
        "poster",
        "progress",
        "mobile"
      ],
      playbackRate: {
        index: 999,
        listType: "middle",
        list: genPlaybackRateList(["3.0", "2.0", "1.5", "1.25", "1.0", "0.75", "0.5"])
      },
      controls: {
        root: document.getElementById("audio-crt"),
        initShow: true,
        mode: isDesktop.value ? "flex" : "normal"
      },
      play: {
        position: isDesktop.value ? Plugin.POSITIONS.CONTROLS_LEFT : Plugin.POSITIONS.CONTROLS_CENTER
      },
      tmControl: {
        customBoxClass: isDesktop.value ? "!px-4" : ""
      },
      icons: {
        play: createCustomIcon("icon-bofang audio-id", "text-black", "font-size: 1.375rem"),
        pause: createCustomIcon("icon-zanting audio-id", "text-black", "font-size: 1.375rem"),
        volumeSmall: createCustomIcon(
          "icon-yinliang audio-id",
          "text-black",
          "font-size: 1.2rem; margin-inline-start: 0.375rem"
        ),
        volumeLarge: createCustomIcon(
          "icon-shipinyinliangda audio-id",
          "text-black",
          "font-size: 1.05rem;margin-inline-start: 0.375rem"
        ),
        volumeMuted: createCustomIcon(
          "icon-shipinjingyin audio-id",
          "text-black",
          "font-size: 1.2rem; margin-inline-start: 0.375rem"
        )
      }
    });

    const player = getActivePlayer();
    initSetting(player);
    setupEventListeners();
  };
  // 初始化设置
  const initSetting = (player) => {
    isInitPlay.value = true;
    const lastPlayTime = props.fileBaseInfo.lastPlayTime;
    const lastPlayVolume = props.fileBaseInfo.lastPlayVolume;
    const lastPlayRate = props.fileBaseInfo.lastPlayRate;
    player.on(Events.COMPLETE, () => {
      if (lastPlayTime) player.currentTime = +lastPlayTime;
      if (+lastPlayVolume === 0) {
        player.muted = true;
      } else {
        player.volume = +lastPlayVolume;
      }
      if (lastPlayRate) player.playbackRate = +lastPlayRate;
    });
  };
  const scrollToLastWord = () => {
    const lastWord = getLastWord();
    if (lastWord.cid) {
      scrollToTargetWord(lastWord)?.then((el) => {
        setTimeout(() => {
          el?.scrollIntoView();
        }, 100);
      });
    }
  };
  // 设置播放器事件监听
  const setupEventListeners = () => {
    /************************** 音频 *************************************/
    const audioTimeUpdateFn = () => {
      const currentTime = playerAudio.value?.currentTime || 0;
      console.log("🚀 ~ 音频时间更新事件 🚀", currentTime);
      if (props.fileBaseInfo.isHalfHour && currentTime > 30 * 60) {
        if (isInitPlay.value) {
          isInitPlay.value = false;
          scrollToLastWord();
        }
        return;
      }
      isInitPlay.value = false;
      updateCurrentTime(currentTime);
      scrollToActiveWord();
      if (currentTime >= props.fileBaseInfo.duration) {
        playerAudio.value.currentTime = props.fileBaseInfo.duration;
        playerAudio.value.pause();
      }
    };
    playerAudio.value.on(Events.COMPLETE, () => {
      playerAudio.value.on(Events.TIME_UPDATE, audioTimeUpdateFn);
    });

    const audioSeekingFn = () => {
      isScrolling = false;
      audioTimeUpdateFn();
    };
    const audioPlayFn = () => {
      isScrolling = false;
      hasPlayed.value = true;
      if (parseFloat(currentTime.value) >= parseFloat(props.fileBaseInfo.duration)) {
        playerAudio.value.replay();
      }
    };
    const audioLoadingFn = () => {
      if (!playerAudio.value) return;
      playerAudio.value.isTmLoading = true;
    };
    const audioCanplayFn = () => {
      if (!playerAudio.value) return;
      playerAudio.value.isTmLoading = false;
    };
    const audioShortcutFn = (data) => {
      if (data.action === "customPlayPause") {
        if (playerAudio.value) {
          const isPlaying = !playerAudio.value.paused;
          isPlaying ? playerAudio.value.pause() : playerAudio.value.play();
        }
      }
    };
    playerAudio.value.on(Events.PLAY, audioPlayFn);
    playerAudio.value.on(Events.SEEKING, audioSeekingFn);
    playerAudio.value.on(Events.LOADING, audioLoadingFn);
    playerAudio.value.on(Events.CANPLAY, audioCanplayFn);
    playerAudio.value.on(Events.SHORTCUT, audioShortcutFn);

    // 销毁
    playerAudio.value.on(Events.DESTROY, () => {
      playerAudio.value.off(Events.TIME_UPDATE, audioTimeUpdateFn);
      playerAudio.value.off(Events.PLAY, audioPlayFn);
      playerAudio.value.off(Events.SEEKING, audioSeekingFn);
      playerAudio.value.off(Events.LOADING, audioLoadingFn);
      playerAudio.value.off(Events.CANPLAY, audioCanplayFn);
      playerAudio.value.off(Events.SHORTCUT, audioShortcutFn);
    });
    playerAudio.value.usePluginHooks("error", "showError", (plugin, ...args) => {
      retry.value = retry.value + 1;
      if (retry.value < retryCount) {
        reportSystemError({
          message: `媒体资源加载失败: ${JSON.stringify(playerAudio.value.config.url)}`
        });
        playerAudio.value?.retry();
      }
    });
  };

  // 滚动到当前播放的单词位置处理函数
  const scrollToActiveWordProcess = () => {
    try {
      const player = getActivePlayer();
      // 早期返回条件检查
      if (!transcriptData.value?.paragraphs?.length || (isScrolling && !player.isSeeking)) {
        lastActiveWord.value = {};
        return;
      }

      const currentTimeValue = currentTime.value;
      if (typeof currentTimeValue !== "number" || currentTimeValue < 0) {
        lastActiveWord.value = {};
        return;
      }

      const paragraphs = transcriptData.value.paragraphs;

      // 查找活跃单词的结果
      const result = findActiveWord(paragraphs, currentTimeValue);
      // 判断当前段落的句子是否在视图内，如果在，则直接返回
      const { paraIndex, sentIndex, contentIndex } = result;
      if (!result) {
        lastActiveWord.value = {};
        return;
      }
      lastActiveWord.value = paragraphs[paraIndex]?.sentences[sentIndex]?.contents[contentIndex];

      const targetSentenceEl = transcriptData.value?.paragraphs?.[paraIndex]?.sentences?.[sentIndex];
      const targetParent = document.querySelector(".transcript-container");
      const targetChild = document.querySelector(
        `.transcript-container .sentence-wrapper[data-sid="${targetSentenceEl.sid}"]`
      );
      // 如果当前句子是在dom的视图内，则返回
      if (targetChild && isChildInParentViewport(targetParent, targetChild, false)) {
        return;
      }
      // 滚动到目标位置
      scrollToTargetWord(result);
    } catch (error) {
      console.warn("Error in scrollToActiveWord:", error);
    }
  };

  // 防抖版本的滚动函数
  const scrollToActiveWord = useDebounceFn(scrollToActiveWordProcess, 1);
  // 时间索引缓存
  let timeIndexCache = null;
  // 构建时间索引数组
  const buildTimeIndex = (paragraphs) => {
    const startTime = performance.now();
    const timeIndex = [];

    for (let paraIndex = 0; paraIndex < paragraphs.length; paraIndex++) {
      const paragraph = paragraphs[paraIndex];

      if (!paragraph.sentences?.length) {
        continue;
      }

      for (let sentIndex = 0; sentIndex < paragraph.sentences.length; sentIndex++) {
        const sentence = paragraph.sentences[sentIndex];

        if (!sentence.contents?.length) {
          continue;
        }

        for (let contentIndex = 0; contentIndex < sentence.contents.length; contentIndex++) {
          const content = sentence.contents[contentIndex];

          if (content.start_time !== undefined) {
            const startTimeValue = +content.start_time;
            const stopTimeValue = content.stop_time ? +content.stop_time : startTimeValue + 0.1;

            timeIndex.push({
              startTime: startTimeValue,
              stopTime: stopTimeValue,
              paraIndex,
              sentIndex,
              contentIndex,
              cid: content.cid
            });
          }
        }
      }
    }

    // 按开始时间排序
    timeIndex.sort((a, b) => a.startTime - b.startTime);

    const endTime = performance.now();
    console.debug(`Time index built: ${timeIndex.length} items in ${(endTime - startTime).toFixed(2)}ms`);

    return timeIndex;
  };
  const generateTimeIndexCache = (paragraphs) => {
    timeIndexCache = buildTimeIndex(paragraphs);
  };
  // 使用二分查找查找活跃单词
  const findActiveWord = (paragraphs, currentTimeValue) => {
    if (!timeIndexCache) {
      generateTimeIndexCache(paragraphs);
    }
    if (!timeIndexCache.length) {
      return null;
    }
    // 二分查找当前时间对应的单词
    const activeWord = binarySearchActiveWord(timeIndexCache, currentTimeValue);
    if (activeWord) {
      return {
        ...activeWord,
        isActive: true
      };
    }

    // 如果没有找到活跃单词，查找最接近的单词
    const closestWord = binarySearchClosestWord(timeIndexCache, currentTimeValue);
    return closestWord
      ? {
          ...closestWord,
          isActive: false
        }
      : null;
  };

  // 二分查找活跃单词
  const binarySearchActiveWord = (timeIndex, currentTimeValue) => {
    let left = 0;
    let right = timeIndex.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const item = timeIndex[mid];

      if (currentTimeValue >= item.startTime && currentTimeValue < item.stopTime) {
        // 找到活跃单词
        return item;
      } else if (currentTimeValue < item.startTime) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return null;
  };

  // 二分查找最接近的单词
  const binarySearchClosestWord = (timeIndex, currentTimeValue) => {
    let left = 0;
    let right = timeIndex.length - 1;
    let closest = null;
    let minDiff = Infinity;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const item = timeIndex[mid];
      const diff = Math.abs(currentTimeValue - item.startTime);

      if (diff < minDiff) {
        minDiff = diff;
        closest = { ...item, minDiff };
      }

      if (currentTimeValue < item.startTime) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // 检查边界元素
    if (left < timeIndex.length) {
      const diff = Math.abs(currentTimeValue - timeIndex[left].startTime);
      if (diff < minDiff) {
        closest = { ...timeIndex[left], minDiff: diff };
      }
    }

    if (right >= 0) {
      const diff = Math.abs(currentTimeValue - timeIndex[right].startTime);
      if (diff < minDiff) {
        closest = { ...timeIndex[right], minDiff: diff };
      }
    }

    return closest;
  };

  // 滚动到目标单词
  const scrollToTargetWord = async (wordInfo) => {
    try {
      const { paraIndex, sentIndex, contentIndex } = wordInfo;
      const paragraphs = transcriptData.value.paragraphs;

      // 验证段落索引
      if (!paragraphs[paraIndex]) {
        console.warn(`Invalid paragraph index: ${paraIndex}`);
        return;
      }

      const targetPid = paragraphs[paraIndex].pid;

      // 尝试找到已渲染的虚拟项
      const targetVirtualItemWrap = document.querySelector(
        `.virtual-item-wrap[data-pid="${targetPid}"][data-active="true"]`
      );

      if (targetVirtualItemWrap) {
        // 如果找到了虚拟项，尝试滚动到具体的单词
        return scrollToSpecificWord(targetVirtualItemWrap, sentIndex, contentIndex);
      }
      // 如果没有找到虚拟项，使用虚拟滚动器滚动到段落
      await scrollToParagraph(paraIndex, targetPid);
      let container = document.querySelector(`.virtual-item-wrap[data-pid="${targetPid}"][data-active="true"]`);
      return scrollToSpecificWord(container, sentIndex, contentIndex);
    } catch (error) {
      console.warn("Error in scrollToTargetWord:", error);
    }
  };

  // 滚动到具体单词
  const scrollToSpecificWord = (containerElement, sentIndex, contentIndex) => {
    try {
      // 尝试找到具体的单词元素
      const targetSpan = containerElement?.querySelector(
        `span[data-sent-index="${sentIndex}"][data-content-index="${contentIndex}"]`
      );

      let elementToScroll = targetSpan || containerElement;
      // 执行滚动
      elementToScroll?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
      return elementToScroll;
    } catch (error) {
      console.warn("Error in scrollToSpecificWord:", error);
    }
  };

  const setClickCurrentTime = (content, sentenceId) => {
    lastSentenceId.value = sentenceId;
    // 跳转到音频对应时间点，并保持原来的播放状态
    if (content.start_time !== undefined) {
      const player = getActivePlayer();
      const startTime = +content.start_time;
      player.currentTime = startTime;
      updateCurrentTime(startTime);
    }
  };
  // 处理单词点击
  const handleWordClick = async (word, sentenceId) => {
    if (clickTimer) clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      setClickCurrentTime(word, sentenceId);
    }, 250);
  };
  // 双击单词
  const handleWordDblClick = (word, sentenceId) => {
    clearTimeout(clickTimer);
    clickTimer = null;
    setClickCurrentTime(word, sentenceId);

    const player = playerAudio.value;
    setTimeout(() => {
      player.seek(+word.start_time, "play");
    }, 100);
  };

  // 根据段落id,滚动到指定段落
  const scrollToParagraph = async (paraIndex, paraId) => {
    if (!dynamicScroller.value) return false;

    let isExistVirtualItemWrap = document.querySelector(`.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`);
    if (isExistVirtualItemWrap) {
      return true;
    }

    dynamicScroller.value.scrollToItem(paraIndex);
    let count = 0;

    return new Promise((resolve) => {
      const { pause } = useIntervalFn(() => {
        count++;
        let isExistVirtualItemWrap = document.querySelector(
          `.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`
        );
        if (isExistVirtualItemWrap || count >= 50) {
          console.log("🚀 找到段落 🚀", !!isExistVirtualItemWrap, count);
          // 暂停 清理定时器
          pause();
          return resolve(true);
        }
        dynamicScroller.value.scrollToItem(paraIndex);
      }, 50);
    });
  };
  // 判断单词是否应该高亮
  const isWordActive = (content) => {
    // 音视频从未被播放过
    if (currentTime.value === 0 && !hasPlayed.value) return false;
    // 当前播放时间的高亮
    const isTimeActive =
      content.start_time !== undefined &&
      content.stop_time !== undefined &&
      currentTime.value >= +content.start_time &&
      currentTime.value < +content.stop_time;
    if (isTimeActive) {
      return true;
    }
    return lastActiveWord.value?.cid === content.cid;
  };

  // 监听i18n变化
  const setupI18nWatch = (locale, getLocaleMessage) => {
    watch(
      locale,
      () => {
        // 覆盖原来的英文语言 ，否则自定义的key会取不到值
        const enLang = getLocaleMessage("en-US");
        I18N.use({ LANG: "en", TEXT: enLang.videoLang || {} });
        let localeMessage = getLocaleMessage(locale.value);
        if (localeMessage.videoLang) {
          let lang = locale.value;
          const csLang = {
            LANG: lang,
            TEXT: localeMessage.videoLang || {}
          };
          I18N.use(csLang);
        }
      },
      { immediate: true }
    );
  };
  const scrollHandle = () => {
    // 设置当前为滚动状态
    isScrolling = true;
    // 清除之前的定时器
    clearTimeout(window.scrollTimer);
    window.scrollTimer = setTimeout(() => {
      isScrolling = false;
    }, 3000);
  };
  onMounted(() => {
    nextTick(() => {
      const scrollParent = document.querySelector(".transcript-container");
      scrollParent?.addEventListener("scroll", scrollHandle);
    });
  });
  onBeforeUnmount(() => {
    const scrollParent = document.querySelector(".transcript-container");
    scrollParent?.removeEventListener("scroll", scrollHandle);
  });
  return {
    playerAudio,
    currentTime,
    dynamicScroller,
    initPlayers,
    handleWordClick,
    isWordActive,
    scrollToParagraph,
    setupI18nWatch,
    isRtl,
    handleWordDblClick,
    lastSentenceId,
    lastActiveWord,
    getActivePlayer,
    hasPlayed
  };
}
