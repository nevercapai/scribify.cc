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
          message: t("Resources.YouTubeToMP3.err1"),
          customClass: "!z-[9999]",
          type: "error"
        });
        return;
      }
      if (!youtubeRegex.test(link.value)) {
        Msg({
          message: t("Resources.YouTubeToMP3.err2"),
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
        type: "mp3",
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
      // let res = {
      //   "fileMetaInfo": {
      //     "id": "636381263554076672",
      //     "fileName": "HANA ⧸ Burning Flower -Music Video-",
      //     "parentId": -1,
      //     "uploadTime": "2025-10-23T01:52:17.860+00:00",
      //     "fileSize": 3149958,
      //     "fileType": "mp3",
      //     "fileUrl": "https://cos-whisperx-dev.aihujing.com/4c90b53eb13a9464b1ba1a4260736f33/202510/23/-1/HANA%C2%A0%E2%A7%B8%C2%A0Burning%C2%A0Flower%C2%A0-Music%C2%A0Video-.mp3",
      //     "deleted": 0,
      //     "errorTxt": null,
      //     "urlConfig": "https://whisperx-dev-1302177102.cos.accelerate.myqcloud.com/4c90b53eb13a9464b1ba1a4260736f33/202510/23/-1/HANA%C2%A0%E2%A7%B8%C2%A0Burning%C2%A0Flower%C2%A0-Music%C2%A0Video-.mp3"
      //   }
      // }

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
