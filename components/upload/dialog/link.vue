<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      @closed="link = ''"
      @open="handleOpen"
      @close="handleClose"
      class="customer-dialog-link"
      append-to-body
      :title="t('FileUploadAndRecording.upload.file.orTitle')"
    >
      <upload-link
        v-model:link="link"
        :is-overed="isOver"
        :is-loading="loading || linkLoading"
        @enter="confirm"
      />
      <template #footer>
        <el-button class="home-btn mb-2" @click="visible = false">
          {{ t("FileUploadAndRecording.upload.link.cancel") }}
        </el-button>
        <el-button
          class="home-btn mb-2"
          :loading="loading || linkLoading"
          @click="confirm"
          type="primary"
        >
          {{ t("FileUploadAndRecording.upload.link.confirm") }}
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

const emit = defineEmits(["update:modelValue", "confirm", "open", "close"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const { link, loading, handleConfirm } = useLink(emit);

const isOver = ref(false);
const confirm = async () => {
  // loading.value = true;
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
</script>

<style scoped>
@import "./common.css";
@import "~/layouts/homeMixin.css";
</style>
