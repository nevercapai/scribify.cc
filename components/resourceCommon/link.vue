<template>
  <div class="flex max-md:flex-col">
    <el-input v-model="linkUrl" class="link-input !h-14 max-md:!h-11" placeholder="https://..."></el-input>
    <el-button
      class="sys-btn ms-2.5 !h-14 !min-w-32 !max-w-64 !text-[1.375rem] !font-medium !leading-8 max-md:ms-0 max-md:mt-2 max-md:!h-11 max-md:!w-full"
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
import { useVisitor } from "~/hooks/useVisitor.js";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie.js";
import { importWithRetry } from "~/utils/importWithRetry.js";
const { linkValidate } = useLink();
const { createFileObject } = useUpload();
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
const { t } = useI18n();
const linkUrl = ref("");
const linkLoading = ref(false);
const checked = ref(false);
const handleAddLink = async () => {
  await guestLogin();
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
