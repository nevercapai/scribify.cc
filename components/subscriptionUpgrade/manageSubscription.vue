<template>
  <div class="mt-[3rem] flex flex-col items-center">
    <div class="flex flex-col items-center">
      <div class="mb-[0.5rem] flex items-center text-[1rem] text-gray-500">
        <span>Subscription plan</span>
        <span class="ms-[1rem] text-[1.1rem] font-bold text-black">{{
          subscriptionDetail.professional
        }}</span>
        <span class="ms-[0.5rem] text-[1rem] text-gray-700">${{ subscriptionDetail.money }}
          {{ subscriptionDetail.yearOrMonth }}</span>
      </div>
      <div class="mb-[2rem] text-center text-[0.95rem] text-gray-600">
        {{
          t("AccountSettingsPage.subscriptionWillCancelledOn", {
            date: subscriptionDetail.subscriptionExpirationDate,
          })
        }}
      </div>
      <el-button type="primary" class="!rounded-lg !border-blue-600 !bg-blue-600 !px-[2.5rem] !py-[0.8rem] !text-[1rem]"
        @click="manageSubscription">
        {{ t("AccountSettingsPage.manageSubscription") }}
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";
import { useUserStore } from '~/stores/useUserStore'
const userStore = useUserStore()
const { t } = useI18n();
interface SubscriptionDetail {
  professional: string;
  yearOrMonth: string;
  money: string | number;
  subscriptionExpirationDate: string;
}

interface Prop {
  subscriptionDetail: SubscriptionDetail;
}
const props = defineProps<Prop>();
console.log(props.subscriptionDetail, "🚀===");

const userInfo: any = computed(() => {
  return typeof userStore.userInfo === "object" && userStore.userInfo !== null
    ? (userStore.userInfo as any).userInfoVO
    : {};
})
const manageSubscription = async () => {
  const { useSubscription } = await import("~/api/subscription");
  const res: any = await useSubscription.paymentManageUser({
    userId: userInfo.value.userid
  });
  if (res) {
    window.location.href = res
  }
}
</script>
<style></style>
