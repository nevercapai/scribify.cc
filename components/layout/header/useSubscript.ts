import { importWithRetry } from "~/utils/importWithRetry";

export const useSubscript = () => {
  const { updateSubScriptCount } = useSubscriptionStore();

  const fetchSubscript = async () => {
    const { useSubscription } = await importWithRetry("subscription");
    const res: any = await useSubscription.transcriptionCount();
    updateSubScriptCount(res as any);
    return res;
  };

  return {
    fetchSubscript
  };
};
