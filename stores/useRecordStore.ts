export const useRecordStore = defineStore("record", () => {
  const recordStatus = ref<0 | 1>(0); // 0: 未开始 1: 进行中

  const startRecord = () => {
    recordStatus.value = 1;
  };
  const endRecord = () => {
    recordStatus.value = 0;
  };

  const promatDialogVisible = ref<boolean>(false);

  const showPromatDialog = async () => {
    return new Promise((resolve, reject) => {
      const { isFreeUser, isNoTimes } = storeToRefs(useSubscriptionStore());
      console.log("isFreeUser", isFreeUser.value);
      console.log("isNoTimes", isNoTimes.value);
      if (recordStatus.value === 1 && (!isFreeUser.value || !isNoTimes.value)) {
        promatDialogVisible.value = true;
        reject(false);
        return;
      }
      resolve(true);
    });
  };

  return {
    promatDialogVisible,
    showPromatDialog,
    recordStatus,
    startRecord,
    endRecord
  };
});
