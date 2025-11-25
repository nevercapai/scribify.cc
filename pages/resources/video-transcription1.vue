<template>
  <div class="mx-auto max-w-[75rem]">
    <resource-common-upload @transcribe="transcribeHandle"></resource-common-upload>
    <resource-common-transcribing
      :task-id="taskId"
      @transcribeSuccess="transcribeSuccessHandle"
    ></resource-common-transcribing>
  </div>
</template>

<script setup>
const taskId = ref("");
const fileId = ref("");
const router = useRouter();
const localePath = useLocalePath();
const transcribeHandle = (data) => {
  taskId.value = data.taskId;
  fileId.value = data.fileId;
};
const transcribeSuccessHandle = (data) => {
  console.log(
    "🚀 ~ file: video-transcription.vue method: transcribeSuccessHandle line: 21 🚀",
    localePath("/transcript/" + fileId.value + `?taskId=${taskId.value}`)
  );
  router.push(localePath("/transcript/" + fileId.value + `?taskId=${taskId.value}`));
};
</script>

<style lang="scss" scoped></style>
