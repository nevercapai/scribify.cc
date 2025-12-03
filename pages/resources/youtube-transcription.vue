<template>
  <div class="youtube-transcription-wrap">
    <HeadNavbar></HeadNavbar>
    <div style="background: linear-gradient(182deg, #eff0fc 0%, #ffffff 100%)" class="overflow-hidden">
      <resources-transcription-hero :desCount="2" :module="`${mainModule}.hero`" />
      <resource-common-upload-entry type="link" class="upload-link-box mb-[4.625rem]" />
    </div>
    <resources-transcription-steps :steps="3" :module="`${mainModule}.threeStep`" />
    <resources-transcription-list-card
      class="what-you-can py-6"
      isHighlightNewLine
      :params="whatYouCanParams"
      featuresGridClass="gap-[1rem]"
    />
    <resources-transcription-list-card
      class="why-convert-youtube pb-[4.375rem] pt-16"
      :params="whyConvertYouTubeParams"
      featuresGridClass="!grid-cols-2"
    />
    <resources-transcription-list-card
      class="why-people-trust !bg-white pb-[2.625rem] pt-16"
      :params="whyPeopleTrustParams"
      textAlign="center"
      featuresCardClass="!bg-[transparent] !border-0"
      featureCardIconClass="!justify-center w-[2.875rem] h-[2.875rem] bg-[#6367F1] mx-auto rounded-[50%]"
    />
    <resources-transcription-left-img-right-list class="bg-[var(--light-gray)]" :params="realWaysPeopleParams" />
    <resources-transcription-left-list-right-img class="bg-[var(--light-gray)] !pt-12" :params="unLockNewIdeasParams" />
    <ResourcesFaq v-bind="faqParams"></ResourcesFaq>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { useI18nModule } from "~/utils/i18n";
const { t } = useI18n();
const mainModule = "Resources.Transcription.youtubeTranscription";
const faqParams = ref({
  i18nModule: `${mainModule}.faq`,
  listNumber: 9
});
const generateParams = (module, imgList) => {
  const $i = useI18nModule(module);
  const list = [];
  for (let i = 1; i <= Object.keys(imgList).length; i++) {
    list.push({
      title: $i(`list_title_${i}`),
      des: $i(`list_des_${i}`),
      img: imgList[i]?.src,
      iconClass: imgList[i]?.iconClass
    });
  }
  return {
    title: $i("title"),
    titleHighlight: $i("titleHighlight"),
    list
  };
};
// What You Can Get with  Our YouTube Transcription Tool
const whatYouCanParams = ref({});
const whatYouCanSrcCommon = "/assets/img/resource/youtube/what_you_can_";
const whatYouCanImgList = [1, 2, 3].reduce((acc, num) => {
  acc[num] = {
    src: `${whatYouCanSrcCommon}${num}.png`
  };
  return acc;
}, {});
whatYouCanParams.value = generateParams(`${mainModule}.whatYouCan`, whatYouCanImgList);
// whyConvertYouTubeParams
const whyConvertYouTubeParams = ref({});
const whyCySrcCommon = "/assets/img/resource/youtube/why_cy_";
const whyConvertYouTubeImgList = [1, 2, 3, 4, 5, 6].reduce((acc, num) => {
  acc[num] = {
    src: `${whyCySrcCommon}${num}.png`,
    ...(num === 2 && { iconClass: "w-6 h-[1.875rem]" })
  };
  return acc;
}, {});
whyConvertYouTubeParams.value = generateParams(`${mainModule}.whyConvertYouTube`, whyConvertYouTubeImgList);
// whyPeopleTrustParams
const whyPeopleTrustParams = ref({});
const iconClass = "w-[1.625rem] h-[1.625rem]";
const whyPeopleTrustSrcCommon = "/assets/img/resource/youtube/why_pt_";
const whyPeopleTrustImgList = [1, 2, 3, 4, 5, 6].reduce((acc, num) => {
  acc[num] = {
    src: `${whyPeopleTrustSrcCommon}${num}.png`,
    iconClass
  };
  return acc;
}, {});
whyPeopleTrustParams.value = generateParams(`${mainModule}.whyPeopleTrust`, whyPeopleTrustImgList);
// Real Ways People Use YouTube Transcripts
const realWaysPeopleParams = ref({});
const genRealWaysPeopleParams = () => {
  const $i = useI18nModule(`${mainModule}.howToUse`);
  const list = [];
  for (let i = 1; i <= 5; i++) {
    list.push({
      title: $i(`list_title_${i}`),
      des: $i(`list_des_${i}`)
    });
  }
  return {
    title: $i("title"),
    titleHighlight: $i("titleHighlight"),
    list,
    leftImg: "/assets/img/resource/youtube/how_can_you.png"
  };
};
realWaysPeopleParams.value = genRealWaysPeopleParams();

// Unlock New Ideas with YouTube Transcripts
const unLockNewIdeasParams = ref({});
const genUnLockNewIdeasParams = () => {
  const $i = useI18nModule(`${mainModule}.howToGet`);
  const list = [];
  for (let i = 1; i <= 7; i++) {
    list.push({
      des: $i(`list_des_${i}`)
    });
  }
  return {
    title: $i("title"),
    titleHighlight: $i("titleHighlight"),
    subTitle: $i("subTitle"),
    list,
    summary: $i("summary"),
    rightImg: "/assets/images/resources/Transcription/mp4Transcription/howToGet.svg"
  };
};
unLockNewIdeasParams.value = genUnLockNewIdeasParams();

// 链接框文案
provide("linkV1Text", {
  placeholder: t("Resources.Upload.linkV1Placeholder"),
  btn: t("Resources.Upload.linkV1Btn")
});
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
.youtube-transcription-wrap {
  --box-shadow: 0 2px 18px 0 rgba(0, 92, 255, 0.14);
}
.upload-link-box {
  background: unset !important;
  :deep(.upload-common.data-empty) {
    background: unset !important;
    box-shadow: unset !important;
  }
}
:deep(.trans-detail-box) {
  #transDetail_lgCdiwM {
    background: unset !important;
    .transcript-box {
      box-shadow: var(--box-shadow);
      @apply rounded-2xl;
    }
  }
}
</style>
