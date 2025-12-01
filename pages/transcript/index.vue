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
      <div v-if="transcriptInfo && !isDel" class="flex h-[80vh] w-full">
        <transcript-detail
          class="flex-1 bg-white"
          ref="tsDRef"
          :fileBaseInfo="fileBaseInfo"
          :transcriptInfo="transcriptInfo"
          @translate="translate"
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
import { useErrorReporting } from "~/utils/fsReport";
const { reportSystemError } = useErrorReporting();
const { t } = useI18n();
const emit = defineEmits(["transcribeNewFiles"]);
const props = defineProps({
  fileId: {
    type: String
  },
  taskId: {
    type: String
  }
});
let loadingInstance = null;
const isDel = ref(false);
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
    return await transcriptApi.getTranscriptInfo(fileId, props.taskId);
  } catch (error) {
    console.error("获取转录内容失败", error);
    //
    if (error.code === 610006) {
      loadingInstance.close();
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
const timeReport = {};
onMounted(async () => {
  await nextTick();
  if (!props.fileId || !props.taskId) {
    return Msg({
      message: "fail",
      type: "warning"
    });
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
  duration = Math.ceil(duration);
  console.timeEnd("转录详情接口时长");
  console.time("转录详情数据处理");
  timeReport["getTranscriptInfoOver"] = Date.now();
  isDel.value = fileMetaInfo.deleted > 0;
  originLang.value = language;
  options ??= settingDefault;
  if (options && Object.keys(options).length > 0) {
    options = Object.assign({}, settingDefault, options);
  } else {
    options = settingDefault;
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
