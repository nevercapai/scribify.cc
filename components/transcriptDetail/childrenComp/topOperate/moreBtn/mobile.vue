<template>
  <div>
    <div @click="show">
      <slot></slot>
    </div>
    <!--  !fixed 解决苹果手机首次打开闪烁问题  -->
    <el-drawer
      size="auto"
      class="more-drawer-jjeWcKYfy !fixed rounded-t-xl"
      :with-header="false"
      :show-close="false"
      :lock-scroll="true"
      v-model="visible"
      destroy-on-close
      direction="btt"
      body-class="!px-4 !pt-0 pb-4 bg-[#F5F5F5] more-btn-body-jjeWcKYfy"
    >
      <div class="more-wrap flex flex-col text-black">
        <div class="header-wrap flex items-center justify-between py-5">
          <span class="title text-lg font-medium"> {{ t("TranscriptionPage.timestampMore") }}</span>
          <span class="iconfont icon-shanchu" @click="hide(true)"></span>
        </div>
        <div class="content-wrap flex flex-col">
          <div
            v-if="fileBaseInfo.diarizeEnabled"
            class="flex h-11 items-center justify-between rounded-lg bg-white p-3"
          >
            <div class="flex flex-1 flex-row items-center overflow-hidden" @click="speakerClick">
              <span class="iconfont icon-jiangyanzhe me-2 text-base text-black"></span>
              <span class="flex-1 overflow-hidden truncate text-black">
                {{ t("TranscriptionPage.showSpeaker") }}
              </span>
            </div>
            <el-switch v-model="isShowSpeaker" />
          </div>
          <div class="mt-1 flex h-11 items-center justify-between overflow-hidden p-3 pb-2">
            <span class="iconfont icon-shijian me-2 text-base text-black"></span>
            <span class="flex-1 overflow-hidden truncate text-black">
              {{ t("TranscriptionPage.timestamp") }}
            </span>
          </div>
          <div class="mb-3 flex min-h-11 w-full flex-1 flex-col rounded-lg bg-white px-3">
            <div
              class="timestamp-item flex h-11 cursor-pointer items-center text-black"
              v-for="item in timeStampOpts"
              :key="item.id"
              @click="handleTimeStampOptsClick(item.id)"
            >
              <span
                class="flex-1"
                :class="[
                  { '!text-fontColor': item.id === 2 && langId },
                  item.id === isShowTimestamp ? 'text-mainColor-900' : 'text-black'
                ]"
              >
                {{ item.name }}</span
              >
              <span
                v-if="isShowTimestamp !== 2 || !langId"
                :class="[item.id === isShowTimestamp ? 'opacity-100' : 'opacity-0']"
                class="iconfont icon-duihao ms-3 text-sm text-mainColor-900"
              ></span>
            </div>
          </div>
          <div
            v-if="showShareBtn"
            class="my-3 flex h-11 items-center overflow-hidden rounded-lg bg-white px-3"
            @click="handleShare"
          >
            <span class="iconfont icon-fenxiang me-2 text-base text-black"></span>
            <span class="text-black">
              {{ t("TranscriptionPage.share") }}
            </span>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
const { t } = useI18n();
const visible = ref(false);
const props = defineProps({
  fileBaseInfo: {
    type: Object,
    default: () => ({})
  },
  langId: {
    type: String,
    default: ""
  },
  showShareBtn: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(["share"]);
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
const isShowSpeaker = defineModel("isShowSpeaker", { default: true });
const isShowTimestamp = defineModel("isShowTimestamp", { default: 1 });
const show = () => {
  setTimeout(() => {
    visible.value = true;
  }, 50);
};
const hide = (immediate = false) => {
  if (immediate) {
    visible.value = false;
    return;
  }
  setTimeout(() => {
    visible.value = false;
  }, 300);
};
const speakerClick = () => {
  isShowSpeaker.value = !isShowSpeaker.value;
};
const handleTimeStampOptsClick = (id) => {
  if (id === 2 && props.langId) return;
  isShowTimestamp.value = id;
};
const handleShare = () => {
  emit("share");
  hide(true);
};
</script>

<style scoped lang="scss">
.timestamp-item {
  &:not(:last-child) {
    @apply border-b border-[#E6E6E6];
  }
}
</style>
<style lang="scss">
.more-btn-body-jjeWcKYfy {
  --el-border-radius-base: 0.5rem;
  --el-color-primary: theme("colors.mainColor.900");
}
.el-popup-parent--hidden:has(.more-drawer-jjeWcKYfy .more-wrap) {
  @media (max-width: 767px) {
    overflow: hidden;
    width: auto !important;
  }
}
</style>
