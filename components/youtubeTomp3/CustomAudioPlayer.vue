<template>
  <div class="custom-audio-player transparent-player">
    <audio
      ref="audioRef"
      :src="modelValue"
      @loadedmetadata="onLoadedMetadata"
      @timeupdate="onTimeUpdate"
      @ended="onEnded"
    ></audio>

    <div class="player-controls">
      <!-- 播放/暂停按钮 -->
      <button class="ctrl-btn" @click="togglePlay">
        {{ isPlaying ? "❚❚" : "▶" }}
      </button>

      <!-- 时间显示 -->
      <span class="time-display"
        >{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span
      >

      <!-- 进度条 -->
      <div class="progress-container" @click="onProgressClick">
        <div class="progress-bar">
          <div
            class="progress-filled"
            :style="{ width: progressPercent + '%' }"
          ></div>
        </div>
      </div>

      <!-- 音量控制 -->
      <div class="volume-container">
        <button class="volume-btn" @click="toggleMute">
          {{ isMuted ? "🔇" : volumeIcon }}
        </button>
        <input
          type="range"
          class="volume-slider"
          min="0"
          max="1"
          step="0.01"
          :value="volume"
          @input="onVolumeChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

// 定义组件的 props
interface Props {
  modelValue: string;
}

const props = defineProps<Props>();

// 定义事件
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// 音频元素引用
const audioRef = ref<HTMLAudioElement | null>(null);

// 状态变量
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(1);
const isMuted = ref(false);
const progressPercent = ref(0);

// 计算音量图标
const volumeIcon = computed(() => {
  if (volume.value === 0 || isMuted.value) return "🔇";
  if (volume.value < 0.3) return "🔈";
  if (volume.value < 0.6) return "🔉";
  return "🔊";
});

// 格式化时间显示
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

// 播放/暂停切换
const togglePlay = () => {
  if (!audioRef.value) return;

  if (isPlaying.value) {
    audioRef.value.pause();
  } else {
    audioRef.value.play().catch((err) => {
      console.error("播放失败:", err);
    });
  }
  isPlaying.value = !isPlaying.value;
};

// 静音切换
const toggleMute = () => {
  if (!audioRef.value) return;

  isMuted.value = !isMuted.value;
  audioRef.value.muted = isMuted.value;
};

// 音量变化处理
const onVolumeChange = (e: Event) => {
  if (!audioRef.value) return;

  const target = e.target as HTMLInputElement;
  const newVolume = parseFloat(target.value);
  volume.value = newVolume;
  audioRef.value.volume = newVolume;

  // 如果有音量，则取消静音
  if (newVolume > 0 && isMuted.value) {
    isMuted.value = false;
    audioRef.value.muted = false;
  }
};

// 进度条点击处理
const onProgressClick = (e: MouseEvent) => {
  if (!audioRef.value) return;

  const progressBar = e.currentTarget as HTMLElement;
  const rect = progressBar.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  const newTime = pos * duration.value;

  audioRef.value.currentTime = newTime;
  currentTime.value = newTime;
  progressPercent.value = pos * 100;
};

// 音频元数据加载完成
const onLoadedMetadata = () => {
  if (!audioRef.value) return;
  duration.value = audioRef.value.duration;
};

// 时间更新处理
const onTimeUpdate = () => {
  if (!audioRef.value) return;
  currentTime.value = audioRef.value.currentTime;
  progressPercent.value = (audioRef.value.currentTime / duration.value) * 100;
};

// 播放结束处理
const onEnded = () => {
  isPlaying.value = false;
  currentTime.value = 0;
  progressPercent.value = 0;
};

// 监听音频源变化
watch(
  () => props.modelValue,
  () => {
    if (isPlaying.value && audioRef.value) {
      // 重置播放状态
      isPlaying.value = false;
      currentTime.value = 0;
      progressPercent.value = 0;
    }
  }
);

// 组件挂载时的处理
onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = volume.value;
  }
});

// 组件卸载时的清理
onUnmounted(() => {
  if (audioRef.value) {
    audioRef.value.pause();
  }
});
</script>

<style scoped lang="scss">
.custom-audio-player {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 1) 100%
  ); /* 垂直渐变背景，可控制每个位置的颜色和透明度 */
  padding-top: 24px;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  backdrop-filter: blur(10px);
  // border: 1px solid rgba(255, 255, 255, 0.1);
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.ctrl-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.time-display {
  color: white;
  font-size: 14px;
  min-width: 100px;
  font-family: monospace;
}

.progress-container {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
}

.progress-bar {
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
}

.progress-filled {
  height: 100%;
  background: white;
  width: 0%;
  transition: width 0.1s;
}

.volume-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.volume-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.volume-slider {
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .player-controls {
    flex-direction: column;
    align-items: flex-start;
  }

  .progress-container {
    width: 100%;
  }

  .time-display {
    order: -1;
  }
}
</style>
