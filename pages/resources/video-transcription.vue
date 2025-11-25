<template>
  <div class="video-transcription-wrap">
    <HeadNavbar></HeadNavbar>
    <ResourcesVideoTranscriptionHero></ResourcesVideoTranscriptionHero>
    <div style="width: 100%; background: var(--light-gray)">
      <div class="mx-auto max-w-[75rem]">
        <resource-common-upload
          ref="uploadRef"
          :source-type="1"
          @transcribed="transcribeSuccessHandle"
        ></resource-common-upload>
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
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();
const transcribeSuccessHandle = (data) => {
  console.log("🚀 ~ file: video-transcription.vue method: transcribeSuccessHandle line: 36 🚀", data);
  router.push({
    path: localePath(`/transcript/${data.fileId}`),
    query: {
      taskId: data.taskId,
      redirectPath: encodeURIComponent(route.path),
      activeName: data.activeName
    }
  });
};
const uploadRef = useTemplateRef("uploadRef");
onMounted(() => {
  const activeName = route.query.activeName;
  if (["file", "link"].includes(activeName)) {
    uploadRef.value && (uploadRef.value.activeName = activeName);
  }
  console.log("🚀 ~ file: video-transcription.vue method:  line: 40 🚀", route);
});
</script>

<style scoped lang="scss"></style>
