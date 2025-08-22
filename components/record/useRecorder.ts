import Recorder from "recorder-core";
import "recorder-core/src/extensions/waveview";

import "recorder-core/src/engine/mp3-engine";
import "recorder-core/src/engine/mp3";

import { ref, onUnmounted } from "vue";

interface UseRecorderCoreOptions {
  containerRef?: Ref<HTMLElement | null>;
  maxTime?: number;
  onTimeOut?: (blob: any) => void;
}

interface UseRecorderCoreReturn {
  startRecording: () => void;
  stopRecording: () => Promise<{ blob: Blob; duration: number }>;
  pauseRecording: () => void;
  isRecording: Ref<boolean>;
  isPaused: Ref<boolean>;
  isPauseResume: Ref<boolean>;
  currentTime: Ref<string>;
  error: Ref<string | null>;
  isReady: Ref<boolean>;
}

export const useRecorderCore = ({
  containerRef,
  maxTime,
  onTimeOut
}: UseRecorderCoreOptions = {}): UseRecorderCoreReturn => {
  // 状态
  const isRecording = ref(false);
  const isPaused = ref(false);
  const isPauseResume = ref(false);
  const currentTime = ref("");
  const error = ref<string | null>(null);
  const isReady = ref(false);

  // 引用
  let rec: any = null;
  let wave: any = null;
  let recBlob: any = null;

  // 默认配置
  const defaultOptions = {
    type: "mp3",
    sampleRate: 16000,
    bitRate: 16
  };

  const getTime = (time: any) => {
    time = time / 1000;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = parseInt(String(time % 60));

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // 打开录音
  const recOpen = (): Promise<void> => {
    if (rec) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      // 创建录音对象
      rec = (window as any).Recorder({
        ...defaultOptions,
        onProcess: async (
          buffers: any,
          powerLevel: any,
          bufferDuration: any,
          bufferSampleRate: any,
          newBufferIdx: any,
          asyncEnd: any
        ) => {
          // 更新录音时长
          currentTime.value = getTime(bufferDuration);

          if (maxTime && bufferDuration / 1000 >= maxTime) {
            const { blob } = await stopRecording();
            onTimeOut && onTimeOut(blob);
            return;
          }

          // 录音实时回调，大约1秒调用12次本回调
          if (wave) {
            wave.input(
              buffers[buffers.length - 1],
              powerLevel,
              bufferSampleRate
            );
          }
        }
      });

      if (!rec) {
        const errorMsg = "当前浏览器不支持录音功能！";
        error.value = errorMsg;
        reject(new Error(errorMsg));
        return;
      }

      // 打开录音，获得权限
      rec.open(
        () => {
          console.log("录音已打开");
          isReady.value = true;
          error.value = null;

          if (containerRef?.value) {
            // 创建音频可视化图形绘制对象
            wave = (window as any).Recorder.WaveView({
              elem: containerRef.value
            });
          }
          resolve();
        },
        (msg: any, isUserNotAllow: any) => {
          // 用户拒绝了录音权限，或者浏览器不支持录音
          const errorMsg =
            (isUserNotAllow ? "UserNotAllow，" : "") + "无法录音:" + msg;
          console.log(errorMsg);
          error.value = errorMsg;
          isReady.value = false;
          reject(new Error(errorMsg));
        }
      );
    });
  };

  // 开始录音
  const startRecording = async () => {
    try {
      await recOpen();

      if (!rec) {
        console.error("未打开录音");
        return;
      }

      rec.start();
      isRecording.value = true;
      isPaused.value = false;
      isPauseResume.value = false;
      currentTime.value = getTime(0);
      console.log("已开始录音");
    } catch (err) {
      console.error("开始录音失败:", err);
    }
  };

  // 结束录音
  const stopRecording = (): Promise<{ blob: Blob; duration: number }> => {
    return new Promise((resolve, reject) => {
      if (!rec) {
        const errorObj = new Error("未打开录音");
        console.error(errorObj.message);
        reject(errorObj);
        return;
      }

      rec.stop(
        (blob: any, duration: any) => {
          // blob就是我们要的录音文件对象，可以上传，或者本地播放
          recBlob = blob;

          // 更新状态
          isRecording.value = false;
          isPaused.value = false;
          isPauseResume.value = false;
          // currentTime.value = getTime(0);

          // 关闭录音，释放录音资源
          console.log("rec", rec.stream);
          rec.close();

          Recorder.Destroy();
          rec = null;
          wave = null;
          isReady.value = false;

          resolve({ blob, duration });
        },
        (err: any) => {
          const errorMsg = "结束录音出错：" + err;
          console.error(errorMsg);
          error.value = errorMsg;

          // 关闭录音，释放录音资源
          rec.close();
          rec = null;
          wave = null;
          isRecording.value = false;
          isReady.value = false;

          reject(new Error(errorMsg));
        }
      );
    });
  };

  // 暂停录音 (实际上是停止录音，保持API兼容)
  const pauseRecording = () => {
    if (isPaused.value) {
      // 当前是暂停状态，执行恢复
      if (typeof rec.resume === "function") {
        rec.resume();
        isPaused.value = false;
        isPauseResume.value = false;
        isRecording.value = true;
        console.log("录音已恢复");
      } else {
        console.warn("录音器不支持恢复功能");
      }
    } else {
      // 当前是录音状态，执行暂停
      if (typeof rec.pause === "function") {
        rec.pause();
        isPaused.value = true;
        isPauseResume.value = true;
        isRecording.value = false;
        console.log("录音已暂停");
      } else {
        console.warn("录音器不支持暂停功能");
      }
    }
  };

  // 清理资源
  onUnmounted(() => {
    if (rec) {
      try {
        rec.close();
      } catch (err) {
        console.warn("清理录音资源时发生错误:", err);
      }
      rec = null;
      wave = null;
    }
  });

  return {
    startRecording,
    stopRecording,
    pauseRecording,
    isRecording,
    isPaused,
    isPauseResume,
    currentTime,
    error,
    isReady
  };
};
