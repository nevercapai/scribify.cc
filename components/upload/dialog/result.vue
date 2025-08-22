<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :destroy-on-close="true"
      :show-close="false"
      @closed="handleClose"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <span>{{ t("FileUploadAndRecording.upload.confirm") }}</span>
          <div class="cursor-pointer" @click="showDelDialog = true">
            <el-icon>
              <Close />
            </el-icon>
          </div>
        </div>
      </template>
      <div class="w-full">
        <div class="rounded-lg border border-borderColor p-4 pb-2">
          <div class="flex items-center justify-between">
            <span>
              {{ t("FileUploadAndRecording.upload.files") }}
              {{ selectRawFiles.length ? `(${selectRawFiles.length})` : "" }}
            </span>
            <el-popover
              trigger="click"
              placement="bottom-end"
              teleported
              transition="el-zoom-in-top"
              :show-arrow="false"
              :popper-style="{
                padding: '0',
                borderRadius: '0.5rem',
                boxShadow: '0 0 0.625rem 0 rgba(0,0,0,0.14)',
                minWidth: '8.125rem',
                width: 'auto'
              }"
              :offset="4"
              :disabled="tableData.length >= leftCount && isFreeUser"
            >
              <template #reference>
                <div
                  class="flex h-8 min-w-24 cursor-pointer items-center justify-center rounded-lg bg-mainColor-300 text-mainColor-900 transition-all duration-300 hover:opacity-80"
                  :class="{
                    'pointer-events-none cursor-not-allowed !opacity-50':
                      tableData.length >= maxNum
                  }"
                  @click="handleClickAddMore"
                >
                  + {{ t("FileUploadAndRecording.upload.addMore") }}
                </div>
              </template>

              <div class="w-full py-2.5">
                <div
                  @click.stop="uploadFile"
                  class="mb-2 flex h-8 w-full cursor-pointer items-center px-[1.5em] transition-all duration-100 hover:bg-hoverColor-normal"
                >
                  <span
                    class="iconfont icon-bijiben relative top-[-1px] me-3 text-sm text-fontColor"
                  ></span>
                  <span>{{
                    t("FileUploadAndRecording.upload.localFiles")
                  }}</span>
                </div>
                <div
                  @click.stop="showLinkDialog = true"
                  class="flex h-8 w-full cursor-pointer items-center px-[1.5em] transition-all duration-100 hover:bg-hoverColor-normal"
                >
                  <span
                    class="iconfont icon-yulanlianjie relative top-[-1px] me-3 text-sm text-fontColor"
                  ></span>
                  <span>{{
                    t("FileUploadAndRecording.upload.pasteLink")
                  }}</span>
                </div>
              </div>
            </el-popover>
          </div>
          <el-table
            :data="tableData"
            style="width: 100%"
            max-height="9.375rem"
            row-key="id"
            :show-header="!isMobile"
            @cell-mouse-enter="handleCellEnter"
            @cell-mouse-leave="handleCellLeave"
          >
            <template #empty>{{
              t("FileUploadAndRecording.upload.table.noData")
            }}</template>
            <el-table-column
              :show-overflow-tooltip="!isMobile"
              prop="name"
              :label="t('FileUploadAndRecording.upload.table.file')"
              :width="isMobile ? '' : 276"
            >
              <template #default="scope">
                <div
                  class="overflow-hidden text-ellipsis text-nowrap"
                  v-if="!isMobile"
                >
                  {{ scope.row.name }}
                </div>
                <div
                  v-else
                  class="flex w-full justify-between overflow-x-hidden"
                >
                  <div class="w-0 flex-1">
                    <div
                      class="overflow-hidden text-ellipsis text-nowrap text-black"
                    >
                      {{ scope.row.name }}
                    </div>
                    <div class="flex w-full items-center text-[#999999]">
                      <div class="me-4 flex-shrink-0">
                        {{ scope.row.detailSize }}
                      </div>
                      <div class="w-44 text-xs">
                        <div
                          v-if="scope.row.status === 'success'"
                          class="text-start text-thirdColor"
                        >
                          <span
                            class="iconfont icon-duihao text-xs text-thirdColor"
                          ></span>
                        </div>
                        <div v-else-if="scope.row.status === 'error'">
                          <span class="me-1 text-subColor-normal">{{
                            t("FolderPage.table.failed")
                          }}</span>
                          <span>{{ scope.row.errorText }}</span>
                        </div>
                        <div
                          class="flex items-center"
                          v-else-if="scope.row.uploadText"
                        >
                          <span class="me-0.5">{{ scope.row.uploadText }}</span>
                          <el-icon class="is-loading"><Loading /></el-icon>
                        </div>
                        <el-progress
                          v-else
                          striped
                          striped-flow
                          :percentage="scope.row.progress || 0"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex w-4 flex-shrink-0 cursor-pointer items-center"
                    @click="handleRemove(scope.row, scope.$index)"
                  >
                    <span
                      class="iconfont icon-shanchu text-xs text-fontColor"
                    ></span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              v-if="!isMobile"
              prop="detailSize"
              :label="t('FileUploadAndRecording.upload.table.size')"
              width="90"
            />
            <el-table-column
              v-if="!isMobile"
              prop="status"
              :label="t('FileUploadAndRecording.upload.table.status')"
            >
              <template #default="{ row, $index }">
                <div class="flex items-center">
                  <div class="w-full">
                    <div
                      v-if="row.status === 'success'"
                      class="text-start text-thirdColor"
                    >
                      <span
                        class="iconfont icon-duihao text-xs text-thirdColor"
                      ></span>
                    </div>
                    <div v-else-if="row.status === 'error'">
                      <div class="text-subColor-normal">
                        {{ t("FolderPage.table.failed") }}
                      </div>
                      <div class="text-fontColor">{{ row.errorText }}</div>
                    </div>
                    <div class="flex items-center" v-else-if="row.uploadText">
                      <span class="me-0.5">{{ row.uploadText }}</span>
                      <el-icon class="is-loading"><Loading /></el-icon>
                    </div>
                    <el-progress
                      v-else
                      striped
                      striped-flow
                      :percentage="row.progress || 0"
                    />
                  </div>

                  <div
                    class="flex w-4 cursor-pointer items-center"
                    @click="handleRemove(row, $index)"
                  >
                    <Transition
                      enter-active-class="transition-all duration-200 ease-out"
                      enter-from-class="transform translate-x-full opacity-0"
                      enter-to-class="transform translate-x-0 opacity-100"
                      leave-active-class="duration-200 ease-in"
                      leave-from-class="transform opacity-100"
                      leave-to-class="transform opacity-0"
                    >
                      <span
                        v-if="row.__isDelIng"
                        class="iconfont icon-loaderjiazai animate-spin text-fontColor"
                      ></span>
                      <div v-else-if="row.__isHover || isMobile">
                        <span
                          class="iconfont icon-shanchu text-xs text-fontColor"
                        ></span>
                      </div>
                    </Transition>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="mt-4">
          <lang-choose-input v-model:lang="lang" />
        </div>

        <div class="mt-5">
          <div class="mb-0.5">
            {{ t("FileUploadAndRecording.upload.speaker") }}
          </div>
          <el-checkbox v-model="diarizeEnabled">
            <span class="max-w-full whitespace-normal break-words text-sm">{{
              t("FileUploadAndRecording.upload.speakerLabel")
            }}</span>
          </el-checkbox>
        </div>
      </div>

      <template #footer>
        <div class="flex w-full items-center justify-end">
          <el-button class="home-btn" @click="showDelDialog = true">{{
            t("FileUploadAndRecording.upload.cancel")
          }}</el-button>
          <el-button
            class="home-btn"
            @click="handleTranscribe"
            :disabled="disabled"
            :loading="transcribing"
            type="primary"
            >{{
              isUploading
                ? `${t("FileUploadAndRecording.upload.linkUpload")}...`
                : t("FileUploadAndRecording.upload.confirm")
            }}</el-button
          >
        </div>
      </template>
    </el-dialog>

    <upload-dialog-link
      v-model="showLinkDialog"
      @confirm="handleLinkFileUpload"
    />
    <upload-dialog-del @removeAll="handleRemoveAll" v-model="showDelDialog" />
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      :multiple="!isFreeUser"
      :accept="accept"
      @change="handleAddFile"
    />
  </div>
  <subscription-modal v-model="showSubModal" />
</template>

<script setup lang="ts">
import { type UploadFile, useUpload } from "~/components/upload/useUpload";
import { Close } from "@element-plus/icons-vue";
import { useSubscript } from "~/components/layout/header/useSubscript";
import { Msg } from "~/utils/tools";
import { ref } from "vue";
import { Loading } from "@element-plus/icons-vue";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const { selectRawFiles, fileTypes } = storeToRefs(useUploadStore());
const accept = computed(() =>
  fileTypes.value.map((type) => `.${type}`).join(", ")
);
const maxNum = 50;

const showLinkDialog = ref(false);
const fileInputRef = useTemplateRef("fileInput");
const uploadFile = () => {
  fileInputRef.value?.click();
};
const handleAddFile = (e: Event) => {
  let files = (e.target as HTMLInputElement).files;
  if (files) {
    let len = files.length;
    if (!validateMaxNum(tableData.value.length + files.length)) {
      len = maxNum - tableData.value.length;
    }

    for (let i = 0; i < len; i++) {
      selectRawFiles.value.push(files[i]);
      tableData.value = [createFileObject(files[i]), ...tableData.value];
    }
  }
  (e.target as any).value = "";
};
const handleLinkFileUpload = (file: File) => {
  showLinkDialog.value = false;
  if (!validateMaxNum(tableData.value.length + 1)) return;
  tableData.value = [createFileObject(file), ...tableData.value];
};

const tableData = ref<UploadFile[]>([]);
const { initUpload, removeFile, createFileObject, removeAllFile } = useUpload();
watchEffect(async () => {
  // 首次
  if (!tableData.value.length) {
    if (!validateMaxNum(selectRawFiles.value.length)) {
      selectRawFiles.value = selectRawFiles.value.splice(0, maxNum);
    }
    tableData.value = selectRawFiles.value.map((file) =>
      createFileObject(reactive(file))
    );
  }

  for (const file of tableData.value) {
    if (file.status !== "pending") break;
    initUpload(reactive(file));
  }
});

function validateMaxNum(len: number) {
  if (len > maxNum) {
    Msg({
      message: t("FileUploadAndRecording.upload.maxFileNum", { num: maxNum }),
      customClass: "!z-[9999]",
      type: "error"
    });
    return false;
  }
  return true;
}

const handleRemove = async (row: UploadFile, index: number) => {
  row.__isDelIng = true;
  selectRawFiles.value.splice(index, 1);
  await removeFile(row, tableData);
};

const handleCellEnter = (row: UploadFile) => {
  row.__isHover = true;
};

const handleCellLeave = (row: UploadFile) => {
  row.__isHover = false;
};

const disabled = computed(() => {
  return (
    !tableData.value.length ||
    !tableData.value.every((file) => file.status === "success") ||
    !lang.value?.transCode
  );
});
const isUploading = computed(() => {
  return tableData.value.some((file) => file.status === "uploading");
});

const showDelDialog = ref(false);
const { clearSelectRawFiles, updateNewFileList } = useUploadStore();
const handleRemoveAll = () => {
  removeAllFile(tableData);
  clearSelectRawFiles();
  tableData.value = [];
  showDelDialog.value = false;
  visible.value = false;
};

const transcribing = ref(false);
const lang = ref<any>({});
const route = useRoute();
const { selectedFolder } = storeToRefs(useFolderStore());
const { fetchSubscript } = useSubscript();
const { isFreeUser, isNoTimes, limitCount, todayCount } = storeToRefs(
  useSubscriptionStore()
);
const leftCount = computed(() => {
  return (limitCount.value || 0) - (todayCount.value || 0);
});

const router = useRouter();
const localePath = useLocalePath();

const isMobile = useState("isMobile");

const showPro = () => {
  if (isMobile.value) {
    handleRemoveAll();
    router.push(localePath("/getPro"));
    return;
  }
  showSubModal.value = true;
};

const diarizeEnabled = ref(false);
const getFileNameWithoutExt = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex === -1 ? fileName : fileName.substring(0, lastDotIndex);
};
const handleTranscribe = async () => {
  if (isNoTimes.value) {
    showPro();
    return;
  }
  transcribing.value = true;
  try {
    const { useFolderApi } = await import("~/api/folder");
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
              parentId: route?.path?.includes("folder")
                ? selectedFolder.value?.id || 0
                : 0,
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
    if (isFreeUser.value) {
      await fetchSubscript();
    }
    visible.value = false;
    clearSelectRawFiles();
    tableData.value = [];
    updateNewFileList(fileIds);
  } catch (error) {
    if (error?.code === 15010) {
      showPro();
    }
  } finally {
    transcribing.value = false;
  }
};

const showSubModal = ref(false);
const handleClickAddMore = () => {
  if (tableData.value.length >= leftCount.value && isFreeUser.value) {
    showPro();
  }
};

const handleClose = () => {
  diarizeEnabled.value = false;
};
</script>

<style scoped>
@import "./common.css";
@import "~/layouts/homeMixin.css";

:deep(.el-dialog) {
  max-width: 38.75rem;
  @apply sm:w-[38.75rem];
}

:deep(.el-select__wrapper) {
  @apply w-72;
}

:deep(.el-table__header) .cell {
  @apply text-fontColor;
  font-weight: 400;
}

:deep(.el-table__row) {
  @apply border-borderColor;
}

:deep(.el-table__row):hover .el-table__cell {
  @apply !bg-hoverColor-normal;
}

:deep(.el-progress-bar__outer) {
  @apply bg-boxBgColor;
}

:deep(.el-progress-bar__inner) {
  @apply bg-mainColor-900;
}

:deep(.el-checkbox) {
  align-items: flex-start;
}
:deep(.el-checkbox__input) {
  margin-top: 3px;
}
:deep(.el-checkbox__label) {
  color: unset !important;
}

:deep(.el-table .cell) {
  padding-left: 0 !important;
}
</style>
<style>
body[dir="rtl"] .el-table__header .cell {
  @apply text-start;
}
body[dir="rtl"] .el-table__cell .cell {
  @apply text-start;
}
</style>
