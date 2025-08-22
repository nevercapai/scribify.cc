<template>
  <div class="customer-dialog">
    <el-dialog
      :close-on-click-modal="false"
      @closed="handleClose"
      @open="handleOpen"
      v-model="visible"
    >
      <template #header>
        <div class="flex cursor-pointer items-center" @click="showLink = false">
          <span v-if="showLink" class="me-2 flex cursor-pointer items-center">
            <el-icon>
              <ArrowLeft />
            </el-icon>
          </span>
          {{
            showLink
              ? t("FileUploadAndRecording.upload.return")
              : t("FileUploadAndRecording.upload.confirm")
          }}
        </div>
      </template>
      <div class="mb-4">
        <upload-file
          v-if="!showLink"
          :loading="loading"
          show-link
          @showLink="handleShowLink"
        />
      </div>
      <upload-link
        v-if="showLink"
        :is-overed="isOver"
        :is-loading="loading"
        v-model:link="link"
        @enter="confirm"
      >
        <div class="mb-3 text-sm font-normal text-black">
          {{ t("FileUploadAndRecording.upload.file.orTitle") }}
        </div>
      </upload-link>

      <template v-if="showLink" #footer>
        <el-button class="home-btn" @click="visible = false">
          {{ t("FileUploadAndRecording.upload.link.cancel") }}
        </el-button>
        <el-button
          class="home-btn"
          :loading="loading"
          @click="confirm"
          type="primary"
        >
          {{ t("FileUploadAndRecording.upload.link.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from "@element-plus/icons-vue";
import { useLink } from "./useLink";
const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const { link, loading, handleConfirm } = useLink(emit);

const showLink = ref(false);
const handleShowLink = () => {
  showLink.value = true;
};

const isOver = ref(false);
const confirm = async () => {
  if (isOver.value) {
    return;
  }
  const callback = () => {
    isOver.value = true;
  };
  handleConfirm(callback);
};

function handleKeyPress(e: any) {
  if (e.key === "Enter" && showLink.value && !loading.value) {
    confirm();
  }
}

const handleOpen = () => {
  loading.value = false;
  isOver.value = false;
  window.addEventListener("keypress", handleKeyPress);
};
const handleClose = () => {
  link.value = "";
  showLink.value = false;
  window.removeEventListener("keypress", handleKeyPress);
};
</script>

<style scoped>
@import "~/layouts/homeMixin.css";
@import "./common.css";
</style>
