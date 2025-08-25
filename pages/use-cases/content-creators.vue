<template>
  <div class="content-creators-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span> {{ $i("ContentCreators.hero.badge") }}</span>
          </div>

          <h1>
            {{ $i("ContentCreators.hero.title") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ $i("ContentCreators.hero.titleHighlight") }}</span
            ><br />
            <!-- {{ $i("ContentCreators.hero.titleSuffix") }} -->
          </h1>

          <p class="hero-subtitle">
            {{ $i("ContentCreators.hero.subtitle") }}
          </p>

          <div class="hero-cta">
            <span class="flex-center-m">
              <a
                href="javascript:void(0)"
                @click="signup"
                class="btn-primary"
                >{{ $i("ContentCreators.hero.ctaPrimary") }}</a
              >
            </span>
            <span class="flex-center-m">
              <a href="#workflow" class="btn-secondary">{{
                $i("ContentCreators.hero.ctaSecondary")
              }}</a>
            </span>
          </div>

          <!-- Stats -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">
                {{ $i("ContentCreators.hero.stats.videos.number") }}
              </div>
              <div class="stat-label">
                {{ $i("ContentCreators.hero.stats.videos.label") }}
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-number">
                {{ $i("ContentCreators.hero.stats.languages.number") }}
              </div>
              <div class="stat-label">
                {{ $i("ContentCreators.hero.stats.languages.label") }}
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-number">
                {{ $i("ContentCreators.hero.stats.accuracy.number") }}
              </div>
              <div class="stat-label">
                {{ $i("ContentCreators.hero.stats.accuracy.label") }}
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-number">
                {{ $i("ContentCreators.hero.stats.platforms.number") }}
              </div>
              <div class="stat-label">
                {{ $i("ContentCreators.hero.stats.platforms.label") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platforms Section -->
    <section class="platforms-section">
      <div class="container">
        <h2
          class="section-title"
          style="text-align: center; margin-bottom: 14px"
        >
          {{ $i("ContentCreators.platforms.titleMax") }}
          <span class="gradient-text">
            {{ $i("ContentCreators.platforms.titleMaxHighlight") }}
          </span>
        </h2>
        <h3 class="platforms-title">
          {{ $i("ContentCreators.platforms.title") }}
        </h3>
        <div class="platforms-grid">
          <div
            class="platform-logo flex items-center justify-center"
            v-for="(icon, index) in platformIcons"
            :key="index"
          >
            <div>
              <NuxtImg
                :src="`/assets/images/use_cases/content_creators/${icon}.png`"
                fit="contain"
                loading="eager"
                class="me-1 h-5"
              />
            </div>
            <div class="leading-5">{{ platformNames[index] }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("ContentCreators.features.title") }}
            <span class="gradient-text">{{
              $i("ContentCreators.features.titleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("ContentCreators.features.subtitle") }}
          </p>
        </div>

        <!-- Feature 1: Direct Platform Fetching -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              $i("ContentCreators.features.oneClickImport.label")
            }}</span>
            <h2 class="feature-title">
              {{ $i("ContentCreators.features.oneClickImport.title") }}
              <span class="gradient-text">{{
                $i("ContentCreators.features.oneClickImport.titleHighlight")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ $i("ContentCreators.features.oneClickImport.description") }}
            </p>
            <ul class="feature-points">
              <li v-for="(point, index) in oneClickImportPoints" :key="index">
                <span class="check icon-duihao iconfont"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div style="text-align: center; width: 100%">
              <div
                class="p-[10px] md:p-[30px]"
                style="
                  background: var(--light-gray);
                  border-radius: 12px;
                "
              >
                <div
                  style="
                    font-size: 18px;
                    color: var(--gray);
                    margin-bottom: 20px;
                  "
                >
                  {{
                    $i(
                      "ContentCreators.features.oneClickImport.demo.instruction"
                    )
                  }}
                </div>
                <div
                  style="
                    background: white;
                    border: 2px solid var(--primary);
                    border-radius: 8px;
                    padding: 16px;
                    margin-bottom: 20px;
                  "
                >
                  <span style="color: var(--primary)">{{
                    $i("ContentCreators.features.oneClickImport.demo.url")
                  }}</span>
                </div>
                <div
                  style="
                    background: var(--gradient);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 8px;
                    display: inline-block;
                    font-weight: 600;
                  "
                >
                  {{
                    $i("ContentCreators.features.oneClickImport.demo.status")
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Multi-Language Captions -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              $i("ContentCreators.features.globalReach.label")
            }}</span>
            <h2 class="feature-title">
              {{ $i("ContentCreators.features.globalReach.title") }}
              <span class="gradient-text">{{
                $i("ContentCreators.features.globalReach.titleHighlight")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ $i("ContentCreators.features.globalReach.description") }}
            </p>
            <ul class="feature-points">
              <li v-for="(point, index) in globalReachPoints" :key="index">
                <span class="check icon-duihao iconfont"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div style="text-align: center">
              <div
                style="
                  font-size: 66px;
                  font-weight: 900;
                  margin-bottom: 20px;
                  color: var(--primary);
                "
              >
                {{ $i("ContentCreators.features.globalReach.visual.number") }}
              </div>
              <div
                style="font-size: 34px; font-weight: 600; color: var(--dark)"
              >
                {{ $i("ContentCreators.features.globalReach.visual.title") }}
              </div>
              <div
                style="
                  font-size: 18px;
                  margin-top: 10px;
                  color: var(var(--gray));
                "
              >
                {{ $i("ContentCreators.features.globalReach.visual.subtitle") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Export Formats -->
        <div class="feature-block !mb-0">
          <div class="feature-content">
            <span class="feature-label">{{
              $i("ContentCreators.features.flexibleExport.label")
            }}</span>
            <h2 class="feature-title">
              {{ $i("ContentCreators.features.flexibleExport.title") }}
              <span class="gradient-text">{{
                $i("ContentCreators.features.flexibleExport.titleHighlight")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ $i("ContentCreators.features.flexibleExport.description") }}
            </p>
            <ul class="feature-points">
              <li v-for="(point, index) in flexibleExportPoints" :key="index">
                <span class="check icon-duihao iconfont"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="formats-grid">
              <div
                class="format-card flex flex-col items-center justify-center"
                v-for="(icon, index) in formatIcons"
                :key="index"
              >
                <div class="format-icon">
                  <NuxtImg
                    :src="`/assets/images/use_cases/content_creators/${icon}.png`"
                    fit="contain"
                    class="h-[30px] w-[30px]"
                    loading="eager"
                  />
                </div>
                <div class="format-name">{{ formatNames[index] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section class="workflow-section" id="workflow">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("ContentCreators.workflow.title") }}
            <span class="gradient-text">{{
              $i("ContentCreators.workflow.titleHighlight")
            }}</span>
            {{ $i("ContentCreators.workflow.titleSuffix") }}
          </h2>
          <p class="section-subtitle">
            {{ $i("ContentCreators.workflow.subtitle") }}
          </p>
        </div>

        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-icon">1</div>
            <h3 class="step-title">
              {{ $i("ContentCreators.workflow.steps.pasteLinks.title") }}
            </h3>
            <p class="step-description">
              {{ $i("ContentCreators.workflow.steps.pasteLinks.description") }}
            </p>
          </div>

          <div class="workflow-step">
            <div class="step-icon">2</div>
            <h3 class="step-title">
              {{ $i("ContentCreators.workflow.steps.autoTranscribe.title") }}
            </h3>
            <p class="step-description">
              {{
                $i("ContentCreators.workflow.steps.autoTranscribe.description")
              }}
            </p>
          </div>

          <div class="workflow-step">
            <div class="step-icon">3</div>
            <h3 class="step-title">
              {{ $i("ContentCreators.workflow.steps.editTranslate.title") }}
            </h3>
            <p class="step-description">
              {{
                $i("ContentCreators.workflow.steps.editTranslate.description")
              }}
            </p>
          </div>

          <div class="workflow-step">
            <div class="step-icon">
              <span class="iconfont icon-duihao text-3xl"></span>
            </div>
            <h3 class="step-title">
              {{ $i("ContentCreators.workflow.steps.exportPublish.title") }}
            </h3>
            <p class="step-description">
              {{
                $i("ContentCreators.workflow.steps.exportPublish.description")
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("ContentCreators.testimonials.title") }}
            <span class="gradient-text">{{
              $i("ContentCreators.testimonials.titleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("ContentCreators.testimonials.subtitle") }}
          </p>
        </div>
        <div class="testimonial-grid">
          <div
            v-for="testimonial in testimonialsList"
            :key="testimonial.key"
            class="testimonial-card"
          >
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              "{{
                $i(
                  `ContentCreators.testimonials.${testimonial.i18nKey}.textBefore`
                )
              }}<span class="highlight">{{
                $i(
                  `ContentCreators.testimonials.${testimonial.i18nKey}.highlight`
                )
              }}</span
              >{{
                $i(
                  `ContentCreators.testimonials.${testimonial.i18nKey}.textAfter`
                )
              }}"
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <NuxtImg
                  :src="`/assets/images/index/users/${testimonial.avatar}`"
                  fit="cover"
                  loading="eager"
                />
              </div>
              <div class="author-info">
                <div class="author-name">
                  {{
                    $i(
                      `ContentCreators.testimonials.${testimonial.i18nKey}.name`
                    )
                  }}
                </div>
                <div class="author-role">
                  {{
                    $i(
                      `ContentCreators.testimonials.${testimonial.i18nKey}.role`
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="testimonial-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("ContentCreators.FAQSection.title") }}
            <span class="gradient-text">
              {{ $i("ContentCreators.FAQSection.titleHighlight") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i("ContentCreators.FAQSection.subtitle") }}
          </p>
        </div>
        <div style="max-width: 800px; margin: 0 auto">
          <details
            v-for="(faq, index) of 4"
            :key="index"
            style="
              background: white;
              margin-bottom: 16px;
              border-radius: 12px;
              padding: 24px;
              border: 1px solid #e2e4e6;
            "
          >
            <summary
              style="
                font-weight: bold;
                font-size: 18px;
                cursor: pointer;
                list-style: none;
              "
            >
              {{
                t(
                  "UseCases.ContentCreators.FAQSection.questions[" +
                    index +
                    "].question"
                )
              }}
            </summary>
            <p style="margin-top: 16px; color: var(--gray); line-height: 22px">
              {{
                t(
                  "UseCases.ContentCreators.FAQSection.questions[" +
                    index +
                    "].answer"
                )
              }}
            </p>
          </details>
        </div>
      </div>
    </section>
    <!-- CTA Section -->
    <CTASection :data="ctaData"></CTASection>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18nModule } from "~/utils/i18n";
useHead({
  title:
    "Transcribe YouTube Videos - Unlimited AI Transcription for Content Creators | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "Easily transcribe YouTube videos, TikToks, and Instagram Reels with NeverCap's AI. Learn how to transcribe Facebook and Vimeo videos to text just by pasting a link. Unlimited subtitles in 100+ languages."
    }
  ]
});
const { t } = useI18n();
const $i = useI18nModule("UseCases");
const ctaData = ref({
  title: $i("ContentCreators.cta.title"),
  subtitle: $i("ContentCreators.cta.subtitle"),
  button: $i("ContentCreators.cta.button")
});

interface Testimonial {
  key: string;
  avatar: string;
  i18nKey: string;
}

const testimonialsList: Testimonial[] = [
  { key: "carlos", avatar: "Ethan Davis.png", i18nKey: "carlos" },
  { key: "sarah", avatar: "Jack Turner.png", i18nKey: "sarah" },
  { key: "jake", avatar: "Liam Carter.png", i18nKey: "jake" },
  { key: "yuki", avatar: "Lily Baker.png", i18nKey: "yuki" }
];

const platformIcons = ["yt", "fb", "tt", "db", "gd", "vm", "dy", "it"];
const formatIcons = ["srt", "vtt", "txt", "doc", "pdf", "csv"];

// Feature points computed from i18n
const oneClickImportPoints = computed(() => {
  return [
    $i("ContentCreators.features.oneClickImport.points.directYoutube"),
    $i("ContentCreators.features.oneClickImport.points.multiplePlatforms"),
    $i("ContentCreators.features.oneClickImport.points.batchPlaylists"),
    $i("ContentCreators.features.oneClickImport.points.autoSync")
  ];
});

const globalReachPoints = computed(() => {
  return [
    $i("ContentCreators.features.globalReach.points.highAccuracy"),
    $i("ContentCreators.features.globalReach.points.unlimitedTranslations"),
    $i("ContentCreators.features.globalReach.points.multicultural"),
    $i("ContentCreators.features.globalReach.points.autoDetect")
  ];
});

const flexibleExportPoints = computed(() => {
  return [
    $i("ContentCreators.features.flexibleExport.points.videoFormats"),
    $i("ContentCreators.features.flexibleExport.points.editingFormats"),
    $i("ContentCreators.features.flexibleExport.points.dataAnalysis"),
    $i("ContentCreators.features.flexibleExport.points.simpleScripts")
  ];
});

const platformNames = computed(() => {
  return [
    "YouTube",
    "Facebook",
    "Twitter",
    "Dropbox",
    "Google Drive",
    "Vimeo",
    "TikTok",
    "Instagram"
  ];
});

const formatNames = computed(() => {
  return [
    $i("ContentCreators.features.flexibleExport.formats.srt"),
    $i("ContentCreators.features.flexibleExport.formats.vtt"),
    $i("ContentCreators.features.flexibleExport.formats.txt"),
    $i("ContentCreators.features.flexibleExport.formats.docx"),
    $i("ContentCreators.features.flexibleExport.formats.pdf"),
    $i("ContentCreators.features.flexibleExport.formats.csv")
  ];
});
const { $mitt } = useNuxtApp();
const signup = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};
</script>
<style lang="scss" scoped src="./common.scss"></style>
<style scoped lang="scss">
/* Hero Section */
.hero {
  padding: 140px 0 70px;
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
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-30px, 30px) rotate(180deg);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--yellow);
  background: var(--yellow-bg);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}
.hero-badge .icon {
  font-size: 16px;
}

.hero h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 14px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--gray);
  max-width: 700px;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid var(--line-color);
  //box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  //transition: all 0.3s;
}

//.stat-card:hover {
//  //transform: translateY(-5px);
//  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
//}

.stat-number {
  font-size: 36px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Platform Logos */
.platforms-section {
  padding-bottom: 70px;
  background: white;
  text-align: center;
}

.platforms-title {
  font-size: 20px;
  color: var(--gray);
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.platforms-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
}

.platform-logo {
  font-size: 16px;
  font-weight: 600;
  color: var(--gray);
  //transition: all 0.3s;
  padding: 12px 24px;
  border-radius: 8px;
  background: var(--light-gray);
}

.platform-logo:hover {
  color: var(--primary);
  //transform: scale(1.1);
  //background: white;
  //box-shadow: 0 5px 12px rgba(99, 102, 241, 0.1);
}

/* Features Section */
.features-section {
  padding: 70px 0;
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 14px;
}

.section-subtitle {
  font-size: 20px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.feature-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 50px;
}

.feature-block:nth-child(even) {
  direction: rtl;
}

.feature-block:nth-child(even) > * {
  direction: ltr;
}
[dir="rtl"] .feature-block:nth-child(even) {
  direction: ltr;
}

[dir="rtl"] .feature-block:nth-child(even) > * {
  direction: rtl;
}

.feature-content {
  max-width: 500px;
}

.feature-label {
  display: inline-block;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  padding: 6px 12px;
  border-radius: 60px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 14px;
}

.feature-description {
  font-size: 18px;
  color: var(--gray);
  margin-bottom: 20px;
  line-height: 1.8;
}

.feature-points {
  list-style: none;
}

.feature-points li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
}

.feature-points .check {
  width: 18px;
  height: 18px;
  background: var(--secondary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

.feature-visual {
  background: white;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  //box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* Export Formats */
.formats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}

.format-card {
  background: var(--light-gray);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  //transition: all 0.3s;
  border: 2px solid transparent;
}

.format-card:hover {
  background: white;
  border-color: var(--primary);
  //transform: scale(1.05);
}

.format-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.format-name {
  font-weight: 600;
  color: var(--dark);
}

/* Workflow Section */
.workflow-section {
  padding: 70px 0;
  background: white;
}

.workflow-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.workflow-step {
  text-align: center;
  position: relative;
}

.workflow-step::after {
  content: "→";
  position: absolute;
  right: -25px;
  top: 15px;
  font-size: 24px;
  color: var(--primary);
}

.workflow-step:last-child::after {
  display: none;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 36px;
  color: white;
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.step-description {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.6;
}

/* Testimonial Section */
.testimonial-section {
  padding: 70px 0;
  background: var(--light-gray);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 50px auto 0;
}

.testimonial-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  position: relative;
  border: 1px solid var(--line-color);
  //box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.quote-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 48px;
  color: var(--primary);
  opacity: 0.1;
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.testimonial-text .highlight {
  color: var(--primary);
  font-weight: 600;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 20px;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 4px;
}

.author-role {
  font-size: 14px;
  color: var(--gray);
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .stats-grid,
  .workflow-steps {
    grid-template-columns: 1fr;
  }

  .workflow-step::after {
    display: none;
  }

  .feature-block {
    grid-template-columns: 1fr;
  }

  .feature-block:nth-child(even) {
    direction: ltr;
  }

  .formats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .platforms-grid {
    gap: 20px;
  }

  .feature-visual {
    padding: 8px;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary::before {
  content: "+";
  float: right;
  font-size: 24px;
  line-height: 26px;
  color: var(--primary);
  transition: transform 0.3s;
}
[dir="rtl"] details summary::before {
  float: left !important;
}
details summary:hover {
  color: var(--primary);
}

details[open] summary::before {
  transform: rotate(45deg);
}
</style>
