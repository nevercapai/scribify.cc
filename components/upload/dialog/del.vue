<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :title="t('FileUploadAndRecording.upload.del.title')"
    >
      <div>{{ t("FileUploadAndRecording.upload.del.content") }}</div>

      <template #footer>
        <div class="flex flex-wrap items-center justify-end">
          <div class="mb-2 flex w-auto">
            <el-button class="home-btn" @click="handleRemoveAll" type="danger">
              {{ t("FileUploadAndRecording.upload.del.cancel") }}
            </el-button>
          </div>
          <div class="mb-2 ms-3 flex w-auto">
            <el-button class="home-btn" @click="visible = false" type="primary">
              {{ t("FileUploadAndRecording.upload.del.confirm") }}
            </el-button>
          </div>
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
@import "./common.css";
@import "~/layouts/homeMixin.css";
:deep(.el-dialog) {
  max-width: calc(100% - 2rem) !important;
  @apply !w-[30.4375rem] !rounded-lg p-5;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
  padding-bottom: 0.75rem;
}
</style>
