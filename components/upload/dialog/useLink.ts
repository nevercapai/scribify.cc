import { Msg } from "~/utils/tools";

export const useLink = (emit?: any) => {
  const { selectedFolder } = storeToRefs(useFolderStore());
  const { updateSelectRawFiles } = useUploadStore();
  const loading = ref(false);
  const link = ref("");
  const { t } = useI18n();
  const patterns = [
    /^https?:\/\/[^\/]*youtube\.com\/.*$|^https?:\/\/[^\/]*youtu\.be\/.*$/,
    /^https?:\/\/[^\/]*(facebook\.com|fb\.com)\/.*$/,
    /^https?:\/\/[^\/]*(twitter\.com|x\.com)\/.*$/,
    /^https?:\/\/[^\/]*dropbox\.com\/.*$/,
    /^https?:\/\/[^\/]*(drive\.google\.com|docs\.google\.com)\/.*$/,
    /^https?:\/\/[^\/]*vimeo\.com\/.*$/,
    /^https?:\/\/[^\/]*tiktok\.com\/.*$/,
    /^https?:\/\/[^\/]*(instagram\.com|instagr\.am)\/.*$/
  ];
  const route = useRoute();
  const handleConfirm = async (callback = () => {}) => {
    try {
      loading.value = true;
      if (!patterns.some((pattern) => pattern.test(link.value))) {
        Msg({
          message: t("FileUploadAndRecording.upload.link.errorTitle"),
          customClass: "!z-[9999]",
          type: "error"
        });
        return Promise.reject(false);
      }
      const { useFolderApi } = await import("~/api/folder");
      const { createFileByLink } = useFolderApi;
      const idObj = await createFileByLink({
        url: link.value,
        parentId: route?.path?.includes("folder")
          ? selectedFolder.value?.id || 0
          : 0
      }).catch((err) => {
        if (err.message) {
          Msg({
            message: err.message,
            customClass: "!z-[9999]",
            type: "error"
          });
          return Promise.reject(false);
        }
      });
      const file = new File([], link.value);
      // (file as any).localFileId = idObj.id;
      (file as any).localRequestId = idObj.id;
      (file as any).localFileSize = "--";
      updateSelectRawFiles(file);
      if (emit) {
        emit("confirm", file);
      }
      callback();
    } finally {
      loading.value = false;
    }
  };
  const linkValidate = (url?: string) => {
    url ||= link.value;
    const YOUTUBE_DOMAIN = "youtube.com/";
    const channelPattern = new RegExp(
      `${YOUTUBE_DOMAIN}(@|channel/|c/|user/|feed/)`,
      "i"
    );
    const searchPattern = /search_query=/i;
    const resultsPattern = new RegExp(`${YOUTUBE_DOMAIN}results[?]`, "i");

    const isChannel = channelPattern.test(url);
    const isSearch = searchPattern.test(url);
    const isResults = resultsPattern.test(url);
    if (isChannel || isSearch || isResults) {
      Msg({
        message: t("FileUploadAndRecording.upload.link.errorTitle"),
        customClass: "!z-[9999]",
        type: "error"
      });
      return false;
    }
    return true;
  };
  return {
    handleConfirm,
    loading,
    link,
    linkValidate
  };
};
