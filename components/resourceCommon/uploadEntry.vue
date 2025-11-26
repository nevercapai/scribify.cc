<template>
  <div style="width: 100%; background: var(--light-gray)">
    <div class="mx-auto max-w-[75rem] px-4">
      <resource-common-upload
        v-show="!(taskId && fileId)"
        ref="uploadRef"
        :source-type="sourceType"
        @transcribed="transcribeSuccessHandle"
      ></resource-common-upload>
      <div v-if="taskId && fileId" class="min-h-[80vh] w-full" ref="transPageRef">
        <TranscriptPage
          :taskId="taskId"
          :fileId="fileId"
          @transcribeNewFiles="transcribeNewFilesHandle"
        ></TranscriptPage>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "video"
  }
});
const typeMap = {
  video: 1,
  link: 2
};
const sourceType = computed(() => typeMap[props.type]);
const TranscriptPage = defineAsyncComponent(() => import("~/pages/transcript/index.vue"));
const fileId = ref("");
const taskId = ref("");
const transcribeSuccessHandle = (data) => {
  fileId.value = data.fileId;
  taskId.value = data.taskId;
};
const uploadRef = useTemplateRef("uploadRef");
const transcribeNewFilesHandle = () => {
  fileId.value = "";
  taskId.value = "";
  uploadRef.value?.clearTaskId();
};
const transPageRef = useTemplateRef("transPageRef");
watch([fileId, taskId], async () => {
  if (fileId.value && taskId.value) {
    await nextTick();
    transPageRef.value?.scrollIntoView({ behavior: "smooth", block: "end" });
  }
});
onMounted(() => {});
</script>

<style lang="scss" scoped>
.video-transcription-wrap {
  :deep(nav) {
    z-index: 9999;
  }
}
</style>
