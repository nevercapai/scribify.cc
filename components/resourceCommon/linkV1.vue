<template>
  <div class="flex max-md:flex-col">
    <el-input v-model="linkUrl" class="link-input !h-11 max-md:!h-11" :placeholder="linkV1Text.placeholder"></el-input>
    <el-button
      class="button ms-2.5 !h-11 shrink-0 !text-[1.125rem] !font-medium !leading-6 max-md:ms-0 max-md:mt-4 max-md:!w-full"
      type="primary"
      :disabled="!linkUrl"
      :loading="linkLoading"
      @click="handleAddLink"
    >
      {{ linkV1Text.btn }}
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
const linkV1Text = inject(
  "linkV1Text",
  () => ({
    placeholder: t("Resources.Upload.linkV1Placeholder"),
    btn: t("Resources.Upload.linkV1Btn")
  }),
  true
);
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
const clear = () => {
  linkUrl.value = "";
};
const emits = defineEmits(["confirm"]);
defineExpose({
  handleAddLink,
  checked,
  clear
});
</script>

<style lang="scss" scoped>
.link-input {
  --el-input-bg-color: #fff;
  :deep(.el-input__inner) {
    @apply text-lg;
  }
}
.button {
  background: linear-gradient(270deg, #3470ff 0%, #9534e6 100%) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem; // 10px ÷ 16
  cursor: pointer;
  overflow: hidden;
  border-color: transparent !important;
  border-width: 0;
  font-size: 1.125rem;
  @apply box-border !px-7 !py-2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }
  &.is-disabled {
    opacity: 0.65;
  }
}
</style>
