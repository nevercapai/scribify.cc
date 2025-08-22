<template>
  <!--3、 介绍说明 -->
  <section
    class="mx-4 flex flex-col items-center justify-center gap-8 rounded-lg border border-[#512680] bg-[#1B0B30] p-[2rem] md:flex-row md:gap-16 md:p-[3.5rem]"
  >
    <!-- 左侧文字 -->
    <div
      class="max-w-[38.75rem] text-start text-[1.375rem] leading-[1.875rem] md:flex-[0_0_62%] md:basis-[62%] md:text-lg"
    >
      <p>
        {{ $i("content[0]") }}<br />
        {{ $i("content[1]") }}<br />
        {{ $i("content[2]") }}<br />
        {{ $i("content[3]") }}
      </p>
    </div>
    <!-- 右侧图片 -->
    <div
      class="flex flex-shrink-0 justify-center md:flex-[0_0_38%] md:basis-[38%]"
    >
      <el-image
        :src="`/assets/images/downloadMp4/black_Youtube.png`"
        class="h-[6rem] w-[12rem] object-contain md:h-[8rem] md:w-[16rem]"
        fit="contain"
      ></el-image>
    </div>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.YouTubeToMP4.part3");
</script>

<style scoped></style>
