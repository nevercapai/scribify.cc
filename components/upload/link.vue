<template>
  <div class="flex flex-col justify-center">
    <slot></slot>
    <div class="link-label mb-2.5 text-lg text-black">
      {{ t("FileUploadAndRecording.upload.link.label") }}
    </div>
    <el-input
      v-model="value"
      type="textarea"
      :rows="5"
      placeholder="https://www.youtube.com/watch?v=..."
      @keydown.enter.prevent="handleEnter"
    ></el-input>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  link: string;
  isOvered?: boolean;
  isLoading?: boolean;
}>();
const emit = defineEmits(["update:link", "enter"]);

const value = computed({
  get() {
    return props.link;
  },
  set(val) {
    emit("update:link", val);
  }
});

const handleEnter = () => {
  if (props.isOvered) return;
  if (!props.isLoading) {
    emit("enter");
  }
};
</script>

<style scoped>
:deep(.el-textarea__inner) {
  @apply rounded-lg px-3.5 py-3;
  resize: none;
  box-shadow: unset;
  background: #F9FAFC;
  border: 2px dashed #E2E4E6;

  &:focus {
    box-shadow: unset !important;
  }
}

:deep(.el-textarea) {
  border-radius: 8px;
}

:deep(.el-textarea__inner::-webkit-scrollbar) {
  width: 0;
  height: 0;
  background-color: transparent;
}
:deep(.el-textarea__inner:focus) {
  box-shadow: 0 0 0 1px #6f4cf0 inset;
}
</style>
