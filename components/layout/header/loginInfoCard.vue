<template>
  <div
    class="min-h-[9.25rem] w-[13.625rem] rounded bg-mainColor-300 px-[1.25rem] py-[1rem]"
    v-if="isDateAndFree"
  >
    <div class="mb-[0.875rem] flex items-center font-bold">
      <span>{{ t("AccountSettingsPage.freeversion2") }}</span>
    </div>
    <div
      class="mb-[0.625rem] h-[0.5rem] w-full rounded border bg-mainColor-600"
    >
      <div
        class="h-[0.5rem] rounded bg-mainColor-900"
        :style="{ width: progress }"
      ></div>
    </div>
    <div class="mb-[1.625rem]" v-loading="loading">
      {{
        t("AccountSettingsPage.daily", {
          start: dailyCount.todayCount || 0,
          end: dailyCount.limitCount || 0
        })
      }}
    </div>
    <div class="flex justify-center">
      <button
        class="min-h-[2rem] w-[11rem] rounded-full bg-mainColor-900 text-xs font-semibold text-white"
        @click="upgrade"
      >
        {{ t("AccountSettingsPage.upgradetoPro") }}
      </button>
    </div>
  </div>
  <div
    class="min-h-[9.25rem] w-[13.625rem] rounded bg-mainColor-300 px-[1.25rem] py-[1rem]"
    v-else
  >
    <div class="mb-[0.5rem] flex items-center font-bold text-black">
      <span>{{
        selectPlanCycle === 2
          ? t("AccountSettingsPage.proAnnual")
          : t("AccountSettingsPage.proMonthly")
      }}</span>
    </div>
    <div class="mb-[1.625rem]">
      {{
        [1, 3].includes(selectPlanStatus)
          ? selectPlanCycle === 1
            ? t("AccountSettingsPage.eachMonth", {
                time: getTime(endTime, true, false)
              })
            : t("AccountSettingsPage.eachYear", {
                time: getTime(endTime, false, true)
              })
          : t("AccountSettingsPage.yourSubscription", {
              time: getTime(endTime, false, false, true)
            })
      }}
      <p
        class="text-subColor-normal"
        v-if="
          (selectPlanStatus === 3 || selectPlanStatus === 2) &&
          !selectPlanStatusReal
        "
      >
        {{ t("AccountSettingsPage.automaticRenewal") }}
      </p>
      <!-- {{ getTime(endTime, false, true) }} -->
    </div>
    <div class="flex justify-center">
      <el-button
        class="min-h-[1.625rem] w-[11.25rem] !rounded-full !border-none !bg-mainColor-600 text-xs font-semibold"
        @click="manageSubscription"
        :loading="loadingManage"
      >
        <span class="text-mainColor-900">
          {{ t("AccountSettingsPage.manageSubscription") }}
        </span>
      </el-button>
    </div>
  </div>
  <subscription-modal v-model="showSubModal" />
</template>
<script setup lang="ts">
import { ref, defineEmits, defineExpose } from "vue";
import { useI18n } from "vue-i18n";
import { useSubscript } from "~/components/layout/header/useSubscript";
const emits = defineEmits(["change"]);
const { t } = useI18n();
import { useSubscriptionStore } from "~/stores/useSubscriptionStore";
const subscriptionStore = useSubscriptionStore();
import { useUserStore } from "~/stores/useUserStore";
import { useSubscribeVersion } from "~/components/subscriptionUpgrade/useSubscribeVersion";
import { useRecordStore } from "~/stores/useRecordStore";
import useJumpPage from "~/hooks/useJumpPage";
const userStore = useUserStore();
const { getTime } = useTime();
const { paymentManageUser } = useSubscribeVersion();
const dailyCount = ref<{ todayCount: number; limitCount: number }>({
  todayCount: 0,
  limitCount: 0
});
const { $mitt } = useNuxtApp();
const progress = ref<string>("0");
const { fetchSubscript } = useSubscript();
const loading = ref<boolean>(false);
const loadingManage = ref<boolean>(false);
const isItDue = computed(() => {
  return subscriptionStore.isItDue;
});
const endTime = computed(() => {
  return subscriptionStore.subscriptionDetail?.endTime;
});
const selectPlanCycle: any = computed(() => {
  return subscriptionStore.subscriptionDetail?.subscriptionCycle;
});
const selectPlanStatus: any = computed(() => {
  return subscriptionStore.subscriptionDetail?.status;
});
const selectPlanStatusReal: any = computed(() => {
  return subscriptionStore.subscriptionDetail?.statusReal;
});
const showSubModal = ref(false);

const userInfo: any = computed(() => {
  return typeof userStore.userInfo === "object" && userStore.userInfo !== null
    ? (userStore.userInfo as any).userInfoVO
    : {};
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
const isDateAndFree = computed(() => {
  if (!userNameEmail.value) {
    return true;
  }
  if (isItDue.value) {
    return true;
  }
});
onMounted(async () => {});
const getDailyCount = async () => {
  try {
    loading.value = true;
    const res = await fetchSubscript();
    if (res) {
      dailyCount.value = res as any;
      let percent =
        (
          (dailyCount.value.todayCount /
            (dailyCount.value.todayCount > dailyCount.value.limitCount
              ? dailyCount.value.todayCount
              : dailyCount.value.limitCount)) *
          100
        ).toFixed(2) + "%";
      progress.value = percent;
    }
  } finally {
    loading.value = false;
  }
};
const manageSubscription = async () => {
  emits("change");
  // showSubModal.value = true;
  // const res: any = await paymentManageUser();
  // if (res) {
  //   window.location.href = res;
  //   return;
  // }
  // loadingManage.value = false;
};
const upgrade = async () => {
  const { showPromatDialog } = useRecordStore();
  await showPromatDialog();

  if (!userNameEmail.value) {
    setTimeout(() => {
      $mitt.emit("goToEvent", { path: "/user/signup?type=noLogin" });
    }, 300);
    return;
  }
  emits("change");
};
defineExpose({
  getDailyCount
});
</script>
<style scoped></style>
