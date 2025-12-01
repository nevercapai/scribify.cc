<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          <span class="gradient-text">
            {{ $i("title") }}
          </span>
        </h1>
        <p class="hero-subtitle flex flex-col">
          <span> {{ $i("des_1") }}</span>
          <span> {{ $i("des_2") }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.mp4Transcription.hero");
</script>

<style scoped lang="scss">
.hero {
  padding: 180px 0 50px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  top: -250px;
  right: -250px;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 50px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.gradient-text {
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--gray);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.trust-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  opacity: 0.7;
}
</style>
