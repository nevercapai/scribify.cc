<template>
  <el-popover
    ref="showTimestampRef"
    placement="bottom"
    width="auto"
    trigger="click"
    :show-arrow="false"
    popper-style="padding:0;"
    popper-class="pop-iAHFsY1 !p-0"
  >
    <template #reference>
      <el-button text :bg="Boolean(timestampValue)" class="relative h-8">
        <span class="iconfont icon-shijian me-2 text-base"></span>
        <div class="flex w-[8.5rem] items-center">
          <span class="truncate text-left">
            {{ timeStampOptsMap[timestampValue] }}
          </span>
          <el-icon class="el-icon--right !ms-2 max-w-[0.875rem] flex-1">
            <arrow-down />
          </el-icon>
        </div>
      </el-button>
    </template>
    <div class="px-4 py-3">
      <div
        class="flex h-8 cursor-pointer items-center rounded-lg px-2 text-black hover:bg-hoverColor-normal"
        v-for="item in timeStampOpts"
        :key="item.id"
        @click="handleTimeStampOptsClick(item.id)"
      >
        <span
          class="flex-1"
          :class="[
            item.id === timestampValue ? 'text-mainColor-900' : 'text-black'
          ]"
        >
          {{ item.name }}</span
        >
        <span
          :class="[item.id === timestampValue ? 'opacity-100' : 'opacity-0']"
          class="iconfont icon-duihao ms-3 text-sm text-mainColor-900"
        ></span>
      </div>
    </div>
  </el-popover>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
const props = defineProps({
  isShowTimestamp: {
    type: Number,
    default: () => 1
  }
});
const { t } = useI18n();
const showTimestampRef = ref(null);
const timeStampOpts = [
  {
    id: 1,
    name: t("TranscriptionPage.showTimestamp")
  },
  {
    id: 2,
    name: t("TranscriptionPage.showMoreTimestamp")
  },
  {
    id: 0,
    name: t("TranscriptionPage.hideTimestamp")
  }
];
const timeStampOptsMap = {
  1: t("TranscriptionPage.showTimestamp"),
  2: t("TranscriptionPage.selectMoreTimestamp"),
  0: t("TranscriptionPage.hideTimestamp")
};
const emit = defineEmits(["update:isShowTimestamp"]);
const timestampValue = computed({
  get: () => props.isShowTimestamp,
  set: (value) => {
    emit("update:isShowTimestamp", value);
  }
});
const handleTimeStampOptsClick = (id) => {
  timestampValue.value = id;
  showTimestampRef.value?.hide();
};
</script>

<style lang="scss">
.pop-iAHFsY1 {
  --el-popover-border-radius: 0.5rem;
}
</style>
