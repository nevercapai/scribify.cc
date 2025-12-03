<template>
  <div
    v-if="!taskId"
    class="upload-common mx-auto text-black"
    :class="{ 'data-empty': !localFileData.file && !linkData.file }"
  >
    <!--    视频和链接   -->
    <el-tabs v-if="sourceType === 1" v-model="activeName" @tab-click="handleTabClick" class="-mt-1.5">
      <el-tab-pane :label="t('Resources.Upload.uploadFile')" name="file">
        <div class="content w-full flex-col">
          <div
            :class="[!localFileData.file ? 'justify-center' : '!pb-2 text-lg']"
            class="flex w-full pb-6 pt-[1.875rem] text-[1.375rem] font-medium leading-[1.875rem] text-black"
          >
            <span v-if="!localFileData.file">{{ t("Resources.Upload.fileTip") }}</span>
            <span v-else>{{ t("FileUploadAndRecording.upload.guest.file") }}</span>
          </div>
          <upload-file
            v-show="!localFileData.file"
            ref="uploadFileRef"
            useUploadValidate
            @fileChange="fileChangeHandle"
          ></upload-file>
          <file-info
            v-show="localFileData.file"
            :file-info="localFileData"
            :type="1"
            @handle-remove="handleRemove"
            @upload-edit="uploadEdit"
            @upload-retry="uploadRetry"
          ></file-info>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="t('Resources.Upload.pasteLink')" name="link">
        <div class="content w-full flex-col">
          <div
            :class="[!linkData.file ? 'justify-center' : '!pb-2 text-lg']"
            class="flex w-full pb-9 pt-[1.875rem] text-[1.375rem] font-medium leading-[1.875rem] text-black"
          >
            <span v-if="!linkData.file">{{ t("Resources.Upload.linkTip") }}</span>
            <span v-else>{{ t("Resources.Upload.linkTitle") }}</span>
          </div>
          <link-input v-show="!linkData.file" ref="linkRef" @confirm="handleAddLinkConfirm" />
          <file-info
            v-show="linkData.file"
            :file-info="linkData"
            :type="2"
            @handle-remove="handleRemove"
            @upload-edit="uploadEdit"
            @upload-retry="uploadRetry"
          ></file-info>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!--    链接  -->
    <div v-else-if="sourceType === 2" class="content w-full flex-col">
      <div v-if="linkData.file" class="flex w-full !pb-2 text-lg font-medium leading-[1.875rem] text-black">
        <span>{{ t("Resources.Upload.linkTitle") }}</span>
      </div>
      <link-input-v1 v-show="!linkData.file" ref="linkRef" @confirm="handleAddLinkConfirm" />
      <file-info
        v-show="linkData.file"
        :file-info="linkData"
        :type="2"
        @handle-remove="handleRemove"
        @upload-edit="uploadEdit"
        @upload-retry="uploadRetry"
      ></file-info>
    </div>
    <!--    本地视频文件  -->
    <div v-else-if="sourceType === 3" class="content w-full flex-col">
      <div v-if="localFileData.file" class="flex w-full !pb-2 text-lg font-medium leading-[1.875rem] text-black">
        <span>{{ t("FileUploadAndRecording.upload.guest.file") }}</span>
      </div>
      <upload-file
        v-show="!localFileData.file"
        ref="uploadFileRef"
        useUploadValidate
        @fileChange="fileChangeHandle"
      ></upload-file>
      <el-button v-show="!localFileData.file" class="button mt-5 w-full" type="primary" @click="mp4FileUpload">
        {{ t("Resources.Upload.uploadFile") }}
      </el-button>
      <file-info
        v-show="localFileData.file"
        :file-info="localFileData"
        :type="1"
        @handle-remove="handleRemove"
        @upload-edit="uploadEdit"
        @upload-retry="uploadRetry"
      ></file-info>
    </div>
    <div v-show="showLanguageAndBtn" class="mt-[1.375rem]">
      <lang-choose-input
        :popperStyle="{
          borderRadius: '0.5rem'
        }"
        customer-class="lang-choose-input-20250711-website"
        v-model:lang="lang"
      />
    </div>
    <el-button
      v-show="showLanguageAndBtn"
      class="button mt-[3.125rem] w-full"
      type="primary"
      @click="handleTranscribe"
      :disabled="disabled"
      :loading="transcribing"
    >
      {{
        isUploading
          ? t("FileUploadAndRecording.upload.guest.Uploading")
          : t("FileUploadAndRecording.upload.guest.transcribe")
      }}
    </el-button>
    <client-only>
      <register-dialog ref="registerDialogRef"></register-dialog>
    </client-only>
  </div>
  <transcribing
    v-else
    :task-id="taskId"
    @transcribeSuccess="transcribeSuccessHandle"
    @transcribeFailed="transcribeFailedHandle"
  ></transcribing>
</template>

<script setup>
import UploadFile from "./file.vue";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie.js";
import { importWithRetry } from "~/utils/importWithRetry.js";
import { useVisitor } from "~/hooks/useVisitor.js";
import { useUpload } from "~/components/upload/useUpload";
import { Msg } from "~/utils/tools.js";
import { useSubscript } from "~/components/layout/header/useSubscript.js";
import FileInfo from "~/components/resourceCommon/fileInfo.vue";
import LinkInput from "./link.vue";
import LinkInputV1 from "./linkV1.vue";
import Transcribing from "./transcribing.vue";

const { initUpload, removeFile, createFileObject } = useUpload();

const { t } = useI18n();
const emit = defineEmits(["transcribed"]);
const props = defineProps({
  sourceType: {
    // 1 本地文件和链接  2 链接 3 本地视频
    type: Number,
    default: () => 1
  }
});
const taskId = ref("");
const fileId = ref("");
const localFileData = ref({});
const linkData = ref({});

const showLanguageAndBtn = computed(() => {
  const hasLink = linkData.value?.file;
  const hasFile = localFileData.value?.file;
  const c1 = props.sourceType === 1 && (activeName.value === "file" || (activeName.value === "link" && hasLink));
  const c2 = props.sourceType === 2 && hasLink;
  const c3 = props.sourceType === 3 && hasFile;
  return c1 || c2 || c3;
});

const lang = ref({});
const activeName = ref("file");
const handleTabClick = () => {};
const getStatusData = () => {
  const map = {
    1: () => (activeName.value === "file" ? localFileData.value : linkData.value),
    2: () => linkData.value,
    3: () => localFileData.value
  };
  return map[props.sourceType]();
};
const disabled = computed(() => {
  return !lang.value.lang || getStatusData()?.status !== "success";
});
const isUploading = computed(() => {
  const status = ["hashing", "pending", "uploading"];
  return getStatusData() && status.includes(getStatusData().status);
});
const transcribing = ref(false);
const fileChangeHandle = (file) => {
  localFileData.value = createFileObject(shallowReactive(file), { openType: 1 });
};
watch(
  localFileData,
  async () => {
    if (localFileData.value.file && localFileData.value.status === "pending") {
      await guestLogin();
      await initUpload(localFileData.value);
    }
  },
  {
    deep: true
  }
);
const { getVisitorId, visitorId } = useVisitor();

const guestLogin = async () => {
  const token = useCrossDomainCookie("token");
  if (!token.value) {
    if (!visitorId.value) await getVisitorId();
    const { userApi } = await importWithRetry("user");
    const res = await userApi.guestLogin({
      visitorClientId: visitorId.value
    });
    token.value = res.token;
  }
};
const { fetchSubscript } = useSubscript();
const { isNoTimes } = storeToRefs(useSubscriptionStore());
const getFileNameWithoutExt = (fileName) => {
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex === -1 ? fileName : fileName.substring(0, lastDotIndex);
};
const genParams = () => {
  const c1 = props.sourceType === 1 && activeName.value === "file";
  const c2 = props.sourceType === 3;
  if (c1 || c2) {
    const file = localFileData.value;
    const fileExtName = file?.file?.name?.split(".").pop();
    return {
      bucketId: file.key,
      fileExtName: fileExtName,
      parentId: 0,
      fileName: getFileNameWithoutExt(file.name),
      fileSize: file.size,
      openType: 1,
      uploadTime: file.uploadTime
    };
  } else if ([1, 2].includes(props.sourceType) && activeName.value === "link") {
    return null;
  }
  return null;
};
const registerDialogRef = useTemplateRef("registerDialogRef");
const { userInfo } = storeToRefs(useUserStore());
const { $mitt } = useNuxtApp();

const handleTranscribe = async () => {
  if (disabled.value) return;
  if (transcribing.value) return;
  transcribing.value = true;
  await guestLogin();
  await fetchSubscript();
  if (isNoTimes.value) {
    registerDialogRef?.value?.setContentTip(t("RegisterDialog.tip2"));
    registerDialogRef?.value?.show();
    transcribing.value = false;
    return;
  }
  try {
    const { useFolderApi } = await importWithRetry("folder");
    const { transcribeFile, saveFileInfo } = useFolderApi;
    const params = genParams();
    let fileIds = [];
    if (params) {
      console.log("🚀 ~ file: upload.vue method: handleTranscribe line: 177 🚀", params);
      const fileInfo = await saveFileInfo(JSON.stringify([params]));
      fileIds = fileInfo.map((file) => file.fileId);
    } else {
      fileIds = [linkData.value?.file?.localFileId].filter(Boolean);
    }
    if (!fileIds.length) {
      console.log("🚀 ~ fileIds 为空 🚀");
      return;
    }
    const res = await transcribeFile({
      language: lang.value.transCode,
      langName: lang.value.lang,
      fileIds,
      diarizeEnabled: true
    });
    if (userInfo.value?.userInfoVO) {
      return $mitt.emit("goToEvent", { path: "/" });
    }
    taskId.value = res[0];
    fileId.value = fileIds[0];
  } catch (e) {
    console.log("🚀 ~ file: error 🚀", e);
    if (e?.code === 15010) {
    } else if (e?.code === 15011) {
      Msg({
        message: e?.message,
        customClass: "!z-[9999]",
        duration: 5000,
        type: "error"
      });
    }
  } finally {
    setTimeout(() => {
      transcribing.value = false;
    }, 800);
  }
};
const uploadFileRef = useTemplateRef("uploadFileRef");
const mp4FileUpload = () => {
  uploadFileRef?.value?.manualAdd();
};
const uploadRetry = (type) => {
  if (type === 1) {
    const row = localFileData.value;
    row.progress = 0;
    row.status = "pending";
  } else if (type === 2) {
    return linkRef.value?.handleAddLink();
  }
};
const uploadEdit = (type) => {
  if (type === 1) {
    return uploadFileRef.value?.manualAdd();
  } else if (type === 2) {
    linkData.value = {};
  }
};
const linkRef = useTemplateRef("linkRef");
const handleRemove = async (type) => {
  if (type === 1) {
    localFileData.value = {};
    await removeFile(localFileData.value, []);
  } else if (type === 2) {
    linkData.value = {};
    linkRef.value?.clear();
    if (linkRef.value) linkRef.value.checked = false;
  }
};
const handleAddLinkConfirm = async (data) => {
  linkData.value = data;
};
const transcribeSuccessHandle = () => {
  emit("transcribed", {
    fileId: fileId.value,
    taskId: taskId.value,
    activeName: activeName.value,
    type: props.sourceType
  });
};
const transcribeFailedHandle = () => {
  taskId.value = "";
};
const clear = () => {
  taskId.value = "";
  fileId.value = "";
  linkData.value = {};
  localFileData.value = {};
  linkRef.value?.clear();
  linkRef.value.checked = false;
};

defineExpose({
  clear
});
</script>

<style lang="scss" scoped>
.upload-common {
  --el-border-radius-base: 0.5rem;
  --el-color-primary: theme("colors.mainColor.900");
  max-width: 48.75rem;
  max-height: 38.75rem;
  background: #fff;
  box-shadow: 0 0.125rem 3.625rem 0 rgba(0, 0, 0, 0.03);
  border-radius: 1rem;
  @apply p-4 md:p-[2.1875rem];

  :deep(.el-tabs) {
    .el-tabs__header {
      margin: 0;
    }
    .el-icon {
      @apply text-[1.375rem];
    }
    .el-tabs__nav {
      @media (min-width: 768px) {
        float: unset;
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
    .el-tabs__active-bar {
      background-color: #6367f1;
    }
    .el-tabs__item {
      color: #64748b;
      font-size: 1.375rem;
      line-height: 1.875rem;
      @apply pb-2.5 md:px-20 rtl:me-6;
      &.is-active {
        color: #000;
      }
    }
    .el-tabs__nav-wrap {
      &::after {
        height: 1px;
        background-color: theme("colors.borderColor");
      }
    }
  }
  :deep(.upload-file) {
    .icon-shangchuan {
      color: #6367f1;
      margin-bottom: 1.25rem; // 20px ÷ 16
      font-size: 1.375rem; // 22px ÷ 16
    }

    .tip {
      font-weight: 600;
      margin-bottom: 0.3125rem; // 5px ÷ 16
      font-size: 1.125rem; // 18px ÷ 16
    }

    .type {
      color: #aca6b3;
      font-weight: 400;
      height: 1.25rem; // 20px ÷ 16
      font-size: 0.875rem; // 14px ÷ 16
    }

    .el-upload-dragger {
      max-width: 44.375rem; // 710px ÷ 16
      height: 11rem; // 176px ÷ 16
      background: #f9fafc;
      border-radius: 0.5rem; // 8px ÷ 16
      border: 0.125rem dashed #e2e4e6; // 1px ÷ 16
      @apply pb-2 pt-8 sm:pb-0 sm:pt-10;
    }
  }
}
.button {
  background: linear-gradient(270deg, #3470ff 0%, #9534e6 100%) !important;
  height: 2.75rem !important; // 44px ÷ 16
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem; // 10px ÷ 16
  width: 100% !important;
  cursor: pointer;
  overflow: hidden;
  max-width: unset !important;
  border-color: transparent !important;
  border-width: 0;
  font-size: 1.125rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }
  &.is-disabled {
    opacity: 0.65;
  }
}

:deep(.lang-title) {
  @apply text-lg;
}

.button-disabled {
  @apply bg-opacity-80;
  cursor: not-allowed;
}

:deep(.el-progress-bar__outer) {
  @apply bg-boxBgColor;
}

:deep(.el-progress-bar__inner) {
  @apply bg-mainColor-900;
}

:deep(.el-progress__text) {
  @apply me-3 !text-sm text-black;
}
</style>
