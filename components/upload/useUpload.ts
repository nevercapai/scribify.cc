import COS from "cos-js-sdk-v5";
import { useErrorReporting } from "~/utils/fsReport";
const { reportSystemError } = useErrorReporting();

export interface UploadFile {
  id: string;
  hash?: string;
  file: File;
  name: string;
  size: number;
  detailSize: string;
  status: "pending" | "hashing" | "uploading" | "merging" | "success" | "error";
  progress: number;
  errorText?: string;
  uploadText?: string;
  worker?: Worker;
  chunks?: Blob[];
  chunkProgress?: number[];
  __isHover: boolean;
  __isDelIng: boolean;
  uploadId: string;
  key: string;
  // 新增COS相关属性
  cosInstance?: COS;
  bucket?: string;
  region?: string;
  taskId?: string;
  allowedPath?: string;
}

// 初始化COS实例
let auth: any;
let authPromise: Promise<any> | null = null;
// 获取COS授权信息
const getAuthorization = async () => {
  const { useFolderApi } = await import("~/api/folder");
  return await useFolderApi.getCosPreSignedUrl();
};

const initCosInstance = async (file: UploadFile) => {
  if (!auth) {
    if (!authPromise) {
      authPromise = getAuthorization();
    }
    auth = await authPromise;
  }
  const bucket = auth.bucket;
  const region = auth.region;
  const allowedPath = auth.allowedPath;
  const config = useRuntimeConfig();
  const instance = new COS({
    Domain: config.public.cosDomain || "", // 自定义加速域名
    getAuthorization: async (options, callback) => {
      callback({
        TmpSecretId: auth.tmpSecretId,
        TmpSecretKey: auth.tmpSecretKey,
        SecurityToken: auth.sessionToken,
        ExpiredTime: auth.expiredTime,
        Expiration: auth.expiration,
        StartTime: auth.startTime
      });
    }
  });

  file.bucket = bucket;
  file.region = region;
  file.allowedPath = allowedPath;
  file.cosInstance = instance;
};

export const useUpload = () => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024; // 5GB
  const fileTypes = useUploadStore().fileTypes; // 允许的扩展名
  const CHUNK_SIZE = 50 * 1024 * 1024; // 5MB分割
  const NOTNEEDCHUNK_SIZE = 20 * 1024 * 1024; // 5MB
  const { t } = useI18n();
  const { selectedFolder } = storeToRefs(useFolderStore());

  const validateFile = (file: UploadFile): boolean => {
    //  文件大小不能为0
    if (file.size === 0) {
      file.status = "error";
      file.errorText = t("FileUploadAndRecording.upload.fileEmpty");
      return false;
    }
    // 大小验证 (5GB)
    if (file.size > MAX_FILE_SIZE) {
      file.status = "error";
      file.errorText = t("FileUploadAndRecording.upload.tooLarge");
      return false;
    }
    const isMimeValid = [
      ...fileTypes,
      "webm",
      "x-m4a",
      "quicktime",
      "vnd.dlna.adts",
      "x-ms-wma",
      "x-ms-wmv"
    ].includes(file.file.type?.split("/")[1]?.toLowerCase());

    // 返回结果
    if (!isMimeValid) {
      file.status = "error";
      file.errorText = t("FileUploadAndRecording.upload.fileFormat");
      return false;
    }

    return true;
  };

  const isExistFile = async (file: UploadFile) => {
    return new Promise((resolve, reject) => {
      file
        .cosInstance!.headObject({
          Bucket: file.bucket!,
          Region: file.region!,
          Key: file.key
        })
        .then((res) => {
          if (res) {
            resolve(true);
          }
        })
        .catch(() => {
          resolve(false);
        });
    });
  };

  const directUpload = async (file: UploadFile, times = 1) => {
    file.status = "uploading";

    try {
      const result = await file.cosInstance!.uploadFile({
        Bucket: file.bucket!,
        Region: file.region!,
        Key: file.key,
        Body: file.file,
        ChunkSize: CHUNK_SIZE,
        AsyncLimit: 6,
        SliceSize: NOTNEEDCHUNK_SIZE,
        onTaskReady: (taskId) => {
          file.taskId = taskId;
        },
        onProgress(progressData) {
          let progress = Math.max(
            parseInt(String(progressData.percent * 100)),
            file.progress
          );
          file.progress = progress === 100 ? (progress = 99) : progress;
        }
      });

      setTimeout(() => {
        file.status = "success";
      }, 300);

      return Promise.resolve(true);
    } catch (error) {
      if (error?.toString().includes("expired")) {
        console.log("cos过期重试");
        reportSystemError(
          {
            message: "cos 过期重试" + error
          },
          false
        );
        auth = null;
        authPromise = null;
        await initCosInstance(reactive(file));
        file.key = `${file.allowedPath!}${file.hash}/${file.name || "filename"}`;
        return await directUpload(file); // ✅ 递归调用，异常会自动向上传播
      }

      if (times > 0) {
        console.log("cos上传重试" + error);
        reportSystemError(
          {
            message: "cos 上传重试" + error
          },
          false
        );
        return await directUpload(file, times - 1); // ✅ 递归调用，异常会自动传播
      }

      file.status = "error";
      file.errorText = t("FileUploadAndRecording.upload.uploadErr");
      throw error; // ✅ 抛出异常，外层可以catch
    }
  };
  const getCollectEvent = async () => {
    const { useCommonApi } = await import("~/api/common");
    const { collectEvent } = useCommonApi;
    return collectEvent;
  };
  // 初始化
  const initUpload = async (file: UploadFile) => {
    const fileName = file.name;
    const commonParams = {
      fileName,
      fileSize: file.size,
      eventType: "upload"
    };
    if (!validateFile(file)) {
      return;
    }

    file.status = "hashing";

    // 创建Web Worker处理大文件计算
    // const worker = new Worker("/assets/upload/md5.worker.js");
    // file.worker = worker;
    //
    // worker.postMessage({ file: file.file });

    // 计算MD5
    return new Promise<any>(async (resolve, reject) => {
      // worker.onmessage = async (e) => {
      //
      // };

      const date = new Date();
      const hash = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
      // worker.terminate();
      file.worker = undefined;
      file.hash = hash;
      if (hash === "error") {
        file.status = "error";
        file.errorText = t("FileUploadAndRecording.upload.hashErr");
      } else {
        const collectEvent = await getCollectEvent();
        try {
          const startTime = performance.now();
          await initCosInstance(file);
          const endTimeInit = performance.now();
          const initDuration = Math.round((endTimeInit - startTime) / 1000);
          console.log("cos初始化耗时", initDuration);
          file.key = `${file.allowedPath!}${hash}/${file.name || "filename"}`;

          await directUpload(file);

          // await postTranscode(file);
          const endTime = performance.now();
          const durationMs = endTime - startTime;
          // 转换为秒并四舍五入保留整数
          const durationSec = Math.round(durationMs / 1000);
          console.log("🚀 ~上传总共耗时 🚀", durationSec);
          // 上传成功上报
          collectEvent({
            ...commonParams,
            uploadTime: durationSec
          });
          resolve(true);
        } catch (e) {
          const errorParams: any = {
            ...commonParams,
            failReason: e?.toString() || file.errorText,
            eventType: "upload_failed"
          };
          if (!(e instanceof Error && e.message && e.message.includes('"code":401'))) {
            collectEvent(errorParams);
          }
          reject(e);
        }
      }
    });
  };

  // 删除文件
  const removeFile = async (file: UploadFile, files: Ref<UploadFile[]>) => {
    files.value = files.value.filter((f) => f.id !== file.id);

    if (["success", "error", "pending"].includes(file.status)) {
      return;
    }

    if (file.taskId) {
      file.cosInstance?.cancelTask(file.taskId);
    }
  };

  const removeAllFile = async (files: Ref<UploadFile[]>) => {
    files.value.forEach((file) => {
      removeFile(file, files);
    });
  };

  const { selectRawFiles } = storeToRefs(useUploadStore());
  const fetchFileUploadStatus = async (id: any, file: UploadFile) => {
    if (
      !selectRawFiles.value.some(
        (e: any) => e.localRequestId === (file.file as any)?.localRequestId
      )
    ) {
      return;
    }
    return new Promise(async (resolve, reject) => {
      const { useFolderApi } = await import("~/api/folder");
      const { getFileUploadStatus } = useFolderApi;
      const res = await getFileUploadStatus({
        id
      });

      if (res.fileMetaInfo.deleted !== 0) {
        reject(res.fileMetaInfo);
        file.status = "error";
        file.errorText = res.fileMetaInfo.errorTxt;
        return;
      }

      if (res.fileMetaInfo.fileUrl) {
        file.progress = 100;
        file.uploadText = "";
        file.status = "success";
        // setTimeout(() => {
        // }, 300);
        file.name = res.fileMetaInfo.fileName;
        file.size = res.fileMetaInfo.fileSize;
        file.detailSize = niceBytes(String(res.fileMetaInfo.fileSize));
        (file.file as any).localFileId = res.fileMetaInfo.id;
      } else {
        setTimeout(() => {
          fetchFileUploadStatus(id, file).then(resolve).catch(reject);
        }, 3000);
      }
    });
  };

  const createFileObject = (file: File): UploadFile => {
    const obj = {
      id: Date.now() + file.name,
      file,
      name: file.name.slice(0, 80),
      size: file.size,
      detailSize: niceBytes(String(file.size)),
      status: "pending",
      progress: 0,
      __isHover: false,
      __isDelIng: false,
      uploadId: "",
      key: "",
      uploadText: ""
    } as UploadFile;
    if ((file as any).localFileSize) {
      obj.size = (file as any).localFileSize;
      obj.detailSize = niceBytes(String((file as any).localFileSize));
    }
    if ((file as any).localRequestId) {
      obj.status = "uploading";
      obj.uploadText = t("FileUploadAndRecording.upload.linkUpload");
      simulateProgress(reactive(obj));
      fetchFileUploadStatus((file as any).localRequestId, reactive(obj));
    }
    return obj;
  };

  const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  function niceBytes(x: string) {
    if (x === "--") return x;
    let l = 0,
      n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
  }

  function simulateProgress(file: UploadFile) {
    // 初始化文件状态
    file.progress = 0;
    file.status = "uploading";

    // 限制最大文件大小为5GB
    const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024;
    function isNumber(value: unknown) {
      return typeof value === "number" && !isNaN(value);
    }
    const fileSize = Math.min(
      isNumber(file.size) ? file.size : 1 * 1024 * 1024 * 1024,
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

  function postTranscode(file: UploadFile) {
    // sdk引入以及初始化请参考：https://cloud.tencent.com/document/product/436/11459
    const config = {
      // 需要替换成您自己的存储桶信息
      Bucket: file.bucket, // 存储桶，必须字段
      Region: file.region // 存储桶所在地域，必须字段 如 ap-beijing
    };
    const key = `jobs`; // 固定值，必须
    const host = `${config.Bucket}.ci.${config.Region}.myqcloud.com`;
    const url = `https://${host}/${key}`;
    const body = COS.util.json2xml({
      Request: {
        // 创建任务的Tag：Transcode;是否必传：是
        Tag: "Transcode",
        // 待操作的文件信息;是否必传：是
        Input: {
          // 文件路径;是否必传：是
          Object: file.key
        },
        // 操作规则;是否必传：是
        Operation: {
          // TemplateId与Transcode 二选一传入
          // 转码模板 ID;是否必传：否，可通过控制台获取
          TemplateId: "xxx",
          // 转码模板参数;是否必传：否
          // Transcode: {},
          // 水印模板 ID，可以传多个水印模板 ID，最多传3个;是否必传：否
          // WatermarkTemplateId: '',
          // 去除水印参数,  H265、AV1编码暂不支持该参数;是否必传：否
          // RemoveWatermark: {
          //   // 距离左上角原点 x 偏移，范围为[1, 4096];是否必传：是
          //   Dx: '',
          //   // 距离左上角原点 y 偏移，范围为[1, 4096];是否必传：是
          //   Dy: '',
          //   // 宽，范围为[1, 4096];是否必传：是
          //   Width: '',
          //   // 高，范围为[1, 4096];是否必传：是
          //   Height: '',
          // },
          // 字幕参数，H265、AV1编码和非mkv封装暂不支持该参数;是否必传：否
          // Subtitles: {
          //   // 字幕参数;是否必传：是
          //   Subtitle: {
          //     // 同 bucket 的字幕地址，需要 encode;是否必传：是
          //     Url: '',
          //   },
          // },
          // 结果输出配置;是否必传：是
          Output: {
            // 存储桶的地域;是否必传：是
            Region: config.Region,
            // 存储结果的存储桶;是否必传：是
            Bucket: config.Bucket,
            // 输出结果的文件名;是否必传：是
            Object: "output/test.mp4"
          },
          // 透传用户信息，可打印的 ASCII 码，长度不超过1024;是否必传：否
          UserData: "",
          // 任务优先级，级别限制：0 、1 、2 。级别越大任务优先级越高，默认为0;是否必传：否
          JobLevel: "0"
        },
        // 任务所在的队列类型，限制为 SpeedTranscoding, 表示为开启倍速转码;是否必传：否
        QueueType: "SpeedTranscoding",
        // 任务回调格式，JSON 或 XML，默认 XML，优先级高于队列的回调格式;是否必传：否
        CallBackFormat: "",
        // 任务回调类型，Url 或 TDMQ，默认 Url，优先级高于队列的回调类型;是否必传：否
        CallBackType: "Url",
        // 任务回调地址，优先级高于队列的回调地址。设置为 no 时，表示队列的回调地址不产生回调;是否必传：否
        CallBack: ""
      }
    });

    file.cosInstance!.request(
      {
        Method: "POST", // 固定值，必须
        Key: key, // 必须
        Url: url, // 请求的url，必须
        Body: body, // 请求体参数，必须
        ContentType: "application/xml" // 固定值，必须
      },
      function (err: any, data: any) {
        if (err) {
          // 处理请求失败
          console.log(err);
        } else {
          // 处理请求成功
          console.log(data.Response);
        }
      }
    );
  }

  // todo 废弃的文件分片
  const uploadFile = async (file: UploadFile) => {
    file.status = "uploading";

    // 分割文件
    const chunks = file.chunks!;

    let totalProgress = 0;
    const totalChunks = chunks.length;

    const chunkPromises: Promise<any>[] = [];
    // 上传所有分片
    chunks.forEach((chunk, index) => {
      const promise = file.cosInstance
        ?.multipartUpload({
          Bucket: file.bucket!,
          Region: file.region!,
          Key: file.name,
          UploadId: file.uploadId,
          PartNumber: index + 1,
          Body: chunk
        })
        .then((res) => {
          file.chunkProgress![index] = 100;

          // 计算整体进度: 所有分片平均值 * 0.9
          totalProgress = file.chunkProgress!.reduce((sum, p) => sum + p, 0);
          file.progress = Math.round((totalProgress / totalChunks) * 0.9);

          return res;
        })
        .catch((err) => {
          file.status = "error";
          file.errorText = err?.toString();
        }) as any;
      chunkPromises.push(promise);
    });

    try {
      await Promise.all(chunkPromises);
      const eTags = await uploadChunkProgress(file);
      if (eTags?.length === totalChunks) {
        mergeFile(file, eTags);
      }
    } catch (e) { }
  };

  // todo 废弃的文件分片
  const uploadChunkProgress = async (file: UploadFile, times = 100) => {
    const data = await file.cosInstance!.multipartListPart({
      Bucket: file.bucket!,
      Region: file.region!,
      Key: file.name,
      UploadId: file.uploadId
    });
    if (data.Part?.length === file.chunks?.length) {
      return Promise.resolve(data.Part);
    }

    if (times > 0) {
      setTimeout(() => {
        uploadChunkProgress(file, times - 1);
      }, 1000);
      return;
    }
    file.status = "error";
    file.errorText = t("FileUploadAndRecording.upload.uploadErr");
    return Promise.reject();
  };

  // todo 废弃的文件分片 分割文件
  const createChunks = (file: File): Blob[] => {
    const chunks = [];
    let start = 0;
    while (start < file.size) {
      const end = Math.min(start + CHUNK_SIZE, file.size);
      chunks.push(file.slice(start, end));
      start = end;
    }
    return chunks;
  };

  // todo 废弃的文件分片 合并
  const mergeFile = async (file: UploadFile, eTags: COS.Part[]) => {
    try {
      file.status = "merging";

      await file.cosInstance!.multipartComplete({
        Bucket: file.bucket!,
        Region: file.region!,
        Key: file.name,
        UploadId: file.uploadId,
        Parts: eTags
      });

      file.status = "success";
      file.progress = 100;
    } catch (e: any) {
      file.status = "error";
      file.errorText = e?.toString();
    }
  };

  return {
    initUpload,
    removeFile,
    createFileObject,
    removeAllFile
  };
};
