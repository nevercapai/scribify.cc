import { Sniffer } from "xgplayer";
import { onUnmounted } from "vue";

export default function useKeyEvent(player) {
  const playPauseHandle = (event) => {
    if (player.value && (event.keyCode === 32 || event.code === "Space")) {
      event.preventDefault();
      const isPlaying = !player.value.paused;
      console.warn("🚀 ~ 播放器播放状态: 🚀", isPlaying);
      isPlaying ? player.value.pause() : player.value.play();
    }
  };
  // 监听ipad 的键盘空格事件
  onMounted(async () => {
    await nextTick();
    console.warn("🚀 ~ 当前设备的os信息 🚀", Sniffer.os);
    if (Sniffer.os.isIpad) {
      document.addEventListener("keydown", playPauseHandle);
    }
  });
  onUnmounted(() => {
    if (Sniffer.os.isIpad) {
      document.removeEventListener("keydown", playPauseHandle);
    }
  });
  return {};
}
