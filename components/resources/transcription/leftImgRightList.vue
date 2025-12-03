<template>
  <!--  左边图片 右边列表-->
  <div class="w-full py-[4.375rem]">
    <div class="container">
      <section class="px-4">
        <!-- 标题 -->
        <h2 class="mb-[2.625rem] text-center text-[2.5rem] font-bold leading-snug">
          {{ params.title }}
          <p class="gradient-text">{{ params.titleHighlight }}</p>
        </h2>
        <!-- 内容区 -->
        <div class="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16">
          <!-- 左侧图片 -->
          <div class="flex flex-shrink-0 justify-center md:flex-[0_0_38%] md:basis-[38%]">
            <NuxtImg
              :src="params.leftImg"
              class="h-60 w-60 object-contain md:h-80 md:w-80"
              fit="contain"
              alt="nevercap image"
              loading="lazy"
            ></NuxtImg>
          </div>
          <!-- 右侧优势列表 -->
          <ol
            class="max-w-[38.75rem] text-start text-[1.375rem] leading-[1.875rem] md:flex-[0_0_62%] md:basis-[62%] md:text-lg"
          >
            <li v-for="(item, index) of params.list" :key="index + 1" class="mb-[1rem]">
              <p class="font-semibold">
                {{ item.title }}
              </p>
              <span class="mb-[1.25rem] text-[1.125rem] leading-[1.5rem]" style="color: var(--gray)">
                {{ item.des }}
              </span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  params: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped></style>
