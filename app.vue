<template>
  <el-config-provider
    :locale="localLang"
    :dir="isRtl ? 'rtl' : 'ltr'"
    :rtl="isRtl"
  >
    <NuxtPage />

    <client-only>
      <!--  录音  -->
      <record-wrap />
    </client-only>
  </el-config-provider>
</template>

<script setup lang="ts">
import "core-js";
import { useGuestUploadStore, useI18n } from "#imports";
import { ElConfigProvider } from "element-plus";
import { ref, computed, watchEffect } from "vue";
import { useScrollTitle } from "./utils/useScrollTitle";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";
import { usePageJump } from "~/composables/usePageJump";
useScrollTitle();
const { jumpPage } = usePageJump();
const route = useRoute();
const { locale, locales, setLocaleMessage } = useI18n();
const activeLanguage = useState("locale", () => locale.value);

// 1. 动态import映射
const langImportMap: Record<string, () => Promise<any>> = {
  "en-US": () => import("element-plus/es/locale/lang/en"),
  "es-ES": () => import("element-plus/es/locale/lang/es"),
  "it-IT": () => import("element-plus/es/locale/lang/it"),
  "fr-FR": () => import("element-plus/es/locale/lang/fr"),
  "de-DE": () => import("element-plus/es/locale/lang/de"),
  "zh-CN": () => import("element-plus/es/locale/lang/zh-cn"),
  "zh-TW": () => import("element-plus/es/locale/lang/zh-tw"),
  "ja-JP": () => import("element-plus/es/locale/lang/ja"),
  "ko-KR": () => import("element-plus/es/locale/lang/ko"),
  "nl-NL": () => import("element-plus/es/locale/lang/nl"),
  "da-DK": () => import("element-plus/es/locale/lang/da"),
  "hu-HU": () => import("element-plus/es/locale/lang/hu"),
  "no-NO": () => import("element-plus/es/locale/lang/no"),
  "pt-PT": () => import("element-plus/es/locale/lang/pt"),
  "fi-FI": () => import("element-plus/es/locale/lang/fi"),
  "sv-SE": () => import("element-plus/es/locale/lang/sv"),
  "ru-RU": () => import("element-plus/es/locale/lang/ru"),
  "tr-TR": () => import("element-plus/es/locale/lang/tr"),
  "el-GR": () => import("element-plus/es/locale/lang/el"),
  "uk-UA": () => import("element-plus/es/locale/lang/uk"),
  "he-IL": () => import("element-plus/es/locale/lang/he"),
  "ar-SA": () => import("element-plus/es/locale/lang/ar")
};

// 2. 当前语言包
const localLang = ref();
const isRtl = computed(() => ["he-IL", "ar-SA"].includes(activeLanguage.value));

// 3. 监听语言变化，懒加载语言包
watchEffect(async () => {
  const langKey = activeLanguage.value;
  if (langImportMap[langKey]) {
    const mod = await langImportMap[langKey]();
    localLang.value = mod.default;
  } else {
    localLang.value = undefined;
  }

  // 按需加载应用语言包
  try {
    const messages = await import(`~/i18n/lang/${langKey}.ts`);
    setLocaleMessage(langKey, messages.message);
  } catch (error) {
    console.error(`Failed to load locale messages for ${langKey}:`, error);
  }
});
// 跳转事件
const { $mitt } = useNuxtApp();
const goToEvent = (data: any) => {
  jumpPage(data.path, data.newTab);
};

// 使用Vue的defineAsyncComponent优化组件加载
const { clear } = useGuestUploadStore();
const { clearSelectRawFiles } = await import("#imports").then((m) =>
  m.useUploadStore()
);

watch(
  () => route.path,
  () => {
    if (!(route.name as String)?.includes("index")) {
      clear();
      clearSelectRawFiles();
    }
  }
);

// 移除不必要的代码块

onMounted(async () => {
  // 保存用户信息
  const saveInfoToStore = () => {
    const timesRef = ref(0);

    const trySaveUserInfo = async () => {
      if (timesRef.value > 3) return;
      timesRef.value++;

      const { setUserInfo } = await import("#imports").then((m) =>
        m.useUserStore()
      );
      const { userInfo } = storeToRefs(
        await import("#imports").then((m) => m.useUserStore())
      );
      const userInfoCookie = useCrossDomainCookie("userInfoFromApp");
      const token = useCrossDomainCookie("token");

      if (!token.value) {
        setUserInfo(null);
        userInfoCookie.value = "";
        return;
      }

      if (userInfoCookie.value) {
        setUserInfo(userInfoCookie.value);
        setTimeout(() => {
          if (!userInfo.value?.userInfoVO) {
            trySaveUserInfo();
          } else {
            userInfoCookie.value = "";
          }
        }, 100);
      }
    };

    trySaveUserInfo();
  };

  saveInfoToStore();

  if (route.meta.requireAuth) {
    const subscriptionStore = await import("#imports").then((m) =>
      m.useSubscriptionStore()
    );
    await subscriptionStore.getStatusUserIdFetch();
  }

  try {
    const response = await fetch("/packageVersion.json");
    const buildInfo = await response.json();
    buildInfo.buildTimeFormat = new Date(buildInfo.buildTime).toLocaleString();
    buildInfo.gitCommitDateFormat = new Date(
      buildInfo.gitCommitDate
    ).toLocaleString();
    window.localStorage.setItem("buildInfo", JSON.stringify(buildInfo));
  } catch (error) {
    console.error("获取构建信息失败:", error);
  }

  $mitt.on("goToEvent", goToEvent);
});

onUnmounted(() => {
  $mitt.off("goToEvent", goToEvent);
});
</script>
<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
