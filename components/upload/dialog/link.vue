<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      @closed="handleClosed"
      @open="handleOpen"
      @close="handleClose"
      class="customer-dialog-link"
      append-to-body
      :title="title"
      footer-class="flex flex-wrap justify-end"
    >
      <upload-link v-model:link="link" :is-overed="isOver" :is-loading="loading || linkLoading" @enter="confirm" />
      <template #footer>
        <el-button class="home-btn mb-2" @click="visible = false">
          {{ t("FileUploadAndRecording.upload.link.cancel") }}
        </el-button>
        <el-button class="home-btn mb-2 max-w-full" :loading="loading || linkLoading" @click="confirm" type="primary">
          {{ confirmBtn }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useLink } from "./useLink";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  isGuest?: boolean;
  linkLoading?: boolean;
}>();

const title = ref(t("FileUploadAndRecording.upload.link.dialogTitle"));
const confirmBtn = ref(t("FileUploadAndRecording.upload.link.confirm"));

const emit = defineEmits(["update:modelValue", "confirm", "open", "close"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const { link, loading, handleConfirm, linkValidate } = useLink(emit);

const isOver = ref(false);
const confirm = async () => {
  // loading.value = true;
  if (!linkValidate()) {
    return;
  }
  if (props.isGuest) {
    emit("confirm", link.value);
    return;
  }

  if (isOver.value) {
    return;
  }

  const callback = () => {
    isOver.value = true;
  };
  handleConfirm(callback);
};

function handleKeyPress(e: any) {
  // if (e.target.tagName === "TEXTAREA") return;
  if (e.key === "Enter" && !(loading.value || props.linkLoading)) {
    confirm();
  }
}

const handleOpen = () => {
  isOver.value = false;
  loading.value = false;
  emit("open");
  window.addEventListener("keypress", handleKeyPress);
};
const handleClose = () => {
  loading.value = false;
  emit("close");
  window.removeEventListener("keypress", handleKeyPress);
};
const setText = ({ titleText, confirmBtnText }) => {
  title.value = titleText;
  confirmBtn.value = confirmBtnText;
};
const setLink = (url = "") => {
  link.value = url;
};
const handleClosed = () => {
  setText({
    titleText: t("FileUploadAndRecording.upload.link.dialogTitle"),
    confirmBtnText: t("FileUploadAndRecording.upload.link.confirm")
  });
  setLink("");
};

const retry = (url: string) => {
  isOver.value = false;
  loading.value = true;
  link.value = url;
  confirm();
};
defineExpose({
  retry,
  setLink,
  loading,
  setText
});
</script>

<style scoped>
@import "./common.css";
@import "~/layouts/homeMixin.css";
</style>
