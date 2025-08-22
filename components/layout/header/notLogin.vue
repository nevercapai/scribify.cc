<template>
  <div class="not-login-box flex items-center">
    <language v-if="showI18n"></language>
    <div
      v-if="showLoginBtn"
      @click="login"
      class="login-btn min-login-width max-login-width me-[0.5rem] flex !h-[2.125rem] cursor-pointer items-center justify-center !rounded-[0.5rem] !border-boxBgColor bg-boxBgColor !px-[1.375rem] !py-[0.5rem] !text-[0.875rem] text-black hover:bg-[#F1F2F5]"
    >
      <span
        class="w-full truncate text-center md:overflow-visible md:text-clip md:whitespace-normal"
        >{{ t("AccountSettingsPage.logIn") }}</span
      >
    </div>
    <div
      @click="signup"
      class="signup-btn min-signup-width max-signup-width flex !h-[2.125rem] cursor-pointer items-center justify-center !rounded-[0.5rem] !border-0 bg-mainColor-900 !px-[1rem] !py-[0.5rem] !text-[0.875rem] text-white hover:bg-[#719BFF]"
    >
      <span
        class="w-full truncate text-center md:overflow-visible md:text-clip md:whitespace-normal"
        >{{ t("HeadNavbar.StartFreeTrial") }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import language from "./language.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import useJumpPage from "~/hooks/useJumpPage";
const { t } = useI18n();
const { $mitt } = useNuxtApp();
const props = defineProps({
  showI18n: {
    type: Boolean,
    default: true
  }
});
const showLoginBtn = inject("showLoginBtn") ?? true;
//登录
const login = () => {
  $mitt.emit("goToEvent", { path: "/user/login" });
};
const signup = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};
</script>
<style lang="scss">
@media (min-width: 768px) {
  .min-login-width {
    min-width: 5.375rem;
  }
  .min-signup-width {
    min-width: 6.875rem;
  }
}
@media (max-width: 768px) {
  .min-login-width {
    width: 5.375rem;
  }
  .max-signup-width {
    width: 6.875rem;
  }
}
</style>
