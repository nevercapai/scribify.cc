<template>
  <div
    class="scrollbar-hide flex h-full w-full flex-col overflow-scroll bg-white px-[1.25rem] pt-[1.5rem]"
    v-loading="loading"
  >
    <!-- 面包屑 -->
    <div class="mb-[0.625rem] flex flex-col md:flex-row">
      <div class="flex items-baseline">
        <span class="text-fontColor">
          {{ t("AccountSettingsPage.subscription") }}
        </span>

        <div class="ms-[1.25rem]">
          <span class="text-[1.25rem] font-bold">
            {{ selectPlanDetail.title }}</span
          >
          <span
            class="ms-[0.5rem] font-bold"
            v-if="
              ['year'].includes(active) && !isItDue && selectPlanCycle === 2
            "
          >
            {{ selectPlanDetail.totalMoney }}</span
          >
          <span
            class="ms-[0.5rem] font-bold"
            v-if="
              ['month'].includes(active) &&
              !isItDue &&
              IsItTheFirstTime &&
              selectPlanCycle === 1
            "
          >
            {{ selectPlanDetail.price }}</span
          >
          <span
            class="ms-[0.5rem] font-bold"
            v-else-if="
              ['month'].includes(active) &&
              !isItDue &&
              !IsItTheFirstTime &&
              selectPlanCycle === 1
            "
          >
            {{ selectPlanDetail.actualPrice }}</span
          >
          <span
            class="ms-[0.5rem] font-bold"
            v-if="
              ['month'].includes(active) && !isItDue && selectPlanCycle === 1
            "
          >
            {{ selectPlanDetail.perMonth }}</span
          >
          <span
            class="ms-[0.5rem] font-bold"
            v-if="
              ['year'].includes(active) && !isItDue && selectPlanCycle === 2
            "
            >{{ selectPlanDetail.perYear }}</span
          >
          <div
            class="text-fontColor"
            v-if="
              !isItDue &&
              ['year', 'month'].includes(active) &&
              selectPlanCycle === selectPlanDetail.version
            "
          >
            {{
              [1, 3].includes(selectPlanNowStatus)
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
            <!-- {{ endTime }} -->
          </div>

          <div
            class="text-subColor-normal"
            v-if="
              (selectPlanNowStatus === 3 || selectPlanNowStatus === 2) &&
              !selectPlanNowStatusReal
            "
          >
            {{ t("AccountSettingsPage.automaticRenewal") }}
          </div>
        </div>
      </div>
      <div class="flex justify-center md:ms-[2.5rem]">
        <el-button
          type="default"
          class="mt-[2rem] h-[2rem] md:mt-0"
          @click="subscribeToChangeToAnnual(true)"
          v-if="!IsItTheFirstTime"
        >
          {{ t("AccountSettingsPage.manageSubscription") }}
        </el-button>
      </div>
    </div>
    <!-- 方案卡片 -->
    <!-- <div class="flex items-center justify-center"> -->
    <div class="flex">
      <span
        class="me-[1.25rem] hidden whitespace-nowrap text-fontColor opacity-0 md:inline-block"
      >
        {{ t("AccountSettingsPage.subscription") }}
      </span>
      <div
        class="grid-next-max grid-next-second grid-next-min max-me-auto grid gap-[1.25rem] md:!me-auto"
      >
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="flex min-h-[38.875rem] max-w-[20.25rem] flex-col items-center rounded-2xl border pe-[1.25rem] ps-[0.875rem] pt-[1rem]"
          :class="{
            'box-shadow-active':
              active === plan.type && ['year', 'month'].includes(active),
            'border-mainColor-900':
              active === plan.type && ['year', 'month'].includes(active),
            'justify-between': isItDue,
            'box-shadow-noactive':
              active === plan.type && ['free'].includes(active)
          }"
        >
          <!-- @click="selectPlan(plan)" -->
          <div class="w-full">
            <div class="mb-[0.625rem] text-center text-[1.5rem] font-bold">
              {{ plan.title }}
            </div>
            <div class="min-h-[6.25rem] border-b border-gray-300">
              <div
                class="flex flex-wrap items-center text-gray-900"
                v-if="['year', 'month'].includes(plan.type)"
              >
                <span
                  class="text-[1.875rem]"
                  v-if="['year'].includes(plan.type)"
                >
                  {{ plan.price }}</span
                >
                <span
                  class="text-[1.875rem]"
                  v-else-if="['month'].includes(plan.type)"
                >
                  {{ IsItTheFirstTime ? plan.price : plan.actualPrice }}</span
                >
                <span
                  class="ms-2 whitespace-nowrap font-normal text-fontColor"
                  v-if="['year'].includes(plan.type)"
                  >{{ plan.perMonth }}
                </span>
                <span
                  class="ms-2 whitespace-nowrap font-normal text-fontColor"
                  v-else-if="['month'].includes(plan.type) && !IsItTheFirstTime"
                  >{{ plan.perMonth }}
                </span>
                <span
                  class="ms-2 whitespace-nowrap font-normal text-fontColor"
                  v-if="['month'].includes(plan.type) && IsItTheFirstTime"
                  >{{ plan.firstMonth }}</span
                >
                <span
                  class="ms-2 font-normal text-fontColor"
                  v-if="['year'].includes(plan.type)"
                  :class="[['year'].includes(plan.type) ? 'line-through' : '']"
                  >{{ plan.actualPrice }}</span
                >
                <span
                  class="ms-2 font-normal text-fontColor"
                  v-else-if="['month'].includes(plan.type) && IsItTheFirstTime"
                  :class="[['year'].includes(plan.type) ? 'line-through' : '']"
                  >{{ plan.actualPrice }}</span
                >
                <span
                  class="ms-2 font-normal text-fontColor"
                  v-if="['month'].includes(plan.type) && IsItTheFirstTime"
                  >{{ plan.afterwards }}</span
                >
              </div>
              <div
                class="font-bold text-gray-900"
                v-if="['year', 'month'].includes(plan.type)"
              >
                {{ plan.totalMoney }}
                <span class="ms-2 font-normal text-fontColor">{{
                  plan.perYear
                }}</span>
                <span
                  v-if="['year'].includes(plan.type)"
                  class="relative ms-[0.5rem] inline-block px-2 py-0.5"
                  :class="plan.tagClass"
                >
                  <span
                    class="absolute left-0 top-0 inline-block h-full w-full -skew-x-12 transform rounded border border-[#5EB972]"
                  ></span>
                  <span>{{ plan.saved }}</span>
                  {{ plan.saveMoney }}
                </span>
              </div>
              <div
                class="flex items-center text-gray-900"
                v-if="!['year', 'month'].includes(plan.type)"
              >
                <span class="ms-2 text-[1.875rem]">$0</span>
              </div>
            </div>
          </div>
          <ul class="mb-[2rem] w-full list-none space-y-[1rem] pt-[1.5rem]">
            <li
              v-for="(f, i) in plan.features"
              :key="f.title"
              class="flex items-start"
            >
              <i class="iconfont icon-duihao me-[0.625rem] text-[0.875rem]"></i>
              <div>
                <div class="font-bold">{{ f.title }}</div>
                <div class="text-fontColor">
                  {{ f.desc }}
                </div>
              </div>
            </li>
          </ul>
          <el-button
            :type="planType(plan.type)"
            class="mb-[1.875rem] !h-[2.6rem] w-full !rounded-lg !border-none !text-[1rem]"
            :class="{
              'sys-btn': planType(plan.type) === 'primary',
              'bg-color-btn': planType(plan.type) !== 'primary'
            }"
            @click="subscribeTo(plan.type)"
            :disabled="['free'].includes(plan.type)"
            v-if="isItDue"
          >
            <span
              v-if="['free'].includes(plan.type)"
              class="common-btn text-fontColor"
              >{{ t("AccountSettingsPage.currentPlan") }}</span
            >
            <span
              v-if="['year', 'month'].includes(plan.type) && isItDue"
              class="common-btn"
              >{{ t("AccountSettingsPage.getProPlan") }}</span
            >
          </el-button>
          <el-button
            :type="planType(plan.type)"
            class="common-btn mb-[1.875rem] !h-[2.6rem] w-full !rounded-lg !border-none !text-[1rem]"
            @click="subscribeToChangeToAnnual(false)"
            :disabled="isDisabled(plan.type)"
            :class="{
              'sys-btn': planType(plan.type) === 'primary',
              'bg-color-btn': planType(plan.type) !== 'primary'
            }"
            v-else-if="isShowBtn(plan.type)"
          >
            <span
              v-if="['month'].includes(plan.type)"
              :class="{ 'text-fontColor': isDisabled(plan.type) }"
              class="common-btn"
              >{{ t("AccountSettingsPage.currentPlan") }}</span
            >
            <span
              v-if="['year'].includes(plan.type) && selectPlanCycle === 1"
              :class="{ 'text-fontColor': isDisabled(plan.type) }"
              class="common-btn"
              >{{ t("AccountSettingsPage.changeToAnnual") }}</span
            >
            <span
              v-if="['year'].includes(plan.type) && selectPlanCycle === 2"
              :class="{ 'text-fontColor': isDisabled(plan.type) }"
              class="common-btn"
              >{{ t("AccountSettingsPage.currentPlan") }}</span
            >
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { useUserStore } from "~/stores/useUserStore";
import { useSubscribeVersion } from "./useSubscribeVersion";
import useJumpPage from "~/hooks/useJumpPage";
const userStore = useUserStore();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const subscriptionStore = useSubscriptionStore();
const { getTime } = useTime();
const emit = defineEmits(["change"]);
const { $mitt } = useNuxtApp();
// 方案数据
type ButtonType =
  | ""
  | "text"
  | "default"
  | "success"
  | "primary"
  | "warning"
  | "info"
  | "danger";

interface Plan {
  id: number;
  title: string;
  features: { title: string; desc?: string }[];
  price: string;
  priceDesc: string;
  btnText: string;
  btnType: ButtonType;
  cardClass: string;
  btnClass: string;
  border: boolean;
  [propName: string]: any;
}
const active = ref<string>("month");
const plans = ref<Plan[]>([
  {
    id: 1,
    title: t("AccountSettingsPage.freeversion"),
    features: [
      {
        title: t("AccountSettingsPage.transcribeTimesDay"),
        desc: t("AccountSettingsPage.freeThreeTimesDay")
      },
      {
        title: t("AccountSettingsPage.uploadMinutes"),
        desc: t("AccountSettingsPage.oneFileUploaded")
      },
      {
        title: t("AccountSettingsPage.lowerPriority"),
        desc: t("AccountSettingsPage.needsToWaitLonger")
      },
      { title: `99% ${t("AccountSettingsPage.accuracy")}` },
      { title: `100+ ${t("AccountSettingsPage.supported")}` },
      { title: t("AccountSettingsPage.identification") },
      { title: t("AccountSettingsPage.transcriptSranslation") }
    ],
    price: "",
    priceDesc: "",
    btnText: t("AccountSettingsPage.currentPlan"),
    btnType: "default",
    cardClass: "bg-gray-100",
    btnClass: "!bg-gray-200 !text-gray-400 !border-0 !cursor-not-allowed",
    border: false,
    type: "free"
  },

  {
    id: 2,
    title: t("AccountSettingsPage.proMonthly"),
    features: [
      {
        title: t("HomePage.subscriptionModal.left.c1"),
        desc: t("AccountSettingsPage.unlimitedNumberOfTimes")
      },
      {
        title: t("AccountSettingsPage.uploadWithinHours"),
        desc: t("AccountSettingsPage.filesUploadedAtOnce")
      },
      {
        title: t("HomePage.subscriptionModal.left.c3"),
        desc: t("AccountSettingsPage.weWillGiveTheHighest")
      },
      { title: `99% ${t("AccountSettingsPage.accuracy")}` },
      { title: `100+ ${t("AccountSettingsPage.supported")}` },
      { title: t("AccountSettingsPage.identification") },
      { title: t("AccountSettingsPage.transcriptSranslation") }
    ],
    price: "$9.99",
    priceDesc: t("AccountSettingsPage.theFirstMonth"),
    btnText: t("AccountSettingsPage.subscribeTo"),
    btnType: "primary",
    cardClass: "bg-blue-50",
    btnClass: "!bg-blue-600 !border-blue-600 !text-white",
    border: true,
    type: "month",
    firstMonth: t("AccountSettingsPage.firstMonth"),
    actualPrice: "$17.99",
    afterwards: t("HomePage.subscriptionModal.right.afterwards"),
    perYear: t("AccountSettingsPage.perYear"),
    totalMoney: "$215.88",
    perMonth: t("AccountSettingsPage.perMonth"),
    version: 1
  },
  {
    id: 3,
    title: t("AccountSettingsPage.proAnnual"),
    features: [
      {
        title: t("HomePage.subscriptionModal.left.c1"),
        desc: t("AccountSettingsPage.unlimitedNumberOfTimes")
      },
      {
        title: t("AccountSettingsPage.uploadWithinHours"),
        desc: t("AccountSettingsPage.filesUploadedAtOnce")
      },
      {
        title: t("HomePage.subscriptionModal.left.c3"),
        desc: t("AccountSettingsPage.weWillGiveTheHighest")
      },
      { title: `99% ${t("AccountSettingsPage.accuracy")}` },
      { title: `100+ ${t("AccountSettingsPage.supported")}` },
      { title: t("AccountSettingsPage.identification") },
      { title: t("AccountSettingsPage.transcriptSranslation") }
    ],
    price: "$8.99",
    priceDesc: t("AccountSettingsPage.theFirstMonth"),
    btnText: t("AccountSettingsPage.subscribeTo"),
    btnType: "primary",
    cardClass: "bg-blue-50",
    btnClass: "!bg-blue-600 !border-blue-600 !text-white",
    border: true,
    type: "year",
    perMonth: t("AccountSettingsPage.perMonth"),
    actualPrice: "$17.99",
    afterwards: t("HomePage.subscriptionModal.right.afterwards"),
    tagClass: "text-[#5EB972]",
    saveMoney: "$108",
    saved: t("AccountSettingsPage.save"),
    perYear: t("AccountSettingsPage.perYear"),
    totalMoney: "$107.88",
    version: 2
  }
]);

const loading = ref<boolean>(false);
const IsItTheFirstTime = ref<boolean>(true);

const userInfo: any = computed(() => {
  return typeof userStore.userInfo === "object" && userStore.userInfo !== null
    ? (userStore.userInfo as any).userInfoVO
    : {};
});
const isItDue = computed(() => {
  return subscriptionStore.isItDue;
});
const selectPlanCycle: any = computed(() => {
  return subscriptionStore.subscriptionDetail?.subscriptionCycle;
});
const selectPlanNowStatus: any = computed(() => {
  return subscriptionStore.subscriptionDetail?.status;
});
const selectPlanNowStatusReal: any = computed(() => {
  return subscriptionStore.subscriptionDetail?.statusReal;
});

const endTime = computed(() => {
  return subscriptionStore.subscriptionDetail?.endTime;
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
const {
  createSession,
  paymentGetUser,
  paymentManageUser,
  upgradeSubscription
} = useSubscribeVersion();
const subscribeTo = async (type: string) => {
  const { showPromatDialog } = useRecordStore();
  await showPromatDialog();

  if (!userNameEmail.value) {
    setTimeout(() => {
      $mitt.emit("goToEvent", { path: "/user/signup?type=noLogin" });
    }, 300);
    return;
  }
  if (!userInfo.value.userid) {
    return;
  }
  try {
    loading.value = true;
    let res: any = "";
    if (
      selectPlanNowStatus.value === 1 ||
      (selectPlanNowStatus.value === 0 && !isItDue.value)
    ) {
      res = await upgradeSubscription();
    } else {
      res = await createSession(type);
    }
    if (res) {
      window.location.href = res;
      const subscriptionStore = useSubscriptionStore();
      await subscriptionStore.getStatusUserIdFetch();
    }
  } catch (error) {
    loading.value = false;
  }
};
const planType = (val: string) => {
  if (isItDue.value) {
    if (["year", "month"].includes(val)) {
      return "primary";
    } else {
      return "info";
    }
  } else {
    if (["month"].includes(val) && selectPlanCycle.value === 1) {
      return "info";
    } else if (["year"].includes(val) && selectPlanCycle.value === 2) {
      return "info";
    }
    return "primary";
  }
};
const isShowBtn = (val: string) => {
  if (selectPlanCycle.value === 1 && ["month", "year"].includes(val)) {
    return true;
  } else if (selectPlanCycle.value === 2 && ["year"].includes(val)) {
    return true;
  }
  return false;
};
const isDisabled = (val: string) => {
  if (["year"].includes(val) && selectPlanCycle.value === 2) {
    return true;
  } else if (["month"].includes(val) && selectPlanCycle.value === 1) {
    return true;
  } else {
    return false;
  }
};

const subscribeToChangeToAnnual = async (isnew?: any) => {
  const { showPromatDialog } = useRecordStore();
  await showPromatDialog();

  if (!userNameEmail.value) {
    setTimeout(() => {
      $mitt.emit("goToEvent", { path: "/user/signup?type=noLogin" });
    }, 300);
    return;
  }
  try {
    loading.value = true;
    let res: any = "";
    if (
      (selectPlanNowStatus.value === 1 ||
        (selectPlanNowStatus.value === 0 && !isItDue.value)) &&
      !isnew
    ) {
      res = await upgradeSubscription();
    } else {
      res = await paymentManageUser();
    }
    if (res) {
      window.location.href = res;
    }
  } catch (error) {
    console.log(error, "====");

    loading.value = false;
  }
};

const selectPlanDetail: any = computed(() => {
  return plans.value.find((item) => item.type === active.value);
});
watch(
  [isItDue],
  () => {
    if (selectPlanCycle.value && !isItDue.value) {
      selectPlanCycle.value === 1
        ? (active.value = "month")
        : (active.value = "year");
    } else {
      active.value = "free";
    }
  },
  { immediate: true }
);
onMounted(async () => {
  document.addEventListener("visibilitychange", handleVisibilityChange);
  try {
    loading.value = true;
    const res = await paymentGetUser();
    IsItTheFirstTime.value = res;
  } finally {
    loading.value = false;
  }
});
const handleVisibilityChange = async () => {
  if (document.visibilityState === "visible") {
    console.log("页面重新可见，触发数据更新");
    loading.value = false;
    const subscriptionStore = useSubscriptionStore();
    await subscriptionStore.getStatusUserIdFetch();
  }
};
onUnmounted(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>
<style scoped>
/* 隐藏滚动条 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
.box-shadow-active {
  box-shadow: 0px 2px 20px 0px rgba(111, 76, 240, 0.2);
}
.box-shadow-noactive {
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1244px) {
  .grid-next-max {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1244px) {
  .grid-next-second {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: space-between;
  }
}
@media (max-width: 897px) {
  .grid-next-second {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

:deep(.bg-color-btn) {
  @apply !bg-borderColor;
}
@media (max-width: 768px) {
  .max-me-auto {
    @apply mx-auto;
  }
}
</style>
