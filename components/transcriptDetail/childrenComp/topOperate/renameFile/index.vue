<template>
  <div class="file-name line-clamp-1 break-all leading-5 text-black">
    <span
      v-if="!isShare"
      @click="startEditing"
      ref="fileNameElement"
      class="file-text cursor-pointer text-base font-medium"
      :class="[isDesktop ? 'hover-effect' : '']"
      :title="fileName"
    >
      {{ fileName }}
    </span>
    <span v-else class="file-text text-base font-medium">{{ fileName }} </span>
    <el-popover
      ref="fileNamePopoverRef"
      :virtual-ref="fileNameElement"
      :offset="4"
      :width="fileNameWrapPopWidth"
      :show-arrow="false"
      virtual-triggering
      placement="bottom-start"
      popper-style="padding:0;"
      popper-class="filename-pop !rounded-lg !border-0 popover-textarea"
      trigger="click"
      @hide="saveFileName"
    >
      <el-input
        ref="fileNameInputRef"
        class="sys-input rounded-lg !text-black"
        maxlength="80"
        :show-word-limit="isDesktop"
        v-model="fileName"
        @input="fileNameInput"
        @blur="hideFilePop"
        @keyup.enter.native="hideFilePop"
        type="textarea"
        :rows="isDesktop ? 2 : 4"
      />
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMediaQuery } from "@vueuse/core";
const isDesktop = useMediaQuery("(min-width: 768px)");
const props = defineProps({
  fileBaseInfo: {
    type: Object,
    default: () => ({})
  },
  isShare: {
    type: Boolean,
    default: false
  }
});
const fileName = defineModel("fileName", { default: "" });
const isEditFile = defineModel("isEditFile", { default: false });

const fileNameElement = ref(null);
const fileNameInputRef = ref(null);
const fileNamePopoverRef = ref(null);
let originName = fileName.value;
// 文件名编辑相关方法
const startEditing = () => {
  isEditFile.value = true;
  setTimeout(() => {
    console.log("🚀 ~ file: fileName  line: 22 🚀", fileName.value);
    console.warn("dom中input的值", fileNameInputRef.value?.ref?.value);
    if (!fileNameInputRef.value?.ref?.value) {
      fileNameInputRef.value.ref.value = fileName.value;
    }
    fileNameInputRef.value?.focus();
  }, 100);
};
const saveFileName = async () => {
  try {
    const newName = fileName.value;
    if (newName === "" || newName === originName) {
      fileName.value = originName;
      return;
    }
    const { useFolderApi } = await import("~/api/folder");
    await useFolderApi.renameFile({
      id: props.fileBaseInfo.id,
      taskId: props.fileBaseInfo.taskId,
      fileName: newName
    });
    fileName.value = newName;
    originName = fileName.value;
  } catch (e) {
    fileName.value = originName;
    console.log("🚀 ~ 文件名保存异常 🚀", e);
  } finally {
    isEditFile.value = false;
  }
};
const fileNameInput = (val) => {
  fileName.value = val.replace(/\//g, "").replace(/[\r\n]+/g, "");
};
const hideFilePop = () => {
  fileNamePopoverRef.value?.hide();
};
const c1 = useMediaQuery("(min-width: 1200px)");
const c2 = useMediaQuery("(min-width: 1600px)");
const fileNameWrapPopWidth = computed(() => {
  if (!isDesktop.value) return "20rem";
  if (c2.value) return "54rem";
  if (c1.value) return "40rem";
  return "30rem";
});
</script>

<style lang="scss" scoped>
.file-name {
  display: flex;
}
.file-text {
  @apply truncate !whitespace-pre;
  &.hover-effect {
    &:hover {
      background-color: theme("colors.hoverColor.deepen");
    }
  }

  &.editing {
    outline: none;
    border: none;
    box-shadow: none;
    background-color: transparent;
    border-bottom: 1px solid theme("colors.mainColor.900");
    &:focus {
      outline: none;
    }
  }
}
</style>
<style lang="scss">
.filename-pop {
  .el-input__count {
    margin-left: 0 !important;
    @apply ms-2;
  }
}
</style>
