<template>
  <section class="features py-[70px] pb-[35px]">
    <div class="container">
      <!-- Original Features Section -->
      <div class="section-header">
        <h2 class="section-title">
          {{ $i("title") }}
          <span class="gradient-text">
            {{ $i("titleHighlight") }}
          </span>
        </h2>
      </div>
      <div class="features-grid">
        <div v-for="(item, index) of 6" :key="index" class="feature-card">
          <div class="feature-icon">
            <NuxtImg
              :src="`/assets/images/resources/Transcription/videoTranscription/whyChoose_${index + 1}.svg`"
              class="no-drag h-[1.25rem] w-[1.25rem]"
              fit="contain"
              alt="nevercap image"
              loading="lazy"
            ></NuxtImg>
          </div>
          <h3 class="feature-title">
            {{ $i("reason_" + (index + 1) + "_title") }}
          </h3>
          <p class="feature-description">
            {{ $i("reason_" + (index + 1) + "_des") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.videoTranscription.whyChoose");
</script>
<style lang="scss" scoped>
.features {
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 14px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  position: relative;
  overflow: hidden;
}

.feature-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
  background: #6367f1;
}

.feature-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}

.feature-description {
  font-size: 18px;
  color: var(--gray);
  line-height: 24px;
}
</style>
