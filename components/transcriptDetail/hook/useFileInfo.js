import { ref, toRefs } from "vue";
import { useMediaQuery } from "@vueuse/core";
import { isBoolean } from "lodash-es";

export default function useFileInfo(props) {
  const isEditFile = ref(false);
  // 文件信息相关状态
  const {
    fileName,
    isShowTimestamp,
    gmtCreateTime: fileUploadTime
  } = toRefs(props.fileBaseInfo);
  fileUploadTime.value ??= "";
  if (isBoolean(isShowTimestamp.value)) {
    isShowTimestamp.value = +isShowTimestamp.value;
  } else {
    isShowTimestamp.value ??= 1;
  }
  // 格式化时间戳
  const formatSecondsFromMs = (totalSeconds, hourAuto = false) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = parseInt(totalSeconds % 60);

    // 格式化为字符串
    const formattedDays = days > 0 ? `${days}d ` : "";
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    if (days > 0) {
      return `${formattedDays}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    if (hourAuto && hours < 1) {
      return `${formattedMinutes}:${formattedSeconds}`;
    }
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return {
    fileName,
    fileUploadTime,
    isShowTimestamp,
    formatSecondsFromMs,
    isEditFile
  };
}
