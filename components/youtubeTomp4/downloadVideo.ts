import { Msg } from "~/utils/tools";
import { useLink } from "~/components/upload/dialog/useLink";
import mockProgress from "~/components/upload/mockProgress";
export const downloadVideo = (emit: any) => {
  const loading = ref(false);
  const link = ref("");
  const file = reactive({
    localRequestId: "",
    status: "pending",
    progress: 0
  });
  if (process.env.NODE_ENV === "development") {
    link.value = "https://www.youtube.com/watch?v=-KclsWH8a0I";
  }
  const { t } = useI18n();
  const urlRegex =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  const youtubeRegex = /^(https?:\/\/)?([a-z0-9-]+\.)?(youtube\.com|youtu\.be)\/.+/i;
  const { linkValidate } = useLink();
  const handleDownload = async () => {
    emit("download-click-pre");
    try {
      if (!link.value) {
        return;
      }
      if (!urlRegex.test(link.value)) {
        Msg({
          message: t("Resources.YouTubeToMP4.err1"),
          customClass: "!z-[9999]",
          type: "error"
        });
        return;
      }
      if (!youtubeRegex.test(link.value)) {
        Msg({
          message: t("Resources.YouTubeToMP4.err2"),
          customClass: "!z-[9999]",
          type: "error"
        });
        return;
      }
      if (!linkValidate(link.value)) {
        return;
      }
      loading.value = true;
      mockProgress(file);
      const { downloadFileApi } = await import("~/api/youtubeTomp4");
      const { createFileByLink } = downloadFileApi;
      const idObj = await createFileByLink({
        url: link.value,
        parentId: -1
      });
      //
      file.localRequestId = idObj.id;
      const res = (await fetchFileUploadStatus(idObj.id, file)) as any;

      emit("download-click", res);
    } finally {
      loading.value = false;
    }
  };
  const fetchFileUploadStatus = async (id: any, file: any) => {
    return new Promise(async (resolve, reject) => {
      const { downloadFileApi } = await import("~/api/youtubeTomp4");
      const { getFileUploadStatus } = downloadFileApi;
      const res = await getFileUploadStatus({
        id
      });

      if (res?.fileMetaInfo?.deleted !== 0) {
        file.status = "error";
        reject(res.fileMetaInfo);
        Msg({
          message: res?.fileMetaInfo?.errorTxt || "Download Error.",
          type: "error"
        });
        return;
      }

      if (res?.fileMetaInfo?.fileUrl) {
        file.progress = 100;
        file.status = "success";
        resolve(res.fileMetaInfo);
      } else {
        setTimeout(() => {
          fetchFileUploadStatus(id, file).then(resolve).catch(reject);
        }, 1000);
      }
    });
  };

  return {
    handleDownload,
    loading,
    link,
    file
  };
};
