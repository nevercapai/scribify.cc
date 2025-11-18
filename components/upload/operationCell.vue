<template>
  <div
    v-if="rowData.status !== 'error'"
    class="ms-2 flex h-7 cursor-pointer items-center justify-center rounded-lg"
    @click="handleOperation('del')"
  >
    <span class="iconfont icon-shanchu h-5 text-sm text-fontColor"></span>
  </div>

  <!-- 正常情况显示带popover的按钮 -->
  <el-popover
    v-else
    ref="popRef"
    trigger="click"
    placement="bottom-end"
    transition="el-zoom-in-top"
    :show-arrow="false"
    :popper-style="popperStyle"
    :offset="4"
  >
    <!-- reference 插槽 -->
    <template #reference>
      <div ref="element" class="ms-2 flex h-7 cursor-pointer items-center justify-center rounded-lg">
        <span class="iconfont icon-suolve text-sm text-fontColor"></span>
      </div>
    </template>

    <template #default>
      <div class="w-full py-2.5">
        <div
          v-for="button in allButtons"
          :key="button.key"
          class="mb-2 flex h-7 w-full cursor-pointer items-center px-[1.5em]"
          @click="handleOperation(button.key)"
        >
          <span class="iconfont relative me-2.5 h-5 text-sm text-fontColor" :class="button.icon"></span>
          <span>{{ button.name }}</span>
        </div>
      </div>
    </template>
  </el-popover>
</template>

<script setup>
// 接收props
const props = defineProps({
  rowData: Object
});

const { t } = useI18n();
const popRef = useTemplateRef("popRef");

// popover样式
const popperStyle = {
  padding: "0",
  borderRadius: "0.5rem",
  boxShadow: "0 0 0.625rem 0 rgba(0,0,0,0.14)",
  minWidth: "6.5rem",
  width: "auto",
  color: "black"
};

// 所有按钮配置
const allButtons = [
  {
    icon: "icon-retry",
    name: t("FileUploadAndRecording.upload.retry"),
    key: "retry"
  },
  {
    icon: "icon-bianji",
    name: t("FileUploadAndRecording.upload.edit"),
    key: "edit"
  },
  {
    icon: "icon-shanchu",
    name: t("FileUploadAndRecording.upload.delete"),
    key: "del"
  }
];

const emit = defineEmits(["operation"]);
const handleOperation = (key) => {
  emit("operation", key);
  popRef?.value?.hide();
};
</script>
