<template>
  <div class="min-h-screen">
    <!-- 导航栏组件 -->
    <IndexNavBar :showMenu="false" />
    <main class="bg-black text-white">
      <div class="mx-auto max-w-[62.5rem]">
        <IndexPrivacyPolicy></IndexPrivacyPolicy>
        <IndexContactUs class="overflow-hidden"></IndexContactUs>
      </div>
    </main>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script setup>
// 隐私政策
import { computed } from "vue";
const { locale } = useI18n();
const activeLanguage = useState("locale", () => locale.value);
const isRtl = computed(() => ["he-IL", "ar-SA"].includes(activeLanguage.value));
watchEffect(() => {
  if (!process.client) return;
  document?.body?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
  document?.documentElement?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
});
</script>

<style scoped></style>
