<template>
  <!-- 顶部导航栏 -->
  <header
    class="m-auto flex h-[4.375rem] max-w-[75rem] items-center justify-between bg-black px-[1rem]"
  >
    <div class="flex cursor-pointer items-center space-x-2" @click="goToHome()">
      <NuxtImg
        src="/assets/logo3.png"
        alt="Nevercap Logo"
        class="h-6 w-auto sm:h-[1.875rem]"
        fit="contain"
        loading="eager"
      />
    </div>
    <div>
      <!-- <lazy-layout-header-language></lazy-layout-header-language> -->
      <!-- <el-button class="custom-btn me-2 no-border" round>Log In</el-button>
      <el-button class="custom-btn" type="primary" color="#3470FF" round>Sign Up</el-button> -->
    </div>
  </header>
</template>

<script setup lang="ts">
/* header 组件 */
const router = useRouter();
const localePath = useLocalePath();
const goToHome = () => {
  router.push({
    path: localePath("/")
  });
};
</script>

<style scoped>
.custom-btn {
  width: 6.8125rem;
  height: 2.375rem;
}

.no-border {
  border: none;
  box-shadow: none;
}
</style>
