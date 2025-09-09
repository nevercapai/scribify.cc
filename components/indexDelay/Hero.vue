<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="badge">{{ $i("Hero.badge") }}</div>
        <h1>
          {{ $i("Hero.h1") }}
          <br />
          <span class="gradient-text">
            {{ $i("Hero.gradient") }}
          </span>
        </h1>
        <p class="hero-subtitle">
          {{ $i("Hero.subtitleA") }}
        </p>
        <div class="cta-buttons">
          <span class="flex-center-m">
            <button @click="handleClick" class="btn-primary">
              {{ $i("Hero.FreeTrial") }}
            </button>
          </span>
          <span class="flex-center-m">
            <button @click="showDownload" class="btn-secondary">
              <span>▶</span> {{ $i("Hero.HowWorks") }}
            </button>
          </span>
        </div>
        <div class="flex justify-center">
          <div class="trust-badges">
            <span class="flex items-center">
              <NuxtImg
                src="/assets/img/index/Unlimited.png"
                class="relative top-[1px] me-[9px] h-[1rem] w-[1rem] rounded-md"
                fit="contain"
                :alt="$i('Hero.Unlimited')"
                loading="lazy"
              ></NuxtImg>
              {{ $i("Hero.Unlimited") }}
            </span>
            <span class="flex items-center">
              <NuxtImg
                src="/assets/img/index/NoCap.png"
                class="relative top-[1px] me-[9px] h-[1rem] w-[1rem] rounded-md"
                fit="contain"
                :alt="$i('Hero.NoCap')"
                loading="lazy"
              ></NuxtImg>
              {{ $i("Hero.NoCap") }}
            </span>
            <span class="flex items-center">
              <NuxtImg
                src="/assets/img/index/Hour.png"
                class="relative top-[1px] me-[9px] h-[1rem] w-[1rem] rounded-md"
                fit="contain"
                :alt="$i('Hero.Hour')"
                loading="lazy"
              ></NuxtImg>
              {{ $i("Hero.Hour") }}
            </span>
          </div>
        </div>
        <transition name="slide-fade">
          <LazyYoutubeTomp4HowToDownload
            src="/assets/video/See How It Works.mp4"
            v-if="showHowToDownload"
          ></LazyYoutubeTomp4HowToDownload>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Index");
const { $mitt } = useNuxtApp();
const handleClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};

const showHowToDownload = ref(false);
const showDownload = () => {
  showHowToDownload.value = !showHowToDownload.value;
};
</script>

<style scoped lang="scss">
/* Hero Section */
.hero {
  padding: 140px 0 80px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.1) 0%,
    transparent 70%
  );
  top: -250px;
  right: -250px;
  //animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-50px, 50px) rotate(180deg);
  }
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-block;
  background: rgba(230, 246, 241, 1);
  color: var(--secondary);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  //animation: slideDown 0.6s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  //animation: slideUp 0.8s ease;
}

.gradient-text {
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: 20px;
  color: var(--gray);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  // animation: slideUp 1s ease;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
  // animation: slideUp 1.2s ease;
}

.trust-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  opacity: 0.7;
  // animation: fadeIn 1.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}
</style>
