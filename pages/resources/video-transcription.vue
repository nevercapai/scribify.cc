<template>
  <div class="video-transcription-wrap">
    <HeadNavbar></HeadNavbar>
    <ResourcesVideoTranscriptionHero></ResourcesVideoTranscriptionHero>
    <div style="width: 100%; background: var(--light-gray)">
      <div class="mx-auto max-w-[75rem] px-4">
        <resource-common-upload
          v-show="!(taskId && fileId)"
          ref="uploadRef"
          :source-type="1"
          @transcribed="transcribeSuccessHandle"
        ></resource-common-upload>
        <div v-if="taskId && fileId" class="h-screen w-full md:h-[90vh]" ref="transPageRef">
          <TranscriptPage
            :taskId="taskId"
            :fileId="fileId"
            @transcribeNewFiles="transcribeNewFilesHandle"
          ></TranscriptPage>
        </div>
      </div>
    </div>
    <ResourcesVideoTranscriptionThreeStep></ResourcesVideoTranscriptionThreeStep>
    <ResourcesVideoTranscriptionWhyTran></ResourcesVideoTranscriptionWhyTran>
    <ResourcesVideoTranscriptionWhyChoose></ResourcesVideoTranscriptionWhyChoose>
    <ResourcesVideoTranscriptionReviews></ResourcesVideoTranscriptionReviews>
    <ResourcesFaq v-bind="faqParams"></ResourcesFaq>
    <ResourcesVideoTranscriptionExplore></ResourcesVideoTranscriptionExplore>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
const faqParams = ref({
  i18nModule: "Resources.Transcription.videoTranscription.faq",
  listNumber: 9
});
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
    transPageRef.value?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
onMounted(() => {});
</script>

<style scoped lang="scss">
:deep(.transcript-box) {
  border-radius: 1rem;
}
/* Responsive */
@media (max-width: 768px) {
  :deep(h1) {
    font-size: 36px !important;
  }

  :deep(.stats-grid) {
    grid-template-columns: 1fr !important;
  }
  :deep(.features-grid) {
    grid-template-columns: 1fr !important;
  }
  :deep(.use-cases-grid) {
    grid-template-columns: 1fr !important;
  }
  :deep(.testimonials-grid) {
    grid-template-columns: 1fr !important;
  }

  :deep(.cta-buttons) {
    flex-direction: column !important;
  }

  :deep(.trust-badges) {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 20px !important;
  }
  :deep(.section-title) {
    @apply break-all;
  }
  :deep(.section-subtitle) {
    @apply break-all;
  }
  :deep(.gradient-text) {
    @apply break-all;
  }
  :deep(.stats-grid),
  :deep(.features-grid),
  :deep(.problem-grid),
  :deep(.workflow-steps),
  :deep(.testimonials-grid) {
    grid-template-columns: 1fr;
  }
}
:deep(.transcript-box) {
  border-radius: 1rem;
}
</style>
