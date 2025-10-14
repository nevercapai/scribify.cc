<template>
  <section class="px-4">
    <!-- 标题 -->
    <div
      class="m-auto mb-[2.5rem] w-full max-w-[62rem] text-center text-[1rem] font-semibold"
    >
      <NuxtLink :to="$localePath('/')" class="hover:underline">
        {{ $i("linkTitle") }} NeverCap
        <span class="font-light">
          {{ $i("linkTitle2") }}
        </span>
      </NuxtLink>
    </div>
    <div
      class="m-auto mb-[1.875rem] w-full max-w-[62rem] text-center text-[1rem] font-semibold"
    >
      {{ $i("title") }}
    </div>
    <!--2、 三步操作流程 -->
    <section
      class="m-auto grid max-w-[75rem] grid-cols-1 justify-center gap-6 px-4 md:grid-cols-3"
    >
      <NuxtLink :to="$localePath('/')">
        <div class="step-container">
          <div class="step-title">
            {{ $i(`steps[0].title`) }}
          </div>
          <div class="step-imgs">
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-mp3.svg`"
              class="me-[0.75rem] h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-mp4.svg`"
              class="h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-arrow.svg`"
              class="mx-[1.625rem] h-[0.75rem] w-[1.5rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-docx.svg`"
              class="me-[0.75rem] h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-txt.svg`"
              class="h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
          </div>
          <div class="step-content">
            {{ $i(`steps[0].content`) }}
          </div>
        </div>
      </NuxtLink>

      <NuxtLink :to="$localePath('/')">
        <div class="step-container">
          <div class="step-title">
            {{ $i(`steps[1].title`) }}
          </div>
          <div class="step-imgs">
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-mp3.svg`"
              class="me-[0.75rem] h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-wav.svg`"
              class="h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-arrow.svg`"
              class="mx-[1.625rem] h-[0.75rem] w-[1.5rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-docx.svg`"
              class="me-[0.75rem] h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-pdf.svg`"
              class="h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
          </div>
          <div class="step-content">
            {{ $i(`steps[1].content`) }}
            {{ $i(`steps[1].content2`) }}
          </div>
        </div>
      </NuxtLink>

      <NuxtLink :to="$localePath('/')">
        <div class="step-container">
          <div class="step-title text-linear">
            {{ $i(`steps[2].title`) }}
          </div>
          <div class="step-imgs">
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-yt.svg`"
              class="me-[0.75rem] h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-arrow.svg`"
              class="mx-[1.625rem] h-[0.75rem] w-[1.5rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-txt.svg`"
              class="me-[0.75rem] h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
            <el-image
              :src="`/assets/images/downloadMp4/freeResources-srt.svg`"
              class="h-[2.8125rem] w-[2.1875rem]"
            ></el-image>
          </div>
          <div class="step-content">
            {{ $i(`steps[2].content`) }}
          </div>
        </div>
      </NuxtLink>
    </section>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.YouTubeToMP4.freeResources");
const list = ref([
  {
    img: "1",
    icon: "1"
  },
  {
    img: "2",
    icon: "2"
  },
  {
    img: "3",
    icon: "3"
  }
]);
</script>

<style scoped>
.step-container {
  @apply flex flex-col rounded-[1rem] rounded-xl border border-[#512680] bg-[#1B0B30] px-[1.375rem] py-[1.75rem] transition;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.step-container:active {
  transform: scale(0.95);
}

.step-title {
  @apply flex items-center justify-center text-[1.25rem] font-semibold leading-[1.875rem] text-[#9334EB];
}
.step-imgs {
  display: flex;
  justify-content: center;
  align-items: center;
  @apply my-[1.125rem];
}
.step-content {
  @apply text-center text-[1rem] leading-[1.75rem];
}
.text-linear {
  background: linear-gradient(
    90deg,
    rgba(149, 52, 230, 1) 0%,
    rgba(220, 38, 40, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
