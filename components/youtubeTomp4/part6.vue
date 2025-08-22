<template>
  <!--6、 进一步说明 -->
  <section class="px-4">
    <!-- 标题 -->
    <h2 class="mb-[1rem] text-center text-[2.5rem] font-bold leading-[3.5rem]">
      {{ $i("title[0]") }}<br />
      {{ $i("title[1]") }}
    </h2>
    <!-- 内容区 -->
    <div
      class="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16"
    >
      <!-- 左侧文字 -->
      <div
        class="max-w-[35.75rem] text-start text-[1.375rem] leading-[1.875rem] md:flex-[0_0_62%] md:basis-[62%] md:text-lg"
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
          src="/assets/images/downloadMp4/black_maximize.png"
          class="h-72 w-72 object-contain md:h-96 md:w-96"
          fit="contain"
        ></el-image>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.YouTubeToMP4.part6");
</script>

<style scoped></style>
