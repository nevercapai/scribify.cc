<template>
  <!--3、 介绍说明 -->
  <section
    class="mx-auto flex max-w-[80rem] flex-col items-center justify-center px-[2.5rem] py-[4.75rem] md:flex-row"
  >
    <!-- 左侧文字 -->
    <div class="text-start md:flex-[0_0_62%] md:basis-[62%]">
      <h1 class="mb-[1.875rem] text-[2.5rem] font-medium">
        {{ data.title }}
      </h1>
      <ul class="flex flex-col gap-[1.625rem] text-lg font-normal">
        <li
          v-for="item in data.list"
          :key="item.id"
          class="flex items-start gap-[0.625rem]"
        >
          <span class="mt-[-0.25rem] text-[1.6rem]">
            <el-image
              :src="`/assets/images/index_black/to-right.svg`"
              class="h-[0.75rem] w-[0.875rem] object-contain"
              fit="contain"
            ></el-image>
          </span>
          <span class="text-[rgba(255,255,255,0.7)]">
            {{ item.content }}
          </span>
        </li>
      </ul>
    </div>
    <!-- 右侧图片 -->
    <div
      class="flex flex-shrink-0 justify-end md:flex-[0_0_38%] md:basis-[38%]"
    >
      <el-image
        :src="`/assets/images/index_black/${data.img}.png`"
        class="relative top-[1.25rem] max-w-full object-contain md:left-[-7.125rem]"
        fit="contain"
      ></el-image>
    </div>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
const data = ref({
  title: "Effortless transcription",
  img: "Effortless",
  list: [
    {
      id: 1,
      content: "Perfect speaker recognition"
    },
    {
      id: 2,
      content: "Auto-generated subtitles in SRT or VTT"
    },
    {
      id: 3,
      content: "Rapid conversion benefited from GPU enabled engine"
    },
    {
      id: 4,
      content: "Batch files upload, up to 50 files at a time"
    }
  ]
});
</script>

<style scoped></style>
