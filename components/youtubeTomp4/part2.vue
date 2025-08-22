<template>
  <section class="px-4">
    <!-- 标题 -->
    <h1
      class="m-auto mb-[2.125rem] w-full max-w-[62rem] text-center text-[2.5rem] font-bold"
    >
      {{ $i("title") }}
    </h1>
    <!--2、 三步操作流程 -->
    <section
      class="m-auto grid max-w-[75rem] grid-cols-1 justify-center gap-6 px-4 md:grid-cols-3"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex flex-col items-center rounded-xl transition"
      >
        <el-image
          :src="`/assets/images/downloadMp4/black_step_${item.img}.png`"
          class="mb-[1.875rem] w-full rounded-[1rem]"
          style="aspect-ratio: 100/57.4"
          fit="cover"
        ></el-image>
        <div
          class="mb-[0.625rem] flex items-center self-start text-[1.375rem] font-semibold leading-[1.875rem]"
        >
          <div class="index-circle">{{ item.icon }}</div>
          {{ $i(`steps[${index}].title`) }}
        </div>
        <div class="text-start text-lg leading-[1.75rem]">
          {{ $i(`steps[${index}].content`) }}
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.YouTubeToMP4.part2");
const list = ref([
  {
    img: "1",
    icon: "1",
    title: "Copy the URL",
    content:
      "Open your target YouTube video, then copy the link from your browser’s address bar."
  },
  {
    img: "2",
    icon: "2",
    title: "Paste the link",
    content:
      "Head to your video downloader tool and paste the URL into its input field."
  },
  {
    img: "3",
    icon: "3",
    title: "Download the MP4",
    content: "Once processed, hit the download button to save your MP4 file."
  }
]);
</script>

<style scoped>
.index-circle {
  width: 1.75rem;
  height: 1.75rem;
  background: linear-gradient(90deg, #9332ea 0%, #be26d4 100%);
  box-shadow: 0 2px 20px 0 rgba(52, 112, 255, 0.16);
  @apply me-3 flex items-center justify-center rounded-full text-[1.125rem] font-medium leading-6;
}
</style>
