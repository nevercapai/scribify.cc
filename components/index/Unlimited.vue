<template>
  <!--3、 介绍说明 -->
  <section
    class="mx-auto flex max-w-[80rem] flex-col items-center justify-center px-[2.5rem] py-[4.75rem] md:flex-row"
  >
    <!-- 左侧文字 -->
    <div class="text-start md:flex-[0_0_48%] md:basis-[48%]">
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
      class="flex flex-shrink-0 justify-end md:flex-[0_0_52%] md:basis-[52%]"
    >
      <el-image
        :src="`/assets/images/index_black/${data.img}.png`"
        class="relative max-w-full object-contain md:left-[-2.75rem] xl:w-[75%]"
        fit="contain"
      ></el-image>
    </div>
  </section>
</template>

<script setup lang="ts">
const data = ref({
  title: "Unlimited transcription",
  img: "Unlimited",
  list: [
    {
      id: 1,
      content: "No limit of files to be transcribed"
    },
    {
      id: 2,
      content: "Up to 10 hours or 5GB per file"
    },
    {
      id: 3,
      content:
        "Files in MP4, M4A, MOV, MPEG, WMA, WMV, MP3, AAC, WAV, OGG, OPUS, youtube, facebook, x, tiktok, google drive, dropbox, etc"
    }
  ]
});
</script>

<style scoped></style>
