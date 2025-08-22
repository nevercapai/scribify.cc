<template>
  <div class="language-switcher-box w-full items-center justify-between">
    <div class="flex items-center" v-if="isLogin">
      <!-- 语言切换 -->
      <language></language>
      <!-- 当前登录用户 -->
      <loginUserInfo></loginUserInfo>
    </div>
    <notLogin v-if="!isLogin"></notLogin>
  </div>
</template>

<script setup lang="ts">
import language from "./language.vue";
import loginUserInfo from "./userInfo.vue";
import notLogin from "./notLogin.vue";
import { useUserStore } from "~/stores/useUserStore";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const isLogin = computed(() => !!(userInfo.value as any)?.userInfoVO?.userid);
</script>
<style scoped lang="scss">
.pointer {
  cursor: pointer;
}
:deep(.not-login-box) {
  .i18n-btn {
    @apply me-3 text-fontColor;
    background-color: #fff !important;
  }
  .signup-btn {
    padding: 0 22px !important;
    background: var(--primary);
    color: white !important;
    border-radius: 22px !important;
    font-weight: 600;
    transition: all 0.3s;
    &:hover {
      background: var(--primary-dark);
      color: white !important;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    }
  }
}
</style>
