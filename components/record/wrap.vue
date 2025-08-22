<template>
  <client-only>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class=""
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <record :parentId="parentId" v-if="recordStatus === 1" />
    </transition>
  </client-only>
</template>

<script setup lang="ts">
const { recordStatus } = storeToRefs(useRecordStore());

const parentId = ref("");
const route = useRoute();
const { selectedFolder } = storeToRefs(useFolderStore());
watch(
  () => recordStatus.value,
  (_) => {
    if (recordStatus.value === 1) {
      parentId.value = route.path?.includes("home")
        ? 0
        : selectedFolder.value?.id || 0;
    }
  }
);
</script>

<style scoped></style>
