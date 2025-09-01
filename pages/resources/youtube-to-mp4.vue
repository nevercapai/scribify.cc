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
    <main class="mx-auto max-w-[88.75rem] pb-[9.5rem]">
      <div class="divide-line"></div>
      <!--7、 FAQ -->
      <part7></part7>
    </main>
  </div>
</template>

<script setup lang="ts">
import top from "~/components/youtubeTomp4/top.vue";
import part1 from "~/components/youtubeTomp4/part1.vue";
import howToDownload from "~/components/youtubeTomp4/howToDownload.vue";
import videoDown from "~/components/youtubeTomp4/videoDown.vue";
import part2 from "~/components/youtubeTomp4/part2.vue";
import part3 from "~/components/youtubeTomp4/part3.vue";
import part4 from "~/components/youtubeTomp4/part4.vue";
import part5 from "~/components/youtubeTomp4/part5.vue";
import part6 from "~/components/youtubeTomp4/part6.vue";
import part7 from "~/components/youtubeTomp4/part7.vue";
import { useScrollTitle } from "~/utils/useScrollTitle";

const title = "YouTube to MP4 Converter | Fast, HD, Ad-Free Downloads";
useHead({
  title: title,
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-PR67RLEFJ3",
      async: true
    }
  ],
  meta: [
    {
      name: "description",
      content:
        "Convert YouTube to HD MP4s instantly. 100% secure, ad-free tool. Download videos for offline viewing on any device. Share anywhere, no signup!"
    },
    {
      name: "keywords",
      content:
        "youtube to mp4, download youtube videos, youtube video converter, offline youtube videos, HD P4 converter, ad-free youtube downloader, free video download tool"
    }
  ]
});

if (process.client) {
  const script = document.createElement("script");
  script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PR67RLEFJ3');
  `;
  document.head.appendChild(script);
}

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
