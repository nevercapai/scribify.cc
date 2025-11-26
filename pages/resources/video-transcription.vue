<template>
  <div class="video-transcription-wrap">
    <HeadNavbar></HeadNavbar>
    <ResourcesVideoTranscriptionHero></ResourcesVideoTranscriptionHero>
    <resource-common-upload-entry type="video"></resource-common-upload-entry>
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
