<template>
  <el-popover
    ref="langChoosePopoverRef"
    placement="bottom"
    popper-class="!rounded-lg"
    :width="isDesktop ? '50rem' : '23rem'"
    trigger="click"
    :show-arrow="false"
    popper-style="padding:0;"
    @show="handleLangPopShow"
  >
    <template #reference>
      <el-button text :bg="Boolean(langIdValue)" v-if="isDesktop">
        <span class="iconfont icon-fanyi me-2 text-base text-black"></span>
        <div class="max-w-20 truncate leading-4 text-black">
          {{ !langIdValue ? t("TranscriptionPage.translate") : t("TranscriptionPage.langChooseV1." + langIdValue) }}
        </div>
        <el-icon class="el-icon--right !ms-2">
          <arrow-down />
        </el-icon>
      </el-button>
      <div v-else class="pop ms-5 leading-8 text-black">
        <span class="iconfont icon-fanyi text-base"></span>
        <el-icon class="el-icon--right !ms-0 !text-sm">
          <arrow-down />
        </el-icon>
      </div>
    </template>
    <lang-choose-v1
      ref="langChooseV1Ref"
      v-model="langIdValue"
      :recentLanguageKeys="recentLanguageKeys"
      @choose="handleTranslateLangChoose"
    ></lang-choose-v1>
  </el-popover>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useMediaQuery } from "@vueuse/core";
const isDesktop = useMediaQuery("(min-width: 768px)");
const props = defineProps({
  langId: {
    type: String,
    default: () => ""
  },
  recentLanguageKeys: {
    type: Array,
    default: () => []
  }
});
const { t } = useI18n();
const langChoosePopoverRef = ref(null);
const langChooseV1Ref = ref(null);
const emit = defineEmits(["update:langId", "choose"]);
const langIdValue = computed({
  get: () => props.langId,
  set: (value) => {
    emit("update:langId", value);
  }
});
// 弹出语言选择框时，滚动到已选择的语言
const handleLangPopShow = () => {
  setTimeout(() => {
    langChooseV1Ref.value?.scrollToSelectedLanguage({ container: "nearest" });
  }, 50);
};
const handleTranslateLangChoose = (data) => {
  langChoosePopoverRef.value?.hide();
  emit("choose", data);
};
</script>

<style lang="scss"></style>
