<template>
  <client-only>
    <upload-dialog-file v-model="showFileDialog" />
    <upload-dialog-link v-model="showLinkDialog" />
    <upload-dialog-file-or-link v-model="showFileAndLinkDialog" />
    <upload-dialog-result v-model="showResultDialog" />
  </client-only>
</template>

<script setup lang="ts">
const {
  showFileDialog,
  showLinkDialog,
  showFileAndLinkDialog,
  showResultDialog,
  selectRawFiles
} = storeToRefs(useUploadStore());

watchEffect(() => {
  const isOpen =
    showFileDialog.value || showLinkDialog.value || showFileAndLinkDialog.value;
  if (selectRawFiles.value?.length && isOpen) {
    showResultDialog.value = true;
    // 关闭多余的弹窗
    showFileDialog.value = false;
    showLinkDialog.value = false;
    showFileAndLinkDialog.value = false;
  }
});

onUnmounted(() => {
  showResultDialog.value = false;
});
</script>

<style scoped></style>
