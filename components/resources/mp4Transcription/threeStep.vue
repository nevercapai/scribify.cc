<template>
  <section class="px-4 pb-[70px]">
    <!-- 标题 -->
    <h1 class="m-auto mb-[2.125rem] w-full max-w-[62rem] text-center text-[2.5rem] font-bold">
      {{ $i("title") }}
      <span class="gradient-text">{{ $i("titleHighlight") }}</span>
    </h1>
    <!--2、 三步操作流程 -->
    <section class="m-auto grid max-w-[75rem] grid-cols-1 justify-center gap-6 px-4 md:grid-cols-3">
      <div v-for="(item, index) in 3" :key="index" class="flex flex-col items-center rounded-xl transition">
        <div class="mb-[0.625rem] flex items-center self-start text-[1.375rem] font-semibold leading-[1.875rem]">
          <div class="index-circle">{{ index + 1 }}</div>
          {{ $i(`step_${index + 1}_title`) }}
        </div>
        <div class="px-[20px] text-start text-lg leading-[1.75rem]">
          {{ $i(`step_${index + 1}_des`) }}
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.mp4Transcription.threeStep");
</script>

<style scoped>
.index-circle {
  width: 1.75rem;
  height: 1.75rem;
  background: var(--mainColor-900);
  color: #fff;
  @apply me-3 flex items-center justify-center rounded-full text-[1.125rem] font-medium leading-6;
}
</style>
