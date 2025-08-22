<template>
  <section
    class="relative flex w-full flex-col items-center justify-center pb-[4.375rem] pt-[7rem] text-center"
  >
    <!-- 内容层 -->
    <div
      class="relative z-10 flex h-full w-full flex-col items-center justify-center px-[1.5rem]"
    >
      <h1
        class="h-title mb-[1.5rem] text-[3.125rem] font-bold leading-[3.5rem]"
      >
        Accurate & Unlimited Transcription
      </h1>
      <div class="divide-bottom mb-[1.875rem]"></div>
      <p
        class="mx-auto mb-[3.75rem] max-w-[40rem] text-[1.375rem] font-normal leading-[1.875rem]"
      >
        The most accurate transcription, with speaker recognition, translation,
        subtitles and 100+ spoken languages
      </p>
      <index-try-for-free
        class="hero-try !h-[3.75rem] rounded-[1.875rem] bg-mainColor-900 px-[4.375rem] text-white"
      ></index-try-for-free>
    </div>
  </section>
</template>

<script setup lang="ts">
// 顶部横幅组件
</script>

<style scoped>
.h-title {
  background: linear-gradient(to right, #a88afa 0%, #9534e6 62%, #d847f0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.hero-try {
  background: linear-gradient(270deg, #9534e6 0%, #dc2628 100%);
}
.divide-bottom {
  width: 8.75rem;
  height: 0.3125rem;
  background: linear-gradient(90deg, #7e3bee 0%, #d847f0 100%);
  border-radius: 0.1875rem;
}
</style>
