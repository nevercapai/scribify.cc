<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :title="t('FileUploadAndRecording.upload.confirm')"
      @closed="handleClose"
      @close="emit('close')"
    >
      <div class="w-full">
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
        <div class="flex w-full items-center">
          <el-button class="home-btn flex-1" @click="visible = false">{{
            t("FileUploadAndRecording.upload.cancel")
          }}</el-button>
          <el-button
            :loading="transcribing"
            class="home-btn flex-1"
            type="primary"
            @click="handleTranscribe"
            >{{ t("FileUploadAndRecording.upload.confirm") }}</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>

  <subscription-modal v-model="showSubModal" />
  <speaker-promat v-model="showSpeakerModal" />
</template>

<script setup lang="ts">
import { type UploadFile, useUpload } from "~/components/upload/useUpload";
import { useSubscript } from "~/components/layout/header/useSubscript";
import Utils from "~/utils/tools";
import SpeakerPromat from "~/components/record/dialog/speakerPromat.vue";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  audioBlob: Blob | null;
  recordTitle: string;
  parentId?: string | number;
  formattedTime?: string;
}>();

const emit = defineEmits(["update:modelValue", "close"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const { initUpload, createFileObject } = useUpload();
const file = reactive({
  file: null as any | null
});
watchEffect(async () => {
  if (visible.value && !file.file) {
    file.file = reactive(
      createFileObject(
        new File([props.audioBlob!], props.recordTitle, {
          type: "audio/mp3", // 根据实际格式调整（如 'audio/mp3'）
          lastModified: Date.now() // 可选：设置最后修改时间
        })
      )
    );
  }
});

const { endRecord } = useRecordStore();
const transcribing = ref(false);
const lang = ref<any>({});
const { selectedFolder } = storeToRefs(useFolderStore());
const { updateNewFileList } = useUploadStore();

const { fetchSubscript } = useSubscript();
const { isFreeUser } = storeToRefs(useSubscriptionStore());
const route = useRoute();
const diarizeEnabled = ref(false);
const getFileNameWithoutExt = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex === -1 ? fileName : fileName.substring(0, lastDotIndex);
};

const isMobile = useState("isMobile");
const showSubModal = ref(false);
const showPro = () => {
  if (isMobile.value) {
    handleRemoveAll();
    router.push(localePath("/getPro"));
    return;
  }
  showSubModal.value = true;
};

const isTimeOver3h = computed(() => {
  // todo 要改
  const h = props.formattedTime
    ? parseInt(props.formattedTime?.split(":")?.[1]) || 0
    : 0;
  return h >= 3;
});
const showSpeakerModal = ref(false);
const handleTranscribe = async () => {
  if (diarizeEnabled.value && isTimeOver3h.value) {
    showSpeakerModal.value = true;
    return;
  }

  transcribing.value = true;
  try {
    await initUpload(file.file);
    const { useFolderApi } = await import("~/api/folder");
    const { transcribeFile, saveFileInfo } = useFolderApi;
    const fileExtName = file.file.name.split(".").pop();
    const fileInfo = await saveFileInfo(
      JSON.stringify([
        {
          bucketId: file.file.key,
          fileExtName: fileExtName,
          parentId: props.parentId || 0,
          fileName: getFileNameWithoutExt(file.file.name),
          fileSize: file.file.size
        }
      ])
    );

    const fileIds = fileInfo.map((file: any) => file.fileId);
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
    endRecord();
    updateNewFileList(fileIds);
  } catch (e) {
    if (e?.code === 15010) {
      showPro();
    }
  } finally {
    setTimeout(() => {
      transcribing.value = false;
    }, 10000);
  }
};

const handleClose = () => {
  diarizeEnabled.value = false;
};
</script>

<style scoped>
@import "~/layouts/homeMixin.css";
@import "../../upload/dialog/common.css";
</style>
