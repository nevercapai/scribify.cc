<template>
  <div class="transcript-box relative flex w-full flex-col text-sm">
    <div class="content-box flex w-full flex-1 flex-col overflow-hidden">
      <!--pc 端操作栏-->
      <div
        v-if="isDesktop"
        class="flex min-h-[3.75rem] w-full flex-row items-center border-b border-solid border-borderColor px-4 py-3"
      >
        <div class="left-box flex min-w-64 flex-1 items-center overflow-hidden">
          <span class="file-text truncate text-base font-medium">{{ fileBaseInfo.fileName }} </span>
        </div>
        <div
          class="right-box relative ms-20 flex min-h-8 min-w-[10rem]"
          :class="[
            {
              'pointer-events-none bg-white opacity-30': fileBaseInfo.isEmptyParagraph
            }
          ]"
        >
          <div>
            <el-button text class="h-8" :disabled="langId !== ''" @click="handleEditRightTranscript()">
              <span class="iconfont icon-bianji me-2 text-base"></span>
              {{ t("TranscriptionPage.edit") }}
            </el-button>
            <!-- 翻译-->
            <translate-multiple
              v-model:langId="langId"
              :recentLanguageKeys="recentLanguageKeys"
              @choose="handleTranslateLangChoose"
            >
            </translate-multiple>
            <!-- 说话人-->
            <el-button
              v-if="fileBaseInfo.diarizeEnabled"
              text
              :bg="isShowSpeaker"
              class="h-8"
              @click="handleShowSpeaker"
            >
              <span class="iconfont icon-jiangyanzhe me-2 text-base"></span>
              {{ t("TranscriptionPage.showSpeaker") }}
            </el-button>
            <!--时间戳-->
            <time-stamp-pc v-model:isShowTimestamp="isShowTimestamp"></time-stamp-pc>
            <el-button text bg class="export-btn h-8" @click="handleDownload">
              <span class="iconfont icon-xiazai me-2 text-base !text-[#6F4CF0]"></span>
              {{ t("TranscriptionPage.export") }}
            </el-button>
          </div>
        </div>
      </div>
      <!--手机端操作栏-->
      <div
        v-else
        class="relative flex min-h-12 w-full shrink-0 flex-row items-center overflow-hidden border-b border-solid border-borderColor px-4"
      >
        <div class="relative flex flex-1 justify-between text-fontColor">
          <div
            class="flex flex-1 flex-row-reverse"
            :class="[
              {
                'pointer-events-none bg-white opacity-30': fileBaseInfo.isEmptyParagraph
              }
            ]"
          >
            <!--更多-->
            <MoreBtnMobile
              :fileBaseInfo="fileBaseInfo"
              :langId="langId"
              v-model:isShowSpeaker="isShowSpeaker"
              v-model:isShowTimestamp="isShowTimestamp"
            >
              <div class="ms-5 h-8 leading-8">
                <span class="iconfont icon-suolve me-2 inline-block rotate-90 text-base"></span>
              </div>
            </MoreBtnMobile>
            <!--下载-->
            <div class="ms-5 h-8 leading-8" @click="handleDownload">
              <span class="iconfont icon-xiazai me-2 text-base"></span>
            </div>
            <!-- 翻译-->
            <translate-multiple
              v-model:langId="langId"
              :recentLanguageKeys="recentLanguageKeys"
              @choose="handleTranslateLangChoose"
            >
            </translate-multiple>
            <!--编辑转录按钮-->
            <div
              class="ms-5 h-8 leading-8"
              :class="[langId !== '' ? 'pointer-events-none opacity-50' : '']"
              @click="handleEditRightTranscript()"
            >
              <span class="iconfont icon-bianji me-2 text-base"></span>
            </div>
          </div>
        </div>
      </div>
      <!--播放区域-->
      <div
        v-if="!fileBaseInfo.hasError"
        class="draggable-panels flex w-full flex-1 overflow-hidden rounded-xl bg-white !py-0 px-4"
      >
        <div
          :dir="transcriptDirection"
          class="relative flex w-full flex-col overflow-hidden px-4 pe-10 ps-4"
          :style="{ '--upgrade-visible-height': upgradeVisibleHeight ? +upgradeVisibleHeight + 1.5 + 'rem' : 0 }"
          :class="[
            langId ? 'show-lang-box' : 'mx-auto max-w-[67.5rem] !pe-0 !ps-0',
            isShowSpeaker ? 'show-speaker-box' : '',
            !isDesktop ? 'is-mobile !px-0' : '',
            upgradeVisibleHeight ? 'upgrade-visible' : ''
          ]"
          id="right-btn"
        >
          <UpTips></UpTips>
          <span
            v-if="langId"
            :class="[
              !isDesktop ? 'flex h-[1.75rem] w-full justify-end' : 'absolute top-4',
              transcriptDirection === 'rtl' ? 'left-16' : 'right-16',
              'z-[1000]'
            ]"
            :title="t('TranscriptionPage.closeTrans')"
          >
            <span class="iconfont icon-shanchu h-4 w-4 cursor-pointer text-base text-black" @click="langId = ''"></span>
          </span>
          <div class="file-wrap flex overflow-hidden truncate" v-if="!isDesktop">
            <span class="file-text truncate text-base font-medium">{{ fileBaseInfo.fileName }} </span>
          </div>
          <DynamicScroller
            v-if="transcriptData && !fileBaseInfo.isEmptyParagraph"
            ref="dynamicScroller"
            :items="transcriptData.paragraphs"
            :min-item-size="56"
            keyField="pid"
            skipHover
            class="transcript-container flex flex-1 overflow-y-auto"
            @scroll-end="handleScrollEnd"
          >
            <template #default="{ item, index, active }">
              <DynamicScrollerItem
                :item="item"
                :active="active"
                :size-dependencies="[item.sentences]"
                :data-index="index"
                :data-active="active"
                class="dy-item"
              >
                <div
                  :key="item.pk || item.pid"
                  :data-active="active"
                  :data-pid="item.pid"
                  class="virtual-item-wrap relative flex bg-white"
                  :class="[isDesktop ? 'flex-row pb-4' : 'flex-col']"
                >
                  <div
                    v-show="isShowSpeaker || (!isDesktop && isShowTimestamp === 1)"
                    class="left-speaker flex-shrink-0 items-end"
                    :class="[
                      !isDesktop ? 'my-2.5 flex flex-1' : 'pt-5',
                      isShowTimestamp !== 1 && isDesktop ? '!pt-0' : ''
                    ]"
                  >
                    <!-- 一个段落对应一个说话人 -->
                    <div
                      v-if="fileBaseInfo.diarizeEnabled"
                      v-show="isShowSpeaker"
                      :class="{
                        'flex w-[9rem] justify-end px-2.5 py-[0.3125rem]': isDesktop,
                        'inline-block max-w-72 overflow-hidden': !isDesktop
                      }"
                      class="speaker-container pointer-events-none me-2.5 inline-flex items-center rounded-[0.5rem] transition-colors"
                    >
                      <span
                        class="truncate text-base font-medium leading-[1.375rem] text-fontColor"
                        :class="[isDesktop ? 'text-right' : '']"
                        :title="item.speaker"
                      >
                        {{ item.speaker }}
                      </span>
                    </div>
                    <div
                      v-if="!isDesktop"
                      v-show="isShowTimestamp === 1"
                      class="h-5 text-sm font-normal text-fontColor"
                    >
                      <span>{{ formatSecondsFromMs(item.start_time) }}</span>
                    </div>
                  </div>
                  <div
                    class="right-content transcript-content-wrap flex flex-1 flex-col"
                    :class="[isDesktop ? (isShowSpeaker ? 'pe-4' : 'px-4') : '']"
                  >
                    <!--      说话人的开始时间       -->
                    <div v-if="isDesktop" v-show="isShowTimestamp === 1" class="h-5 text-sm font-normal text-fontColor">
                      <span>{{ formatSecondsFromMs(item.start_time) }}</span>
                    </div>
                    <div class="grid w-full flex-1" :class="[isDesktop && langId ? 'grid-cols-2' : 'grid-cols-1']">
                      <!-- 段落  桌面端或者 移动端且未选择翻译其他语言-->
                      <div
                        v-if="isDesktop || (!isDesktop && !langId)"
                        :data-pid="item.pid"
                        class="content-span-parent-node paragraph-container whitespace-normal break-words text-lg tracking-[0.35px] outline-none"
                      >
                        <!-- 句子容器 - 支持容器级别的contenteditable -->
                        <span
                          class="sentence-container select-text whitespace-break-spaces outline-none"
                          :data-pid="item.pid"
                        >
                          <span
                            v-for="(sentence, sentIndex) in item.sentences"
                            :key="sentence.sid"
                            class="sentence-wrapper cursor-pointer whitespace-break-spaces break-words border-b border-solid border-transparent text-lg !leading-[2.125rem] tracking-[0.35px] outline-none"
                            :data-sid="sentence.sid"
                            :data-sentence-index="sentIndex"
                            :data-pid="item.pid"
                          >
                            <span
                              v-if="isShowTimestamp === 2"
                              class="h-5 cursor-auto text-sm font-normal text-fontColor"
                              >({{ formatSecondsFromMs(sentence.start_time, true) }})&nbsp;</span
                            >
                            <!-- 统一的句子显示/编辑容器 -->
                            <span
                              v-for="(word, wordIndex) in sentence.contents"
                              :key="word.cid"
                              class="word-span whitespace-break-spaces break-words rounded-[0.25rem] py-1 !leading-[2.125rem] tracking-[0.35px] duration-200"
                              :class="[
                                {
                                  'md:transition-colors md:hover:bg-hoverColor-deepen md:hover:text-black': true
                                },
                                isWordActive(word) ? 'bg-hoverColor-deepen text-black md:transition-colors' : ''
                              ]"
                              :data-word-index="wordIndex"
                              :data-sent-index="sentIndex"
                              :data-content-index="wordIndex"
                              :data-cid="word.cid"
                              :data-leaf="true"
                              :data-pid="item.pid"
                              :data-sid="sentence.sid"
                              @dblclick="handleWordDblClick(word, '')"
                              @click="handleWordClick(word, '')"
                              >{{ word.content }}
                            </span>
                          </span>
                        </span>
                      </div>
                      <div
                        v-if="langId && !isShare"
                        :dir="translateDirection"
                        :class="[!isDesktop ? '!px-0' : '']"
                        class="other-lange-wrap whitespace-normal break-words px-16 text-lg !leading-8"
                      >
                        <span>
                          {{ item.translateContent }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="item.isLast && fileBaseInfo.isHalfHour"
                    class="half-wrap absolute bottom-0 left-0 h-[5.25rem] w-full"
                  ></div>
                </div>
                <!--  最后一项 升级提示-->
                <div
                  :key="item.pid + 'upgrade'"
                  ref="upgradeTipRef"
                  v-if="item.isLast && fileBaseInfo.isHalfHour"
                  style="background: linear-gradient(180deg, #ffffff 0%, #e9e4fc 100%)"
                  class="mx-auto flex w-full flex-col items-center justify-center p-[2.25rem]"
                >
                  <div class="mb-2.5 text-center text-[1.375rem] font-medium leading-[1.875rem] text-black">
                    {{ t("TranscriptionPage.outLimit") }}
                  </div>
                  <div class="mb-[1.5rem] flex flex-col whitespace-pre-wrap text-lg">
                    <span class="text-center"> {{ t("TranscriptionPage.outLimitTip1") }}</span>
                    <span class="text-center"> {{ t("TranscriptionPage.outLimitTip2") }}</span>
                  </div>
                  <div
                    @click="handleJumpUpgrade"
                    class="mt-2 flex min-h-11 min-w-[16.25rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[1.375rem] bg-mainColor-900 px-7 text-[1.375rem] font-medium text-white duration-75 ease-linear hover:bg-opacity-80 hover:text-opacity-80 sm:mt-0 md:min-h-[3.25rem] md:rounded-[1.625rem]"
                  >
                    {{ t("RegisterDialog.signUpNow") }}
                  </div>
                </div>
              </DynamicScrollerItem>
            </template>
          </DynamicScroller>
          <div class="flex h-full w-full flex-col items-center justify-center" v-else>
            <NuxtImg
              src="/assets/images/silent.png"
              alt="silent"
              loading="eager"
              class="mb-3 w-16"
              fit="contain"
            ></NuxtImg>
            <span class="text-base">{{ t("TranscriptionPage.silentTip") }}</span>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-1 items-center justify-center overflow-hidden text-lg">
        {{ t("TranscriptionPage.errorTips") }}
      </div>
      <div
        :class="[isDesktop ? 'h-[4.5rem] border-t border-solid border-borderColor' : 'h-[3.5rem]']"
        class="audio-container sticky bottom-0 mx-auto flex w-full items-center justify-center"
      >
        <div class="audio-wrap relative flex h-full w-full max-w-[67.5rem] items-center justify-center">
          <div id="audioID" class="hidden"></div>
          <div class="flex h-full w-full items-center">
            <div
              id="audio-crt"
              class="xgplayer xgplayer-tm flex justify-center"
              :class="{ 'is-mobile': !isDesktop }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <transcript-detail-export
      :taskId="fileBaseInfo.taskId"
      :translateLang="langCode"
      :tableData="[fileBaseInfo]"
      :fileId="fileBaseInfo.fileId"
      :isShowTimestamp="isShowTimestamp"
      :isShowSpeaker="isShowSpeaker"
      v-model="exportDialogVisible"
    />
    <register-dialog ref="registerDialogRef" @export="exportDialogVisible = true"></register-dialog>
  </div>
</template>

<script setup>
import { languageMap } from "~/components/langChoose/langFlag.js";
defineOptions({
  name: "TranscriptDetail"
});
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { sleep } from "~/utils/tools";
import { languageTransMap } from "~/components/langChoose/langFlag.js";

import usePlayer from "./hook/usePlayer.js";
import useTranslation from "./hook/useTranslation.js";
import useKeyEvent from "./hook/keyEvent.js";
import { Sniffer } from "xgplayer";
import { getMIMETypeFromURL } from "~/utils/tools";
import TimeStampPc from "./childrenComp/topOperate/timeStamp/pc.vue";
import TranslateMultiple from "./childrenComp/topOperate/translateMultiple";
import MoreBtnMobile from "./childrenComp/topOperate/moreBtn/mobile.vue";
import UpTips from "./childrenComp/upTips.vue";
import { useMediaQuery } from "@vueuse/core";
import { formatSecondsFromMs } from "./hook/utils.js";
const props = defineProps({
  fileBaseInfo: {
    type: Object,
    default: () => ({})
  },
  transcriptInfo: {
    type: Object,
    default: () => ({})
  }
});
const emit = defineEmits(["translate", "saveConfig", "updateSpeakers"]);
useHead({
  meta: () => [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
    }
  ]
});
const { t, locale, getLocaleMessage } = useI18n();

let { transcriptInfo: transcriptData } = toRefs(props);

const { langId, handleTranslateLangChoose, upgradeTipRef, upgradeVisibleHeight, handleScrollEnd } = useTranslation(
  emit,
  props
);
const isDesktop = useMediaQuery("(min-width: 768px)");

// 播放器相关
const {
  playerAudio,
  dynamicScroller,
  allSegments,
  initPlayers,
  hasPlayed,
  handleWordClick,
  handleWordDblClick,
  isWordActive,
  setupI18nWatch,
  isRtl
} = usePlayer(transcriptData, props);

const registerDialogRef = useTemplateRef("registerDialogRef");
const handleEditRightTranscript = () => {
  registerDialogRef?.value?.setType(0);
  registerDialogRef?.value?.show();
};
// 文件信息相关
const isShowTimestamp = ref(1);

const isShowSpeaker = ref(true);
const handleShowSpeaker = () => {
  isShowSpeaker.value = !isShowSpeaker.value;
};

// 设置i18n监听
setupI18nWatch(locale, getLocaleMessage);
// 翻译语言
const rtlTranslateLangCode = [
  "ug",
  "bm-Nkoo",
  "fa",
  "ur",
  "sd",
  "ps",
  "ar",
  "iw",
  "fa-AF",
  "ms-Arab",
  "dv",
  "yi",
  "ckb",
  "pa-Arab",
  "ug"
];
const langCode = computed(() => {
  if (!langId.value) {
    return "";
  }
  return languageMap[langId.value]?.langCode;
});
const translateDirection = computed(() => {
  return rtlTranslateLangCode.includes(langCode.value) ? "rtl" : "ltr";
});
// 转录语言
const rtlTranscriptLangCode = ["fa", "ur", "sd", "ps", "ar", "he", "yi"];
const transcriptDirection = computed(() => {
  return rtlTranscriptLangCode.includes(props.fileBaseInfo.language) ? "rtl" : "ltr";
});
// 下载导出
const exportDialogVisible = ref(false);
const handleDownload = () => {
  registerDialogRef?.value?.setType(2);
  registerDialogRef?.value?.show();
};
const getFileConfig = () => {
  let player = playerAudio;
  return {
    lastPlayTime: player.value?.currentTime.toFixed(3), // 上次播放停留的时间
    lastPlayRate: player.value?.playbackRate, // 上次播放的播放速度
    lastPlayVolume: player.value?.muted ? 0 : player.value?.volume, // 上次播放的音量
    isShowTimestamp: isShowTimestamp.value, // 是否显示时间戳
    translateLang: langId.value, // 翻译语言
    isShowSpeaker: isShowSpeaker.value,
    hasPlayed: hasPlayed.value,
    mimeType: props.fileBaseInfo?.mimeType || ""
  };
};
const recentLanguageKeys = ref([]);
const getRecentLang = async () => {
  const { transcriptApi } = await import("~/api/transcript");
  const res = await transcriptApi.getRecentLang();
  recentLanguageKeys.value = res.text
    .map((item) => {
      const [lang, name] = item.split("#");
      return name !== "null" ? name : languageTransMap[lang];
    })
    .filter(Boolean);
};
watchEffect(() => {
  document?.body?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
  document?.documentElement?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
});
const handleJumpUpgrade = () => {
  registerDialogRef?.value?.handleSignClick();
};
useKeyEvent(playerAudio);
const reInitPlayer = async () => {
  let player = playerAudio.value;
  const config = getFileConfig();
  const isPlaying = !player.paused;
  player?.destroy();
  await nextTick();
  await sleep(50);
  initPlayers(Object.assign(props.fileBaseInfo, config), locale);
  await sleep(100);
  player = playerAudio.value;
  isPlaying && player.play();
};
watch(isDesktop, reInitPlayer);
onMounted(async () => {
  await nextTick();
  if (Sniffer.os.isPhone && !props.fileBaseInfo.mimeType) {
    const mimeType = await getMIMETypeFromURL(props.fileBaseInfo.fileUrl);
    props.fileBaseInfo.mimeType = mimeType || "";
  }
  // 初始化播放器
  initPlayers(props.fileBaseInfo, locale, allSegments);
  if (!props.isShare) getRecentLang();
});
onUnmounted(() => {
  playerAudio.value = null;
});
defineExpose({
  getRecentLang
});
</script>

<style scoped lang="scss" src="./style.scss"></style>
<style lang="scss">
.mobile-popper-more-A0KQ7lsC {
  --el-color-primary: theme("colors.mainColor.900");
}
.pop-iAHFsY2 {
  --el-color-primary: theme("colors.mainColor.900");
  --el-popover-border-radius: 0.5rem;
  .el-checkbox__label {
    overflow: hidden;
  }
}
[dir="rtl"] .common-dialog-S5NaD2 {
  .el-message {
    @apply flex-row-reverse;
  }
}
.common-dialog-S5NaD2 {
  --el-border-radius-base: 0.5rem;
  --el-dialog-padding-primary: 1.25rem;
  .el-dialog__header {
    @apply mb-5 p-0 text-base font-medium;
  }
  .el-dialog__headerbtn {
    height: 4.125rem;
  }
  .el-dialog__headerbtn .el-dialog__close {
    @apply text-black;
  }
  .el-dialog__footer {
    @apply mt-11 pt-0;
  }
  .el-dialog__headerbtn {
    @apply rtl:left-0 rtl:right-auto;
  }
  .el-button + .el-button {
    // prettier-ignore
    @apply text-sm !ms-2 !ml-0;
  }
  .el-icon.el-dialog__close {
    font-size: 1.6rem;
  }
}
.el-popper.is-customized.popper-class-ZZMG2X2I {
  transition: opacity 0.15s;
  white-space: nowrap;
  color: #fff;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 0.25rem;
  padding: 0.375rem;
  line-height: 1rem;
}
.popover-textarea {
  @media (max-width: 768px) {
    .el-textarea__inner {
      resize: none !important;
    }
  }
  .el-textarea__inner {
    max-height: 10rem;
  }
}
</style>
