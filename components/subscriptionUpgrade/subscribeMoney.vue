<template>
  <div class="bg-white px-[2rem] pt-[1.5rem]">
    <!-- 返回和标题 -->
    <div class="mb-[2rem] flex items-center justify-between">
      <span class="cursor-pointer text-[1rem] text-gray-500" @click="goBack"
        >&lt; {{ t("AccountSettingsPage.return") }}</span
      >
      <span class="text-[1.1rem] font-medium">订阅XXXXXX无限版</span>
      <span></span>
    </div>
    <!-- 方案卡片 -->
    <div class="mx-auto flex w-full max-w-xl flex-col items-center">
      <div
        v-for="(plan, idx) in plans"
        :key="plan.type"
        :class="[
          'relative mb-[1.5rem] w-full min-w-[28rem] rounded-xl p-[2rem] shadow-sm',
          active === plan.type
            ? 'border border-blue-400 bg-blue-50'
            : 'bg-gray-100',
          active === plan.type ? 'border border-blue-400' : ''
        ]"
        @click="chooseType(plan)"
      >
        <!-- 节省标签 -->
        <div
          v-if="active === plan.type && plan.tag && discount"
          class="absolute right-[1.5rem] top-[1.2rem] rounded px-2 py-0.5 text-xs"
          :class="plan.tagClass"
        >
          {{ plan.tag }}
        </div>
        <div class="mb-2 text-[1.1rem] font-medium">{{ plan.title }}</div>
        <div class="mb-1 flex items-end">
          <span class="text-[2rem] font-bold">{{ plan.price }}</span>
          <span class="ms-2 text-[1.1rem]">{{ plan.priceDesc }}</span>
          <span class="ms-3 text-[1rem] text-gray-400 line-through">{{
            plan.oldPrice
          }}</span>
          <span
            v-if="plan.oldPriceDesc"
            class="ms-2 text-[1rem] text-gray-500"
            >{{ plan.oldPriceDesc }}</span
          >
        </div>
        <div class="mb-2 text-[1.1rem] text-gray-700">{{ plan.total }}</div>
        <!-- 选中图标 -->
        <div
          v-if="active === plan.type"
          class="absolute bottom-[1.2rem] right-[1.2rem]"
        >
          <el-icon :class="plan.iconClass">
            <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </el-icon>
        </div>
      </div>
      <!-- 订阅按钮 -->
      <el-button
        type="primary"
        class="!mb-0 !h-[2.8rem] !w-[24rem] !rounded-lg !border-[#3576f8] !bg-[#3576f8] !text-[1.1rem] !font-medium"
        @click="goSubscribe()"
      >
        {{ t("AccountSettingsPage.subscribeTo") }}
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref, defineProps, withDefaults } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from "~/stores/useUserStore";
const { t } = useI18n();
const emit = defineEmits(["change", "returnPre"]);
const userStore = useUserStore();
interface Props {
  subscribePlanType: string;
}
interface Plan {
  type: string;
  title: string;
  price: string;
  priceDesc: string;
  oldPrice: string;
  total: string;
  tag?: string;
  tagClass?: string;
  checked: boolean;
  cardClass: string;
  iconClass: string;
  oldPriceDesc?: string;
  [propName: string]: any;
}
//暂时不使用
const props = withDefaults(defineProps<Props>(), {
  subscribePlanType: ""
});

const active = ref<string>("");

// 方案数据
const plans = ref<Plan[]>([
  {
    type: "year",
    title: t("AccountSettingsPage.annualize"),
    price: "$8.99",
    priceDesc: t("AccountSettingsPage.monthly"),
    oldPrice: "$17.99",
    total: "$107.88 " + t("AccountSettingsPage.everyYear"),
    tag: t("AccountSettingsPage.save") + "$15",
    tagClass: "bg-green-100 text-green-600",
    checked: true,
    cardClass: "bg-blue-50 border border-blue-400",
    iconClass: "text-blue-500",
    money: "107.88"
  },
  {
    type: "month",
    title: t("AccountSettingsPage.byTheMonth"),
    price: "$9.99",
    priceDesc: t("AccountSettingsPage.firstMonth"),
    oldPrice: "$17.99",
    oldPriceDesc: "$17.99 " + t("AccountSettingsPage.afterwardsEveryMonth"),
    total: "$215.88 " + t("AccountSettingsPage.everyYear"),
    tag: t("AccountSettingsPage.save") + "$15",
    tagClass: "bg-green-100 text-green-600",
    checked: false,
    cardClass: "bg-gray-100",
    iconClass: "",
    money: "215.88"
  }
]);
const discount = ref<boolean>(true);
const goSubscribe = async () => {
  const version = plans.value.find((item: any) => item.type === active.value);
  if (!version) {
    // 可以根据需要弹出提示
    return;
  }
  const { useSubscription } = await import("~/api/subscription");
  const res: any = await useSubscription.createCheckoutSession({
    priceType: version.type == "month" ? 0 : 1
  });
  if (res) {
    window.location.href = res;
  }
};
const chooseType = (plan: { type: string }) => {
  active.value = plan.type;
};
const goBack = () => {
  console.log("返回");
  emit("returnPre");
};
onMounted(async () => {
  try {
    if (props.subscribePlanType) {
      active.value = props.subscribePlanType;
    }
    const { useSubscription } = await import("~/api/subscription");
    const userInfo =
      typeof userStore.userInfo === "object" && userStore.userInfo !== null
        ? (userStore.userInfo as any).userInfoVO
        : {};
    const res: any = await useSubscription.paymentGetUser(userInfo.userid);
    if (res) {
      discount.value = res;
    }
  } catch (error) {}
});
</script>
<style scoped></style>
