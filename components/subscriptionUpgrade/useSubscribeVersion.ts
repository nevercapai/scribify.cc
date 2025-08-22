import { useUserStore } from "~/stores/useUserStore";
export const useSubscribeVersion = () => {
  const userStore = useUserStore();
  const userInfo = computed(() => {
    return typeof userStore.userInfo === "object" && userStore.userInfo !== null
      ? (userStore.userInfo as any).userInfoVO
      : {};
  });
  const createSession = async (type: string) => {
    const { useSubscription } = await import("~/api/subscription");
    const res: any = await useSubscription.createCheckoutSession({
      priceType: type == "month" ? 0 : 1
    });
    return res;
  };
  const paymentGetUser = async () => {
    const { useSubscription } = await import("~/api/subscription");
    const res: any = await useSubscription.paymentGetUser(
      userInfo.value.userid
    );
    return res;
  };
  const paymentManageUser = async () => {
    const { useSubscription } = await import("~/api/subscription");
    const res: any = await useSubscription.paymentManageUser({
      userId: userInfo.value.userid
    });
    return res;
  };
  const upgradeSubscription = async () => {
    const { useSubscription } = await import("~/api/subscription");
    const res: any = await useSubscription.upgradeSubscription({
      userId: userInfo.value.userid
    });
    return res;
  };
  return {
    paymentManageUser,
    createSession,
    paymentGetUser,
    upgradeSubscription
  };
};
