<template>
  <div class="video-down-container mx-[1rem] overflow-auto">
    <div
      class="mx-auto mt-[1.375rem] flex max-w-[28rem] flex-col rounded-[1rem] bg-black shadow-md"
    >
      <video
        :src="videoSrc"
        controls
        autoplay
        preload="metadata"
        class="aspect-video w-full rounded-[1rem]"
      ></video>
    </div>
  </div>
</template>

<script setup lang="ts">
/* videoDown 组件 */
import { ref } from "vue";

// 使用响应式数据管理视频路径
const videoSrc = ref("/assets/images/downloadMp4/howToDownload.mp4");
</script>

<style scoped>
.video-down-container {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
