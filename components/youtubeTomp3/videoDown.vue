<template>
  <div class="video-down-container mx-[1rem]">
    <div
      class="mx-auto mb-[3.5rem] mt-[2.5rem] flex max-w-[62.125rem] flex-col rounded-[1rem] border border-[#512680] bg-[#1B0B30] p-[2rem] text-white shadow-md"
    >
      <!-- 顶部文案说明 -->
      <div class="mb-[1.25rem]">
        <div class="text-[1rem] font-medium text-white">
          {{ t("Resources.YouTubeToMP3.videoDownload.title") }}
        </div>
        <div class="download-line h-1 w-[6.5rem] rounded"></div>
        <div class="text-[1rem] leading-snug text-white">
          {{ t("Resources.YouTubeToMP3.videoDownload.description") }}
        </div>
      </div>
      <!-- 内容卡片：左右布局 -->
      <div class="flex grid grid-cols-1 gap-[2.5rem] md:grid-cols-2">
        <!-- 左侧图片 -->
        <div class="relative md:flex-[0_0_47%] md:basis-[47%]">
          <NuxtImg
            src="/assets/images/downloadMp4/posterMP3.png"
            alt="nevercap Mp3"
            class="aspect-video w-full rounded-[1rem]"
          ></NuxtImg>
          <CustomAudioPlayer
            v-model="file.fileUrl"
            class="absolute bottom-0 w-full"
            style="border-radius: 0 0 8px 8px"
          />
        </div>

        <!-- 右侧内容 -->
        <div
          class="flex flex-col justify-between py-[2rem] text-start text-[1.375rem] leading-[1.875rem] md:flex-[0_0_53%] md:basis-[53%]"
        >
          <div
            class="mb-[1rem] text-[1.375rem] font-bold leading-tight text-white"
          >
            {{ file.fileName }}
          </div>
          <div class="flex">
            <el-button
              @click="throttledDownload"
              :loading="loading"
              type="primary"
              class="!h-[2.75rem] !w-[13.5rem] !rounded-[1.375rem] !border-0 !bg-[#9334EB] !text-[1rem] font-bold"
              color="#3470FF"
            >
              {{ t("Resources.YouTubeToMP3.videoDownload.downloadButton") }}
            </el-button>
            <NuxtLink
              class="ms-[0.625rem] flex !h-[2.75rem] !w-[13.5rem] items-center justify-center !rounded-[1.375rem] !border-0 !text-[1rem] font-bold"
              style="
                background: linear-gradient(90deg, #dc2628 0%, #9534e6 100%);
              "
              :to="$localePath('/')"
            >
              {{ t("Resources.YouTubeToMP3.videoDownload.TranscribeButton") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* videoDown 组件 */
import { ref } from "vue";
import { Msg } from "~/utils/tools";
import CustomAudioPlayer from "./CustomAudioPlayer.vue";

const { t } = useI18n();

// 节流函数
const throttle = (func: Function, delay: number) => {
  let lastCall = 0;
  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
};

const { file } = defineProps({
  file: {
    type: Object,
    required: true
  }
});

const loading = ref(false);

const downloadVideo = async () => {
  if (file.urlConfig) {
    window.open(file.urlConfig, "_blank");
    return;
  }
  if (!file.fileUrl) return;
  loading.value = true;
  try {
    const response = await fetch(file.fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.fileName || "video.mp4";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    loading.value = false;
  } catch (e) {
    loading.value = false;
    Msg({
      message: t("Resources.YouTubeToMP3.videoDownload.downloadError"),
      type: "error"
    });
  }
};

// 使用节流函数包装下载方法，限制1秒内只能点击一次
const throttledDownload = throttle(downloadVideo, 1500);
</script>

<style scoped>
.video-down-container {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.download-line {
  background: linear-gradient(90deg, #7e3bee 0%, #d847f0 100%);
  @apply my-3;
}
</style>
