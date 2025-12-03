<template>
  <section class="features pb-[70px]">
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
              :src="`/assets/images/resources/Transcription/mp4Transcription/exportFormats_${index + 1}.svg`"
              class="no-drag h-[2.1875rem] w-[2.1875rem]"
              fit="contain"
              alt="nevercap image"
              loading="lazy"
            ></NuxtImg>
          </div>
          <h3 class="feature-title">
            {{ $i("format_" + (index + 1)) }}
          </h3>
          <p class="feature-description">
            {{ $i("des_" + (index + 1)) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.mp4Transcription.exportFormats");
</script>
<style lang="scss" scoped>
.features {
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 58px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}
@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.feature-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  position: relative;
  overflow: hidden;
  overflow-wrap: break-word;
}

.feature-icon {
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 20px;
}

.feature-description {
  font-size: 18px;
  color: var(--gray);
  line-height: 24px;
}
</style>
