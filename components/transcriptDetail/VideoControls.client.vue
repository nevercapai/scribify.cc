<template>
  <div class="custom-controls flex h-full w-full items-center py-2 text-black">
    <template v-if="onlyShowProgress">
      <!-- 进度条 -->
      <div
        class="progress-wrap flex h-5 w-full cursor-pointer items-center bg-[transparent]"
        @click="handleProgressClick"
        @mouseenter="isHoveringProgress = true"
        @mouseleave="isHoveringProgress = false"
        @mousemove="updateHoverPosition"
      >
        <div
          :class="[
            'progress-container relative mx-2 flex-1 cursor-pointer rounded-full bg-[#E8E8F1]',
            {
              'dynamic-progress': isDesktop,
              'is-loading': showLoading && isMediaLoading
            }
          ]"
          ref="progressContainer"
        >
          <!-- 已播放的进度-->
          <div
            class="progress-bar-played rounded-full bg-mainColor-900"
            :style="progressBarStyle"
          ></div>
          <!-- 缓存进度-->
          <div
            class="progress-bar-cached rounded-full bg-[#C8CACC]"
            :style="progressBarCachedStyle"
          ></div>
          <!-- 拖拽圆圈-->
          <div
            v-if="(isHoveringProgress && isDesktop) || !isDesktop"
            :class="[
              'progress-thumb absolute top-1/2 cursor-pointer rounded-full',
              { 'dynamic-thumb': isDesktop }
            ]"
            :style="progressThumbStyle"
            @mousedown.stop="startDrag"
          ></div>

          <!-- 进度条悬停提示 -->
          <div
            v-if="isHoveringProgress && isDesktop"
            class="progress-tooltip absolute -top-10 rounded px-0 py-0 text-xs"
            :style="tooltipStyle"
          >
            {{ formatTime(hoverTime) }}
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <!-- 播放/暂停按钮 -->
      <div class="play-control relative me-2 ms-1 cursor-pointer">
        <el-tooltip
          :show-arrow="false"
          effect="customized"
          popper-class="popper-class-ZZMG2X2I"
          :content="getTips"
          :offset="6"
        >
          <button
            @click="togglePlay"
            class="play-pause-button flex !h-9 !w-9 items-center rounded-lg hover:bg-fontHover focus:outline-none"
          >
            <div
              v-if="isPlaying"
              class="flex h-6 w-6 items-center justify-center"
            >
              <span
                class="iconfont icon-zanting text-black"
                style="font-size: 1.375rem"
              ></span>
            </div>
            <div v-else class="flex h-6 w-6 items-center justify-center">
              <span
                class="iconfont icon-bofang text-black"
                style="font-size: 1.375rem"
              ></span>
            </div>
          </button>
        </el-tooltip>
        <!-- 播放/暂停悬浮提示 -->
      </div>

      <!-- 已播放时间 -->
      <div class="me-2 ms-2 whitespace-nowrap text-sm text-gray-500">
        {{ formatTime(currentTime) }}
      </div>

      <!-- 进度条 -->
      <div
        class="progress-wrap flex h-5 w-full flex-1 cursor-pointer items-center bg-[transparent]"
        @click="handleProgressClick"
        @mouseenter="isHoveringProgress = true"
        @mouseleave="isHoveringProgress = false"
        @mousemove="updateHoverPosition"
      >
        <div
          :class="[
            'progress-container dynamic-progress relative me-2 ms-2 flex-1 cursor-pointer rounded-full bg-[#E8E8F1]',
            { 'is-loading': isMediaLoading }
          ]"
          ref="progressContainer"
          @click="handleProgressClick"
        >
          <div
            class="progress-bar-played rounded-full bg-mainColor-900"
            :style="progressBarStyle"
          ></div>
          <!-- 缓存进度-->
          <div
            class="progress-bar-cached rounded-full bg-[#C8CACC]"
            :style="progressBarCachedStyle"
          ></div>
          <div
            v-if="isHoveringProgress && isDesktop"
            :class="[
              'progress-thumb dynamic-thumb absolute top-1/2 cursor-pointer rounded-full'
            ]"
            :style="progressThumbStyle"
            @mousedown.stop="startDrag"
          ></div>

          <!-- 进度条悬停提示 -->
          <div
            v-if="isHoveringProgress"
            class="progress-tooltip absolute -top-10 rounded px-0 py-0 text-xs"
            :style="tooltipStyle"
          >
            {{ formatTime(hoverTime) }}
          </div>
        </div>
      </div>
      <!-- 总时长 -->
      <div class="me-2 ms-2 whitespace-nowrap text-sm text-gray-500">
        {{ formatTime(duration) }}
      </div>

      <!-- 音量控制 -->
      <div class="volume-control relative me-5 ms-5 cursor-pointer">
        <el-popover
          placement="top"
          width="2rem"
          trigger="hover"
          :show-arrow="false"
          :offset="6"
          popper-class="!p-0 !min-w-[unset] !shadow-[unset] !border !border-borderColor"
          popper-style="box-shadow: none;color: #000;border: 0.0625rem solid theme('colors.borderColor');border-radius:0.375rem"
        >
          <template #reference>
            <button
              @click="toggleMute"
              class="volume-button flex !h-9 !w-9 items-center rounded-lg hover:bg-fontHover focus:outline-none"
            >
              <span
                v-if="!isMuted && volume > 0.5"
                class="iconfont icon-shipinyinliangda text-black"
                style="font-size: 1.175rem"
              ></span>
              <span
                v-else-if="!isMuted && volume > 0"
                class="iconfont icon-yinliang text-black"
                style="font-size: 1.275rem"
              ></span>
              <span
                v-else
                class="iconfont icon-shipinjingyin text-black"
                style="font-size: 1.275rem"
              ></span>
            </button>
          </template>
          <div class="py-3">
            <!-- 当前音量值显示 -->
            <div class="mb-2 select-none text-center text-xs text-black">
              {{ isMuted ? 0 : Math.round(volume * 100) }}
            </div>

            <!-- 垂直音量调节容器（居中） -->
            <div class="flex w-full items-center justify-center">
              <!-- 垂直音量调节条 -->
              <div
                class="vertical-volume-container relative flex h-24 w-1 cursor-pointer items-center justify-center rounded-full bg-gray-400"
                ref="verticalVolumeContainer"
                @mousedown="startVerticalVolumeDrag"
                @click="changeVerticalVolume"
              >
                <!-- 已调节部分 -->
                <div
                  class="vertical-volume-bar absolute bottom-0 w-full rounded-full bg-mainColor-900"
                  :style="{ height: volumePercentage + '%' }"
                ></div>

                <!-- 调节滑块 -->
                <div
                  class="vertical-volume-thumb absolute h-[0.625rem] w-[0.625rem] rounded-full border-2 border-mainColor-900 bg-white"
                  :style="{
                    bottom: volumePercentage + '%',
                    transform: 'translateY(50%)'
                  }"
                ></div>
              </div>
            </div>
          </div>
        </el-popover>
      </div>

      <!-- 倍速调节 -->
      <div class="playback-rate relative me-5 cursor-pointer">
        <el-popover
          ref="playbackRateRef"
          placement="top"
          width="4.875rem"
          trigger="hover"
          :show-arrow="false"
          :offset="6"
          popper-class="!p-0 !min-w-[unset] !shadow-[unset] !border !border-borderColor"
          popper-style="box-shadow: none;color: #000;border: 0.0625rem solid theme('colors.borderColor');border-radius:0.5rem"
        >
          <template #reference>
            <button
              class="playback-rate-button flex !h-9 !w-11 items-center justify-center rounded-lg hover:bg-fontHover focus:outline-none"
            >
              <span class="text-sm">{{ ratesMap[playbackRate] }}</span>
            </button>
          </template>
          <div class="flex w-full flex-col py-2">
            <button
              v-for="rate in rates"
              :key="rate"
              @click="setPlaybackRate(rate)"
              class="playback-rate-item"
              :class="{
                'playback-rate-active':
                  parseFloat(playbackRate) === parseFloat(rate)
              }"
            >
              {{ rate }}X
            </button>
          </div>
        </el-popover>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { Util, Events } from "xgplayer";
import { useMediaQuery } from "@vueuse/core";
const props = defineProps({
  player: Object,
  onlyShowProgress: {
    type: Boolean,
    default: false
  },
  showLoading: {
    type: Boolean,
    default: true
  }
});
window.p = props.player;
const rates = ref(["3.0", "2.0", "1.5", "1.25", "1.0", "0.75", "0.5"]);
const ratesMap = ref({
  0.5: "0.5X",
  0.75: "0.75X",
  1: "1.0X",
  1.25: "1.25X",
  1.5: "1.5X",
  2: "2.0X",
  3: "3.0X"
});
const isDesktop = useMediaQuery("(min-width: 768px)");
// 控制器状态
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(0.6);
const previousVolume = ref(0.6);
const isMuted = ref(false);
const playbackRate = ref("1.0");
const cachedTime = ref(0);
const isMediaLoading = ref(false);

// UI状态
const progressContainer = ref(null);
const isDraggingProgress = ref(false);
const isHoveringProgress = ref(false);
const hoverTime = ref(0);
const hoverPosition = ref(0);
const verticalVolumeContainer = ref(null);
const dragPlayingState = ref(false); // 记录拖拽开始时的播放状态
const playbackRateRef = ref(null);

// 延时隐藏相关的定时器
let syncInterval = null;

// 拖动节流相关变量
let rafId = null;
let pendingDragUpdate = false;
let lastDragEvent = null;
const throttleThreshold = 16; // 约60fps
const getTips = computed(() => {
  const i18n = props.player.i18n;
  const i18nKeys = props.player.i18nKeys;
  if (isPlaying.value) {
    return i18n[i18nKeys.PAUSE_TIPS];
  }
  return i18n[i18nKeys.PLAY_TIPS];
});

// 检查是否是RTL模式
const isRTL = computed(() => {
  return document.body.dir === "rtl";
});

// 计算属性
const progressPercentage = computed(() => {
  return duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0;
});

const volumePercentage = computed(() => {
  return isMuted.value ? 0 : volume.value * 100;
});

// 进度条样式计算属性
const progressBarStyle = computed(() => {
  if (isRTL.value) {
    return {
      width: progressPercentage.value + "%",
      right: 0,
      left: "auto"
    };
  } else {
    return {
      width: progressPercentage.value + "%"
    };
  }
});
const progressBarCachedStyle = computed(() => {
  const per = (cachedTime.value / duration.value) * 100 || 0;
  if (isRTL.value) {
    return {
      width: per + "%",
      right: 0,
      left: "auto"
    };
  } else {
    return {
      width: per + "%"
    };
  }
});

// 进度条滑块样式计算属性
const progressThumbStyle = computed(() => {
  if (isRTL.value) {
    return {
      right: progressPercentage.value + "%",
      transform: "translate(50%, -50%)"
    };
  } else {
    return {
      left: progressPercentage.value + "%",
      transform: "translate(-50%, -50%)"
    };
  }
});

// 悬浮提示样式计算属性
const tooltipStyle = computed(() => {
  // 容器宽度，如果容器不存在则为0
  const containerWidth = progressContainer.value?.clientWidth || 0;

  if (isRTL.value) {
    // RTL模式下从右侧定位
    return {
      right: containerWidth - hoverPosition.value + "px",
      transform: "translateX(50%)"
    };
  } else {
    // LTR模式下从左侧定位
    return {
      left: hoverPosition.value + "px",
      transform: "translateX(-50%)"
    };
  }
});

// 格式化时间为 MM:SS 格式
const formatTime = (seconds) => {
  return Util.format(seconds);
};

// 节流函数
const throttle = (callback, limit) => {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};

// 播放控制
const togglePlay = () => {
  if (!props.player) return;

  if (isPlaying.value) {
    props.player.pause();
  } else {
    // 如果视频已播放结束，点击播放时从头开始
    if (currentTime.value >= duration.value) {
      props.player.replay();
    } else {
      props.player.play();
    }
  }
  isPlaying.value = !isPlaying.value;
};

// 处理直接点击进度条
const handleProgressClick = (event) => {
  // 检查播放器实例是否存在
  if (!props.player || !progressContainer.value) return;

  // 如果正在拖动滑块，不处理点击事件
  if (isDraggingProgress.value) return;

  // 确保不是点击的滑块，防止冲突
  if (event.target.classList.contains("progress-thumb")) {
    return;
  }

  // 阻止事件冒泡和默认行为
  event.stopPropagation();
  event.preventDefault();

  // 记录当前播放状态
  const wasPlaying = !props.player.paused;

  // 计算新的播放位置
  const rect = progressContainer.value.getBoundingClientRect();
  let offsetX = event.clientX - rect.left;

  // RTL模式下需要反转计算
  if (isRTL.value) {
    offsetX = rect.width - offsetX;
  }

  // 确保offsetX在有效范围内
  offsetX = Math.max(0, Math.min(offsetX, rect.width));
  const percentage = offsetX / rect.width;
  const newTime = Math.max(
    0,
    Math.min(percentage * duration.value, duration.value)
  );

  // 设置播放位置，但不暂停播放器
  if (props.player.seek) {
    // 使用seek方法，保持当前播放状态
    props.player.seek(newTime, wasPlaying ? "play" : "pause");
  } else {
    // 如果没有seek方法，直接设置时间并维持播放状态
    props.player.currentTime = newTime;
    // 确保播放状态不变
    if (wasPlaying && props.player.paused) {
      props.player.play();
    }
  }

  // 更新UI
  currentTime.value = newTime;
};

// 进度条控制
const seek = (event, isDragging = false) => {
  if (!props.player || !progressContainer.value) return;

  // 记录当前播放状态
  const wasPlaying = !props.player.paused;

  const rect = progressContainer.value.getBoundingClientRect();
  let offsetX = event.clientX - rect.left;

  // RTL模式下需要反转计算
  if (isRTL.value) {
    offsetX = rect.width - offsetX;
  }

  const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1); // 限制在0-1之间
  const newTime = percentage * duration.value;

  if (isDragging) {
    // 对于拖动操作，直接设置currentTime属性，确保即时响应
    props.player.currentTime = newTime;
  } else {
    props.player.seek(newTime);
  }

  // 立即更新控制器显示
  currentTime.value = newTime;

  // 根据之前的状态恢复播放或保持暂停
  if (wasPlaying) {
    props.player.play();
  } else {
    props.player.pause();
  }
};

// 更新进度条UI
const updateProgressUI = () => {
  if (
    !pendingDragUpdate ||
    !lastDragEvent ||
    !isDraggingProgress.value ||
    !progressContainer.value ||
    !props.player
  ) {
    rafId = null;
    pendingDragUpdate = false;
    return;
  }

  const event = lastDragEvent;
  const rect = progressContainer.value.getBoundingClientRect();
  let offsetX = event.clientX - rect.left;

  // RTL模式下需要反转计算
  if (isRTL.value) {
    offsetX = rect.width - offsetX;
  }

  offsetX = Math.max(0, Math.min(offsetX, rect.width));
  const percentage = offsetX / rect.width;
  const newTime = Math.max(
    0,
    Math.min(percentage * duration.value, duration.value)
  );

  // 直接设置播放器当前时间，不影响播放状态
  props.player.currentTime = newTime;
  currentTime.value = newTime;

  pendingDragUpdate = false;
  rafId = null;
};

// 处理进度条拖拽
const handleProgressDrag = throttle((event) => {
  if (isDraggingProgress.value && props.player && progressContainer.value) {
    // 检查鼠标位置是否超出容器边界
    const rect = progressContainer.value.getBoundingClientRect();
    let mouseX = event.clientX;

    // 确保鼠标位置在容器范围内，否则使用容器边界值
    if (mouseX < rect.left) {
      mouseX = rect.left;
    } else if (mouseX > rect.right) {
      mouseX = rect.right;
    }

    // 创建一个新的事件对象，使用调整后的鼠标位置
    const adjustedEvent = new MouseEvent("mousemove", {
      clientX: mouseX,
      clientY: event.clientY
    });

    // 保存调整后的最后一次事件
    lastDragEvent = adjustedEvent;

    // 如果没有待处理的更新，则请求动画帧
    if (!pendingDragUpdate) {
      pendingDragUpdate = true;
      rafId = requestAnimationFrame(updateProgressUI);
    }

    // 不再暂停播放器，保持拖拽前的播放状态

    event.preventDefault();
    event.stopPropagation();
  }
}, throttleThreshold);

// 开始拖拽进度条
const startDrag = (event) => {
  if (!props.player) return;

  // 记录拖拽开始时的播放状态
  dragPlayingState.value = !props.player.paused;

  // 不再暂停播放器，保持当前播放状态

  isDraggingProgress.value = true;
  document.addEventListener("mousemove", handleProgressDrag);
  document.addEventListener("mouseup", stopDrag, { once: true });

  // 添加拖动中的样式
  const progressThumb = event.currentTarget;
  if (progressThumb) {
    progressThumb.classList.add("dragging");
    document.body.style.cursor = "grabbing";
  }

  // 立即更新位置
  const rect = progressContainer.value.getBoundingClientRect();
  let offsetX = event.clientX - rect.left;

  // RTL模式下需要反转计算
  if (isRTL.value) {
    offsetX = rect.width - offsetX;
  }

  const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
  const newTime = Math.max(
    0,
    Math.min(percentage * duration.value, duration.value)
  );

  // 设置新的播放位置
  props.player.currentTime = newTime;
  currentTime.value = newTime;

  event.preventDefault();
  event.stopPropagation();
};

// 停止拖拽进度条
const stopDrag = (event) => {
  if (!isDraggingProgress.value || !props.player) return;

  // 取消任何待处理的动画帧请求
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  pendingDragUpdate = false;

  // 立即同步最终位置
  if (event && progressContainer.value) {
    const rect = progressContainer.value.getBoundingClientRect();
    let offsetX = event.clientX - rect.left;

    // RTL模式下需要反转计算
    if (isRTL.value) {
      offsetX = rect.width - offsetX;
    }

    offsetX = Math.max(0, Math.min(offsetX, rect.width));
    const percentage = offsetX / rect.width;
    const newTime = Math.max(
      0,
      Math.min(percentage * duration.value, duration.value)
    );
    // 使用seek方法，保持当前播放状态
    if (props.player.seek) {
      props.player.seek(newTime, dragPlayingState.value ? "play" : "pause");
    } else {
      // 直接设置播放器时间
      props.player.currentTime = newTime;

      // 确保播放状态与拖动开始前一致
      if (dragPlayingState.value && props.player.paused) {
        props.player.play();
      }
    }

    currentTime.value = newTime;
  }

  // 恢复样式
  const progressThumb = document.querySelector(".progress-thumb");
  if (progressThumb) {
    progressThumb.classList.remove("dragging");
  }

  document.body.style.cursor = "";

  // 清理事件监听和状态
  isDraggingProgress.value = false;
  document.removeEventListener("mousemove", handleProgressDrag);
  document.removeEventListener("mouseup", stopDrag);
};

// 音量控制
const toggleMute = () => {
  if (!props.player) return;
  if (isMuted.value || volume.value === 0) {
    isMuted.value = false;
    volume.value = previousVolume.value > 0 ? previousVolume.value : 0.5;
  } else {
    previousVolume.value = volume.value;
    isMuted.value = true;
  }
  props.player.muted = isMuted.value;
  props.player.volume = volume.value;
};

// 更新悬停位置
const updateHoverPosition = (event) => {
  if (isHoveringProgress.value && progressContainer.value) {
    const rect = progressContainer.value.getBoundingClientRect();
    let position = event.clientX - rect.left;

    // 确保position在容器范围内
    position = Math.max(0, Math.min(position, rect.width));

    // 保存原始位置用于CSS定位
    hoverPosition.value = position;

    // 计算悬停时间，在RTL模式下需要反转计算
    if (isRTL.value) {
      // RTL模式：从右侧计算时间位置
      const rtlPosition = rect.width - position;
      hoverTime.value = Math.max(
        0,
        Math.min((rtlPosition / rect.width) * duration.value, duration.value)
      );
    } else {
      // LTR模式：从左侧计算时间位置
      hoverTime.value = Math.max(
        0,
        Math.min((position / rect.width) * duration.value, duration.value)
      );
    }
  }
};

// 垂直音量控制
const changeVerticalVolume = (event) => {
  if (!props.player || !verticalVolumeContainer.value) return;

  const volumeContainer = verticalVolumeContainer.value;
  const rect = volumeContainer.getBoundingClientRect();
  const offsetY = rect.bottom - event.clientY;
  const containerHeight = rect.height;
  const newVolume = Math.min(Math.max(offsetY / containerHeight, 0), 1);

  volume.value = newVolume;
  props.player.volume = newVolume;

  isMuted.value = newVolume <= 0;
  props.player.muted = isMuted.value;
};

// 开始拖拽垂直音量控制
const startVerticalVolumeDrag = (event) => {
  changeVerticalVolume(event);

  document.addEventListener("mousemove", handleVerticalVolumeDrag);
  document.addEventListener("mouseup", stopVerticalVolumeDrag);
};

// 处理垂直音量拖拽
const handleVerticalVolumeDrag = (event) => {
  changeVerticalVolume(event);
};

// 停止拖拽垂直音量控制
const stopVerticalVolumeDrag = () => {
  document.removeEventListener("mousemove", handleVerticalVolumeDrag);
  document.removeEventListener("mouseup", stopVerticalVolumeDrag);
};

// 设置播放速度
const setPlaybackRate = (rate) => {
  if (!props.player) return;

  playbackRate.value = rate;
  props.player.playbackRate = parseFloat(rate);
  playbackRateRef.value?.hide();
};

// 同步播放器状态到控制器
const syncPlayerToControls = () => {
  if (!props.player) return;

  // 同步总时长
  const customDuration = props.player.config.customDuration;
  const durationReal = props.player.duration;
  duration.value = Math.min(customDuration, durationReal);
  if (duration.value === 0) return;
  // 同步当前播放时间
  if (!isDraggingProgress.value) {
    currentTime.value = props.player.currentTime || 0;
  }
  // 同步缓存的时间
  let _end = props.player.bufferedPoint.end;
  cachedTime.value = Util.adjustTimeByDuration(
    _end,
    duration.value,
    props.player.ended
  );
  isMediaLoading.value = props.player.isTmLoading || false;
  // 同步播放状态
  isPlaying.value = !props.player.paused;
  // 同步音量
  volume.value = props.player.volume;
  isMuted.value = props.player.muted || props.player.volume === 0;
  if (props.player.muted) {
    previousVolume.value = volume.value;
  }

  // 同步播放速度
  playbackRate.value = props.player.playbackRate.toString();
  if (currentTime.value >= duration.value) {
    currentTime.value = duration.value;
    props.player.pause();
    props.player.emit(Events.ENDED);
  }
};

// 监听播放器实例变化
watch(
  () => props.player,
  (newPlayer, oldPlayer) => {
    if (newPlayer) {
      // 初始同步
      syncPlayerToControls();

      // 设置同步间隔
      if (syncInterval) clearInterval(syncInterval);
      syncInterval = setInterval(syncPlayerToControls, 500);
    }
  },
  { immediate: true }
);

// 组件卸载时清理
onUnmounted(() => {
  if (syncInterval) clearInterval(syncInterval);
  if (rafId) cancelAnimationFrame(rafId);

  document.removeEventListener("mousemove", handleProgressDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("mousemove", handleVerticalVolumeDrag);
  document.removeEventListener("mouseup", stopVerticalVolumeDrag);
});
</script>

<style scoped lang="scss">
/* RTL支持 */
[dir="rtl"] .custom-controls {
  direction: rtl;
}

[dir="rtl"] .progress-tooltip {
  direction: ltr; /* 时间显示保持从左到右 */
}

[dir="rtl"] .playback-rate-button svg {
  margin-left: 0;
  margin-right: 0;
  margin-inline-end: 0.25rem;
}

[dir="rtl"] .play-pause-tooltip,
.progress-container {
  position: relative;
  overflow: visible;
  border-radius: 0.25rem;
  &.is-loading {
    background-image: linear-gradient(
      -45deg,
      #23282f99 25%,
      #0000 25%,
      #0000 50%,
      #23282f99 50%,
      #23282f99 75%,
      #0000 75%,
      #0000
    );
    background-repeat: repeat-x;
    background-size: 25px 25px;
    animation: tm-progress 1s linear infinite;
  }
}
@keyframes tm-progress {
  100% {
    background-position: 25px 0;
  }
}
.progress-bar-played {
  height: 100%;
  border-radius: 0.25rem;
  transition: height 0.2s ease;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
}
.progress-bar-cached {
  height: 100%;
  border-radius: 0.25rem;
  transition: height 0.2s ease;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}

.progress-thumb {
  /* transform在计算属性中处理 */
  box-shadow: none;
  background-color: white; /* 内环为白色 */
  border-style: solid;
  border-color: theme("colors.mainColor.900");
  opacity: 1;
  cursor: pointer;
  z-index: 50;
}

.progress-thumb:active {
  cursor: pointer;
}

.progress-wrap:hover .progress-thumb {
  /* transform在计算属性中处理 */
  box-shadow: none;
  opacity: 1;
}

/* 拖动时禁用过渡效果 */
.no-transition {
  transition: none !important;
}

/* 拖动中的滑块样式 */
.progress-thumb.dragging {
  cursor: pointer;
  box-shadow: none;
  /* transform在计算属性中处理 */
  opacity: 1;
}

.volume-tooltip {
  opacity: 0;
  transition: opacity 0.2s;
}

.progress-tooltip {
  color: #fff;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 10;
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 0.25rem;
  padding: 0.375rem;
}

.progress-wrap:hover .progress-tooltip {
  opacity: 1;
}

.playback-rate-item {
  margin: 0 0.5rem;
  color: #000;
  border-radius: 0.5rem;
  height: 1.75rem;
  padding: 0 0.375rem;
  line-height: 1.75rem;
  text-align: center;
  white-space: nowrap;
}

.playback-rate-item:hover {
  background-color: theme("colors.boxBgColor");
}

.playback-rate-active {
  color: theme("colors.mainColor.900");
}

.volume-control {
  position: relative;
  padding: 0.25rem; /* 4px / 16 = 0.25rem */
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem; /* 36px / 16 = 2.25rem */
  min-height: 2.25rem; /* 36px / 16 = 2.25rem */
  transition: none;
}

.volume-control:hover {
  background-color: transparent;
}

.volume-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.play-control {
  position: relative;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  min-width: 2.25rem;
  min-height: 2.25rem;
  transition: none;
}

.play-control:hover .play-pause-tooltip {
  opacity: 1;
}

.play-pause-button {
  transition: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.play-pause-tooltip {
  transition: opacity 0.15s;
  white-space: nowrap;
  color: #fff;
  background-color: rgb(0, 0, 0);
  border-radius: 0.25rem;
  padding: 0.375rem;
}

.vertical-volume-container {
  transition: background-color 0.2s;
  box-shadow: inset 0 0 0.1875rem rgba(0, 0, 0, 0.3); /* 3px */
  width: 0.25rem !important; /* 4px */
}

.vertical-volume-container:hover {
  background-color: #4b5563;
}

.vertical-volume-bar {
  transition: height 0.1s ease;
  box-shadow: 0 0 0.125rem rgba(59, 130, 246, 0.5); /* 2px */
}

.vertical-volume-thumb {
  box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.6); /* 1px 4px */
  transition:
    transform 0.15s,
    box-shadow 0.15s,
    width 0.15s,
    height 0.15s;
  background-color: white;
}

.vertical-volume-container:hover .vertical-volume-thumb {
  transform: translateY(50%) scale(1.2);
  box-shadow: 0 0.0625rem 0.375rem rgba(59, 130, 246, 0.8); /* 1px 6px */
}

.dynamic-thumb {
  width: 0.5rem; /* 缩小为原来的一半: 8px */
  height: 0.5rem; /* 缩小为原来的一半: 8px */
  border-width: 0.15625rem; /* 原来边框的一半: 2.5px */
}

.progress-wrap:hover .dynamic-thumb,
.dynamic-thumb.dragging {
  width: 1rem; /* 恢复原大小: 16px */
  height: 1rem; /* 恢复原大小: 16px */
  border-width: 0.28125rem; /* 恢复原边框: 4.5px */
}

.progress-wrap {
  .progress-container {
    height: 0.3125rem; /* 7px / 16 = 0.3125rem */
    &.dynamic-progress {
      height: 0.1875rem;
    }
  }
  &:hover {
    .dynamic-progress {
      height: 0.3125rem !important;
    }
  }
}

.progress-thumb:not(.dynamic-thumb) {
  width: 1rem; /* 16px */
  height: 1rem; /* 16px */
  border-width: 0.28125rem; /* 4.5px */
}
</style>
<style lang="scss">
.el-popper.is-customized.popper-class-ZZMG2X2I {
  transition: opacity 0.15s;
  white-space: nowrap;
  color: #fff;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 0.25rem;
  padding: 0.375rem;
  line-height: 1rem;
}
</style>
