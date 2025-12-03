<template>
  <div class="mp4-transcription-wrap">
    <HeadNavbar></HeadNavbar>
    <div style="background: linear-gradient(188deg, #eff0fc 0%, #ffffff 100%)">
      <ResourcesMp4TranscriptionHero></ResourcesMp4TranscriptionHero>
      <resource-common-upload-entry type="mp4" class="upload-mp4-box mb-16"></resource-common-upload-entry>
      <ResourcesMp4TranscriptionThreeStep></ResourcesMp4TranscriptionThreeStep>
    </div>
    <ResourcesMp4TranscriptionHowToGet></ResourcesMp4TranscriptionHowToGet>
    <ResourcesMp4TranscriptionExportFormats></ResourcesMp4TranscriptionExportFormats>
    <ResourcesMp4TranscriptionHowToUse></ResourcesMp4TranscriptionHowToUse>
    <ResourcesMp4TranscriptionWhyChoose></ResourcesMp4TranscriptionWhyChoose>
    <ResourcesFaq v-bind="faqParams"></ResourcesFaq>
    <ResourcesMp4TranscriptionExplore></ResourcesMp4TranscriptionExplore>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
/* mp4-transcription 组件 */
const faqParams = ref({
  i18nModule: "Resources.Transcription.mp4Transcription.faq",
  listNumber: 6
});
provide("showFileTypeTip", false);
</script>

<style scoped lang="scss">
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
.upload-mp4-box {
  background: unset !important;
  :deep(.upload-common) {
    box-shadow: 0 0.125rem 1.125rem 0 rgba(0, 92, 255, 0.14);
  }
}
:deep(.trans-detail-box) {
  #transDetail_lgCdiwM {
    background: unset !important;
    .transcript-box {
      @apply rounded-2xl;
    }
  }
}
</style>
