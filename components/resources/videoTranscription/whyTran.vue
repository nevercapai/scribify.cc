<template>
  <!--4、 五大优势 -->
  <section class="px-4" style="background: var(--light-gray)">
    <!-- 标题 -->
    <h2 class="text-center text-[2.5rem] font-bold leading-snug">
      {{ $i("title") }}
      <span class="gradient-text"> {{ $i("titleHighlight") }}</span>
    </h2>
    <p class="section-subtitle">
      {{ $i("des") }}
    </p>
    <!-- 内容区 -->
    <div class="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16">
      <!-- 左侧图片 -->
      <div class="flex flex-shrink-0 justify-center md:flex-[0_0_38%] md:basis-[38%]">
        <el-image
          src="/assets/images/resources/Transcription/videoTranscription/whyTran.svg"
          class="h-60 w-60 object-contain md:h-80 md:w-80"
          fit="contain"
          alt="NeverCap"
        ></el-image>
      </div>
      <!-- 右侧优势列表 -->
      <ol
        class="max-w-[38.75rem] text-start text-[1.375rem] leading-[1.875rem] md:flex-[0_0_62%] md:basis-[62%] md:text-lg"
      >
        <li v-for="(item, index) of 6" :key="index + 1" class="mb-[1rem]">
          <p class="mb-[0.75rem] font-semibold">
            {{ $i(`reason_${index + 1}_title`) }}
          </p>
          <span class="mb-[1.25rem] text-[1.125rem] leading-[1.5rem]" style="color: var(--gray)">
            {{ $i(`reason_${index + 1}_des`) }}
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.videoTranscription.whyTran");
</script>

<style scoped>
.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-top: 0.75rem;
  margin-bottom: 2.265rem;
}
</style>
