<template>
  <div class="video-transcription-wrap">
    <HeadNavbar></HeadNavbar>
    <ResourcesVideoTranscriptionHero></ResourcesVideoTranscriptionHero>
    <div style="width: 100%; background: var(--light-gray)">
      <div class="mx-auto max-w-[75rem]">
        <resource-common-upload
          v-show="!(taskId && fileId)"
          ref="uploadRef"
          :source-type="1"
          @transcribed="transcribeSuccessHandle"
        ></resource-common-upload>
        <div v-if="taskId && fileId" class="h-[85vh] w-full">
          <TranscriptPage
            :taskId="taskId"
            :fileId="fileId"
            @transcribeNewFiles="transcribeNewFilesHandle"
          ></TranscriptPage>
        </div>
      </div>
    </div>
    <ResourcesVideoTranscriptionThreeStep></ResourcesVideoTranscriptionThreeStep>
    <ResourcesVideoTranscriptionWhyTran></ResourcesVideoTranscriptionWhyTran>
    <ResourcesVideoTranscriptionWhyChoose></ResourcesVideoTranscriptionWhyChoose>
    <ResourcesVideoTranscriptionReviews></ResourcesVideoTranscriptionReviews>
    <ResourcesVideoTranscriptionFaq></ResourcesVideoTranscriptionFaq>
    <ResourcesVideoTranscriptionExplore></ResourcesVideoTranscriptionExplore>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
const TranscriptPage = defineAsyncComponent(() => import("~/pages/transcript/index.vue"));
const fileId = ref("");
const taskId = ref("");
const transcribeSuccessHandle = (data) => {
  fileId.value = data.fileId;
  taskId.value = data.taskId;
};
const uploadRef = useTemplateRef("uploadRef");
const transcribeNewFilesHandle = () => {
  fileId.value = "";
  taskId.value = "";
  uploadRef.value?.clearTaskId();
};
onMounted(() => {});
</script>

<style scoped lang="scss"></style>
