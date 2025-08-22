<template>
  <div
    class="flex flex-col ps-[1.5rem] md:flex-row"
    v-show="userInfo.userid && userNameEmail"
  >
    <!-- <span
      class="meadia-hidden text-[0.875rem] font-semibold opacity-0 md:inline-block"
      >{{ t("AccountSettingsPage.accountSetting") }}</span
    > -->
    <div class="flex flex-1 flex-col items-center">
      <div class="mt-[1.25rem] flex w-full justify-center">
        <div class="md:flex-0 flexControl flex md:justify-start">
          <div
            class="w-[11.25rem] pe-[1rem] text-start text-[1rem] text-fontColor"
          >
            {{ t("AccountSettingsPage.email") }}
          </div>
        </div>
        <div class="flex flex-1 flex-wrap break-all">
          <span>
            {{ userFrom.email }}
          </span>
        </div>
      </div>
      <div
        class="mt-[1.625rem] flex w-full justify-center"
        v-if="!userInfo.googleUser"
      >
        <div class="flexControl md:flex-0 flex md:justify-start">
          <div
            class="w-[11.25rem] pe-[1rem] text-start text-[1rem] text-fontColor"
          >
            {{ t("AccountSettingsPage.password") }}
          </div>
        </div>
        <div class="flex flex-1 flex-wrap">
          <span
            class="cursor-pointer text-mainColor-900"
            @click="reSetPassWord"
            >{{ t("AccountSettingsPage.resetPassword") }}</span
          >
        </div>
      </div>
    </div>
    <!-- <span
      class="meadia-hidden text-[0.875rem] font-semibold opacity-0 md:inline-block"
      >{{ t("AccountSettingsPage.accountSetting") }}</span
    > -->
  </div>
  <div
    v-if="userInfo.userid && !userNameEmail"
    class="mt-[3rem] flex flex-col justify-center bg-white"
  >
    <user-signup :isLogin="false" comTitle="SignupTitle"></user-signup>
  </div>
  <div
    v-show="!userInfo.userid"
    class="flex flex-1 flex-col items-center justify-center bg-white"
  >
    <div v-if="loading">
      <div
        class="mb-[1rem] text-center text-[1.5rem] font-semibold text-gray-900"
      >
        {{ t("AccountSettingsPage.notFund") }}
      </div>
      <div class="text-center text-[1rem] text-gray-500">
        {{ t("AccountSettingsPage.couldntFind") }}
      </div>
    </div>
    <i
      class="iconfont icon-loaderjiazai ng-quanqiu text-mainColor-900"
      v-else
    ></i>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from "~/stores/useUserStore";
const emit = defineEmits(["change"]);
const userStore = useUserStore();
const emailStore = useEmailStore();
const loading = ref(false);
const { t } = useI18n();
const userInfo: any = computed(() => {
  return typeof userStore.userInfo === "object" && userStore.userInfo !== null
    ? (userStore.userInfo as any).userInfoVO
    : {};
});
const userFrom = ref<{ email: string; id: string }>({
  email: userInfo.value.email,
  id: userInfo.value.userid
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

const reSetPassWord = () => {
  emit("change");
};
onMounted(() => {
  loading.value = true;
});
</script>
<style scoped lang="scss">
@media (max-width: 900px) {
  .meadia-hidden {
    display: none;
  }
}
@media (max-width: 768px) {
  .flexControl {
    // flex: 1;
    // justify-content: center;
  }
}
.ng-quanqiu {
  font-size: 2rem;
  animation: spin 1.4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
