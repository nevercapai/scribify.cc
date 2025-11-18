<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :align-center="true"
      :close-on-click-modal="false"
      class="set-public-video-dialog"
      append-to-body
      destroy-on-close
      :title="t('FileUploadAndRecording.upload.shareFilePublicly')"
      @opened="opened"
      @closed="closed"
    >
      <video
        ref="videoRef"
        src="/assets/video/setPublic.mp4"
        controls
        :autoplay="false"
        preload="auto"
        class="show-public-video-demo aspect-video w-full rounded-[1rem]"
      ></video>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const visible = defineModel("visible", { default: false });
const videoRef = useTemplateRef("videoRef");
const closed = () => {
  if (!videoRef.value) return;
  videoRef.value.currentTime = 0;
  videoRef.value.pause();
};
const opened = () => {
  nextTick(() => {
    if (!videoRef.value) return;
    videoRef.value.play();
  });
};
</script>
<style lang="scss">
.set-public-video-dialog {
  width: calc(100% - 2rem);
  max-width: 46.25rem;
  @apply box-border !rounded-lg p-5;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
  .el-dialog__header {
    @apply mb-5 p-0 text-base font-medium;
  }
  .el-dialog__headerbtn {
    height: 4.125rem;
  }
  .el-dialog__headerbtn .el-dialog__close {
    @apply text-lg text-black;
  }
  .el-dialog__headerbtn {
    @apply rtl:left-0 rtl:right-auto;
  }
}
.el-popup-parent--hidden:has(.set-public-video-dialog .show-public-video-demo) {
  @media (max-width: 767px) {
    overflow: hidden;
    width: auto !important;
  }
}
</style>
