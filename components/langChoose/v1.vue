<template>
  <div
    class="relative flex max-h-[30rem] max-w-[23rem] flex-col overflow-hidden rounded-lg bg-white lg:max-w-[50rem]"
    :class="customerClass"
  >
    <!-- 搜索框 -->
    <div
      class="mb-[0.875rem] h-[2.125rem] flex-shrink-0 overflow-hidden rounded-t-lg bg-boxBgColor"
    >
      <el-input
        v-model="searchQuery"
        :placeholder="t('TranscriptionPage.langChooseV1.searchLanguage')"
        clearable
        class="overflow-hidden"
      >
        <template #prefix>
          <el-icon class="!text-black">
            <Search />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="overflow-y-auto">
      <!-- 最近使用的语言 -->
      <div v-if="filteredRecentLanguages.length > 0">
        <div class="section-header flex h-5 items-center justify-center">
          <div class="flex-grow border-t border-borderColor"></div>
          <div class="mx-4 leading-5 text-fontColor">
            {{ t("TranscriptionPage.langChooseV1.recently") }}
          </div>
          <div class="flex-grow border-t border-borderColor"></div>
        </div>
        <div
          class="lang-item-wrap grid grid-cols-2 gap-3 px-4 py-2 lg:grid-cols-5"
        >
          <div
            v-for="(lang, index) in filteredRecentLanguages"
            :key="`recent-${index}`"
            :ref="
              (el) => {
                if (el) recentRefs[lang.id] = el;
              }
            "
            class="flex cursor-pointer items-center rounded-lg px-2 py-1.5 hover:bg-boxBgColor"
            :class="{ 'bg-boxBgColor': selectedLanguageIds.has(lang.id) }"
            @click="selectLanguage(lang)"
          >
            <span
              class="flex-1 overflow-hidden truncate whitespace-nowrap text-sm text-black"
              :title="t('TranscriptionPage.langChooseV1.' + lang.name)"
            >
              {{ t("TranscriptionPage.langChooseV1." + lang.name) }}
            </span>
            <el-icon
              v-if="selectedLanguageIds.has(lang.id)"
              class="ms-1 !text-mainColor-900"
            >
              <Check />
            </el-icon>
          </div>
        </div>
      </div>

      <!-- 流行语言 -->
      <div v-if="filteredPopularLanguages.length > 0">
        <div class="section-header flex h-5 items-center justify-center">
          <div class="flex-grow border-t border-borderColor"></div>
          <div class="mx-4 leading-5 text-fontColor">
            {{ t("TranscriptionPage.langChooseV1.popular") }}
          </div>
          <div class="flex-grow border-t border-borderColor"></div>
        </div>
        <div
          class="lang-item-wrap grid grid-cols-2 gap-3 px-4 py-2 lg:grid-cols-5"
        >
          <div
            v-for="(lang, index) in filteredPopularLanguages"
            :key="`popular-${index}`"
            :ref="
              (el) => {
                if (el) popularRefs[lang.id] = el;
              }
            "
            class="flex cursor-pointer items-center rounded-lg px-2 py-1.5 hover:bg-boxBgColor"
            :class="{ 'bg-boxBgColor': selectedLanguageIds.has(lang.id) }"
            @click="selectLanguage(lang)"
          >
            <span
              class="flex-1 overflow-hidden truncate whitespace-nowrap text-sm text-black"
              :title="t('TranscriptionPage.langChooseV1.' + lang.name)"
            >
              {{ t("TranscriptionPage.langChooseV1." + lang.name) }}
            </span>
            <el-icon
              v-if="selectedLanguageIds.has(lang.id)"
              class="ms-1 !text-mainColor-900"
            >
              <Check />
            </el-icon>
          </div>
        </div>
      </div>

      <!-- 其他语言 -->
      <div v-if="alphabetLetters.length > 0">
        <div class="section-header flex h-5 items-center justify-center">
          <div class="flex-grow border-t border-borderColor"></div>
          <div class="mx-4 leading-5 text-fontColor">
            {{ t("TranscriptionPage.langChooseV1.other") }}
          </div>
          <div class="flex-grow border-t border-borderColor"></div>
        </div>

        <!-- 按字母分组的语言 -->
        <div v-for="letter in alphabetLetters" :key="letter" class="mb-2">
          <h4 class="px-4 py-1 text-sm text-gray-400">{{ letter }}</h4>
          <div
            class="lang-item-wrap grid grid-cols-2 gap-3 px-4 py-2 lg:grid-cols-5"
          >
            <div
              v-for="lang in filteredAlphabetLanguages[letter]"
              :key="lang.id"
              :ref="
                (el) => {
                  if (el) {
                    if (!alphabetRefs[letter]) alphabetRefs[letter] = {};
                    alphabetRefs[letter][lang.id] = el;
                  }
                }
              "
              class="flex cursor-pointer items-center rounded-lg px-2 py-1.5 hover:bg-boxBgColor"
              :class="{ 'bg-boxBgColor': selectedLanguageIds.has(lang.id) }"
              @click="selectLanguage(lang)"
            >
              <span
                class="flex-1 overflow-hidden truncate whitespace-nowrap text-sm text-black"
                :title="t('TranscriptionPage.langChooseV1.' + lang.name)"
              >
                {{ t("TranscriptionPage.langChooseV1." + lang.name) }}
              </span>
              <span
                v-if="selectedLanguageIds.has(lang.id)"
                class="iconfont icon-duihao ms-1 text-xs !text-mainColor-900"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <!-- 无搜索结果提示 -->
      <div
        v-if="searchQuery && !hasAnyResults"
        class="p-8 text-center text-gray-500"
      >
        {{ t("TranscriptionPage.langChooseV1.noMatch") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { Search, Check } from "@element-plus/icons-vue";
import { languageData } from "./langFlag.js";
const { t } = useI18n();
// 定义组件属性
const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  recentLanguageKeys: {
    type: Array,
    default: () => []
  },
  // 仅显示转录语言
  onlyTransCode: {
    type: Boolean,
    default: false
  },
  customerClass: {
    type: String,
    default: ""
  },
  cancel: {
    type: Boolean,
    default: true
  },
  isScroll: {
    type: Boolean,
    default: true
  }
});

// 定义事件和向外暴露的方法
const emit = defineEmits(["choose", "update:modelValue"]);

const searchQuery = ref("");
const selectedLanguageIds = ref(new Set());
const allLanguages = ref([]);

// 用于滚动定位的ref
const recentRefs = ref({});
const popularRefs = ref({});
const alphabetRefs = ref({});

// 常用语言列表
const popularLanguageNames = [
  "English",
  "Spanish",
  "Portuguese",
  "French",
  "Italian",
  "German",
  "Dutch",
  "Polish",
  "Danish",
  "Japanese",
  "Korean",
  "Hungarian",
  "Czech",
  "Chinese(Simplified)",
  "Hebrew"
];

// 滚动到选中的语言
const scrollToSelectedLanguage = () => {
  if (!props.modelValue) return;

  nextTick(() => {
    // 检查在哪个区域
    let selectedRef = null;

    // 检查最近使用区域
    if (recentRefs.value[props.modelValue]) {
      selectedRef = recentRefs.value[props.modelValue];
    }
    // 检查常用语言区域
    else if (popularRefs.value[props.modelValue]) {
      selectedRef = popularRefs.value[props.modelValue];
    }
    // 检查按字母分组的区域
    else {
      for (const letter in alphabetRefs.value) {
        if (
          alphabetRefs.value[letter] &&
          alphabetRefs.value[letter][props.modelValue]
        ) {
          selectedRef = alphabetRefs.value[letter][props.modelValue];
          break;
        }
      }
    }
    // 如果找到了引用，滚动到该元素
    if (selectedRef) {
      setTimeout(() => {
        selectedRef.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  });
};

// 监听props.modelValue的变化，更新选中状态
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      selectedLanguageIds.value = new Set([newVal]);
      // 当选中的语言变化时，滚动到该语言
      if (props.isScroll) {
        scrollToSelectedLanguage();
      }
    } else {
      selectedLanguageIds.value = new Set();
    }
  },
  { immediate: false }
);
// 从JSON创建语言对象
const langMap = new Map(); // 用于去重
// 添加JSON中的语言
languageData.forEach((item) => {
  if (props.onlyTransCode && !item.transCode) {
    return;
  } else if (!props.onlyTransCode && !item.langCode) {
    return;
  }
  if (!langMap.has(item.lang)) {
    allLanguages.value.push({
      id: item.lang, // 使用语言名作为id
      name: item.lang,
      langCode: item.langCode,
      category: item.category,
      transCode: item.transCode
    });
    langMap.set(item.lang, true);
  }
});
const initLanguages = () => {
  // 设置常用语言
  const recentLangNames = recentLanguages.value.map((lang) => lang.name);
  popularLanguages.value = allLanguages.value.filter(
    (lang) =>
      lang.category === "popular" && !recentLangNames.includes(lang.name)
  );

  // 设置其他语言（按字母分组）
  const otherLangs = allLanguages.value.filter(
    (lang) => lang.category === "other" && !recentLangNames.includes(lang.name)
  );
  alphabetLanguages.value = [];
  // 按首字母分组
  otherLangs.forEach((lang) => {
    const firstLetter = lang.name.charAt(0).toUpperCase();
    if (!alphabetLanguages.value[firstLetter]) {
      alphabetLanguages.value[firstLetter] = [];
    }
    alphabetLanguages.value[firstLetter].push(lang);
  });

  // 排序每组语言
  Object.keys(alphabetLanguages.value).forEach((letter) => {
    alphabetLanguages.value[letter].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  });
};

// 语言分类
// 最近语言
const recentLanguages = computed(() => {
  return props.recentLanguageKeys
    .map((key) => {
      return allLanguages.value.find((lang) => lang.id === key);
    })
    .filter(Boolean);
});
const popularLanguages = ref([]);
const alphabetLanguages = ref({});

// 选择或取消选择语言
const selectLanguage = (language) => {
  if (selectedLanguageIds.value.has(language.id)) {
    if (!props.cancel) return;
    // 如果已经选中，则取消选择
    selectedLanguageIds.value = new Set();
    emit("choose", {});
    emit("update:modelValue", "");
  } else {
    // 否则选中此语言
    selectedLanguageIds.value = new Set([language.id]);
    emit("choose", language);
    emit("update:modelValue", language.id);
  }
};

// 过滤函数 - 根据搜索关键字过滤语言列表
const filterLanguages = (languages, query) => {
  if (!query || query.trim() === "") {
    return languages;
  }
  const lowerQuery = query.toLowerCase();
  return languages.filter((lang) => {
    const name = t("TranscriptionPage.langChooseV1." + lang.name);
    return name.toLowerCase().includes(lowerQuery);
  });
};

// 过滤后的语言列表
const filteredRecentLanguages = computed(() =>
  filterLanguages(recentLanguages.value, searchQuery.value)
);
const filteredPopularLanguages = computed(() =>
  filterLanguages(popularLanguages.value, searchQuery.value)
);

// 过滤按字母分组的语言
const filteredAlphabetLanguages = computed(() => {
  const result = {};
  Object.entries(alphabetLanguages.value).forEach(([letter, languages]) => {
    const filtered = filterLanguages(languages, searchQuery.value);
    if (filtered.length > 0) {
      result[letter] = filtered;
    }
  });
  return result;
});

// 字母分组的键列表（用于v-for渲染），按字母顺序排序
const alphabetLetters = computed(() =>
  Object.keys(filteredAlphabetLanguages.value).sort()
);

// 是否有匹配的语言
const hasAnyResults = computed(
  () =>
    filteredRecentLanguages.value.length > 0 ||
    filteredPopularLanguages.value.length > 0 ||
    Object.keys(filteredAlphabetLanguages.value).length > 0
);
watch(
  recentLanguages,
  () => {
    initLanguages();
  },
  { deep: true }
);
// 初始化语言数据
onMounted(() => {
  initLanguages();
  // 如果有初始选中的语言，设置选中状态
  if (props.modelValue) {
    selectedLanguageIds.value = new Set([props.modelValue]);

    // 初始化后滚动到选中的语言
    nextTick(() => {
      scrollToSelectedLanguage();
    });
  }
});
// 向外暴露方法
defineExpose({
  scrollToSelectedLanguage,
  popularLanguages
});
</script>

<style scoped>
/* 自定义Element Plus组件样式 */
:deep(.el-input__wrapper) {
  box-shadow: none !important;
  @apply bg-boxBgColor;

  .el-input__prefix {
    @apply ms-[0.5rem];
  }
}

:deep(.el-input__inner) {
  font-size: 0.875rem;
  color: #000;

  &::placeholder {
    @apply text-fontColor;
  }
}

/* 添加一些阴影效果 */
.section-header {
  z-index: 1;
  position: relative;
}
</style>
