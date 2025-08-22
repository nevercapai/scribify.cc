<template>
  <section
    class="review-wrap mx-auto max-w-[80rem] px-[2.5rem] py-[4.75rem] pt-[1rem] text-white"
  >
    <h2 class="mb-8 text-center text-[2.5rem] font-medium">
      {{ data.title }}
    </h2>
    <div class="columns-1 gap-5 md:columns-2 lg:columns-3">
      <!-- 卡片 -->
      <div
        v-for="item in data.list"
        :key="item.id"
        class="mb-5 flex break-inside-avoid flex-col items-start rounded-2xl border border-[#512680] bg-[#1B0B30] p-8"
      >
        <div class="text-lg leading-[1.625rem]">
          {{ item.content }}
        </div>
        <div class="mt-8 flex items-center">
          <el-avatar
            :size="40"
            :src="`/assets/images/index/users/${item.name}.png`"
            class="me-3"
          />
          <div>
            <div class="font-semibold">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- 卡片 -->
    </div>
  </section>
</template>

<script setup lang="ts">
// 用户评价组件
const data = ref({
  title: "Review",
  list: [
    {
      id: 1,
      name: "Emma Clark",
      content:
        "As a journalist constantly interviewing sources in multiple languages, Scibify has been a game-changer! The 100+ language support seamlessly transcribes interviews into English with timestamps and speaker tags. Exporting to PDF saves me hours of post-interview work. Accuracy is spot-on even with heavy accents – highly recommend for anyone in content creation!"
    },
    {
      id: 2,
      name: "Liam Carter",
      content:
        "Producing podcasts requires precise transcripts, and Scibify delivered beyond expectations. The speaker diarization clearly labels my co-host and me, while the VTT export integrates perfectly with our video podcast editing tools. Even our noisy coffee shop recordings came out crystal clear – the noise reduction feature must be magic! 10/10 for podcasters needing efficiency."
    },
    {
      id: 3,
      name: "Lily Baker",
      content:
        "Managing a customer support team, call transcriptions are critical for quality assurance. Scibify's fast conversion from recorded calls to searchable Excel files. Efficient, accurate, and user-friendly – a staple for our customer success strategy!"
    },
    {
      id: 4,
      name: "Jack Turner",
      content:
        "I manage a team, and our weekly video conferences are now stress-free thanks to Scibify. Converting recorded meetings into searchable text with speaker identification makes follow-ups a breeze. A must-have for remote collaboration!"
    },
    {
      id: 5,
      name: "Ethan Davis",
      content:
        "As a lawyer, accuracy in deposition recordings is non-negotiable. Scibify's speaker identification and time-stamped transcripts provided court-ready documents in minutes. The multilingual support handled our bilingual client meetings flawlessly. Trustworthy tool for legal professionals."
    },
    {
      id: 6,
      name: "Emma Thompson",
      content:
        "As a journalist constantly on the go, Scibify has been a game-changer for me. Transcribing interviews from various languages into text within seconds, complete with accurate timestamps, has saved me hours of manual work. The ability to share and edit transcripts in multiple formats makes it an indispensable tool in my workflow."
    },
    {
      id: 7,
      name: "Sophia Martinez",
      content:
        "As a grad student, Scibify simplified my note-taking process. Recording professor talks and converting them to editable DOCX lets me focus on learning, not scribbling. The multi-format export turned my chaotic audio files into organized study materials. Lifesaver for academics!"
    },
    {
      id: 8,
      name: "Ava Wilson",
      content:
        "Creating educational content for my YouTube channel just got easier! Scibify converts my recorded lessons into SRT subtitles in seconds, supporting both English and Spanish for my diverse audience. The editable text lets me refine scripts while the translation feature expands my reach globally. No more struggling with slow transcription services – this is a content creator's dream!"
    },
    {
      id: 9,
      name: "David Chen",
      content:
        "I'm a student who often attends international webinars. Scibify's multi-language translation feature is a lifesaver! It allows me to convert video content into text in my native language instantly. Exporting the transcripts in PDF format for my notes is incredibly convenient."
    }
  ]
});
</script>

<style scoped lang="scss">
.review-wrap {
  position: relative;
  &::after {
    position: absolute;
    bottom: 1.25rem;
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
