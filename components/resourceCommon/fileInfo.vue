<template>
  <div class="flex min-h-16 w-full items-center justify-between rounded-lg border border-[#E2E4E6] p-4 text-base">
    <div class="flex flex-1 flex-col">
      <div class="flex">
        <div class="flex flex-1 flex-wrap items-center justify-between">
          <div class="flex flex-1 items-center">
            <div
              data-no-detection="true"
              x-ms-format-detection="none"
              format-detection="telephone=no,date=no,address=no,email=no"
              class="max-w-48 overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-96"
            >
              <span class="name" :title="fileInfo.name">{{ fileInfo.name }}</span>
            </div>
            <span class="mx-1">|</span>
            <span class="flex-shrink-0">{{ fileInfo.detailSize }}</span>
          </div>

          <div class="upload-item flex w-44 items-center justify-start md:justify-end">
            <div v-if="fileInfo.status === 'success'" class="me-4 flex h-4 items-center justify-center text-thirdColor">
              <span class="iconfont icon-duihao text-xs text-thirdColor"></span>
            </div>
            <div class="flex w-full flex-row items-center" v-else-if="fileInfo.status === 'error'">
              <span class="me-1 text-xs text-subColor-normal sm:text-sm">
                {{ t("FolderPage.table.failed") }}
              </span>
            </div>
            <el-progress
              :stroke-width="8"
              class="upload-progress flex-1"
              v-else
              striped
              striped-flow
              :percentage="fileInfo.progress || 0"
            />
          </div>
        </div>
        <div class="operation flex items-center" v-if="isDesktop">
          <!-- 重试  -->
          <el-tooltip
            v-if="fileInfo.status === 'error'"
            effect="dark"
            :content="t('FileUploadAndRecording.upload.retry')"
            placement="bottom"
          >
            <div
              class="me-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg hover:bg-hoverColor-deepen"
              :title="t('FileUploadAndRecording.upload.retry')"
              @click="uploadRetry"
            >
              <span class="iconfont icon-retry text-xs md:text-sm"></span>
            </div>
          </el-tooltip>
          <!-- 修改  -->
          <el-tooltip
            v-if="fileInfo.status === 'error'"
            effect="dark"
            :content="t('FileUploadAndRecording.upload.edit')"
            placement="bottom"
          >
            <div
              :title="t('FileUploadAndRecording.upload.edit')"
              class="me-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg hover:bg-hoverColor-deepen"
              @click="uploadEdit"
            >
              <span class="iconfont icon-bianji text-xs md:text-sm"></span>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" :content="t('FileUploadAndRecording.upload.delete')" placement="bottom">
            <div
              :title="t('FileUploadAndRecording.upload.delete')"
              class="me-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg hover:bg-hoverColor-deepen"
              @click="handleRemove"
            >
              <span class="iconfont icon-shanchu text-sm"></span>
            </div>
          </el-tooltip>
        </div>
        <upload-operation-cell
          v-else
          :row-data="fileInfo"
          @operation="(key) => operationCellHandle(key, item, index)"
        />
      </div>
      <div
        v-if="fileInfo.status === 'error' && fileInfo.errorText"
        class="flex flex-col leading-5 text-subColor-normal md:leading-6"
      >
        <span class="errorText-tips"> {{ fileInfo.errorText }}</span>
        <div class="flex">
          <span
            v-if="fileInfo.isGooglePrivate"
            class="op cursor-pointer text-mainColor-900 underline-offset-4 md:hover:font-bold md:hover:underline"
          >
            ({{ t("FileUploadAndRecording.upload.howToSetup") }})
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";
const isDesktop = useMediaQuery("(min-width: 768px)", { ssrWidth: 1280 });
const { t } = useI18n();
const props = defineProps({
  type: {
    type: Number,
    required: true
  },
  fileInfo: {
    type: Object,
    required: true
  }
});
const handleRemove = () => {
  emit("handleRemove", props.type);
};
const uploadRetry = () => {
  emit("uploadRetry", props.type);
};
const uploadEdit = () => {
  emit("uploadEdit", props.type);
};
const operationCellHandle = (key) => {
  if (key === "retry") {
    uploadRetry();
  } else if (key === "edit") {
    uploadEdit();
  } else if (key === "del") {
    handleRemove();
  }
};
const emit = defineEmits(["handleRemove", "uploadRetry", "uploadEdit"]);
</script>

<style lang="scss" scoped>
[dir="rtl"] .upload-item :deep(.el-progress) {
  .el-progress-bar {
    transform: rotate(180deg);
  }
  .el-progress__text {
    margin-left: 0;
    margin-right: 0.5rem;
  }
}
</style>
