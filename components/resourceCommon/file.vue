<template>
  <div class="upload-file flex w-full flex-col items-center">
    <el-upload
      drag
      action=""
      class="w-full"
      :multiple="false"
      :accept="accept"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="handleFileChange"
    >
      <div class="flex h-full flex-col items-center text-center">
        <span class="iconfont icon-shangchuan mb-5 text-2xl text-mainColor-900"></span>
        <p class="tip mb-1 text-sm text-black">
          <span v-if="isDesktop">{{ t("FileUploadAndRecording.upload.file.tip1") }}</span>
          <span v-else>
            {{ t("FileUploadAndRecording.upload.file.tip2") }}
          </span>
        </p>

        <div class="type flex flex-wrap justify-center text-xs text-fontColor">
          <span v-for="(type, index) in fileTypes" :key="index">
            {{ type }}<span v-show="index < fileTypes.length - 1">,&nbsp;</span>
          </span>
        </div>
      </div>
    </el-upload>

    <input
      type="file"
      ref="fileInput"
      class="hidden"
      :multiple="false"
      :accept="accept"
      @change="handleAddFileManually"
    />
  </div>
</template>

<script setup>
import { Msg } from "~/utils/tools";
import { useMediaQuery } from "@vueuse/core";
const isDesktop = useMediaQuery("(min-width: 768px)", { ssrWidth: 1280 });
const { t } = useI18n();
const fileInput = useTemplateRef("fileInput");
const props = defineProps({
  useUploadValidate: {
    type: Boolean,
    default: false
  }
});

const { fileTypes } = storeToRefs(useUploadStore());
const accept = computed(() => {
  const type = fileTypes.value.map((type) => `.${type}`).join(", ");
  return `${type}, .mpg`;
});

const handleFileChange = async (uploadFile) => {
  await beforeUpload(uploadFile.raw);
  emits("fileChange", uploadFile.raw);
};

const emits = defineEmits(["fileChange"]);
// 上传前校验
const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    if (!props.useUploadValidate) return resolve(true);
    if (file.size > 5 * 1024 * 1024 * 1024) {
      Msg({
        message: t("FileUploadAndRecording.upload.tooLarge"),
        type: "error"
      });
      return reject(false);
    }

    const isMimeValid = [
      ...fileTypes.value,
      "webm",
      "x-m4a",
      "quicktime",
      "vnd.dlna.adts",
      "x-ms-wma",
      "x-ms-wmv"
    ].includes(file.type?.split("/")[1]?.toLowerCase());

    // 返回结果
    if (!isMimeValid) {
      Msg({
        message: t("FileUploadAndRecording.upload.fileFormat"),
        type: "error"
      });
      return reject(false);
    }

    resolve(true);
  });
};
const handleAddFileManually = async (e) => {
  let files = e.target.files;
  if (files) {
    const file = files[0];
    await beforeUpload(file);
    emits("fileChange", file);
  }
  e.target.value = "";
};
const manualAdd = () => {
  fileInput.value?.click();
};
defineExpose({
  manualAdd
});
</script>

<style scoped>
:deep(.el-upload-dragger) {
  @apply flex h-40 w-full flex-1 items-center justify-center rounded-lg border border-dashed border-mainColor-900 bg-mainColor-900 bg-opacity-5;
  transition: all 0.3s;
}

:deep(.el-upload:focus .el-upload-dragger) {
  @apply border-mainColor-900;
}

:deep(.el-divider) {
  @apply border-borderColor;
}
</style>
