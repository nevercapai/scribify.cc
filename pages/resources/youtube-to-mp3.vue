<template>
  <div class="min-h-screen bg-black text-white">
    <top></top>
    <!-- 主体内容 -->
    <main class="part-bg">
      <div class="mx-auto max-w-[88.75rem] pt-[5rem]">
        <!--1、 标题和输入框 px-[8.75rem] -->
        <part1
          @download-click-pre="downloadClickPre()"
          @download-click="downloadClick"
          @howDownload="howDownload()"
        >
        </part1>

        <transition name="slide-fade">
          <howToDownload v-if="showHowToDownload"></howToDownload>
        </transition>
        <transition name="slide-fade">
          <videoDown :file="myFile" v-if="showVideoDown"></videoDown>
        </transition>
        <!--2、 三步操作流程 -->
        <div class="divide-line"></div>
        <YoutubeTomp3FreeResources></YoutubeTomp3FreeResources>
        <div class="divide-line"></div>
        <part2></part2>
      </div>
    </main>
    <main class="mx-auto max-w-[88.75rem] overflow-auto">
      <div class="divide-line"></div>
      <!--3、 介绍说明  px-[5.5rem]-->
      <part3></part3>
    </main>
    <main class="part-bg">
      <div class="mx-auto max-w-[88.75rem]">
        <div class="divide-line"></div>
        <!--4、 五大优势 -->
        <part4></part4>
        <div class="divide-line"></div>
        <!--5、 下载器特色 -->
        <part5></part5>
        <div class="divide-line"></div>
        <!--6、 进一步说明 -->
        <part6></part6>
      </div>
    </main>
    <main class="mx-auto max-w-[88.75rem] pb-[0.5rem]">
      <div class="divide-line"></div>
      <!--7、 FAQ -->
      <part7></part7>
    </main>
    <main class="mx-auto max-w-[88.75rem] pb-[1.5rem]">
      <div class="divide-line"></div>
      <!--8、 MoreFreeTools -->
      <MoreFreeTools></MoreFreeTools>
    </main>
    <div
      class="divide-line"
      style="margin-bottom: 0; background: rgba(105, 32, 122, 1)"
    ></div>
    <!-- Footer -->
    <Footer
      style="background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1))"
    ></Footer>
  </div>
</template>

<script setup lang="ts">
import top from "~/components/youtubeTomp3/top.vue";
import part1 from "~/components/youtubeTomp3/part1.vue";
import howToDownload from "~/components/youtubeTomp3/howToDownload.vue";
import videoDown from "~/components/youtubeTomp3/videoDown.vue";
import part2 from "~/components/youtubeTomp3/part2.vue";
import part3 from "~/components/youtubeTomp3/part3.vue";
import part4 from "~/components/youtubeTomp3/part4.vue";
import part5 from "~/components/youtubeTomp3/part5.vue";
import part6 from "~/components/youtubeTomp3/part6.vue";
import part7 from "~/components/youtubeTomp3/part7.vue";
import { useScrollTitle } from "~/utils/useScrollTitle";
import MoreFreeTools from "~/components/youtubeTomp3/MoreFreeTools.vue";

const title =
  "YouTube to MP3 Converter | Fast, High-Quality, Ad-Free Downloads";
useHead({
  title: title,
  meta: [
    {
      name: "description",
      content:
        "Convert YouTube videos to MP3 audio files instantly. Free, fast, and easy to use. Extract audio from any YouTube video in high quality."
    },
    {
      name: "keywords",
      content:
        "youtube to mp3, youtube to mp3 converter, youtube to mp3 converter free, youtube to in mp3, convert youtube to mp3, youtube convert to mp3 converter, youtube to mp3 converter free, youtube to mp3 download, youtube mp3, mp3 converter, youtube audio download, youtube music converter"
    }
  ]
});

useScrollTitle(title);

const showVideoDown = ref(false);
const showHowToDownload = ref(false);
const myFile = ref({});

const downloadClick = (val: any) => {
  showHowToDownload.value = false;
  myFile.value = val;
  setTimeout(() => {
    showVideoDown.value = true;
  }, 100);
};
const howDownload = () => {
  showHowToDownload.value = !showHowToDownload.value;
};
const downloadClickPre = () => {
  showVideoDown.value = false;
  showHowToDownload.value = false;
};
</script>

<style scoped lang="scss">
/* 可补充自定义样式 */
.part-bg {
  background-color: #000;
}

/* 动画样式 */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(-2rem);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-1rem);
  opacity: 0;
}
.divide-line {
  width: 100%;
  height: 1px;
  overflow: hidden;
  margin: 3.5rem 0;
  background: linear-gradient(
    315deg,
    rgba(0, 0, 0, 1),
    rgba(105, 32, 122, 1),
    rgba(0, 0, 0, 1)
  );
}
</style>
