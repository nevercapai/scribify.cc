<template>
  <el-popover
    ref="popoverRef"
    placement="bottom"
    width="16.125rem"
    popper-style="min-height-[21rem];padding: 1.25rem !important"
    trigger="click"
    @show="showPopover"
  >
    <template #reference>
      <div
        class="flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full bg-mainColor-900 text-white hover:bg-mainColor-990"
      >
        <span class="text-base font-semibold" v-if="userNameEmail">{{
            firstLetter
          }}</span>
        <span class="iconfont icon-jiangyanzhe text-xl" v-else></span>
      </div>
    </template>
    <template #default>
      <div class="w-full">
        <div class="mb-[0.625rem] flex items-center" v-if="userNameEmail">
          <div
            class="me-[0.75rem] flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-mainColor-900 text-[1.25rem] font-bold text-white"
          >
            {{ t(`${firstLetter}`) }}
          </div>
          <span class="font-bold" v-if="userNameEmail?.length < 15">{{
              userNameEmail
            }}</span>
          <el-popover
            placement="top-start"
            trigger="hover"
            width="16rem"
            v-else
          >
            <template #reference>
              <span class="font-bold">{{
                  userNameEmailFiter(userNameEmail)
                }}</span>
            </template>
            <template #default>
              <div class="whitespace-nowrap font-medium">
                {{ userNameEmail }}
              </div>
            </template>
          </el-popover>
        </div>
        <loginInfoCard @change="upgrade" ref="loginInfoCardRef" />
        <button
          class="mt-[0.5rem] flex w-full items-center py-[0.5rem] hover:text-mainColor-900"
          @click="backHome"
        >
          <i class="iconfont icon-icon_quanbuwenjian ng-shezhi iconfont-common-class"></i>
          {{ t("HomePage.home") }}
        </button>
        <hr class="my-[0.5rem]" />
        <button
          class="mt-[0.5rem] flex w-full items-center py-[0.5rem] hover:text-mainColor-900"
          @click="settingAccount"
        >
          <i class="iconfont icon-shezhi ng-shezhi iconfont-common-class"></i>
          {{ $i("accountSetting") }}
        </button>
        <hr class="my-[0.5rem]" />
        <!-- 退出登录 -->
        <button
          class="flex w-full items-center py-[0.5rem] hover:text-mainColor-900"
          @click="loginOut"
        >
          <i class="iconfont icon-tuichu ng-tuichu iconfont-common-class"></i>
          {{ $i("logOut") }}
        </button>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
/* userInfo 组件 */
import { ref } from "vue";
import type { Ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useI18nModule } from "~/utils/i18n";
import { useUserStore } from "~/stores/useUserStore";
import loginInfoCard from "./loginInfoCard.vue";
import useJumpPage from "~/hooks/useJumpPage";
const userStore = useUserStore();
const { t } = useI18n();
const localePath = useLocalePath();
const $i = useI18nModule("AccountSettingsPage");
const router = useRouter();
const { $mitt } = useNuxtApp();
const userName = computed(() => {
  try {
    return userStore.userInfo &&
      typeof userStore.userInfo === "object" &&
      "userInfoVO" in userStore.userInfo
      ? (userStore.userInfo as any).userInfoVO?.name || ""
      : "";
  } catch (e) {
    return "";
  }
});
const userNameEmail = computed(() => {
  try {
    return userStore.userInfo &&
      typeof userStore.userInfo === "object" &&
      "userInfoVO" in userStore.userInfo
      ? (userStore.userInfo as any).userInfoVO?.email || ""
      : "";
  } catch (e) {
    return "";
  }
});
const firstLetter = computed(() => {
  try {
    if (userName.value) {
      return userName.value.split("")[0];
    }
    return "";
  } catch (e) {
    return "";
  }
});
const popoverRef = ref();
const loginInfoCardRef = ref();
const isIndexPage = inject("isIndexPage");
//退出登录
const loginOut = () => {
  unref(popoverRef).hide();
  userStore.setUserInfo("");
  setTimeout(() => {
    router.push({
      path: localePath("/")
    });
  }, 10);
};

const settingAccount = () => {
  unref(popoverRef).hide();
  $mitt.emit("goToEvent", { path: "/accountSettings?type=1" });
};
const upgrade = () => {
  unref(popoverRef).hide();
  $mitt.emit("goToEvent", { path: "/accountSettings?type=2" });
};
const showPopover = async () => {
  loginInfoCardRef.value?.getDailyCount &&
    loginInfoCardRef.value.getDailyCount();
  const subscriptionStore = useSubscriptionStore();
  await subscriptionStore.getStatusUserIdFetch();
  console.log("🚀===");
};
const userNameEmailFiter = (val: string) => {
  if (val?.length > 15) {
    return val.slice(0, 15) + "...";
  } else {
  }
  return val;
};
const backHome = () => {
  unref(popoverRef).hide();
  $mitt.emit("goToEvent", { path: "/" });
};
</script>

<style scoped>
.iconfont-common-class {
  @apply me-[0.625rem];
}

.ng-tuichu {
}

.ng-shezhi {
}
</style>
