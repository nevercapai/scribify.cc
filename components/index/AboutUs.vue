<template>
  <section
    class="mx-auto flex flex-col items-center text-[1.125rem] text-white"
  >
    <!-- About Scribify Section -->
    <div
      class="about-section flex w-full max-w-[80rem] flex-col items-center pb-14 pt-[3.75rem]"
    >
      <h2
        class="section-title mb-[1.875rem] h-[3.5rem] w-full px-[2.5rem] text-[2.5rem] font-medium leading-[3.5rem]"
      >
        About Scribify
      </h2>
      <div class="content-wrapper flex w-full flex-col px-[2.5rem] md:flex-row">
        <div class="text-content font-normal leading-6">
          <p class="description-text mb-4">
            Our mission is to provide the most accurate audio and video
            transcription services.
          </p>

          <p class="description-text mb-4">
            Leveraging industry-leading AI technology, we achieve transcription
            accuracy rates of over 95%. For some major languages, through
            technical optimization, we can even reach 99% accuracy.
          </p>

          <p class="description-text mb-4">
            We support over 100 languages for spoken word recognition, and can
            translate transcribed text into more than 249 languages.
          </p>

          <p class="description-text">
            Features such as automatic speaker identification, subtitle
            generation, large file transcription, extensive file format support,
            batch file transcription, and batch transcription export
            significantly enhance the efficiency of audio and video
            transcription, saving users a considerable amount of time.
          </p>
        </div>

        <div
          class="image-content mt-3 flex flex-col items-center md:ms-[6.875rem] md:mt-0 md:flex-row md:items-start"
        >
          <el-image
            :src="`/assets/images/index/company.png`"
            class="mt-4 h-full w-[21rem] object-contain md:mt-0 md:h-[15.625rem] md:w-[25.625rem]"
            fit="contain"
          ></el-image>
        </div>
      </div>
    </div>

    <!-- Company Information Section -->
    <div
      class="mx-[2.5rem] mb-[7rem] mt-14 flex max-w-[60rem] flex-col items-center rounded-2xl bg-[#131538] px-12 py-14 sm:px-16 md:px-24 lg:px-[13rem]"
    >
      <h2
        class="section-title m-h-[3.5rem] mb-[1.875rem] text-[2.5rem] font-medium leading-[3.5rem]"
      >
        Company Information
      </h2>

      <div class="company-details">
        <div class="detail-item mb-5">
          <span class="detail-label me-2 font-medium">Company name:</span>
          <span>SCRIBIFY AI INC</span>
        </div>

        <div class="detail-item mb-5">
          <span class="detail-label me-2 font-medium">Address:</span>
          <span>30 N Gould St Ste R Sheridan, WY 82801 USA</span>
        </div>

        <div class="detail-item">
          <span class="detail-label me-2 font-medium">Email:</span>
          <span>support@scribify.ai</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* 关于我们 */
</script>

<style scoped lang="scss">
.about-section {
  p {
    line-height: 1.5625rem;
  }
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: " ";
    width: 100%;
    height: 1px;
    background: linear-gradient(
      315deg,
      rgba(0, 0, 0, 1),
      rgba(105, 32, 122, 1),
      rgba(0, 0, 0, 1)
    );
  }
}
</style>
