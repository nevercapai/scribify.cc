<template>
  <transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="transform translate-x-full opacity-0"
    enter-to-class="transform translate-x-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="transform translate-x-0 opacity-100"
    leave-to-class="transform translate-x-full opacity-0"
  >
    <div
      v-if="isShow"
      class="export fixed bottom-5 right-5 z-[100] w-80 rounded-lg border border-mainColor-900 bg-white py-5"
    >
      <div class="mb-2 flex justify-between px-5">
        <span class="text-sm font-semibold">{{ title }}</span>
        <div
          class="cursor-pointer"
          @click="handleShowDialog"
          :title="t('HomePage.export.cancel')"
        >
          <el-icon size="16" color="black"><Close /></el-icon>
        </div>
      </div>

      <div class="max-h-[50vh]">
        <div
          v-for="item in renderData"
          :key="item.id"
          class="group mb-2 flex items-center px-5 py-1.5 last:mb-0 hover:bg-hoverColor-light"
        >
          <div class="flex-1">
            <div class="text-sm">{{ item.title }}</div>
          </div>

          <!-- 进度图标区域 -->
          <div class="h-4 w-4">
            <!-- 当进度未完成时，hover隐藏进度条 -->
            <div
              :class="[
                'progress transition-all',
                item.progress !== 100 ? 'group-hover:hidden' : ''
              ]"
            >
              <el-progress
                v-if="item.progress !== 100"
                type="circle"
                :percentage="item.progress"
                :width="16"
                :show-text="false"
                :stroke-width="2"
                :color="item.progress > 100 ? '#ea6a6a' : '#6f4cf0'"
                :status="item.progress > 100 ? 'exception' : undefined"
              />
              <div
                v-else
                class="flex h-4 w-4 items-center justify-center rounded-lg bg-mainColor-900"
              >
                <el-icon size="12" color="white"><Check /></el-icon>
              </div>
            </div>

            <!-- 删除按钮，仅在进度未完成时显示 -->
            <div
              v-if="item.progress !== 100"
              class="close hidden h-4 w-4 cursor-pointer items-center justify-center transition-all group-hover:flex"
              @click="deleteTask(item.id)"
              :title="t('HomePage.export.cancel')"
            >
              <div
                class="flex h-4 w-4 items-center justify-center rounded-lg bg-menuColor-deepen"
              >
                <el-icon :size="12" color="white"><Close /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <export-del-dialog v-model="delDialog" @close="handleClose" />
</template>

<script setup lang="ts">
import { Close, Check, Delete } from "@element-plus/icons-vue";
import { useTool } from "~/components/export/useTool";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useUserStore } from "~/stores/useUserStore";
const { t } = useI18n();
const { exportTaskIds } = storeToRefs(useExportStore());
const { clearExportTask, removeExportTask } = useExportStore();

const isShow = ref(false);
watchEffect(() => {
  isShow.value = Object.keys(exportTaskIds.value).length > 0;
});

// 存储每个任务的进度状态
const progressMap = ref<Record<string, number>>({});

const renderData = ref<
  {
    title: string;
    progress: number;
    id: string;
    fileName: string;
  }[]
>([]);

const { startFakeProgress, downloadFile } = useTool();

const title = computed(() => {
  if (renderData.value.some((e) => e.progress === 100)) {
    return t("HomePage.export.title2");
  }
  return t("HomePage.export.title");
});

// 先修改轮询逻辑
const isFetching = ref(false);
const stopPolling = ref(false);
const route = useRoute();
const { userInfo } = storeToRefs(useUserStore());
const isLogin = computed(() => {
  return !route.query.shareId;
});

const delDialog = ref(false);
const handleShowDialog = () => {
  delDialog.value = true;
};
const handleClose = () => {
  delDialog.value = false;
  clearExportTask();
  renderData.value = [];
};

watchEffect(() => {
  if (
    route.path.includes("/user") ||
    (route.path.includes("/") && !userInfo.value?.userInfoVO)
  ) {
    handleClose();
  }
});
const fetchExportStatus = async () => {
  // 如果已经标记停止或没有任务，则不再继续轮询
  if (stopPolling.value || !renderData.value.length) {
    isFetching.value = false;
    return;
  }

  isFetching.value = true;
  const { useFolderApi } = await import("~/api/folder");

  // 只获取未完成的任务ID (进度小于100的)
  const pendingTaskIds = renderData.value
    .filter((item) => item.progress < 100)
    .map((item) => item.id);

  // 如果没有待处理的任务，停止轮询
  if (!pendingTaskIds.length) {
    isFetching.value = false;
    return;
  }

  try {
    let res;
    if (!isLogin.value) {
      res = await useFolderApi.asyncExportStatusWithOutToken({
        exportTaskIdList: pendingTaskIds,
        userId: String(route.query.shareId)
      });
    } else {
      res = await useFolderApi.asyncExportStatus({
        exportTaskIdList: pendingTaskIds
      });
    }

    if (res.length) {
      for (const item of res) {
        if (item.status.toString() === "-1") {
          progressMap.value[item.id] = 101;
          break;
        }
        if (item.targetUrl) {
          const info = renderData.value.find((e) => e.id === item.id);
          downloadFile(item.targetUrl, info?.fileName);
          // 标记任务完成
          progressMap.value[item.id] = 100;
        }
      }
    }
  } catch (error) {
    console.error("export error:", error);
  }

  // 检查是否需要继续轮询
  const hasUnfinishedTasks = renderData.value.some(
    (item) => item.progress < 100
  );

  if (hasUnfinishedTasks && !stopPolling.value) {
    setTimeout(() => {
      fetchExportStatus();
    }, 3000);
  } else {
    isFetching.value = false;
  }
};

// 修改监听逻辑
watch(
  () => renderData.value,
  (newValue) => {
    // 当有未完成的任务且当前未在轮询时，开始轮询
    const hasUnfinishedTasks = newValue.some((item) => item.progress < 100);

    if (hasUnfinishedTasks && !isFetching.value) {
      stopPolling.value = false; // 重置停止标志
      fetchExportStatus();
    }
  },
  { deep: true }
);

// 当组件卸载时停止轮询
onBeforeUnmount(() => {
  stopPolling.value = true;
});

// 修改任务完成后的逻辑
watchEffect(() => {
  const entries = Object.entries(exportTaskIds.value);

  renderData.value = entries.map(([exportId, exportInfo]) => {
    // 获取或初始化进度
    if (!progressMap.value[exportId]) {
      progressMap.value[exportId] = 0;
      // 启动假进度条
      startFakeProgress(progressMap, exportId);
    }

    const progress = progressMap.value[exportId];
    const isCompleted = progress === 100;

    // 修改这里，不要立即删除已完成的任务
    // 而是在3秒后标记完成状态，但保留在renderData中
    if (isCompleted) {
      setTimeout(() => {
        // 只从progressMap中删除，但保留在exportTaskIds中一段时间
        delete progressMap.value[exportId];
        // 在这里延迟删除exportTask
        removeExportTask(exportId);
      }, 3000);
    }

    // 根据任务数量、导出数量和状态选择文案
    let title = "";
    const exportCount = exportInfo.num;
    if (exportCount === 1) {
      title = isCompleted
        ? t("HomePage.export.singleSuccessContent")
        : t("HomePage.export.singleLoadingContent");
    } else {
      title = isCompleted
        ? t("HomePage.export.successContent", { num: exportCount })
        : t("HomePage.export.loadingContent", { num: exportCount });
    }

    return {
      title,
      progress,
      id: exportId,
      fileName: exportInfo.fileName
    };
  });
});

// 删除单个任务
const deleteTask = (exportId: string) => {
  // 先删除进度状态
  delete progressMap.value[exportId];
  // 调用store方法删除任务
  removeExportTask(exportId);
};
</script>

<style scoped>
@import "~/layouts/homeMixin.css";
.export {
  box-shadow: 0 0 0.3125rem 0 rgba(0, 0, 0, 0.14);
}
</style>
