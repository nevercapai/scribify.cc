<template>
  <div class="min-h-screen">
    <!-- 导航栏组件 -->
    <IndexNavBar :showMenu="true" />
    <main class="bg-black text-white">
      <div class="mx-auto w-full">
        <IndexAboutUs></IndexAboutUs>
        <IndexContactUs class="overflow-hidden"></IndexContactUs>
      </div>
    </main>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script setup>
// 关于我们
</script>

<style scoped></style>
