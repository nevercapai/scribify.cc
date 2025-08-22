<template>
  <section
    class="try-now-section relative mx-auto mt-[0.875rem] flex w-full flex-col items-center justify-center px-[2.5rem] pb-[7.5rem] text-center"
  >
    <!-- 内容层 -->
    <div
      class="try-now-section-content relative z-10 flex h-full w-full max-w-[60rem] flex-col items-center justify-center rounded-lg bg-[#131538] px-[1.5rem] py-16"
    >
      <h1 class="mb-[0.5rem] text-[3rem] font-medium leading-[4.125rem]">
        Try Scribify now!
      </h1>
      <p class="mx-auto mb-2 text-[2.25rem] font-semibold leading-[3.125rem]">
        Sign up today to witness its magic - for free.
      </p>
      <index-try-for-free
        class="box-try mt-[2.5rem] bg-mainColor-900 px-10 text-white"
        text="Start for Free"
      ></index-try-for-free>
      <div class="divide-bottom"></div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.box-try {
  background: linear-gradient(90deg, #7c3aed 0%, #bf26d3 100%);
}
.try-now-section-content {
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    width: 12.25rem;
    height: 0.25rem;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
      315deg,
      rgba(19, 21, 56, 1),
      rgba(105, 32, 122, 1),
      rgba(19, 21, 56, 1)
    );
  }
}
</style>
