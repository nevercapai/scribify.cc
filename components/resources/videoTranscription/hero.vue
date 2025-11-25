<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          <span class="gradient-text">
            {{ $i("title") }}
          </span>
        </h1>
        <p class="hero-subtitle">
          {{ $i("des") }}
        </p>
        <div class="flex justify-center">
          <div class="trust-badges">
            <span v-for="(item, index) of 3" :key="index" class="flex items-center">
              <NuxtImg
                v-if="index === 2"
                :src="`/assets/images/resources/Transcription/videoTranscription/hero_3.svg`"
                class="relative top-[1px] me-[9px] w-[1.4rem]"
                fit="contain"
                :alt="$i('Hero.Unlimited')"
                loading="lazy"
              ></NuxtImg>
              <NuxtImg
                v-else
                :src="`/assets/images/resources/Transcription/videoTranscription/hero_${index + 1}.svg`"
                class="relative top-[1px] me-[9px] h-[1.4rem]"
                fit="contain"
                :alt="$i('Hero.Unlimited')"
                loading="lazy"
              ></NuxtImg>
              <span class="text-[#000]">
                {{ $i(`feature_${index + 1}`) }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.videoTranscription.hero");
</script>

<style scoped lang="scss">
.hero {
  padding: 140px 0 50px;
  background: linear-gradient(185deg, #eff0fc 0%, #f9fafc 100%);
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
  margin-bottom: 80px;
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
