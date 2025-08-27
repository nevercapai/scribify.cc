import type { Folder } from "~/api/type/folder";
import type { UploadFile } from "~/components/upload/useUpload";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";

export const useGuestUploadStore = defineStore(
  "guestUpload",
  () => {
    const tableData = ref<UploadFile[]>([]);
    const diarizeEnabled = ref(true);
    const lang = ref<any>({});
    const formattedTime = ref('')
    const tempInfo = ref<any>(null);
    const transcribing = ref(false);

    const clear = () => {
      tableData.value = [];
      lang.value = {};
      diarizeEnabled.value = true;
      formattedTime.value = ''
      tempInfo.value = null;
      transcribing.value = false
    };

    const handleJumpHome = () => {
      const { $mitt } = useNuxtApp();
      const { isNoTimes } = storeToRefs(useSubscriptionStore());

      if (isNoTimes.value) {
        const noTimes = useCrossDomainCookie("noTimes");
        noTimes.value = "1";
      }
      setLoginData();
      setTimeout(() => {
        $mitt.emit("goToEvent", { path: `/?wt=${Date.now()}` });
      }, 500);
    };

    const setLoginData = () => {
      const { userInfo } = storeToRefs(useUserStore());
      const { setUserInfo } = useUserStore();

      if (userInfo.value?.userInfoVO) {
        return;
      }
      const userInfoCookie = useCrossDomainCookie("userInfoFromMain");
      userInfoCookie.value = JSON.stringify(tempInfo.value);
      const userInfoEmailCookie = useCrossDomainCookie("userInfoEmail");
      userInfoEmailCookie.value = tempInfo.value?.userInfoVO?.email || "";
      setUserInfo(tempInfo.value);
    };


    return {
      tableData,
      diarizeEnabled,
      lang,
      formattedTime,
      tempInfo,
      transcribing,
      clear,
      handleJumpHome
    };
  },
);
