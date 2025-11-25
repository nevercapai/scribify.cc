<template>
  <el-dialog
    v-model="shareDialogVisible"
    :title="t('FolderPage.dialog.share.title')"
    :width="isDesktop ? '29rem' : '23rem'"
    align-center
    :show-close="true"
    append-to-body
    :close-on-click-modal="false"
    class="share-dialog-i1mbjq1KV common-dialog-S5NaD2"
    @open="
      () =>
        dialogOpen('.share-dialog-i1mbjq1KV', () => {
          shareDialogVisible = false;
        })
    "
    @close="() => dialogClose('.share-dialog-i1mbjq1KV')"
  >
    <div class="content-wrap pb-4">
      <div class="mb-[0.625rem] leading-5 text-black">
        {{ t("TranscriptionPage.shareTips") }}
      </div>
      <div
        class="flex h-auto w-full flex-col items-center overflow-hidden rounded-lg border border-borderColor bg-boxBgColor p-4 sm:h-[2.125rem] sm:flex-row sm:flex-nowrap sm:p-0"
      >
        <div
          class="mb-3 flex-1 break-all sm:mb-0 sm:h-[2.125rem] sm:truncate sm:px-4 sm:leading-[2.125rem]"
          :title="sharedUrl"
        >
          {{ sharedUrl }}
        </div>
        <div
          v-if="hasCopy"
          class="me-1 flex items-center justify-center rounded-xl bg-mainColor-600 px-7 py-2 text-mainColor-900 sm:h-[1.625rem] sm:rounded-lg sm:px-3 sm:py-2.5"
        >
          <span class="iconfont icon-duihao me-2 text-base"></span>
          <span> {{ t("TranscriptionPage.copiedLink") }}</span>
        </div>
        <div
          v-else
          class="me-1 flex items-center justify-center rounded-xl bg-subColor-light px-7 py-2 text-subColor-normal sm:h-[1.625rem] sm:rounded-lg sm:px-3 sm:py-2.5"
        >
          <span class="iconfont icon-shanchu me-2 text-base text-black"></span>
          <span> {{ t("TranscriptionPage.copyFail") }}</span>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer flex items-center justify-center">
        <el-button
          type="primary"
          class="sys-btn !h-[2.75rem] !w-[16.25rem] !rounded-3xl sm:!h-8 sm:!w-72 sm:!rounded-lg"
          @click="shareDialogVisible = false"
        >
          {{ t("TranscriptionPage.copyGotIt") }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
// 分享
import { useMediaQuery, useClipboard } from "@vueuse/core";
import { dialogOpen, dialogClose } from "../../hook/utils";
const props = defineProps({
  fileBaseInfo: {
    type: Object,
    default: () => {}
  }
});
const isDesktop = useMediaQuery("(min-width: 768px)");
const { t } = useI18n();
const route = useRoute();
const userStore = useUserStore();
const shareDialogVisible = ref(false);
const sharedUrl = ref("");
const hasCopy = ref(false);
const { copy, copied } = useClipboard({ legacy: true });

const handleShare = async (cb) => {
  const { useCommonApi } = await import("~/api/common");
  const { collectEvent } = useCommonApi;
  const shareName = userStore.userInfo?.userInfoVO?.email ?? "NeverCap";
  const shareId = userStore.userInfo?.userInfoVO?.userid;
  const taskId = route.query.taskId;
  const prefix = window.location.origin + route.path;
  const commonUrl =
    prefix + `?shareId=${shareId}&shareName=${shareName}&taskId=${taskId}`;
  collectEvent({
    fileName: props.fileBaseInfo.fileName,
    shareUrl: commonUrl + "&mixpanel=1&source=NevercapAI",
    eventType: "share"
  });
  sharedUrl.value = commonUrl + "&source=NevercapAI";
  shareDialogVisible.value = true;
  const url =
    prefix +
    `?shareId=${encodeURIComponent(shareId)}&shareName=${encodeURIComponent(shareName)}&taskId=${taskId}&source=NevercapAI`;
  await copy(url);
  hasCopy.value = copied.value;
  cb();
};
defineExpose({
  handleShare
});
</script>

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
</style>
