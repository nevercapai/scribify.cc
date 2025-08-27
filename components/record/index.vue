<template>
  <div>
    <div
      v-show="!hideRecord"
      ref="element"
      :style="style"
      class="record mt-[36px] mb-[10px] fixed z-[3900] touch-none select-none rounded-[0.625rem] bg-[#F9FAFC] text-black"
    >
      <div
        v-if="!isStopped"
        class="md:px-13 record-content flex w-[36.875rem] justify-center px-4 py-4 sm:px-10"
      >
        <div class="flex w-full flex-col items-center">
          <div class="recording flex items-center text-base mb-2">
            <img
              class="me-2.5 w-[15px]"
              src="/assets/images/home/recording.svg"
              alt=""
            />
            <span class="text-base font-medium">{{ t("FolderPage.buttons.recording") }}</span>
          </div>
          <div class="mb-3 text-2xl tracking-wider">{{ formattedTime }}</div>

          <div class="mb-6 h-5 w-full overflow-hidden" ref="container"></div>

          <div class="flex w-full items-center justify-center">
            <el-tooltip
              :show-arrow="false"
              :content="
                isRecording
                  ? t('FileUploadAndRecording.record.pause')
                  : t('FileUploadAndRecording.record.resume')
              "
            >
              <button
                @click.stop.prevent="toggleRecording"
                class="me-8 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#64748B]"
              >
                <nuxt-img preload v-if="!isRecording" class="ml-0.5 w-[9px]" src="/assets/images/home/play.svg" />
                <nuxt-img preload v-else class="w-[8px]" src="/assets/images/home/pause.svg" />
              </button>
            </el-tooltip>

            <el-tooltip
              :show-arrow="false"
              :content="t('FileUploadAndRecording.record.endRecord')"
            >
              <button
                @click.stop.prevent="stopRecording"
                class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#64748B]"
              >
                <div class="h-3 w-3 rounded-sm bg-subColor-normal"></div>
              </button>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div
        v-if="isStopped"
        class="result-content w-[36.875rem] px-4 py-4 sm:px-8"
      >
        <div
          class="flex w-full flex-wrap items-center justify-between text-sm sm:flex-nowrap"
        >
          <span class="sm:whitespace-nowrap">{{ recordTitle }}</span>
          <span class="sm:whitespace-nowrap">{{ formattedTime }}</span>
          <div
            class="mt-2 flex w-full items-center justify-end sm:mt-0 sm:w-auto sm:flex-row sm:flex-nowrap sm:justify-normal"
          >
            <button
              class="customer-button del-button me-2 sm:whitespace-nowrap"
              @click.stop.prevent="delDialogVisible = true"
            >
              {{ t("FileUploadAndRecording.record.delete") }}
            </button>
            <button
              class="customer-button sm:whitespace-nowrap"
              @click.stop.prevent="transcribeRecord"
            >
              {{ t("FileUploadAndRecording.record.transcribe") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <record-dialog-delete
      v-model="delDialogVisible"
      @confirm="handleDelDialogConfirm"
    />
    <record-dialog-complete
      @confirm="handleCompleteConfirm"
      v-model="completeDialogVisible"
    />
    <record-dialog-result
      v-model="resultDialogVisible"
      :audioBlob="audioBlob"
      :recordTitle="recordTitle"
      :parentId="parentId"
      :formattedTime="formattedTime"
      @close="hideRecord = false"
    />
    <record-dialog-promat
      v-model="promatDialogVisible"
      @confirm="handlePromatConfirm"
    />
    <subscription-modal v-model="showSubModal" />
  </div>
</template>

<script setup lang="ts">
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useDraggable } from "@vueuse/core";
import Utils, { Msg } from "~/utils/tools";
import { useRecorderCore } from "~/components/record/useRecorder";

const props = defineProps<{
  justRecord?: boolean;
  parentId?: string | number;
}>();
const emit = defineEmits<{
  (e: "record", blob: Blob): void;
}>();

const isStopped = ref(false);
const { t } = useI18n();
const dayjs = useDayjs();
const { isNoTimes } = storeToRefs(useSubscriptionStore());
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.guess();
// 最大录音时间（10小时）
// todo 要改
const MAX_RECORDING_TIME = 10 * 60 * 60; // 10小时，单位秒 * 60 * 60

const options = computed(() => ({
  height: 20,
  waveColor: "#E979FA",
  progressColor: "#E979FA",
  barGap: 4,
  barHeight: 4,
  barWidth: 4,
  barRadius: 2,
  cursorWidth: 0,
  normalize: false,
  interact: false // 禁用交互
}));

const containerRef = useTemplateRef("container");
const {
  pauseRecording: waveSurferPauseRecording,
  startRecording: waveSurferStartRecording,
  stopRecording: waveSurferStopRecording,
  currentTime,
  isPauseResume,
  isRecording,
  isPaused
} = useRecorderCore({
  containerRef,
  maxTime: MAX_RECORDING_TIME,
  onTimeOut: (blob: any) => {
    if (blob) {
      audioBlob.value = blob;
      if (props.justRecord) {
        hideRecord.value = true;
      } else {
        isStopped.value = true;
      }
      completeDialogVisible.value = true;
    }
  }
});

const audioBlob = ref<Blob | null>(null);

const recordTitle = ref(
  `${t("FileUploadAndRecording.record.record")} ${dayjs().format("YYYY-MM-DD HH_mm_ss")}.webm`
);

// 格式化时间为 HH_mm_ss
const formattedTime = computed(() => {
  return currentTime.value;
});

// 开始录音
const { endRecord } = useRecordStore();
const startRecording = async () => {
  try {
    waveSurferStartRecording();
  } catch (error) {
    Msg({
      message: t("FileUploadAndRecording.record.permissionDenied"),
      type: "error"
    });
    isRecording.value = false;
    endRecord();
  }
};

onMounted(() => {
  startRecording();
});

// 停止录音并释放资源
const stopRecording = async () => {
  const { blob } = await waveSurferStopRecording();

  audioBlob.value = blob;

  if (props.justRecord) {
    emit("record", {
      audioBlob: audioBlob.value,
      recordTitle: recordTitle.value,
      formattedTime: formattedTime.value
    });
    return;
  }

  isStopped.value = true;
};

// 暂停/继续录音
const toggleRecording = async () => {
  waveSurferPauseRecording();
};

const completeDialogVisible = ref(false);
const handleCompleteConfirm = () => {
  if (props.justRecord) {
    emit("record", {
      audioBlob: audioBlob.value,
      recordTitle: recordTitle.value,
      formattedTime: formattedTime.value
    });
  }
};

// 组件卸载时清除所有资源
onUnmounted(() => {
  if (isRecording.value) {
    stopRecording();
  }
});

const delDialogVisible = ref(false);
function handleDelDialogConfirm() {
  delDialogVisible.value = false;
  endRecord();
}

// 转录录音
const resultDialogVisible = ref(false);
const showSubModal = ref(false);
const router = useRouter();
const localePath = useLocalePath();
const isMobile = Utils.isMobile();
const hideRecord = ref(false);
const transcribeRecord = () => {
  if (isNoTimes.value) {
    if (isMobile) {
      endRecord();
      router.push(localePath("/getPro"));
      return;
    }
    showSubModal.value = true;
    return;
  }
  resultDialogVisible.value = true;
  hideRecord.value = true;
};

const { promatDialogVisible } = storeToRefs(useRecordStore());
watch(
  () => promatDialogVisible.value,
  () => {
    if (promatDialogVisible.value) {
      hideRecord.value = true;
    }
  }
);
const handlePromatConfirm = async (isEnd: boolean) => {
  if (isEnd) {
    if (!isStopped.value) {
      await stopRecording();
    }
    transcribeRecord();
    return;
  }
  hideRecord.value = false;
};
watchEffect(() => {
  hideRecord.value = !!showSubModal.value || !!delDialogVisible.value;
});

const el = useTemplateRef<HTMLElement>("element");
const elWidth = ref(0);
const elHeight = ref(0);
const pageWidth = ref(window.innerWidth);
const pageHeight = ref(window.innerHeight);

const initialPositionX = computed(() => {
  return pageWidth.value / 2 - elWidth.value / 2;
});
const initialPositionY = computed(() => {
  return pageHeight.value - elHeight.value - 40;
});

// Track the initial x position relative to page width (as a percentage)
const xPositionRatio = ref(0.5); // Default to center (50% of page width)

const calcRect = () => {
  if (el.value) {
    const rect = el.value.getBoundingClientRect();
    elWidth.value = rect.width;
    if (!elHeight.value) {
      elHeight.value = rect.height;
      y.value = initialPositionY.value;
    }

    // Update position with correct measurements
    x.value = initialPositionX.value;

    // Calculate the initial ratio
    xPositionRatio.value = (x.value + elWidth.value / 2) / pageWidth.value;
  }
};
watch(
  () => el.value,
  () => {
    calcRect();
  }
);

// Add page resize handler
const handleResize = () => {
  pageWidth.value = window.innerWidth;
  pageHeight.value = window.innerHeight;
  calcRect();
};

// Add window event listener for resize
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

// Update the useDraggable setup to track drag state
const { x, y, style } = useDraggable(el, {
  preventDefault: true,
  initialValue: {
    x: initialPositionX.value,
    y: initialPositionY.value
  },
  onMove: (position) => {
    const minX = 0;
    const minY = 0;

    // Maximum constraints (don't go beyond right or bottom edge)
    const maxX = pageWidth.value - elWidth.value;
    const maxY = pageHeight.value - elHeight.value;

    // Apply constraints to ensure element stays within viewport
    const constrainedX = Math.max(minX, Math.min(maxX, position.x));
    const constrainedY = Math.max(minY, Math.min(maxY, position.y));

    if (position.x > maxX) {
      x.value = maxX;
    }
    if (position.x < minX) {
      x.value = minX;
    }
    if (position.y > maxY) {
      y.value = maxY;
    }
    if (position.y < minY) {
      y.value = minY;
    }
  }
});

const route = useRoute();
watchEffect(async () => {
  if (props.justRecord) return;
  if (route?.path?.includes("/user") || route?.name?.includes("index")) {
    hideRecord.value = true;
    if (isRecording.value) {
      await waveSurferStopRecording();
    }
    endRecord();
  }
});
</script>

<style scoped>
.transition-width {
  transition: width 0.3s ease;
}

.record-content {
  max-width: calc(100vw - 20px);
}

.result-content {
  max-width: calc(100vw - 20px);
}

.recording {
}

:deep(.customer-button) {
  @apply rounded-lg border border-mainColor-900 bg-mainColor-900 px-3 py-1.5 text-sm text-white hover:opacity-80;
}

:deep(.del-button) {
  @apply border border-subColor-normal !bg-subColor-normal !bg-opacity-15 !text-subColor-normal;
}
</style>
