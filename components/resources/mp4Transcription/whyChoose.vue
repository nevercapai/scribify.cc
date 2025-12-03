<template>
  <section class="use-cases whyChoose-wrap">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $i("title") }}
          <span class="gradient-text">
            {{ $i("titleHighlight") }}
          </span>
        </h2>
      </div>
      <div class="use-cases-grid">
        <div v-for="(item, index) in 6" :key="index" class="use-case-card">
          <div class="use-case-icon flex items-center justify-center">
            <NuxtImg
              :src="`/assets/images/resources/Transcription/mp4Transcription/whyChoose_${index + 1}.svg`"
              class="h-[3.5rem] w-[3.5rem]"
              fit="contain"
              :alt="$i(`reason_${index + 1}_title`)"
              loading="lazy"
            ></NuxtImg>
          </div>
          <h3 class="use-case-title">
            {{ $i(`reason_${index + 1}_title`) }}
          </h3>
          <p class="use-case-description">
            {{ $i(`reason_${index + 1}_des`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.mp4Transcription.whyChoose");
</script>
<style lang="scss" scoped>
/* Use Cases */
.use-cases {
  padding-top: 70px;
  padding-bottom: 70px;
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
}

.use-case-card {
  background: #ffffff;
  border: 1px solid var(--line-color);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: block;
  overflow-wrap: break-word;
}

.use-case-card1:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
}

.use-case-icon {
  margin-bottom: 10px;
}

.use-case-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 18px;
}

.use-case-description {
  color: var(--gray);
  font-size: 18px;
  line-height: 24px;
}
</style>
