<template>
  <section class="mx-auto max-w-[80rem] px-[2.5rem] pb-[6rem] pt-[2.25rem]">
    <h2 class="mb-[3rem] text-center text-[2.5rem] font-medium">
      {{ data.title }}
    </h2>
    <div
      class="grid grid-cols-1 gap-x-[5.625rem] gap-y-[2.5rem] md:grid-cols-2"
    >
      <!-- 左列 -->
      <div
        v-for="(item, index) in data.list"
        :key="index"
        class="flex flex-col gap-[2rem]"
      >
        <!-- Q1 -->
        <div v-for="it in item" :key="it.id">
          <div class="question-wrap mb-2 flex text-[1.25rem] font-semibold">
            <div class="question-ra me-[0.625rem]"></div>
            <div>{{ it.question }}</div>
          </div>
          <div
            class="text-lg font-normal leading-[1.5rem] text-[rgba(255,255,255,0.7)]"
          >
            {{ it.answer }}
          </div>
        </div>
        <!-- A1 -->
      </div>
      <!-- 右列 -->
    </div>
    <div class="divide-bottom-wrap mt-[3.375rem] flex w-full justify-center">
      <div class="divide-bottom"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// FAQ 组件
const data = ref({
  title: "FAQs",
  list: [
    [
      {
        id: 11,
        question: "Which languages do you support?",
        answer:
          "Scibify supports over 100 languages for both audio transcription and translation. Whether it’s a rare dialect or a widely spoken language, our platform has you covered. Languages like English are the most accurate, typically with human levels of performance and strong recognition of specialized, domain-specific vocabulary. Voice to text accuracy varies by language. We support all major languages in the world: English, Spanish, French, German, Italian, Portuguese, Dutch, Chinese, Japanese, Russian, Arabic, Hindi, Swedish, Norwegian, Danish, Polish, Turkish, Hebrew, Greek, Czech, Vietnamese and Korean. For more languages, you can register for free to experience."
      },
      {
        id: 12,
        question:
          "Can Scibify accurately identify different speakers in a conversation?",
        answer:
          "Yes, Scibify features automatic speaker identification. It can distinguish between multiple speakers in an audio or video, clearly labeling their contributions in the transcribed text. This makes it easy to organize and understand group discussions."
      },
      {
        id: 13,
        question: "How much does it cost?",
        answer:
          "Scribify costs$8.99/month (billed yearly)  or $17.99/month (billed monthly). Only $9.99 for the first month."
      }
    ],
    [
      {
        id: 111,
        question:
          "How long does it typically take to transcribe an audio or video file?",
        answer:
          "Scibify is designed for speed. Most files can be transcribed into accurate text within seconds. The actual time may vary depending on the length and complexity of the audio or video, but our advanced technology minimizes waiting time."
      },
      {
        id: 112,
        question: "What file formats can I export the transcribed text in?",
        answer:
          "You can export your transcripts in multiple formats, including PDF, DOCX, Excel, CSV, SRT, TXT, and VTT. "
      },
      {
        id: 113,
        question: "Which audio / video formats do you support?",
        answer:
          "Scribify supports the vast majority of common audio and video formats, including MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV."
      },
      {
        id: 114,
        question: "How secure is my data when using Scibify?",
        answer:
          " Data security is our top priority. We use industry-standard encryption protocols to protect your audio, video, and transcribed text. Your information is stored securely, and we never share your data with third parties without your consent."
      }
    ]
  ]
});
</script>

<style scoped lang="scss">
.question-ra {
  position: relative;
  width: 0.6875rem;
  height: 1.875rem;
  &::after {
    position: absolute;
    content: "";
    top: 50%;
    width: 0.6875rem;
    height: 0.6875rem;
    background: linear-gradient(90deg, #7d39ed 0%, #be26d4 100%);
    border-radius: 50%;
    transform: translateY(-50%);
  }
}
.divide-bottom {
  width: 8.75rem;
  height: 0.3125rem;
  background: linear-gradient(90deg, #7e3bee 0%, #d847f0 100%);
  border-radius: 0.1875rem;
}
.divide-bottom-wrap {
  position: relative;
  &::after {
    position: absolute;
    bottom: -3.375rem;
    left: 0;
    content: " ";
    width: 100%;
    height: 1px;
    background: linear-gradient(
      315deg,
      rgba(0, 0, 0, 1),
      rgba(105, 32, 122, 1),
      rgba(0, 0, 0, 1)
    );
  }
}
</style>
