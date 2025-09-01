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
import { message as en_US } from "~/i18n/lang/en-US"; // 英语（美国）
import { runI18nCheck } from "~/i18n/check.js";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";
import { usePageJump } from "~/composables/usePageJump";
useScrollTitle();
const { jumpPage } = usePageJump();
const route = useRoute();
const { locale, locales, setLocaleMessage } = useI18n();
const activeLanguage = useState("locale", () => locale.value);

try {
  let localeLangs: any[] = [];
  await Promise.all(
    locales.value.map(async (item) => {
      try {
        const messages = await import(`~/i18n/lang/${item.code}.ts`);
        setLocaleMessage(item.code, messages.message);
        localeLangs.push({
          code: item.code,
          name: item.name,
          file: messages.message
        });
      } catch (error) {
        console.error(
          `Failed to load locale messages for ${item.code}:`,
          error
        );
      }
    })
  );
  // runI18nCheck(en_US, localeLangs);
} catch (error) {
  console.error("Error loading locale messages:", error);
}

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
});
// 跳转事件
const { $mitt } = useNuxtApp();
const goToEvent = (data) => {
  jumpPage(data.path, data.newTab);
};
const times = ref(0);
const saveInfoToStore = () => {
  console.log("saveInfoToStoreMain", times.value);
  if (times.value > 3) {
    return;
  }
  times.value++;
  const { setUserInfo } = useUserStore();
  const { userInfo } = storeToRefs(useUserStore());
  const userInfoCookie = useCrossDomainCookie("userInfoFromApp");
  const token = useCrossDomainCookie("token");
  if (!token.value) {
    setUserInfo(null);
    userInfoCookie.value = "";
    return;
  }
  console.log("saveInfoToStore userInfoCookie", userInfoCookie.value);
  if (userInfoCookie.value) {
    setUserInfo(userInfoCookie.value);
    setTimeout(() => {
      if (!userInfo.value?.userInfoVO) {
        saveInfoToStore();
      } else {
        userInfoCookie.value = "";
      }
    }, 100);
  }
};

// 其它逻辑保持不变
if (process.client) {
  const config = useRuntimeConfig();
  console.log(
    process.env,
    ":process.env--app.vue--config.public:",
    config.public
  );
  if (window.localStorage.getItem("notShowHead")) {
  }
}
onMounted(async () => {
  saveInfoToStore();
  if (route.meta.requireAuth) {
    const subscriptionStore = useSubscriptionStore();
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

const {clear} = useGuestUploadStore()
const { clearSelectRawFiles } = useUploadStore();
watch(() => route.path, () => {
  if (!route.name?.includes("index")) {
    clear()
    clearSelectRawFiles()
  }
})
</script>
<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
