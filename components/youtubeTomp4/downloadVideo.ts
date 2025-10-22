import { Msg } from "~/utils/tools";
import { useLink } from "~/components/upload/dialog/useLink";
function simulateProgress(file: any) {
  // 初始化文件状态
  file.progress = 0;
  file.status = "uploading";
  // 限制最大文件大小为5GB
  const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024;
  function isNumber(value: unknown) {
    return typeof value === "number" && !isNaN(value);
  }
  const fileSize = Math.min(
    isNumber(file.size) ? file.size : 1024 * 1024 * 1024,
    MAX_FILE_SIZE
  );

  // 根据文件大小动态计算上传速度（5-20MB/s）
  const speedFactor = 0.3 + 0.7 * (fileSize / MAX_FILE_SIZE);
  const UPLOAD_SPEED =
    5 * 1024 * 1024 + (20 * 1024 * 1024 - 5 * 1024 * 1024) * speedFactor;

  // 计算上传时间（添加20%随机波动）
  const baseDuration = (fileSize / UPLOAD_SPEED) * 1000;
  const totalDuration = baseDuration * (0.8 + Math.random() * 0.4);
  const startTime = Date.now();

  // 进度更新函数
  const update = () => {
    if (file.status !== "uploading") return;

    const elapsed = Date.now() - startTime;
    const timeRatio = Math.min(elapsed / totalDuration, 1);

    // 使用S型曲线模拟真实上传速度变化
    const progressRatio = 1 / (1 + Math.exp(-6 * (timeRatio - 0.5)));
    let progress = Math.floor(progressRatio * 98); // 最终进度停在98%

    // 添加微小波动模拟网络不稳定
    if (progress > file.progress + 1) {
      progress = Math.max(
        file.progress + 1,
        progress - Math.floor(Math.random() * 3)
      );
    }

    // 更新进度
    if (progress > file.progress) {
      file.progress = progress;
    }

    // 继续更新或完成
    if (file.progress < 98) {
      requestAnimationFrame(update);
    }
  };

  // 启动模拟
  requestAnimationFrame(update);
}
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
  const youtubeRegex =
    /^(https?:\/\/)?([a-z0-9-]+\.)?(youtube\.com|youtu\.be)\/.+/i;
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
      simulateProgress(file);
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
