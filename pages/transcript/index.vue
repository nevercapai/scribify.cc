<template>
  <client-only>
    <div class="flex h-full min-h-[80vh] w-full flex-col bg-[var(--light-gray)]" id="transDetail_lgCdiwM">
      <div
        @click="handleSign"
        class="mx-auto my-6 flex min-h-11 w-[13.75rem] cursor-pointer items-center justify-center rounded-[0.625rem] bg-[#6367F1] px-4 py-2 text-lg font-medium text-white md:my-8 md:w-[26.875rem] md:hover:opacity-80"
      >
        {{ t("RegisterDialog.transcribeNewFiles") }}
      </div>
      <!--    这里单独拎出去放 components ，表示只在客户端使用，服务端不渲染 -->
      <div v-if="transcriptInfo && !isDel" class="flex h-[80vh]">
        <transcript-detail
          class="flex-1 bg-white"
          ref="tsDRef"
          :speakers="speakers"
          :fileBaseInfo="fileBaseInfo"
          :transcriptInfo="transcriptInfo"
          :isShare="false"
          :shareName="shareName"
          :showShareBtn="false"
          :canEdit="false"
          @translate="translate"
          @saveConfig="handleBeforeUnload"
          @updateSpeakers="updateSpeakers"
        ></transcript-detail>
      </div>
      <div v-if="isDel" class="del-box flex h-screen w-full flex-1 flex-col text-black">
        <div class="main flex flex-1 flex-col items-center justify-center">
          <div class="title text-[1.25rem] font-medium leading-7 text-black">
            {{ t("TranscriptionPage.notFund") }}
          </div>
          <div class="desc mt-[0.625rem] leading-5 text-black">
            {{ t("TranscriptionPage.notFundDesc") }}
          </div>
        </div>
      </div>
      <register-dialog ref="registerDialogRef" @transcribeNewFiles="transcribeNewFilesHandle"></register-dialog>
      <export />
    </div>
  </client-only>
</template>

<script setup>
defineOptions({
  name: "TranscriptIndex"
});
import { languageMap } from "~/components/langChoose/langFlag.js";
import { ElLoading } from "element-plus";
import { Msg } from "~/utils/tools";
import { onBeforeRouteLeave } from "vue-router";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";
import { useErrorReporting } from "~/utils/fsReport";
const { reportSystemError } = useErrorReporting();
const localePath = useLocalePath();
const defaultPath = localePath("/");
const utmSourceCookie = useCrossDomainCookie("utm_source");
const { t } = useI18n();
const route = useRoute();
const token = useCrossDomainCookie("token");
const emit = defineEmits(["transcribeNewFiles"]);
// const fileId = route.params.id;
// const taskId = route.query.taskId;
const props = defineProps({
  fileId: {
    type: String
  },
  taskId: {
    type: String
  }
});
const shareId = route.query.shareId || "";
const mixpanel = route.query.mixpanel || "";
const shareName = decodeURIComponent(route.query.shareName || "");
const isShare = !!shareId;
let loadingInstance = null;

const isDel = ref(false);
const speakers = ref([]);
const fileBaseInfo = ref({});
const defaultTranscriptInfo = {
  fileMetaInfo: {
    fileType: "mp3",
    fileName: ""
  },
  diarizeEnabled: false,
  transcribeParagraphs: [],
  language: "",
  gmtCreateTime: "",
  duration: 0,
  isHalfHour: 1,
  hasError: false
};
// 获取转录内容
const getTranscriptInfo = async (fileId) => {
  loadingInstance = ElLoading.service({
    fullscreen: false,
    target: "#transDetail_lgCdiwM",
    customClass: "cus-loading-lgCdiwM"
  });
  try {
    const { transcriptApi } = await import("~/api/transcript");
    if (isShare) {
      return await transcriptApi.getTranscriptInfoWithoutToken(
        fileId,
        props.taskId,
        decodeURIComponent(shareId),
        mixpanel
      );
    }
    return await transcriptApi.getTranscriptInfo(fileId, props.taskId);
  } catch (error) {
    console.error("获取转录内容失败", error);
    //
    if (error.code === 610006) {
      loadingInstance.close();
      return navigateTo(defaultPath);
    } else if (error.code === 401) {
      return navigateTo(localePath("/user/login"));
    } else if (error.code === 610013) {
      // 游客数据被删
      defaultTranscriptInfo.fileMetaInfo.deleted = Date.now();
      loadingInstance.close();
      return defaultTranscriptInfo;
    } else {
      defaultTranscriptInfo.hasError = true;
      loadingInstance.close();
      return defaultTranscriptInfo;
    }
  } finally {
    loadingInstance.close();
  }
};
// 获取其他语言翻译内容
const getOtherLangOfTranscript = async (fileId, taskId, targetLang, langName, originLang) => {
  loadingInstance = ElLoading.service({
    fullscreen: false,
    target: "#transDetail_lgCdiwM",
    customClass: "cus-loading-lgCdiwM"
  });
  try {
    const { transcriptApi } = await import("~/api/transcript");
    return await transcriptApi.getOtherLangOfTranscript({
      fileId,
      taskId,
      targetLang,
      langName,
      originLang
    });
  } catch (error) {
    Msg({
      message: error.message,
      type: "warning"
    });
    console.error("获取其他语言翻译内容失败:", error);
  } finally {
    loadingInstance.close();
  }
};
const settingDefault = {
  lastPlayTime: 0, // 上次播放停留的时间
  lastPlayRate: 1, // 上次播放的播放速度
  lastPlayVolume: 0.6, // 上次播放的音量
  isShowTimestamp: 1, // 时间戳显示 1 段落级别 2：句子级别 0 不显示
  translateLang: "", // 翻译语言
  isShowVideo: true, // 是否显示视频
  isShowSpeaker: true,
  hasPlayed: false, // 是否播放过
  showSubTitle: false
};
const originLang = ref("");
const paragraphIdMap = ref({});
const transcriptInfo = ref(null);
const tsDRef = ref(null);

const translate = async (data, init = false) => {
  if (!data?.langCode) return;
  let res = await getOtherLangOfTranscript(
    props.fileId,
    props.taskId,
    data.langCode,
    data.langId || data.lang,
    originLang.value
  );
  res?.forEach((item) => {
    const target = transcriptInfo.value.paragraphs[paragraphIdMap.value[item.pid]];
    target.translateContent = item.translateContent;
  });
  if (!init) tsDRef?.value?.getRecentLang();
};
// 保存文件相关设置
const saveFileBaseInfo = async (config) => {
  try {
    const { transcriptApi } = await import("~/api/transcript");
    await transcriptApi.saveFileConfig({
      fileId: props.fileId,
      taskId: props.taskId,
      options: JSON.stringify(config)
    });
  } catch (error) {
    console.error("fail:", error);
  }
};
const handleBeforeUnload = () => {
  if (!tsDRef.value || isShare || fileBaseInfo.hasError) return;
  const config = tsDRef.value.getFileConfig();
  saveFileBaseInfo(config);
};
const needLogin = computed(() => {
  return !isShare && !token.value;
});
// 更新 speaker
const updateSpeakers = (data) => {
  speakers.value = data;
};
const timeReport = {};
const useScroll = useScrollTitleStore();
const assignTimeProperties = (data) => {
  // 辅助函数：查找前一个停止时间
  function findPreStopTime(pidIndex, sentenceIndex) {
    // 在当前段落内向前查找句子
    for (let s = sentenceIndex - 1; s >= 0; s--) {
      const prevSentence = data[pidIndex].sentences[s];
      if (prevSentence.contents && prevSentence.contents.length > 0) {
        return prevSentence.contents[prevSentence.contents.length - 1].stop_time;
      }
    }

    // 跨段落向前查找
    for (let p = pidIndex - 1; p >= 0; p--) {
      const prevPid = data[p];
      // 从后向前遍历前一段落的句子
      for (let s = prevPid.sentences.length - 1; s >= 0; s--) {
        const sentence = prevPid.sentences[s];
        if (sentence.contents && sentence.contents.length > 0) {
          return sentence.contents[sentence.contents.length - 1].stop_time;
        }
      }
    }
    return null; // 无符合条件的值
  }

  // 辅助函数：查找下一个开始时间
  function findNextStartTime(pidIndex, sentenceIndex) {
    // 在当前段落内向后查找句子
    for (let s = sentenceIndex + 1; s < data[pidIndex].sentences.length; s++) {
      const nextSentence = data[pidIndex].sentences[s];
      if (nextSentence.contents && nextSentence.contents.length > 0) {
        return nextSentence.contents[0].start_time;
      }
    }

    // 跨段落向后查找
    for (let p = pidIndex + 1; p < data.length; p++) {
      const nextPid = data[p];
      // 从前向后遍历下一段落的句子
      for (let s = 0; s < nextPid.sentences.length; s++) {
        const sentence = nextPid.sentences[s];
        if (sentence.contents && sentence.contents.length > 0) {
          return sentence.contents[0].start_time;
        }
      }
    }
    return null; // 无符合条件的值
  }

  // 主处理逻辑
  for (let pidIndex = 0; pidIndex < data.length; pidIndex++) {
    const pid = data[pidIndex];
    for (let sentenceIndex = 0; sentenceIndex < pid.sentences.length; sentenceIndex++) {
      const sentence = pid.sentences[sentenceIndex];
      for (let contentIndex = 0; contentIndex < sentence.contents.length; contentIndex++) {
        const content = sentence.contents[contentIndex];

        // 分配pre_stop_time
        if (contentIndex > 0) {
          // 同一句子中的前一项
          content.pre_stop_time = sentence.contents[contentIndex - 1].stop_time;
        } else {
          // 跨句子或跨段落查找
          content.pre_stop_time = findPreStopTime(pidIndex, sentenceIndex);
        }

        // 分配next_start_time
        if (contentIndex < sentence.contents.length - 1) {
          // 同一句子中的下一项
          content.next_start_time = sentence.contents[contentIndex + 1].start_time;
        } else {
          // 跨句子或跨段落查找
          content.next_start_time = findNextStartTime(pidIndex, sentenceIndex);
        }
      }
    }
  }

  return data;
};
onMounted(async () => {
  await nextTick();
  if (isShare && !utmSourceCookie.value) {
    utmSourceCookie.value = "self_sharePage";
  }
  if (!props.fileId || !props.taskId) {
    return Msg({
      message: "fail",
      type: "warning"
    });
  }
  if (needLogin.value) {
    return navigateTo(defaultPath);
  }
  console.time("转录详情接口时长");
  timeReport["begin"] = window?.sessionStorage.getItem("GoToTranscript") / 1 || Date.now();
  window?.sessionStorage.removeItem("GoToTranscript");
  const dataInfo = await getTranscriptInfo(props.fileId);
  if (!dataInfo) return;
  let {
    fileMetaInfo,
    diarizeEnabled,
    transcribeParagraphs,
    speaker,
    options,
    language,
    gmtCreateTime,
    duration,
    hasError,
    isHalfHour, // isHalfHour = 1
    isEmptyParagraph //  半小时 isHalfHour = 0  所有的
  } = dataInfo;
  transcribeParagraphs ??= [];
  if (isShare) {
    useScroll.setNewTitle(`${fileMetaInfo.fileName} -Shared Transcript - Nevercap`);
  } else {
    useScroll.setNewTitle(`${fileMetaInfo.fileName} - Transcript - Nevercap`);
  }
  duration = Math.ceil(duration);
  console.timeEnd("转录详情接口时长");
  console.time("转录详情数据处理");
  timeReport["getTranscriptInfoOver"] = Date.now();
  isDel.value = fileMetaInfo.deleted > 0;
  originLang.value = language;
  speaker ??= [];
  options ??= settingDefault;
  speakers.value = speaker
    .map(({ speaker_id, speaker, count }) => ({
      id: speaker_id,
      name: speaker,
      count
    }))
    .sort((a, b) => a.id - b.id);
  if (options && Object.keys(options).length > 0) {
    options = Object.assign({}, settingDefault, options);
  } else {
    options = settingDefault;
  }
  if (isShare) {
    const obj = {
      lastPlayTime: 0, // 上次播放停留的时间
      lastPlayRate: 1, // 上次播放的播放速度
      lastPlayVolume: 0.6, // 上次播放的音量
      translateLang: "" // 翻译语言
    };
    options = Object.assign(options, obj);
  }
  fileMetaInfo.gmtCreateTime = gmtCreateTime;
  fileMetaInfo.fileType = "mp3";
  fileBaseInfo.value = {
    ...options,
    ...fileMetaInfo,
    taskId: props.taskId,
    fileId: props.fileId,
    duration,
    isHalfHour,
    hasError,
    language,
    diarizeEnabled, //是否标识说话人
    isEmptyParagraph
  };

  // transcribeParagraphs = assignTimeProperties(transcribeParagraphs);
  paragraphIdMap.value = transcribeParagraphs.reduce((acc, cur, currentIndex) => {
    acc[cur.pid] = currentIndex;
    if (currentIndex === transcribeParagraphs.length - 1) {
      cur.isLast = true;
    }
    return acc;
  }, {});
  transcriptInfo.value = {
    paragraphs: transcribeParagraphs
  };
  console.timeEnd("转录详情数据处理");
  console.time("转录详情数据渲染");
  timeReport["renderBegin"] = Date.now();
  if (options.translateLang) {
    const lang = languageMap[options.translateLang];
    if (lang) translate(lang, true);
  }
  const reportToFs = () => {
    timeReport["转录详情接口时长"] = timeReport["getTranscriptInfoOver"] - timeReport["begin"];
    timeReport["转录详情数据处理"] = timeReport["renderBegin"] - timeReport["getTranscriptInfoOver"];
    timeReport["转录详情数据渲染第一个"] = timeReport["renderFirstOver"] - timeReport["renderBegin"];
    timeReport["转录详情数据页面总耗时"] = timeReport["renderFirstOver"] - timeReport["begin"];
    timeReport["后端接口耗时占比"] =
      ((timeReport["转录详情接口时长"] / timeReport["转录详情数据页面总耗时"]) * 100).toFixed(2) + "%";
    console.log("🍎🍎 ~ [id].vue:309 ~ timeReport:", timeReport);
    try {
      reportSystemError(timeReport);
    } catch (error) {
      console.error("reportToFs reportSystemError:", error);
    }
  };
  const renderOver = () => {
    let doms = document.querySelectorAll(".whitespace-break-spaces");
    if (doms?.length > 1) {
      console.timeEnd("转录详情数据渲染");
      timeReport["renderFirstOver"] = Date.now();

      reportToFs();
    } else {
      setTimeout(() => {
        renderOver();
      }, 10);
    }
  };
  renderOver();
  window.addEventListener("beforeunload", handleBeforeUnload);
});

onUnmounted(() => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
});
onBeforeRouteLeave((to, from, next) => {
  handleBeforeUnload();
  next();
});
const registerDialogRef = useTemplateRef("registerDialogRef");
const handleSign = () => {
  registerDialogRef?.value?.setType(1);
  registerDialogRef?.value?.show();
};
const transcribeNewFilesHandle = () => {
  emit("transcribeNewFiles");
};
</script>
<style lang="scss">
.cus-loading-lgCdiwM {
  --el-color-primary: theme("colors.mainColor.900");
  @apply rounded-2xl bg-[var(--light-gray)];
}
</style>
