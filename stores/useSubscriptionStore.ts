import { defineStore } from "pinia";
import { ref } from "vue";

export const useSubscriptionStore = defineStore(
  "subscription",
  () => {
    const subscriptionDetail = ref<any>({});
    const userStore = useUserStore();
    const userInfo = computed(() => {
      return typeof userStore.userInfo === "object" &&
        userStore.userInfo !== null
        ? (userStore.userInfo as any).userInfoVO
        : {};
    });
    const isFristSubscription = ref<boolean>(false); //true 第一次 false 非第一次
    const timer = ref<any>(null);
    const timer2 = ref<any>(null);
    async function setSubscriptionDetail(subscription: any) {
      subscriptionDetail.value = subscription;
      if (isItDue.value) {
        // 未购买或已到期, 调用可使用次数
        const { useSubscription } = await import("~/api/subscription");
        const res: any = await useSubscription.transcriptionCount();
        updateSubScriptCount(res as any);
      }
    }
    function setPaymentGetUser(val: boolean) {
      isFristSubscription.value = val;
    }

    async function getStatusUserIdFetch() {
      if (!userInfo.value?.userid) {
        return;
      }
      const { useSubscription } = await import("~/api/subscription");
      const res: any = await useSubscription.statusUserId(
        userInfo.value.userid
      );
      if (res?.endTime) {
        const diffTime = new Date(res?.endTime).getTime() - Date.now();
        loopFn(diffTime, res.status);
      }
      setSubscriptionDetail(res);
    }
    function loopFn(diffTime: number, status: number) {
      clearTimeout(timer.value);
      timer.value = null;
      clearTimeout(timer2.value);
      timer2.value = null;
      if (diffTime > 0 && status === 0) {
        timer.value = setTimeout(() => {
          // if (status === 1) {
          //   timer2.value = setInterval(() => {
          //     getStatusUserIdFetch();
          //   }, 1000 * 10);
          //   setTimeout(
          //     () => {
          //       clearTimeout(timer2.value);
          //       timer2.value = null;
          //     },
          //     1000 * 60 * 5
          //   );
          // } else {
          getStatusUserIdFetch();
          // }
        }, diffTime);
      }
    }

    // 免费用户
    const subscriptionStatus = ref<0 | 1 | 2 | 3 | -1 | null>(null);
    const isFreeUser = computed(() => {
      return isItDue.value;
    });

    //订阅计划是否到期
    const isItDue = computed(() => {
      if (
        subscriptionDetail.value?.status === 1 ||
        subscriptionDetail.value?.status === 3
      ) {
        return false;
      }
      if (subscriptionDetail.value?.endTime) {
        return formHasItExpired(subscriptionDetail.value.endTime);
      }
      return true;
    });
    // 今日转录次数
    const todayCount = ref(0);
    // 今日允许转录次数
    const limitCount = ref(0);

    const updateSubScriptCount = (obj: {
      todayCount: number;
      limitCount: number;
      subscriptionStatus: 0 | 1 | 2 | 3 | -1;
    }) => {
      todayCount.value = obj.todayCount;
      limitCount.value = obj.limitCount;
      subscriptionStatus.value = obj.subscriptionStatus;
    };

    const isNoTimes = computed(() => {
      return (
        isFreeUser.value &&
        limitCount.value &&
        todayCount.value >= limitCount.value
      );
    });
    // 检查是否订阅过期
    const formHasItExpired = (val: string) => {
      const now = new Date();
      const endTime = new Date(val);
      //已过期
      if (now > endTime) {
        return true;
      } else if (now < endTime) {
        //未过期
        return false;
      } else {
        return false;
      }
    };

    const clearSubscriptionDetail = () => {
      subscriptionDetail.value = {};
      // subscriptionStatus.value = null;
    };
    return {
      subscriptionDetail,
      subscriptionStatus,
      clearSubscriptionDetail,
      setSubscriptionDetail,
      updateSubScriptCount,
      setPaymentGetUser,
      isFreeUser,
      todayCount,
      limitCount,
      isNoTimes,
      isItDue,
      getStatusUserIdFetch,
      isFristSubscription
    };
  },
  {
    persist: true
  }
);
