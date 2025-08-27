<template>
  <div class="upload w-full text-black">
    <div class="title flex w-full justify-center">
      {{ t("FileUploadAndRecording.upload.guest.transcribe") }}
    </div>
    <div class="mb-4 flex w-full justify-between">
      <span class="text-lg font-medium">{{
        tableData.length
          ? t("FileUploadAndRecording.upload.guest.file")
          : t("FileUploadAndRecording.upload.guest.audio")
      }}</span>
      <div class="flex" v-show="!tableData.length">
        <div @click="openRecord" class="img-button cursor-pointer">
          <img
            class="no-drag h-auto w-[0.9375rem]"
            src="/assets/images/index_black/record.svg"
            alt=""
          />
        </div>

        <div @click="showLinkDialog = true" class="img-button cursor-pointer">
          <img
            class="no-drag h-auto w-[1.125rem] cursor-pointer"
            src="/assets/images/index_black/url.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="flex min-h-16 w-full items-center justify-between rounded-lg border border-[#E2E4E6] px-2 text-base sm:px-5"
      v-if="tableData.length > 0"
      v-for="(item, index) in tableData"
      :key="item.id"
    >
      <div class="flex flex-1 flex-wrap items-center justify-between">
        <div class="flex flex-1 items-center">
          <div
            data-no-detection="true"
            x-ms-format-detection="none"
            format-detection="telephone=no,date=no,address=no,email=no"
            class="max-w-48 overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-96"
          >
            {{ item.name }}
          </div>
          <span class="mx-1">|</span>
          <span class="flex-shrink-0">{{ item.detailSize }}</span>
        </div>

        <div class="flex w-44 items-center justify-start md:justify-end">
          <div
            v-if="item.status === 'success'"
            class="me-4 flex h-4 items-center justify-center text-thirdColor"
          >
            <span class="iconfont icon-duihao text-xs text-thirdColor"></span>
          </div>
          <div
            class="flex w-full flex-row items-center"
            v-else-if="item.status === 'error'"
          >
            <span class="me-1 text-xs text-subColor-normal sm:text-sm">
              {{ t("FolderPage.table.failed") }}
            </span>
            <el-tooltip
              v-if="item.errorText"
              :content="item.errorText"
              placement="bottom"
            >
              <span
                class="iconfont icon-a-wenhao3 ms-1 cursor-pointer text-sm text-[#d3d3d3]"
              ></span>
            </el-tooltip>
          </div>
          <div
            class="flex w-full items-center text-start"
            v-else-if="item.uploadText"
          >
            <span class="me-1">{{ t("FileUploadAndRecording.upload.linkUpload") }}</span>
            <el-icon class="is-loading mt-1"><Loading /></el-icon>
          </div>
          <el-progress
            :stroke-width="8"
            class="flex-1"
            v-else
            striped
            striped-flow
            :percentage="item.progress || 0"
          />
        </div>
      </div>

      <img
        @click="handleRemove(item, index)"
        class="ms-1 cursor-pointer"
        src="/assets/images/index_black/del.svg"
        alt=""
      />
    </div>
    <div v-else>
      <upload-file :isMobileFromIndex="isMobileFromIndex" useUploadValidate />
    </div>

    <div class="mt-5">
      <lang-choose-input
        :popperStyle="{
          borderRadius: '0.5rem'
        }"
        customer-class="lang-choose-input-20250711-website"
        v-model:lang="lang"
      />
    </div>

    <div class="mt-4 text-lg">
      <div class="mb-0.5 text-lg font-medium">
        {{ t("FileUploadAndRecording.upload.speaker") }}
      </div>
      <client-only>
        <el-checkbox v-model="diarizeEnabled">
          <span
            class="max-w-full whitespace-normal break-words text-base font-normal"
            >{{ t("FileUploadAndRecording.upload.speakerLabel") }}</span
          >
        </el-checkbox>
      </client-only>
    </div>

    <el-button
      class="button mt-[3.125rem] w-full"
      type="primary"
      @click="handleTranscribe"
      :disabled="disabled"
      :loading="transcribing"
    >
      <!--      <span class="iconfont icon-bianji me-2.5"></span>-->
      {{
        isUploading
          ? t("FileUploadAndRecording.upload.guest.Uploading")
          : t("FileUploadAndRecording.upload.guest.transcribe")
      }}
    </el-button>
  </div>
  <upload-dialog-link
    v-model="showLinkDialog"
    isGuest
    :linkLoading="linkLoading"
    @confirm="handleLinkConfirm"
    @open="handleOpenDialog"
    @close="handleCloseDialog"
  />
  <div class="customer-dialog">
    <el-dialog
      v-model="showRecordDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      destroy-on-close
      :show-close="false"
      append-to-body
      class="record-dialog-upload"
      @open="handleOpenDialog"
      @close="handleCloseDialog"
    >
      <div class="flex w-full justify-center">
        <record justRecord @record="handleRecord" />
      </div>
    </el-dialog>
  </div>

  <speaker-promat v-model="showSpeakerModal" />
</template>

<script setup lang="ts">
import { type UploadFile, useUpload } from "~/components/upload/useUpload";
import { useSubscript } from "~/components/layout/header/useSubscript";
import { useVisitor } from "~/hooks/useVisitor";
import { useLink } from "~/components/upload/dialog/useLink";
import { Msg, isMobile } from "~/utils/tools";
import { Loading } from "@element-plus/icons-vue";
import SpeakerPromat from "~/components/record/dialog/speakerPromat.vue";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";
import { importWithRetry } from "~/utils/importWithRetry";
import { useGuestUploadStore } from "~/stores/useGuestUploadStore";

const { t } = useI18n();

const { selectRawFiles } = storeToRefs(useUploadStore());

const showLinkDialog = ref(false);
const showRecordDialog = ref(false);
const { tableData, diarizeEnabled, lang, formattedTime, tempInfo, transcribing } = storeToRefs(useGuestUploadStore())
const { handleJumpHome } = useGuestUploadStore()
const { initUpload, removeFile, createFileObject } = useUpload();
const { userInfo } = storeToRefs(useUserStore());
const { setUserInfo } = useUserStore();
const { getVisitorId, visitorId } = useVisitor();

const isTimeOver3h = computed(() => {
  // todo 要改
  const h = formattedTime.value
    ? parseInt(formattedTime.value?.split(":")?.[0]) || 0
    : 0;
  return h >= 3;
});
const showSpeakerModal = ref(false);
const handleRecord = (item: any) => {
  showRecordDialog.value = false;
  formattedTime.value = item.formattedTime;
  tableData.value = [
    createFileObject(
      new File([item.audioBlob!], item.recordTitle, {
        type: "audio/mp3", // 根据实际格式调整（如 'audio/mp3'）
        lastModified: Date.now() // 可选：设置最后修改时间
      })
    )
  ];
};
watchEffect(async () => {
  if (!tableData.value.length) {
    tableData.value = selectRawFiles.value.map((file) =>
      createFileObject(reactive(file))
    );
  }
});

const guestLogin = async () => {
  const token = useCrossDomainCookie("token");
  if (!token.value) {
    if (!visitorId.value) await getVisitorId();
    const { userApi } = await importWithRetry("user");
    const res = await userApi.guestLogin({
      visitorClientId: visitorId.value
    });
    tempInfo.value = {
      token: res.token,
      userInfoVO: {
        ...res
      }
    };
    userInfo.value = { token: res.token };
    token.value = res.token;
  }
};


const { handleConfirm, link } = useLink();
const linkLoading = ref(false);
const handleLinkConfirm = async (linkData: string) => {
  try {
    linkLoading.value = true;
    await guestLogin();
    link.value = linkData;
    await handleConfirm();
    showLinkDialog.value = false;
  } finally {
    linkLoading.value = false;
  }
};

watch(
  () => tableData.value,
  async () => {
    if (tableData.value.length) {
      await guestLogin();
    }

    for (const file of tableData.value) {
      if (file.status !== "pending") break;
      initUpload(reactive(file));
    }
  }
);

const { fetchSubscript } = useSubscript();
const { isNoTimes } = storeToRefs(useSubscriptionStore());

const handleRemove = async (row: UploadFile, index: number) => {
  row.__isDelIng = true;
  selectRawFiles.value.splice(index, 1);
  formattedTime.value = "";
  await removeFile(row, tableData);
};


const getFileNameWithoutExt = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex === -1 ? fileName : fileName.substring(0, lastDotIndex);
};
const handleTranscribe = async () => {
  if (disabled.value) return;
  if (transcribing.value) return;
  // if (diarizeEnabled.value && isTimeOver3h.value) {
  //   showSpeakerModal.value = true;
  //   return;
  // }
  transcribing.value = true;
  await guestLogin();
  await fetchSubscript();
  if (isNoTimes.value) {
    handleJumpHome();
    return;
  }
  try {
    const { useFolderApi } = await importWithRetry("folder");
    const { transcribeFile, saveFileInfo } = useFolderApi;
    const fileInfo = await saveFileInfo(
      JSON.stringify(
        tableData.value
          .filter((file) => !(file.file as any)?.localFileId)
          .map((file) => {
            const fileExtName = file.name.split(".").pop();
            return {
              bucketId: file.key,
              fileExtName: fileExtName,
              parentId: 0,
              fileName: getFileNameWithoutExt(file.name),
              fileSize: file.size
            };
          })
      )
    );

    const fileIds = fileInfo.map((file: any) => file.fileId);
    const localFileIds = tableData.value
      .filter((file) => (file.file as any)?.localFileId)
      .map((file) => (file.file as any)?.localFileId);
    fileIds.push(...localFileIds);

    await transcribeFile({
      language: lang.value.transCode,
      langName: lang.value.lang,
      fileIds,
      diarizeEnabled: diarizeEnabled.value
    });
    handleJumpHome();
  } catch (e: any) {
    if (e?.code === 15010) {
      handleJumpHome();
    }
  } finally {
    setTimeout(() => {
      transcribing.value = false;
    }, 800);
  }
};

const disabled = computed(() => {
  return (
    !tableData.value.length ||
    tableData.value.some((file) => file.status !== "success") ||
    !lang.value.lang
  );
});
const isUploading = computed(() => {
  return tableData.value.some((file) =>
    ["hashing", "pending", "uploading"].includes(file.status)
  );
});

const openRecord = async () => {
  try {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    setTimeout(() => {
      showRecordDialog.value = true;
    });
    audioStream.getTracks().forEach((track) => track.stop());
  } catch (e) {
    Msg({
      message: t("FileUploadAndRecording.record.permissionDenied"),
      type: "error"
    });
  }
};

const isMobileFromIndex = ref(false);
onMounted(() => {
  isMobileFromIndex.value = isMobile();
});
const handleOpenDialog = () => {
  if (isMobile()) {
    document.body.style.width = "auto";
  }
};
const handleCloseDialog = () => {
  if (isMobile()) {
    document.body.style.width = "";
  }
  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur();
  }
};
</script>

<style lang="scss" scoped>
:deep(.el-checkbox__label) {
  padding-left: 0;
  @apply ps-2;
}

.upload {
  max-width: 48.75rem; // 780px ÷ 16
  max-height: 37.875rem; // 606px ÷ 16
  background: #fff;
  box-shadow: 0 2px 3.625px 0 rgba(0, 0, 0, 0.03);
  border-radius: 1rem; // 8px ÷ 16
  @apply p-4 sm:p-[2.1875rem] sm:pt-[1.875rem];

  .title {
    height: 1.875rem; // 30px ÷ 16
    font-size: 1.375rem; // 22px ÷ 16
    margin-bottom: 1.5rem; // 24px ÷ 16
    font-weight: 600;
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

:deep(.home-btn.el-button) {
  @apply h-[2.75rem] max-w-[11.75rem] md:!h-[2.75rem] md:!w-[11.75rem];
  border-radius: 0.625rem; // 10px ÷ 16
  border-color: #6a36a2 !important;
  background: #301453 !important;
  color: white !important;
  font-size: 1.125rem;

  &:hover {
    border-color: #6a36a2 !important;
    background: #301453 !important;
    color: white !important;
  }
}

:deep(.home-btn.el-button--primary) {
  background: linear-gradient(142deg, #be26d4 0%, #9332ea 100%) !important;
  border-color: transparent !important;

  &:hover {
    background: linear-gradient(142deg, #be26d4 0%, #9332ea 100%) !important;
    border-color: transparent !important;
  }
}

:deep(.el-select__wrapper) {
  @apply w-72;
  color: white;
}

:deep(.el-input),
:deep(.el-textarea) {
  ::placeholder {
  }
}

:deep(.el-textarea__inner) {
  height: 124px;
}

.button {
  background: linear-gradient(90deg, #3470ff 0%, #9534e6 100%) !important;
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
  font-size: 1.125rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
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

:deep(.el-checkbox__label) {
  color: #000000 !important;
}

:deep(.record) {
  position: unset !important;
  top: unset !important;
  left: unset !important;
  margin-bottom: 1.25rem;

  .record-content {
    max-width: calc(100vw - 40px);
  }
}

:deep(.el-checkbox) {
  align-items: flex-start;
}

:deep(.el-checkbox__input) {
  margin-top: 0.1875rem; // 3px ÷ 16
}

:deep(.el-checkbox__inner) {
  background: #fff;
  border-color: #000000;
  margin-top: 3px;
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px #6367f1 inset;
}

:deep(.is-checked .el-checkbox__inner) {
  background: #6367f1;
  border-color: #6367f1;
}

:deep(.link-label) {
  font-size: 1.125rem; // 18px ÷ 16
  margin-bottom: 1.25rem; // 20px ÷ 16
  line-height: 1.5625rem; // 25px ÷ 16
  color: white !important;
}

:deep(.el-dialog__footer) {
  @apply mt-10 pt-0;
}

.img-button {
  width: 2.875rem;
  height: 2rem;
  background: #f9fafc;
  border-radius: 0.4375rem;
  border: 2px solid #e2e4e6;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.no-drag {
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
<style>
.lang-choose-input-20250711-website {
}
</style>
<style lang="scss">
.customer-dialog-link {
  @apply p-5 sm:w-[34rem];
  color: black;
  border-radius: 0.5rem; // 8px ÷ 16
  width: calc(100% - 2rem);
  padding-bottom: 12px;
  max-width: 46.25rem; // 740px ÷ 16
  box-shadow: 0 0.125rem 1.125rem 0 rgba(60, 115, 240, 0.1);

  .el-dialog__footer {
    padding-top: 49px;
  }

  .el-dialog__header {
    @apply mb-5 p-0 text-base font-medium !text-black;

    .el-dialog__title {
      @apply text-[1.25rem] text-black sm:text-[1.375rem];
    }
  }

  .el-dialog__headerbtn {
    height: 4.125rem; // 66px ÷ 16
    .el-icon {
      margin-top: 0.5rem;
      font-size: 1.5rem; // 24px ÷ 16
      @apply text-black;
    }
  }

  .el-button {
    height: 44px;
    min-width: 188px;
    border-radius: 10px;
    border: 1px solid #e2e4e6;
    color: black;
    font-size: 18px;

    &:hover {
      background: #fff;
    }
  }

  .el-button--primary {
    background: #6367f1;
    color: white;

    &:hover {
      background: #6367f1;
    }
  }

  .el-button + .el-button {
    margin-inline-start: 8px !important;
  }

  .el-dialog__headerbtn {
    @apply rtl:left-0 rtl:right-auto;
  }
}

.record-dialog-upload {
  @apply p-0 sm:w-[34rem];
  color: black;
  border-radius: 0.5rem; // 8px ÷ 16
  width: calc(100% - 2rem);
  max-width: 46.25rem; // 740px ÷ 16
  box-shadow: 0 0.125rem 1.125rem 0 rgba(60, 115, 240, 0.1);

  .el-dialog__header {
    display: none;
  }
}

.customer-dialog-link2 {
  @apply p-5 sm:w-[34rem];
  @extend .customer-dialog-link;
  padding-bottom: 20px;
  max-width: 34rem; // 740px ÷ 16
}
</style>
