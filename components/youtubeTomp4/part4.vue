<template>
  <!--4、 五大优势 -->
  <section class="px-4">
    <!-- 标题 -->
    <h2 class="mb-8 text-center text-[2.5rem] font-bold leading-snug">
      {{ $i("content[0]") }}<br />
      {{ $i("content[1]") }}
    </h2>
    <!-- 内容区 -->
    <div
      class="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16"
    >
      <!-- 左侧图片 -->
      <div
        class="flex flex-shrink-0 justify-center md:flex-[0_0_38%] md:basis-[38%]"
      >
        <el-image
          src="/assets/images/downloadMp4/black_major.png"
          class="h-60 w-60 object-contain md:h-80 md:w-80"
          fit="contain"
        ></el-image>
      </div>
      <!-- 右侧优势列表 -->
      <ol
        class="max-w-[38.75rem] text-start text-[1.375rem] leading-[1.875rem] md:flex-[0_0_62%] md:basis-[62%] md:text-lg"
      >
        <li v-for="(item, index) of 5" :key="index + 1">
          <span>{{ index + 1 }}. </span>
          <span class="font-semibold">
            {{ $i(`list[${index}].title`) }}
          </span>
          {{ $i(`list[${index}].content`) }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.YouTubeToMP4.part4");
</script>

<style scoped></style>
