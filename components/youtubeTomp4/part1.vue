<template>
  <div class="me-auto ms-auto flex flex-col items-center px-4">
    <!--1、 标题和输入框 -->
    <h1 class="title-wrap mb-[2.125rem] text-center text-[2.8125rem] font-bold">
      {{ $i("title") }}
    </h1>
    <div
      class="relative mb-[1.5rem] flex h-[2.75rem] w-full max-w-[43.25rem] justify-center sm:ps-[0.5rem]"
    >
      <el-input
        v-model="link"
        class="!h-[2.75rem]"
        :class="{link}"
        :placeholder="$i('placeholder')"
      />
      <span
        @click="link = ''"
        v-if="link"
        class="iconfont icon-shanchu1 absolute sm:right-[7.5rem] right-[7.1rem] top-[0.625rem] cursor-pointer text-[#6A1B85]"
      ></span>
      <el-button
        @click="handleDownload"
        :loading="loading"
        color="#3470FF"
        type="primary"
        class="download-btn relative left-[-0.125rem] !h-[2.75rem] !w-[8.125rem] cursor-pointer !bg-mainColor-900"
      >
        {{ $i("Download") }}
      </el-button>
    </div>
    <div
      class="text-center text-sm text-[rgba(255,255,255,0.7)] flex items-center"
      :class="[loading ? 'mb-[1.375rem]' : '']"
    >
      <el-image
        @click="handleHowDownload"
        src="/assets/images/downloadMp4/play_1.png"
        class="me-[0.5rem] h-5 w-5 cursor-pointer align-middle"
      ></el-image>
      <el-link @click="handleHowDownload" type="primary" class="mr-2">
        {{ $i("howToDownload") }}
      </el-link>
      {{ $i("tutorial") }}
    </div>
    <div v-if="loading" class="text-[rgba(255,255,255,0.7)]">
      {{ $i("loading_text") }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { downloadVideo } from "./downloadVideo";
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.YouTubeToMP4.part1");
const emit = defineEmits([
  "download-click-pre",
  "download-click",
  "howDownload"
]);
const { link, loading, handleDownload } = downloadVideo(emit);

const handleHowDownload = () => {
  emit("howDownload");
};
</script>

<style scoped lang="scss">
:deep(.el-button) {
  border-radius: 0 0.5rem 0.5rem 0;
}

:deep(.el-input) {
  --el-input-border: #6a36a2;
  --el-input-hover-border: #6a36a2;
  --el-input-focus-border: #6a36a2;
  --el-input-border-color: #6a36a2;
  --el-input-hover-border-color: #6a36a2;
  --el-input-clear-hover-color: #6a36a2;
  --el-input-focus-border-color: #6a36a2;
  --el-fill-color-blank: #2e164d;
  --el-border-radius-base: 0.5rem;
  --el-text-color-regular: #fff;
  --el-text-color-placeholder: rgba(255, 255, 255, 0.7);
  .el-input__wrapper {
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
    padding-right: 0;
    padding-left: 0;
    padding-inline-start: 8px;
  }
}
.download-btn {
  background: linear-gradient(90deg, #9534e6 0%, #dc2628 100%);
  border: transparent;
}

:deep(.el-link.el-link--primary) {
  --el-link-text-color: #9534e6;
  --el-link-hover-text-color: #9534e6;
  --el-link-disabled-text-color: #9534e6;
}
.title-wrap {
  background: linear-gradient(90deg, #a88afa 0%, #9534e6 62%, #f04bb7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
:deep(.link .el-input__inner) {
  padding-inline-end: 30px;
}
</style>
