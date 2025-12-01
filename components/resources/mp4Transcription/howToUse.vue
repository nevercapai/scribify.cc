<template>
  <!--4、 五大优势 -->
  <div>
    <div class="mx-auto max-w-[88.75rem] pb-[80px] pt-[70px]">
      <section class="px-4">
        <!-- 标题 -->
        <h2 class="mb-[2.625rem] text-center text-[2.5rem] font-bold leading-snug">
          {{ $i("title") }}
          <p class="gradient-text">{{ $i("titleHighlight") }}</p>
        </h2>
        <!-- 内容区 -->
        <div class="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16">
          <!-- 左侧图片 -->
          <div class="flex flex-shrink-0 justify-center md:flex-[0_0_38%] md:basis-[38%]">
            <el-image
              src="/assets/images/resources/Transcription/mp4Transcription/howToUse.svg"
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
              <p class="font-semibold">
                {{ $i(`effect_${index + 1}`) }}
              </p>
              <span class="mb-[1.25rem] text-[1.125rem] leading-[1.5rem]" style="color: var(--gray)">
                {{ $i(`des_${index + 1}`) }}
              </span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.mp4Transcription.howToUse");
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
