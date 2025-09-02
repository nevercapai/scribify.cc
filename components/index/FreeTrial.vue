<template>
  <section
    class="free-trial-wrap relative flex w-full flex-col items-center justify-center"
  >
    <!-- 内容层 -->
    <div
      class="relative z-10 flex h-full w-full flex-col items-center justify-center px-0 sm:px-[1.5rem]"
    >
      <guest-upload />
    </div>
  </section>
</template>

<script setup lang="ts">
// 顶部横幅组件
</script>

<style scoped>
.free-trial-wrap {
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: " ";
    width: 100%;
    height: 1px;
  }
}
</style>
