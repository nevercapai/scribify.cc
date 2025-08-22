import { Msg } from "~/utils/tools";
export const downloadVideo = (emit: any) => {
  const loading = ref(false);
  const link = ref("");
  if (process.env.NODE_ENV === "development") {
    link.value = "https://www.youtube.com/watch?v=-KclsWH8a0I";
  }
  const urlRegex =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  const youtubeRegex =
    /^(https?:\/\/)?([a-z0-9-]+\.)?(youtube\.com|youtu\.be)\/.+/i;
  const handleDownload = async () => {
    emit("download-click-pre");
    try {
      if (!link.value) {
        return;
      }
      if (!urlRegex.test(link.value)) {
        Msg({
          message: "YouTube link format error.",
          customClass: "!z-[9999]",
          type: "error"
        });
        return;
      }
      if (!youtubeRegex.test(link.value)) {
        Msg({
          message:
            "Sorry! We currently only work with YouTube links. If you need support for other sites, we'll keep you updated when we add it in the future.",
          customClass: "!z-[9999]",
          type: "error"
        });
        return;
      }
      loading.value = true;
      const { downloadFileApi } = await import("~/api/youtubeTomp4");
      const { createFileByLink } = downloadFileApi;
      const idObj = await createFileByLink({
        url: link.value,
        parentId: -1
      });
      const res = (await fetchFileUploadStatus(idObj.id)) as any;

      emit("download-click", res);
    } finally {
      loading.value = false;
    }
  };
  const fetchFileUploadStatus = async (id: any) => {
    return new Promise(async (resolve, reject) => {
      const { downloadFileApi } = await import("~/api/youtubeTomp4");
      const { getFileUploadStatus } = downloadFileApi;
      const res = await getFileUploadStatus({
        id
      });

      if (res?.fileMetaInfo?.deleted !== 0) {
        reject(res.fileMetaInfo);
        Msg({
          message: res?.fileMetaInfo?.errorTxt || "Download Error.",
          type: "error"
        });
        return;
      }

      if (res?.fileMetaInfo?.fileUrl) {
        resolve(res.fileMetaInfo);
      } else {
        setTimeout(() => {
          fetchFileUploadStatus(id).then(resolve).catch(reject);
        }, 1000);
      }
    });
  };

  return {
    handleDownload,
    loading,
    link
  };
};
