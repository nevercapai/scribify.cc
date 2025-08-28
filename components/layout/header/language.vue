<template>
  <el-popover
    ref="popoverRef"
    placement="bottom"
    width="18rem"
    popper-style="height: 21.5625rem;padding: 1.25rem 0 !important"
    trigger="click"
  >
    <template #reference>
      <span
        class="i18n-btn me-2 flex h-[2rem] w-[2rem] items-center justify-center rounded-[1rem] bg-mainColor-600 text-mainColor-900"
        style="cursor: pointer"
      >
        <i class="iconfont icon-quanqiu text-xl"></i>
      </span>
    </template>
    <template #default>
      <div class="w-full">
        <div class="flex h-[2rem] items-center px-5 text-base">
          <i class="iconfont icon-quanqiu ng-quanqiu"></i>
          <span class="text-black">
            {{ $t("AccountSettingsPage.displayLanguage") }}
          </span>
        </div>
        <div style="overflow: auto; height: 18rem" class="overscroll-contain">
          <div
            v-for="(item, index) in localeOptions"
            :key="item.value"
            @click="switchLanguage(item.value)"
            class="my-2 flex h-[2rem] cursor-pointer items-center px-5 py-2 transition hover:bg-hoverColor-normal"
            :class="{ 'bg-hoverColor-deepen': activeLanguage === item.value }"
          >
            <span class="ms-2 font-medium text-black">{{ item.label }}</span>
            <span class="flex-1 text-end text-sm text-black">
              {{ item.currentLangLabel }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, unref } from "vue";
import { sysLanguagesMap } from "~/utils/nation";
import { useRoute, useRouter } from "vue-router";
import { useI18n, useLocalePath, useSwitchLocalePath } from "#imports";
import { useIPLanguage } from "~/utils/useIPLanguage";
import { type LocaleKey } from "~/i18n/index";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";

const route = useRoute();
const router = useRouter();
const { locale, locales, getLocaleMessage } = useI18n();
const defaultMessage = getLocaleMessage("en-US");
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

// 先声明 activeLanguage
const activeLanguage = useState("locale", () => locale.value);

const LanguageFixRoute = computed(() => {
  return (
    (route.name as string)?.includes("transcript-id___") && route.query.shareId
  ); // 当前页面为分享页面
});

const { ipapiCo } = useIPLanguage();
/**languageInitStatus = { '第一次打开': '没值', '手动切换过': 'changed', }**/
const languageInitStatus = useCrossDomainCookie("languageInitStatus");
if (!languageInitStatus.value && !LanguageFixRoute.value) {
  ipapiCo().then((ipInfo) => {
    // 有时间差。如果这个时候languageInitStatus有值说明请求过程中切换过语言，那么就不设置默认语言了
    if (!languageInitStatus.value) {
      // 判断ipInfo.language是否在i18n[LocaleLangs]里面
      let langArr: { code: string; name?: string }[] = [];
      let langSplitArr: { code: string; name?: string }[] = [];
      locales.value.forEach((item) => {
        if (item.code === ipInfo.language) {
          langArr.push(item);
        } else if (item.code?.split("-")?.includes(ipInfo.language)) {
          langSplitArr.push(item);
        }
      });
      if (langArr.length || langSplitArr.length) {
        const code = langArr[0]?.code || langSplitArr[0]?.code;
        console.log("lang:", code);
        switchLanguage(code);
      }
    }
  });
}

// 定义语言选项
let localeMessage = getLocaleMessage(locale.value);
const localeOptions = ref<
  { value: string; label: string; currentLangLabel: string }[]
>([]);
const getLocaleOptions = function () {
  localeOptions.value = [];
  localeMessage = getLocaleMessage(locale.value);
  for (const item of locales.value) {
    let key = sysLanguagesMap[item.name as string];
    let currentLangLabel = "";
    try {
      currentLangLabel = (localeMessage as any)?.LanguageMap?.sysLanguagesMap[
        key
      ];
    } catch (err) {
      currentLangLabel = (defaultMessage as any)?.LanguageMap?.sysLanguagesMap[
        key
      ];
    }
    let option = {
      label: item.name as string, // 原始语言
      value: item.code as string,
      currentLangLabel // 原始语言对应当前语言，会根据选择的语言动态显示
    };
    if (activeLanguage.value === item.code) {
      localeOptions.value.unshift(option);
    } else {
      localeOptions.value.push(option);
    }
  }
};
getLocaleOptions();

// 组件挂载时的处理
onMounted(async () => {
  const cookie = useCrossDomainCookie("i18n_localLanguage");

  if (LanguageFixRoute.value) {
    let savedLocale = activeLanguage.value || cookie.value;
    locale.value = savedLocale as LocaleKey;
    return;
  }
  // 从 URL 或 localStorage 恢复语言设置
  let savedLocale = cookie.value || activeLanguage.value;

  let isSame = true;
  if (savedLocale !== activeLanguage.value) {
    isSame = false;
  }
  if (savedLocale) {
    activeLanguage.value = savedLocale as LocaleKey;
    locale.value = savedLocale as LocaleKey;
  }
  if (!isSame) {
    switchLanguage(activeLanguage.value);
  }
});
const popoverRef = ref();
// 切换语言方法
const switchLanguage = async (newLocale: any) => {
  languageInitStatus.value = "changed"; // 设置值
  activeLanguage.value = newLocale;
  locale.value = newLocale;
  unref(popoverRef)?.hide();

  const path = switchLocalePath(newLocale);
  if (path) {
    await router.push({
      path: localePath(path),
      hash: route.hash,
      query: route.query
    });
  }

  getLocaleOptions();
};

// 路由监听
watch(
  () => route.fullPath,
  async (newPath) => {
    // 确保语言设置正确
    const routeLocale = route.params.locale || "en-US";
    if (routeLocale !== activeLanguage.value) {
      // 如果 URL 中的语言与当前语言不匹配，更新路由到正确的语言版本
      const path = switchLocalePath(activeLanguage.value);
      if (path) {
        await router.push({
          path,
          hash: route.hash,
          query: route.query
        });
      }
    }
  },
  { immediate: true }
);

watchEffect(() => {
  const isRtl = ["he-IL", "ar-SA"].includes(activeLanguage.value);
  document?.body?.setAttribute("dir", isRtl ? "rtl" : "ltr");
  document?.documentElement?.setAttribute("dir", isRtl ? "rtl" : "ltr");
});
</script>

<style scoped>
/* 如需自定义 rem，可在全局 css 设置 html { font-size: 16px; } */
.ng-quanqiu {
  @apply text-fontColor;
  @apply me-[0.625rem];
  @apply text-base sm:text-xl;
}
</style>
