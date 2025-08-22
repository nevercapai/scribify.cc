import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";

export const useVisitor = () => {
  const visitorId = ref("");

  const getVisitorId = async () => {
    const cookie = useCrossDomainCookie("fp", {
      maxAge: 60 * 60 * 24 * 365 * 10 // 10年
    });
    if (cookie.value) {
      visitorId.value = cookie.value;
      return;
    }
    const { load } = await import("@fingerprintjs/fingerprintjs");
    const fp = await load({}); // 替换为你的 Key
    const result = await fp.get();
    visitorId.value = result.visitorId;
    cookie.value = visitorId.value;
  };

  onMounted(() => {
    getVisitorId();
  });

  return {
    visitorId,
    getVisitorId
  };
};
