<template>
  <el-dialog
    v-model="registerDialogVisible"
    :width="isDesktop ? '35rem' : '22rem'"
    align-center
    :show-close="true"
    append-to-body
    destroy-on-close
    :close-on-click-modal="false"
    class="register-dialog-i1mbjq1KV common-dialog-S5NaD2"
    @open="
      () =>
        dialogOpen('.register-dialog-i1mbjq1KV', () => {
          registerDialogVisible = false;
        })
    "
    @close="() => dialogClose('.register-dialog-i1mbjq1KV')"
  >
    <div class="content-wrap pt-8">
      <div class="mb-[0.625rem] text-center text-base font-medium leading-5 text-black">
        {{ contentTip }}
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer flex flex-wrap items-center justify-center">
        <div
          v-if="type === 1"
          @click="transcribe"
          class="cancel mb-3 flex min-h-11 min-w-56 max-w-full cursor-pointer items-center justify-center break-all rounded-[1.375rem] border border-[#E2E4E6] px-5 py-2 text-start text-black md:hover:opacity-85"
        >
          {{ t("RegisterDialog.transcribeNewFiles") }}
        </div>
        <div
          v-else-if="type === 2"
          @click="handleExport"
          class="cancel mb-3 flex min-h-11 min-w-56 max-w-full cursor-pointer items-center justify-center break-all rounded-[1.375rem] border border-[#E2E4E6] px-5 py-2 text-start text-black md:hover:opacity-85"
        >
          {{ t("RegisterDialog.stillExporting") }}
        </div>
        <div
          @click="handleSignClick"
          class="confirm mb-3 flex min-h-11 min-w-56 max-w-full cursor-pointer items-center justify-center break-all rounded-[1.375rem] bg-[#6367F1] px-5 py-2 text-start text-white md:ms-3 md:hover:opacity-85"
        >
          {{ t("RegisterDialog.signUpNow") }}
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";
import { dialogOpen, dialogClose } from "../transcriptDetail/hook/utils.js";
const { $mitt } = useNuxtApp();
const handleSignClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup", newTab: true });
};
const isDesktop = useMediaQuery("(min-width: 768px)");
const { t } = useI18n();
const registerDialogVisible = ref(false);
const type = ref(0);
const emit = defineEmits(["export", "transcribeNewFiles"]);
const contentTip = ref(t("RegisterDialog.tip1"));
const setContentTip = (val) => {
  contentTip.value = val;
};
const handleExport = async () => {
  emit("export");
  registerDialogVisible.value = false;
};
const setType = (val) => {
  type.value = val;
};
const show = () => {
  registerDialogVisible.value = true;
};
const transcribe = () => {
  emit("transcribeNewFiles");
};
defineExpose({
  setType,
  show,
  handleSignClick,
  setContentTip
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
.register-dialog-i1mbjq1KV {
  .el-dialog__footer {
    @apply mb-5 mt-8;
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
.el-popup-parent--hidden:has(.register-dialog-i1mbjq1KV .content-wrap) {
  @media (max-width: 767px) {
    overflow: hidden;
    width: auto !important;
  }
}
</style>
