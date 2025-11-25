<template>
  <div class="tips-box py-2 text-center text-[1.375rem] font-medium leading-[1.875rem] text-[#808080] md:py-4">
    <span>{{ t("Resources.Upload.tip4") }}</span>
    <span class="text-black">{{ t("Resources.Upload.tip5") }}</span>
    <span>{{ t("Resources.Upload.tip5") }}</span>
    <span class="cursor-pointer text-[#6F4CF0] underline underline-offset-4" @click="handleClick">
      {{ t("Resources.Upload.tip6") }}
    </span>
    <span class="text-black"> {{ t("Resources.Upload.tip7") }}</span>
    <span>{{ t("Resources.Upload.tip8") }}</span>
  </div>
</template>

<script setup>
const { t } = useI18n();
const { $mitt } = useNuxtApp();
const handleClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup", newTab: true });
};
</script>

<style lang="scss" scoped></style>
