<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      append-to-body
      class="customer-dialog-link2"
      :title="t('FolderPage.endRecord.title')"
    >
      <div class="speaker-content">
        {{ t("FileUploadAndRecording.record.dialog.speaker.content", {
        text: t("FileUploadAndRecording.upload.speaker")
      })
        }}
      </div>

      <template #footer>
        <div class="flex flex-wrap items-center justify-end">
          <el-button class="home-btn" @click="visible = false" type="primary">
            {{ t("FileUploadAndRecording.record.dialog.complete.confirm") }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue", "removeAll"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const handleRemoveAll = () => {
  emit("removeAll");
};
</script>

<style scoped>
@import "../../upload/dialog/common.css";
@import "~/layouts/homeMixin.css";
:deep(.el-dialog) {
  max-width: calc(100% - 2rem) !important;
  @apply !w-[22.6875rem] !rounded-lg p-5;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
  padding-bottom: 0.75rem;
}
</style>
