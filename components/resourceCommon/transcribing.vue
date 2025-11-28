<template>
  <div class="transcribing-wrap mx-auto flex flex-col justify-center rounded-2xl bg-white p-8 md:px-[4.75rem]">
    <div class="transcribing-img-box flex w-full flex-col items-center justify-center">
      <NuxtImg
        v-if="transcriptionStatus !== -1"
        src="/assets/img/resource/transcribing.png"
        class="mt-28 h-auto w-[15.625rem]"
        loading="eager"
        alt="transcribing"
      />
      <NuxtImg
        v-else
        src="/assets/img/resource/transcribe-failed.png"
        class="mt-28 h-auto w-[14.125rem]"
        loading="eager"
        alt="transcribing"
      />
      <div v-if="transcriptionStatus === 0" class="tip text-[1.375rem] font-medium leading-[1.875rem] text-black">
        {{ t("Resources.Upload.transcribeProgress") }}
      </div>
      <div
        v-else-if="transcriptionStatus === -1"
        class="mt-8 flex w-full flex-col items-center justify-center text-[1.375rem] font-medium leading-[1.875rem] text-black"
      >
        <div class="flex items-center justify-center">
          <NuxtImg src="/assets/img/resource/icon_cry.png" class="me-2 h-5 w-5" loading="eager" alt="transcribing" />
          <span class="text-[#EA6A6A]"> {{ t("Resources.Upload.transcribeFailed") }}</span>
        </div>
        <span class="mt-7 text-black">{{ errorMsg }}</span>
        <div
          @click="retry"
          class="mt-10 flex h-11 w-[66%] cursor-pointer items-center justify-center rounded-[0.625rem] bg-[#6367F1] text-white hover:opacity-80"
        >
          {{ t("Resources.Upload.retry") }}
        </div>
      </div>
    </div>
    <div class="transcribing-progress mt-10 flex md:mt-16 md:px-6" v-if="transcriptionStatus !== -1">
      <el-progress :stroke-width="12" class="flex-1" striped striped-flow :percentage="progress" />
    </div>
    <div v-if="transcriptionStatus !== -1" class="transcribing-tip mt-10 text-lg font-medium text-black md:mt-[4rem]">
      {{ t("Resources.Upload.tip1") }}
      <span class="cursor-pointer text-[#6367F1]" @click="signup"> {{ t("Resources.Upload.tip2") }}</span>
      {{ t("Resources.Upload.tip3") }}
    </div>
  </div>
</template>

<script setup>
import { sleep } from "~/utils/tools.js";
const { t } = useI18n();
const emit = defineEmits(["transcribeSuccess", "transcribeFailed"]);
const props = defineProps({
  taskId: {
    type: String,
    default: "647967276685840384"
  }
});
const progress = ref(0);
const transcriptionStatus = ref(0);
const errorMsg = ref("");
const startTaskStatusPolling = async () => {
  try {
    if (!props.taskId) {
      return;
    }
    // 提取任务ID作为接口入参
    const taskIds = [props.taskId];

    // 调用接口查询状态
    const { useFolderApi } = await import("~/api/folder");
    const { queryTaskStatus } = useFolderApi;
    const response = await queryTaskStatus(taskIds);
    const res = response[0];
    if (!res) return;
    transcriptionStatus.value = res.status === "COMPLETED" ? 1 : res.status === "FAILED_PERMANENT" ? -1 : 0;
    progress.value = res.progress;
    if (transcriptionStatus.value === 1) {
      emit("transcribeSuccess", res);
      return;
    } else if (transcriptionStatus.value === -1) {
      errorMsg.value = res.errorMsg || "";
      return;
    }
    await sleep(3000);
    await startTaskStatusPolling();
  } catch (error) {}
};
watch(
  () => props.taskId,
  () => {
    startTaskStatusPolling();
  },
  { immediate: true }
);

const { $mitt } = useNuxtApp();
const signup = () => {
  $mitt.emit("goToEvent", { path: "/user/signup", newTab: true });
};
const retry = () => {
  emit("transcribeFailed");
};
</script>

<style lang="scss" scoped>
.transcribing-wrap {
  --el-border-radius-base: 0.5rem;
  --el-color-primary: theme("colors.mainColor.900");
  max-width: 48.75rem;
  max-height: 38.75rem;
}
:deep(.el-progress-bar__outer) {
  @apply bg-boxBgColor;
}

:deep(.el-progress-bar__inner) {
  //@apply bg-mainColor-900;
  background: linear-gradient(270deg, #3470ff 0%, #9534e6 100%);
}

:deep(.el-progress__text) {
  @apply box-border !min-w-9 text-center !text-sm font-medium text-black;
}
[dir="rtl"] .transcribing-progress :deep(.el-progress) {
  .el-progress-bar {
    transform: rotate(180deg);
  }
  .el-progress__text {
    margin-left: 0;
    margin-right: 0.75rem;
  }
}
</style>
