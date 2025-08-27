<template>
  <div class="upload-file flex w-full flex-col items-center">
    <el-upload
      drag
      action=""
      class="w-full"
      :multiple="!isFreeUser"
      :accept="accept"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="handleFileChange"
    >
      <div class="flex flex-col items-center text-center h-full">
        <span
          class="iconfont icon-shangchuan mb-5 text-2xl text-mainColor-900"
        ></span>
        <p class="tip mb-1 text-sm text-black">
          <span v-if="!isMobile && !isMobileFromIndex">{{
              t("FileUploadAndRecording.upload.file.tip1")
            }}</span>
          <span v-else>
          {{ t("FileUploadAndRecording.upload.file.tip2") }}
          </span>
        </p>

        <div class="type flex flex-wrap justify-center text-xs text-fontColor">
          <span class="mr-1">{{ t("FileUploadAndRecording.upload.file.supported") }}:</span>
          <span v-for="(type, index) in fileTypes" :key="index">
            {{ type }}<span v-show="index < fileTypes.length - 1">,&nbsp;</span>
          </span>
        </div>
      </div>
    </el-upload>

    <div v-if="showLink" class="mt-1 flex w-full flex-col items-center">
      <el-divider class="me-3">{{
        t("FileUploadAndRecording.upload.file.or")
      }}</el-divider>
      <div
        @click="handleShowLink"
        class="flex cursor-pointer items-center rounded-lg px-3 py-2 hover:bg-[#ECECEC]"
      >
        <span
          class="iconfont icon-yulanlianjie me-2.5 text-xs text-fontColor"
        ></span>
        <span class="text-black">{{
          t("FileUploadAndRecording.upload.file.orTitle")
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Utils, { Msg } from "~/utils/tools";

const { t } = useI18n();

const props = defineProps({
  isMobileFromIndex: {
    type: Boolean,
    default: false
  },
  showLink: {
    type: Boolean,
    default: false
  },
  useUploadValidate: {
    type: Boolean,
    default: false
  }
});

const isMobile = useState("isMobile");

const { isFreeUser } = storeToRefs(useSubscriptionStore());

const { fileTypes } = storeToRefs(useUploadStore());
const { updateSelectRawFiles } = useUploadStore();
const accept = computed(() => {
  const type = fileTypes.value.map((type) => `.${type}`).join(", ")
  return `${type}, .mpg`
});

const handleFileChange = async (uploadFile) => {
  await beforeUpload(uploadFile.raw);
  updateSelectRawFiles(uploadFile.raw);
};

const emits = defineEmits(["showLink"]);
const handleShowLink = () => {
  emits("showLink");
};

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
