<template>
  <!--5、 下载器特色 -->
  <section class="m-auto max-w-[75rem] px-4">
    <h2 class="mb-10 text-center text-[2.5rem] font-bold">
      {{ $i("title") }}
    </h2>
    <div class="grid grid-cols-1 gap-[1.25rem] sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="card-warp flex flex-col items-start rounded-2xl bg-white p-[2.25rem] transition"
      >
        <div
          class="card-item-icon mb-[1.25rem] flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full"
        >
          <el-image
            :src="`/assets/images/downloadMp4/black_advantage_${item.icon}.png`"
            class="h-[1.875rem] w-[1.875rem]"
          ></el-image>
        </div>
        <div class="mb-[0.875rem] text-[1.25rem] font-semibold">
          {{ $i(`cards[${index}].title`) }}
        </div>
        <div class="text-lg text-[rgba(255,255,255,0.7)]">
          {{ $i(`cards[${index}].content`) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.YouTubeToMP4.part5");
const list = ref([
  {
    icon: "1",
    color: "#EDEBFE",
    title: "One–click simplicity",
    content: "Effortless setup and intuitive operation."
  },
  {
    icon: "2",
    color: "#E7F9FD",
    title: "Blazing–fast, unlimited",
    content: "Convert and download at top speed — no caps, no limits."
  },
  {
    icon: "3",
    color: "#FFEFF4",
    title: "Convert on the fly",
    content: "Process your files instantly, no waiting required."
  },
  {
    icon: "4",
    color: "#FFF5E7",
    title: "Zero Ads, Zero Distractions",
    content:
      "Enjoy a clean interface with no pop-ups, banners, or interruptions – just seamless video conversion."
  },
  {
    icon: "5",
    color: "#DEE5FF",
    title: "Original Quality Guaranteed",
    content:
      "Your downloads retain the source video's full resolution for pixel-perfect playback every time."
  },
  {
    icon: "6",
    color: "#DEF6EE",
    title: "Works anywhere",
    content: "Fully compatible with any browser, on any device."
  }
]);
</script>

<style scoped lang="scss">
.card-warp {
  background: #0e172b;
  box-shadow: 0 0.125rem 1.125rem 0 rgba(60, 115, 240, 0.1);
  border-radius: 1rem;
  border: 1px solid #35205a;
}
.card-item-icon {
  background: linear-gradient(90deg, #9332ea 0%, #be26d4 100%);
  box-shadow: 0 0.125rem 1.25rem 0 rgba(52, 112, 255, 0.16);
}
</style>
