<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :show-close="false"
      :title="t('FolderPage.endRecord.title')"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="complete-content">
        {{ t("FolderPage.endRecord.content") }}
      </div>
      <template #footer>
        <el-button class="home-btn mb-2" @click="handleConfirm(true)">
          {{ t("FolderPage.endRecord.cancel") }}
        </el-button>
        <el-button
          class="home-btn mb-2"
          @click="handleConfirm(false)"
          type="primary"
        >
          {{ t("FolderPage.endRecord.confirm") }}
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

const handleConfirm = (isEed: boolean) => {
  visible.value = false;
  emit("confirm", isEed);
};

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style scoped>
@import "~/layouts/homeMixin.css";
@import "../../upload/dialog/common.css";
:deep(.customer-dialog) {
}
:deep(.el-dialog) {
  @apply w-[30.625rem] !rounded-lg p-5;
  width: calc(100% - 2rem);
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
  padding-bottom: 0.75rem;
}
</style>
