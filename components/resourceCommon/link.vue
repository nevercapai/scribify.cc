<template>
  <div class="flex">
    <el-input v-model="linkUrl" class="link-input !h-14" placeholder="https://..."></el-input>
    <el-button
      class="sys-btn ms-2.5 !h-14 !w-32 !text-[1.375rem] !font-medium !leading-8"
      type="primary"
      :disabled="!linkUrl"
      :loading="linkLoading"
      @click="handleAddLink"
    >
      {{ t("Resources.Upload.search") }}
    </el-button>
  </div>
</template>

<script setup>
import { Msg } from "~/utils/tools.js";
import { useLink } from "~/components/upload/dialog/useLink.js";
import { useUpload } from "~/components/upload/useUpload.js";
const { linkValidate } = useLink();
const { createFileObject } = useUpload();
const { t } = useI18n();
const linkUrl = ref("");
const linkLoading = ref(false);
const checked = ref(false);
const handleAddLink = async () => {
  if (linkLoading.value) return;
  linkLoading.value = true;
  if (!linkValidate(linkUrl.value)) {
    linkLoading.value = false;
    return;
  }
  try {
    const { useFolderApi } = await import("~/api/folder");
    const { createFileByLink } = useFolderApi;
    const idObj = await createFileByLink({
      url: linkUrl.value,
      parentId: 0
    });
    const file = new File([], linkUrl.value);
    file.localRequestId = idObj.id;
    file.localFileSize = "--";
    checked.value = true;
    const linkData = createFileObject(file, { checkPass: () => checked.value });
    emits("confirm", linkData);
  } catch (err) {
    if (err.message) {
      Msg({
        message: err.message,
        customClass: "!z-[9999]",
        type: "error"
      });
      return Promise.reject(false);
    }
  } finally {
    linkLoading.value = false;
  }
};
const emits = defineEmits(["confirm"]);
defineExpose({
  handleAddLink,
  checked
});
</script>

<style lang="scss" scoped>
.link-input {
  --el-input-bg-color: #f9fafc;
  :deep(.el-input__inner) {
    @apply text-lg;
  }
}
.sys-btn.el-button.is-disabled,
.sys-btn.el-button.is-disabled:hover {
  background-color: var(--mainColor-900);
  opacity: 0.6;
  color: white;
}
</style>
