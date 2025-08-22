import { defineStore } from "pinia";
import { ref } from "vue";
import { useSubscriptionStore } from "~/stores/useSubscriptionStore";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";

export const useEmailStore = defineStore(
  "email",
  () => {
    const signupEmail = ref("");
    const sendCodeFlag = ref(false);
    const stroeCountdown = ref(60);

    function setEmail(newEmail: string) {
      signupEmail.value = newEmail;
    }
    function setSendCodeFlag(flag: boolean) {
      sendCodeFlag.value = flag;
    }
    function setCountdown(num: number) {
      stroeCountdown.value = num;
    }

    return {
      signupEmail,
      setEmail,
      sendCodeFlag,
      setSendCodeFlag,
      stroeCountdown,
      setCountdown
    };
  },
  {
    persist: true
  }
);

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref("");
    // 获取 email store 的实例
    const emailStore = useEmailStore();

    async function setUserInfo(user: any) {
      userInfo.value = user;
      const subscriptionStore = useSubscriptionStore();
      const { subscriptionStatus } = storeToRefs(useSubscriptionStore());
      if (user?.token) {
        window?.localStorage.setItem("token", user.token);
        const token = useCrossDomainCookie("token");
        token.value = user.token; // 设置值
        subscriptionStore.getStatusUserIdFetch();
        subscriptionStatus.value = user.userInfoVO.subscriptionStatus ?? null;
        // 这里调用 setEmail 方法
        emailStore.setEmail(user.userInfoVO?.email || "");
        const userInfoEmailCookie = useCrossDomainCookie("userInfoEmail", {
          maxAge: 60 * 60 * 24 * 7 // 7天（秒）
        });
        userInfoEmailCookie.value = user.userInfoVO?.email || "";
      } else {
        window?.localStorage.removeItem("token");
        const token = useCrossDomainCookie("token");
        token.value = "";
        emailStore.setEmail("");
        // 订阅信息
        subscriptionStore.clearSubscriptionDetail();
      }
    }

    return { userInfo, setUserInfo };
  },
  {
    persist: true
  }
);

export const useGuestUserStore = defineStore("guestUser", () => {
  const tmpUserInfo = ref("");
  async function setTmpUserInfo(user: any) {
    tmpUserInfo.value = user;
  }
  return { tmpUserInfo, setTmpUserInfo };
});
