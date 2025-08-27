<template>
  <nav
    class="sticky left-0 top-0 z-[999] flex w-full justify-center bg-black px-[1rem]"
  >
    <div
      class="flex h-[4.375rem] w-full max-w-[75rem] items-center justify-between bg-black"
    >
      <!-- Logo -->
      <div
        @click="goToHome()"
        class="flex items-center space-x-2"
        :class="{
          'cursor-pointer': isShowIconPointer
        }"
      >
        <NuxtImg
          src="/assets/images/index_black/logo.svg"
          alt="Nevercap Logo"
          class="h-6 w-auto sm:h-[1.875rem]"
          fit="contain"
          loading="eager"
        />
      </div>
      <template v-if="isLargeScreen">
        <!-- Menu -->
        <ul
          v-if="props.showMenu"
          class="flex text-[1rem] font-normal text-white"
          :class="isMounted ? 'space-x-[4.25rem]' : 'space-x-[2.25rem]'"
        >
          <li
            @click="scrollIntoView(item.name)"
            v-for="item in menuList"
            :key="item.id"
            class="cursor-pointer transition hover:text-mainColor-900"
          >
            {{ item.name }}
          </li>
        </ul>
        <!-- Right Icon -->
        <div class="index-right-wrap">
          <layout-header :show-home-icon="false" />
        </div>
      </template>
      <template v-else>
        <div class="index-right-wrap flex items-center">
          <layout-header :show-home-icon="false" />
          <div class="flex h-[1.5rem] w-[1.5rem] items-center justify-center">
            <img
              v-if="!showPopup"
              @click="showPopup = !showPopup"
              class="h-full w-[1.5rem]"
              src="/assets/images/index/more.svg"
              alt=""
            />
            <span
              v-else
              @click="showPopup = !showPopup"
              class="iconfont icon-shanchu text-[1.25rem] text-white"
            ></span>
          </div>
        </div>
      </template>
    </div>
    <el-drawer
      v-model="showPopup"
      :lock-scroll="false"
      size="auto"
      direction="ttb"
      :with-header="false"
      :show-close="false"
      class="rounded-[1.125rem] rounded-t-[0] !bg-[#1B0B30] !p-0"
      body-class="bg-[#1B0B30] rounded-[1.125rem] text-white !px-8 !pt-[0.875rem] !pb-[1.125rem]"
      modal-class="modal-class !top-[4.375rem]"
    >
      <ul
        v-if="props.showMenu"
        class="flex flex-col items-center text-sm font-normal text-white"
      >
        <li
          @click="scrollIntoView(item.name)"
          v-for="item in menuList"
          :key="item.id"
          class="flex h-[2.75rem] w-[7rem] cursor-pointer items-center justify-center text-sm transition hover:text-mainColor-900"
        >
          {{ item.name }}
        </li>
      </ul>
      <div
        v-if="!isLogin"
        class="mx-auto flex w-full items-center justify-center pt-[1.375rem]"
      >
        <div
          @click="login"
          class="login-btn flex h-[2.25rem] w-full flex-shrink-0 cursor-pointer items-center justify-center rounded-[1.125rem] bg-[#9334EB] text-sm font-normal"
        >
          <span>{{ t("AccountSettingsPage.logIn") }}</span>
        </div>
      </div>
    </el-drawer>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { useMediaQuery } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { useRouter } from "#vue-router";
import { useUserStore } from "~/stores/useUserStore";
import { storeToRefs } from "pinia";
import useJumpPage from "~/hooks/useJumpPage";
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const props = defineProps({
  showMenu: {
    type: Boolean,
    default: true
  }
});
const { $mitt } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const localePath = useLocalePath();
const showPopup = ref(false);
const isLargeScreen = useMediaQuery("(min-width: 768px)", { ssrWidth: 1280 });
const isLogin = computed(() => !!(userInfo.value as any)?.userInfoVO?.userid);
provide("showLoginBtn", isLargeScreen);
provide("isIndexPage", true);

const menuList = ref([
  { id: 1, name: "Product" },
  { id: 2, name: "Pricing" },
  { id: 3, name: "FAQ" }
]);
const emit = defineEmits(["scrollIntoView"]);
const scrollIntoView = (id: string) => {
  showPopup.value = false;
  const path = route.path;
  if (path.includes("about")) {
    if (process.client) {
      window.sessionStorage.setItem("anchorId", `ID_${id}`);
    }
    return router.replace({
      path: localePath("/")
    });
  }
  emit("scrollIntoView", `ID_${id}`);
};

const goToHome = () => {
  const path = route.path;
  const urls = ["terms-of-use", "privacy"];
  if (isLogin.value && urls.find((url) => path.includes(url))) {
    return $mitt.emit("goToEvent", { path: "/" });
  }
  router.push({
    path: localePath("/")
  });
};
//登录
const login = () => {
  $mitt.emit("goToEvent", { path: "/user/login" });
};
const isShowIconPointer = computed(() => {
  return route.name && !route.name?.startsWith("index");
});
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
  const anchorId = window.sessionStorage.getItem("anchorId");
  if (anchorId) {
    window.sessionStorage.removeItem("anchorId");
    const { pause } = useIntervalFn(() => {
      let isExistAnchorId = document.querySelector(`#${anchorId}`);
      if (isExistAnchorId) {
        emit("scrollIntoView", anchorId);
        // 清理定时器
        pause();
      }
    }, 50);
  }
});
</script>

<style scoped lang="scss">
.index-right-wrap {
  background-color: #000;
  :deep(.language-switcher-box) {
    @apply bg-black;
    .not-login-box {
      .login-btn {
        @apply bg-black text-white;
      }
      .signup-btn {
        background: linear-gradient(90deg, #3470ff 0%, #9534e6 100%);
        // prettier-ignore
        @apply text-white !rounded-[1.375rem] !px-6;
        @media (max-width: 768px) {
          width: 7.875rem !important;
        }
      }
    }
    .i18n-btn {
      color: #fff !important;
      background-color: #000;
    }
  }
}
</style>
