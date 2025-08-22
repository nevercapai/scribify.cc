<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FileUploadAndRecording.record.dialog.delete.title')"
    >
      <div>{{ t("FileUploadAndRecording.record.dialog.delete.label") }}</div>
      <template #footer>
        <el-button class="home-btn" @click="visible = false">
          {{ t("FileUploadAndRecording.record.dialog.delete.cancel") }}
        </el-button>
        <el-button class="home-btn" @click="handleConfirm" type="danger">
          {{ t("FileUploadAndRecording.record.dialog.delete.confirm") }}
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
