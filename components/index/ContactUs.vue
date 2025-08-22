<template>
  <footer class="mx-auto max-w-[80rem] bg-black">
    <div
      class="mx-auto my-[1.125rem] flex max-w-[120rem] flex-col items-center justify-between px-[2.4rem] md:flex-row md:items-center md:justify-between"
    >
      <!-- 左侧菜单 -->
      <div
        class="mb-[1rem] flex items-center space-x-[0.625rem] text-[1rem] leading-[1.375rem] md:mb-0"
      >
        <router-link
          :to="localePath('/terms-of-use')"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-500"
        >
          Terms of Service
        </router-link>
        <span class="h-[0.875rem] w-[0.0625rem] bg-[#E2E2E2]"></span>
        <router-link
          :to="localePath('/privacy')"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-500"
        >
          Privacy Policy
        </router-link>
        <span class="h-[0.875rem] w-[0.0625rem] bg-[#E2E2E2]"></span>
        <router-link
          :to="localePath('/about')"
          rel="noopener noreferrer"
          class="hover:text-blue-500"
        >
          About Us
        </router-link>
      </div>
      <!-- 右侧社交图标 -->
      <div class="flex items-center space-x-[1rem] rtl:space-x-reverse">
        <a
          v-for="item in sociaIconList"
          :key="item.id"
          :href="item.url"
          target="_blank"
          class="inline-block"
        >
          <el-image
            :src="`/assets/images/index/sociaIcon/${item.img}.png`"
            class="h-[1.25rem] w-[1.25rem] rounded-md"
            fit="contain"
          ></el-image>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/* Footer 组件 */
const localePath = useLocalePath();
const sociaIconList = ref([
  { id: 1, img: "p", url: "https://www.producthunt.com/@scribify" },
  { id: 2, img: "x", url: "https://x.com/scribify_ai" },
  { id: 3, img: "o", url: "https://www.instagram.com/scribifyai/" },
  { id: 4, img: "y", url: "https://www.youtube.com/@aiscribify" }
  // { id: 5, img: "i", url: "https://www.linkedin.com/in/scribify-marcus" }
]);
</script>

<style scoped></style>
