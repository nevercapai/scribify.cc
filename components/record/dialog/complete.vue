<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :show-close="false"
      append-to-body
      class="customer-dialog-link2"
      :title="t('FileUploadAndRecording.record.dialog.complete.title')"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="complete-content">
        {{ t("FileUploadAndRecording.record.dialog.complete.label") }}
      </div>
      <template #footer>
        <el-button class="home-btn" @click="handleConfirm" type="primary">
          {{ t("FileUploadAndRecording.record.dialog.complete.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const handleConfirm = () => {
  visible.value = false;
};

function handleKeyPress(e: any) {
  if (e.key === "Enter") {
    handleConfirm();
  }
}
const handleOpen = () => {
  window.addEventListener("keyup", handleKeyPress);
};
const handleClose = () => {
  window.removeEventListener("keyup", handleKeyPress);
  emit("confirm");
};
</script>

<style scoped>
@import "~/layouts/homeMixin.css";
@import "../../upload/dialog/common.css";
:deep(.customer-dialog) {
}
:deep(.el-dialog) {
  @apply w-[20.625rem] !rounded-lg p-5;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
}
</style>
