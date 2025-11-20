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
          <img class="no-drag h-auto w-[0.9375rem]" src="/assets/images/index_black/record.svg" alt="" />
        </div>

        <div @click="openLinkDialog" class="img-button cursor-pointer">
          <img class="no-drag h-auto w-[1.125rem] cursor-pointer" src="/assets/images/index_black/url.svg" alt="" />
        </div>
      </div>
    </div>
    <div
      class="flex min-h-16 w-full items-center justify-between rounded-lg border border-[#E2E4E6] p-4 text-base"
      v-show="tableData.length > 0"
      v-for="(item, index) in tableData"
      :key="item.id"
    >
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
                <span class="name" :title="item.name">{{ item.name }}</span>
              </div>
              <span class="mx-1">|</span>
              <span class="flex-shrink-0">{{ item.detailSize }}</span>
            </div>

            <div class="flex w-44 items-center justify-start md:justify-end">
              <div v-if="item.status === 'success'" class="me-4 flex h-4 items-center justify-center text-thirdColor">
                <span class="iconfont icon-duihao text-xs text-thirdColor"></span>
              </div>
              <div class="flex w-full flex-row items-center" v-else-if="item.status === 'error'">
                <span class="me-1 text-xs text-subColor-normal sm:text-sm">
                  {{ t("FolderPage.table.failed") }}
                </span>
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
          <div class="operation flex items-center" v-if="!isMobileFromIndex">
            <!-- 重试  -->
            <el-tooltip
              v-if="item.status === 'error'"
              effect="dark"
              :content="t('FileUploadAndRecording.upload.retry')"
              placement="bottom"
            >
              <div
                @click="uploadRetry(item)"
                class="me-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg hover:bg-hoverColor-deepen"
                :title="t('FileUploadAndRecording.upload.retry')"
              >
                <span class="iconfont icon-retry text-xs md:text-sm"></span>
              </div>
            </el-tooltip>
            <!-- 修改  -->
            <el-tooltip
              v-if="item.status === 'error'"
              effect="dark"
              :content="t('FileUploadAndRecording.upload.edit')"
              placement="bottom"
            >
              <div
                @click="uploadEdit(item)"
                :title="t('FileUploadAndRecording.upload.edit')"
                class="me-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg hover:bg-hoverColor-deepen"
              >
                <span class="iconfont icon-bianji text-xs md:text-sm"></span>
              </div>
            </el-tooltip>
            <el-tooltip effect="dark" :content="t('FileUploadAndRecording.upload.delete')" placement="bottom">
              <div
                @click="handleRemove(item, index)"
                :title="t('FileUploadAndRecording.upload.delete')"
                class="me-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg hover:bg-hoverColor-deepen"
              >
                <span class="iconfont icon-shanchu text-sm"></span>
              </div>
            </el-tooltip>
          </div>
          <upload-operation-cell v-else :row-data="item" @operation="(key) => operationCellHandle(key, item, index)" />
        </div>
        <div
          v-if="item.status === 'error' && item.errorText"
          class="flex flex-col leading-5 text-subColor-normal md:leading-6"
        >
          <span class="errorText-tips"> {{ item.errorText }}</span>
          <div class="flex">
            <span
              v-if="item.isGooglePrivate"
              class="op cursor-pointer text-mainColor-900 underline-offset-4 md:hover:font-bold md:hover:underline"
              @click="howToSet"
            >
              ({{ t("FileUploadAndRecording.upload.howToSetup") }})
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tableData.length <= 0">
      <upload-file
        :isMobileFromIndex="isMobileFromIndex"
        useUploadValidate
        ref="uploadFileRef"
        @manualAddFile="manualAddFileConfirm"
      />
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
          <span class="max-w-full whitespace-normal break-words text-base font-normal">{{
            t("FileUploadAndRecording.upload.speakerLabel")
          }}</span>
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
  <client-only>
    <upload-dialog-link
      ref="uploadLink"
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
    <upload-set-public-video v-model:visible="howToSetVisible" />
  </client-only>
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
const { tableData, diarizeEnabled, lang, formattedTime, tempInfo, transcribing } = storeToRefs(useGuestUploadStore());
const { handleJumpHome } = useGuestUploadStore();
const { initUpload, removeFile, createFileObject } = useUpload();
const { userInfo } = storeToRefs(useUserStore());
const { setUserInfo } = useUserStore();
const { getVisitorId, visitorId } = useVisitor();
const currentRowIndex = ref(-1);
const uploadLink = useTemplateRef("uploadLink");
const uploadFileRef = useTemplateRef("uploadFileRef");

const isTimeOver3h = computed(() => {
  // todo 要改
  const h = formattedTime.value ? parseInt(formattedTime.value?.split(":")?.[0]) || 0 : 0;
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
      }),
      { openType: 2 }
    )
  ];
};
watchEffect(async () => {
  if (!tableData.value.length) {
    tableData.value = selectRawFiles.value.map((file) => createFileObject(reactive(file), { openType: 1 }));
  }
});

const guestLogin = async () => {
  const token = useCrossDomainCookie("token");
  const userid = useCrossDomainCookie("userid");
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
    userid.value = res.userid;
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
    // 编辑重试
    if (currentRowIndex.value > -1) {
      await handleRemove(tableData.value[currentRowIndex.value], currentRowIndex.value);
    }
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
    const pendingData = tableData.value.filter((file) => file.status === "pending");
    for (const file of pendingData) {
      initUpload(reactive(file), { openType: file.openType });
    }
  },
  {
    deep: true
  }
);

const { fetchSubscript } = useSubscript();
const { isNoTimes } = storeToRefs(useSubscriptionStore());

const handleRemove = async (row: UploadFile, index: number) => {
  row.__isDelIng = true;
  selectRawFiles.value.splice(index, 1);
  formattedTime.value = "";
  await removeFile(row, tableData);
  currentRowIndex.value = -1;
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
            const fileExtName = file.file.name.split(".").pop();
            return {
              bucketId: file.key,
              fileExtName: fileExtName,
              parentId: 0,
              fileName: getFileNameWithoutExt(file.name),
              fileSize: file.size,
              openType: selectRawFiles.value.length > 0 ? 1 : 2,
              uploadTime: file.uploadTime
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

const disabled = computed(() => {
  return !tableData.value.length || tableData.value.some((file) => file.status !== "success") || !lang.value.lang;
});
const isUploading = computed(() => {
  return tableData.value.some((file) => ["hashing", "pending", "uploading"].includes(file.status));
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
const howToSetVisible = ref(false);
const howToSet = () => {
  howToSetVisible.value = true;
};
const uploadRetry = (row) => {
  currentRowIndex.value = tableData.value.findIndex((item) => item.id === row.id);
  const file = row.file;
  if (!file?.localRequestId) {
    row.progress = 0;
    row.status = "pending";
    return;
  }
  if (linkLoading.value) {
    return;
  }
  uploadLink.value?.retry(file.name);
};
const uploadEdit = (row) => {
  currentRowIndex.value = tableData.value.findIndex((item) => item.id === row.id);
  const file = row.file;
  if (!file?.localRequestId) {
    return uploadFileRef.value?.manualAdd();
  }
  if (linkLoading.value) {
    return;
  }
  uploadLink.value?.setLink(row.file.name);
  uploadLink.value?.setText({
    titleText: t("FileUploadAndRecording.upload.edit"),
    confirmBtnText: t("FileUploadAndRecording.upload.updateAndRetry")
  });
  showLinkDialog.value = true;
};
const manualAddFileConfirm = (file) => {
  tableData.value.splice(currentRowIndex.value, 1, createFileObject(file));
};
const operationCellHandle = (key, row, index) => {
  if (key === "retry") {
    uploadRetry(row);
  } else if (key === "edit") {
    uploadEdit(row);
  } else if (key === "del") {
    handleRemove(row, index);
  }
};
const openLinkDialog = () => {
  showLinkDialog.value = true;
  uploadLink.value?.setLink("");
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
<style lang="scss" src="./styleGlobal.scss"></style>
