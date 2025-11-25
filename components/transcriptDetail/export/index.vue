<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FolderPage.dialog.export.title')"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      width="30%"
      @closed="handleClosed"
      @open="handleOpen"
    >
      <div class="mb-5">
        <div class="mb-2.5 text-sm">
          {{ t("FolderPage.dialog.export.select") }}
        </div>
        <el-checkbox-group v-model="formats">
          <el-checkbox v-for="item in formatOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-checkbox-group>
      </div>
      <div v-if="hasTimestamp || hasSpeaker">
        <div class="mb-2.5 text-sm">
          {{ t("FolderPage.dialog.export.settings") }}
        </div>
        <el-checkbox-group v-model="settings">
          <el-checkbox
            v-if="hasTimestamp"
            key="timecodes"
            :label="t('FolderPage.dialog.export.timecodes')"
            value="timecodes"
          />
          <el-checkbox v-if="hasSpeaker" key="speaker" :label="t('FolderPage.dialog.export.speaker')" value="speaker" />
        </el-checkbox-group>
      </div>
      <template #footer>
        <el-button class="home2-btn" @click="visible = false">
          {{ t("FolderPage.dialog.move.cancel") }}
        </el-button>
        <el-button class="sys-btn" :loading="loading" @click="handleConfirm" type="primary">
          {{ t("FolderPage.dialog.export.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { FileItem } from "~/api/type/folder";
import { useTool } from "~/components/export/useTool";
import { Msg } from "~/utils/tools";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useUserStore } from "~/stores/useUserStore";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  selectIds?: string[];
  tableData?: FileItem[];
  taskId?: string;
  fileId?: string;
  translateLang?: string;
  isShowSpeaker?: boolean;
  isShowTimestamp?: number;
  isSync?: boolean;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const formats = ref([]);
const formatOptions = ref([
  { value: "pdf", label: "PDF" },
  { value: "docx", label: "DOCX" },
  { value: "txt", label: "TXT" },
  { value: "vtt", label: "VTT" },
  { value: "csv", label: "CSV" },
  { value: "srt", label: "SRT" }
]);

const settingOptions = ref<any[]>([{ value: "timecodes", label: t("FolderPage.dialog.export.timecodes") }]);
const settings = ref<string[]>(["timecodes"]);

let timer: any = null;
const taskIds = ref<any>([]);
const fileIds = ref<string[]>([]);
const isShowSpeaker = ref(false);
const reset = () => {
  isShowSpeaker.value = false;
  settingOptions.value = [{ value: "timecodes", label: t("FolderPage.dialog.export.timecodes") }];
  settings.value = ["timecodes"];
  taskIds.value = [];
  fileIds.value = [];
};
const handleClosed = () => {
  window.removeEventListener("keydown", handleKeyPress);
  formats.value = [];
  reset();
  clearTimeout(timer);
  loading.value = false;
  isOver.value = false;
};
const setNoSpeaker = (flag: boolean) => {
  if (route.query.shareId && !props.isShowSpeaker) return;
  if (flag && !isShowSpeaker.value) {
    isShowSpeaker.value = true;
    settingOptions.value.unshift({
      value: "speaker",
      label: t("FolderPage.dialog.export.speaker")
    });
    settings.value.push("speaker");
  }
};

const hasSpeaker = computed(() => {
  return !!settingOptions.value.find((e) => e.value === "speaker");
});
const hasTimestamp = computed(() => {
  return !!settingOptions.value.find((e) => e.value === "timecodes");
});

const handleOpen = () => {
  window.addEventListener("keydown", handleKeyPress);

  if (route.query.shareId && props.isShowTimestamp === 0) {
    settingOptions.value = settingOptions.value.filter((e) => e.value !== "timecodes");
    settings.value = settings.value.filter((e) => e !== "timecodes");
  }

  if (props.selectIds?.length) {
    for (const id of props.selectIds) {
      const item = props.tableData?.find((item) => item.id === id);
      if (item) {
        taskIds.value.push({
          taskId: item.taskId,
          paragraphsLang: item.language
        });
        fileIds.value.push(item.fileId);
      }
      setNoSpeaker(!!item?.diarizeEnabled);
    }
  } else {
    fileIds.value.push(props.fileId!);
    const item = props.tableData?.find((item) => item.taskId === props.taskId!);
    taskIds.value.push({
      taskId: item?.taskId,
      paragraphsLang: item?.language
    });
    setNoSpeaker(!!item?.diarizeEnabled);
  }
};

const { userInfo } = storeToRefs(useUserStore());
const isLogin = computed(() => {
  return !route.query.shareId;
});

const loading = ref(false);
const route = useRoute();
const { addExportTask } = useExportStore();
const isOver = ref(false);
const handleConfirm = async () => {
  try {
    if (!formats.value.length) {
      Msg({
        message: t("FolderPage.dialog.export.selectErr"),
        customClass: "!z-[9999]",
        type: "error"
      });
      return;
    }

    loading.value = true;

    const params = {
      fileType: formats.value.join(","),
      exportTaskList: taskIds.value,
      taskIds: taskIds.value.map((e: any) => e.taskId).join(","),
      fileIds: fileIds.value.join(","),
      haveSpeaker: +settings.value.includes("speaker"),
      haveTimestamp: +settings.value.includes("timecodes") ? 1 : 0
    } as any;

    if (route.query.shareId) {
      params.userId = route.query.shareId as string;
    }

    if (props.translateLang) {
      params.translateLang = props.translateLang;
      params.isTranslation = 1;
    }

    const { useFolderApi } = await import("~/api/folder");

    let exportId: string;
    if (!isLogin.value) {
      const mixpanel = route.query.mixpanel || "";
      exportId = await useFolderApi.asyncExportWithoutToken({
        ...params,
        ...(mixpanel ? { mixpanel } : {})
      });
    } else {
      exportId = await useFolderApi.asyncExport(params);
    }

    if ([1, 0].includes(props.selectIds?.length || 0) && formats.value.length <= 1 && !props.translateLang) {
      await fetchExportStatus([exportId]);
      isOver.value = true;
    } else {
      addExportTask({
        [exportId as string]: {
          num: (props.selectIds?.length || 1) * (formats.value.length || 1) * (props.translateLang ? 2 : 1)
        }
      });
      isOver.value = true;
      visible.value = false;
      loading.value = false;
    }
  } catch (_) {
    loading.value = false;
    isOver.value = false;
  }
};

const { downloadFile } = useTool();
const fetchExportStatus = async (exportTaskIdList: any) => {
  loading.value = true;
  const { useFolderApi } = await import("~/api/folder");
  let res;
  if (!isLogin.value) {
    res = await useFolderApi.asyncExportStatusWithOutToken({
      exportTaskIdList,
      userId: String(route.query.shareId)
    });
  } else {
    res = await useFolderApi.asyncExportStatus({
      exportTaskIdList
    });
  }

  if (res.length) {
    for (const item of res) {
      if (item.status.toString() === "-1") {
        Msg({
          message: t("HomePage.export.error"),
          customClass: "!z-[9999]",
          type: "error"
        });
        loading.value = false;
        return;
      }
      if (item.targetUrl) {
        downloadFile(item.targetUrl);
        visible.value = false;
        loading.value = false;
        return;
      }
    }
  }

  timer = setTimeout(() => {
    fetchExportStatus(exportTaskIdList);
  }, 3000);
};

function handleKeyPress(e: any) {
  if (e.key === "Enter" && !loading.value && !isOver.value) {
    handleConfirm();
  }
}
</script>

<style scoped>
@import "./common.css";
:deep(.el-dialog) {
  width: calc(100% - 2rem);
  max-width: 29rem;
  @apply !rounded-lg p-5 sm:w-[29rem];
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
}
:deep(.el-checkbox) {
  margin: unset;
  @apply me-[1.875rem];
}
:deep(.el-checkbox__label) {
  @apply ps-2 !text-black;
}
:deep(.home2-btn.el-button) {
  @apply !border-borderColor !bg-white !text-black hover:!border-borderColor hover:!bg-fontHover hover:!text-black;
}

:deep(.el-button) {
  height: 2.125rem !important;
}
</style>
