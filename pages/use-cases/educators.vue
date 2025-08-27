<template>
  <div class="educators-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">{{ t("UseCases.Educators.heroBadge") }}</div>
          <h1 class="">
            <span class="title-line me-2">{{
              t("UseCases.Educators.heroTitle1")
            }}</span>
            <br class="block sm:hidden" />
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              class="title-line"
              >{{ t("UseCases.Educators.heroTitle2") }}</span
            >
          </h1>
          <p class="hero-subtitle">
            {{ t("UseCases.Educators.heroSubtitle") }}
          </p>
          <div class="hero-cta">
            <span class="flex-center-m">
              <a
                href="javascript:void(0)"
                @click="handleJump"
                class="btn-primary"
                >{{ t("UseCases.Educators.heroCtaPrimary") }}</a
              >
            </span>
            <span class="flex-center-m">
              <a class="btn-secondary" @click="showDownload">{{
                t("UseCases.Educators.heroCtaSecondary")
              }}</a>
            </span>
          </div>
          <transition name="slide-fade">
            <howToDownload
              src="/assets/video/Watch Demo.mp4"
              v-if="showHowToDownload"
            ></howToDownload>
          </transition>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">
              {{ t("UseCases.Educators.stats1Number") }}
            </div>
            <div class="stat-label">
              {{ t("UseCases.Educators.stats1Label") }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number">
              {{ t("UseCases.Educators.stats2Number") }}
            </div>
            <div class="stat-label">
              {{ t("UseCases.Educators.stats2Label") }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number">
              {{ t("UseCases.Educators.stats3Number") }}
            </div>
            <div class="stat-label">
              {{ t("UseCases.Educators.stats3Label") }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number">
              {{ t("UseCases.Educators.stats4Number") }}
            </div>
            <div class="stat-label">
              {{ t("UseCases.Educators.stats4Label") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.Educators.featuresTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.Educators.featuresTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.Educators.featuresSubtitle") }}
          </p>
        </div>

        <!-- Feature 1: Instant YouTube Transcription -->
        <div class="feature-block">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.Educators.feature1Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.Educators.feature1Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature1Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature1Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature1Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature1Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="platform-grid">
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[60px]"
                    src="/assets/images/useCase/educators/img1.png"
                  />
                </div>
                <div class="platform-name">YouTube</div>
              </div>
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[36px]"
                    src="/assets/images/useCase/educators/img2.png"
                  />
                </div>
                <div class="platform-name">Facebook</div>
              </div>
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[36px]"
                    src="/assets/images/useCase/educators/img3.png"
                  />
                </div>
                <div class="platform-name">X/Twitter</div>
              </div>
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[37px]"
                    src="/assets/images/useCase/educators/img4.png"
                  />
                </div>
                <div class="platform-name">Dropbox</div>
              </div>
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[42px]"
                    src="/assets/images/useCase/educators/img5.png"
                  />
                </div>
                <div class="platform-name">Google Drive</div>
              </div>
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[71px]"
                    src="/assets/images/useCase/educators/img6.png"
                  />
                </div>
                <div class="platform-name">Vimeo</div>
              </div>
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[36px]"
                    src="/assets/images/useCase/educators/img7.png"
                  />
                </div>
                <div class="platform-name">TikTok</div>
              </div>
              <div class="platform-card">
                <div class="flex h-[42px] items-center">
                  <nuxt-img
                    class="w-[37px]"
                    src="/assets/images/useCase/educators/img8.png"
                  />
                </div>
                <div class="platform-name">Instagram</div>
              </div>
              <div class="platform-card">
                <div class="platform-icon">➕</div>
                <div class="platform-name">More...</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Auto-Generated Captions -->
        <div class="feature-block">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.Educators.feature2Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.Educators.feature2Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature2Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature2Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature2Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature2Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual" style="background: var(--gradient)">
            <div style="text-align: center; color: white">
              <div
                style="font-size: 72px; font-weight: 900; margin-bottom: 20px"
              >
                249
              </div>
              <div style="font-size: 24px; font-weight: 600">
                {{ t("UseCases.Educators.feature2Visual1") }}
              </div>
              <div style="font-size: 16px; margin-top: 10px; opacity: 0.9">
                {{ t("UseCases.Educators.feature2Visual2") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Course Organization -->
        <div class="feature-block">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.Educators.feature3Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.Educators.feature3Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature3Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature3Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature3Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature3Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div
              style="
                padding: 30px;
                background: white;
                border-radius: 12px;
                border: 1px solid var(--line-color);
              "
            >
              <div
                style="
                  font-weight: 700;
                  margin-bottom: 20px;
                  color: var(--dark);
                "
                class="flex items-center"
              >
                <nuxt-img
                  class="me-[4px] w-[14px]"
                  src="/assets/images/useCase/business-teams/icon4.svg"
                />
                {{ t("UseCases.Educators.feature3VisualTitle") }}
              </div>
              <div style="margin-left: 20px">
                <div
                  style="padding: 10px 0; border-bottom: 1px solid #f1f5f9"
                  class="flex items-center"
                >
                  <nuxt-img
                    class="me-[4px] w-[14px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  {{ t("UseCases.Educators.feature3Folder1") }}
                </div>
                <div
                  style="padding: 10px 0; border-bottom: 1px solid #f1f5f9"
                  class="flex items-center"
                >
                  <nuxt-img
                    class="me-[4px] w-[14px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  {{ t("UseCases.Educators.feature3Folder2") }}
                </div>
                <div
                  style="padding: 10px 0; border-bottom: 1px solid #f1f5f9"
                  class="flex items-center"
                >
                  <nuxt-img
                    class="me-[4px] w-[14px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  {{ t("UseCases.Educators.feature3Folder3") }}
                </div>
                <div
                  style="padding: 10px 0; border-bottom: 1px solid #f1f5f9"
                  class="flex items-center"
                >
                  <nuxt-img
                    class="me-[4px] w-[14px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  {{ t("UseCases.Educators.feature3Folder4") }}
                </div>
                <div style="padding: 10px 0" class="flex items-center">
                  <nuxt-img
                    class="me-[4px] w-[14px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  {{ t("UseCases.Educators.feature3Folder5") }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 4: Export Options -->
        <div class="feature-block !mb-0">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.Educators.feature4Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.Educators.feature4Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature4Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature4Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature4Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Educators.feature4Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div
              style="
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
                justify-content: center;
              "
            >
              <div
                style="
                  background: white;
                  padding: 30px;
                  border-radius: 12px;
                  border: 1px solid var(--line-color);
                  text-align: center;
                "
              >
                <nuxt-img
                  class="mb-[10px] w-[50px]"
                  src="/assets/images/useCase/educators/icon1.svg"
                />
                <div style="font-weight: 600">TXT</div>
              </div>
              <div
                style="
                  background: white;
                  padding: 30px;
                  border-radius: 12px;
                  border: 1px solid var(--line-color);
                  text-align: center;
                "
              >
                <nuxt-img
                  class="mb-[10px] w-[50px]"
                  src="/assets/images/useCase/educators/icon2.svg"
                />
                <div style="font-weight: 600">DOCX</div>
              </div>
              <div
                style="
                  background: white;
                  padding: 30px;
                  border-radius: 12px;
                  border: 1px solid var(--line-color);
                  text-align: center;
                "
              >
                <nuxt-img
                  class="mb-[10px] w-[50px]"
                  src="/assets/images/useCase/educators/icon3.svg"
                />
                <div style="font-weight: 600">PDF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section class="workflow-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.Educators.workflowTitle") }}
            <span style="color: var(--primary)">{{
              t("UseCases.Educators.grid")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.Educators.workflowSubtitle") }}
          </p>
        </div>

        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-title">
              {{ t("UseCases.Educators.workflowStep1Title") }}
            </div>
            <div class="step-description">
              {{ t("UseCases.Educators.workflowStep1Desc") }}
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-title">
              {{ t("UseCases.Educators.workflowStep2Title") }}
            </div>
            <div class="step-description">
              {{ t("UseCases.Educators.workflowStep2Desc") }}
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-title">
              {{ t("UseCases.Educators.workflowStep3Title") }}
            </div>
            <div class="step-description">
              {{ t("UseCases.Educators.workflowStep3Desc") }}
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-title">
              {{ t("UseCases.Educators.workflowStep4Title") }}
            </div>
            <div class="step-description">
              {{ t("UseCases.Educators.workflowStep4Desc") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.Educators.useCasesTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.Educators.useCasesTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.Educators.useCasesSubtitle") }}
          </p>
        </div>

        <div class="use-cases-grid">
          <div class="use-case-item">
            <div class="mb-[26px] flex h-[30px] items-center">
              <nuxt-img
                class="w-[36px]"
                src="/assets/images/useCase/educators/icon4.png"
              />
            </div>
            <h3 class="use-case-title">
              {{ t("UseCases.Educators.useCase1Title") }}
            </h3>
            <p class="use-case-text">
              {{ t("UseCases.Educators.useCase1Text") }}
            </p>
          </div>

          <div class="use-case-item">
            <div class="mb-[26px] flex h-[30px] items-center">
              <nuxt-img
                class="w-[30px]"
                src="/assets/images/useCase/educators/icon5.png"
              />
            </div>
            <h3 class="use-case-title">
              {{ t("UseCases.Educators.useCase2Title") }}
            </h3>
            <p class="use-case-text">
              {{ t("UseCases.Educators.useCase2Text") }}
            </p>
          </div>

          <div class="use-case-item">
            <div class="mb-[26px] flex h-[30px] items-center">
              <nuxt-img
                class="w-[30px]"
                src="/assets/images/useCase/educators/icon6.png"
              />
            </div>
            <h3 class="use-case-title">
              {{ t("UseCases.Educators.useCase3Title") }}
            </h3>
            <p class="use-case-text">
              {{ t("UseCases.Educators.useCase3Text") }}
            </p>
          </div>

          <div class="use-case-item">
            <div class="mb-[26px] flex h-[30px] items-center">
              <nuxt-img
                class="w-[30px]"
                src="/assets/images/useCase/educators/icon7.png"
              />
            </div>
            <h3 class="use-case-title">
              {{ t("UseCases.Educators.useCase4Title") }}
            </h3>
            <p class="use-case-text">
              {{ t("UseCases.Educators.useCase4Text") }}
            </p>
          </div>

          <div class="use-case-item">
            <div class="mb-[26px] flex h-[30px] items-center">
              <nuxt-img
                class="w-[30px]"
                src="/assets/images/useCase/educators/icon8.png"
              />
            </div>
            <h3 class="use-case-title">
              {{ t("UseCases.Educators.useCase5Title") }}
            </h3>
            <p class="use-case-text">
              {{ t("UseCases.Educators.useCase5Text") }}
            </p>
          </div>

          <div class="use-case-item">
            <div class="mb-[26px] flex h-[30px] items-center">
              <nuxt-img
                class="w-[31px]"
                src="/assets/images/useCase/educators/icon9.png"
              />
            </div>
            <h3 class="use-case-title">
              {{ t("UseCases.Educators.useCase6Title") }}
            </h3>
            <p class="use-case-text">
              {{ t("UseCases.Educators.useCase6Text") }}
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
            {{ t("UseCases.Educators.testimonialTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.Educators.testimonialTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.Educators.testimonialSubtitle") }}
          </p>
        </div>

        <div class="testimonial-card">
          <span class="quote-icon">"</span>
          <p class="testimonial-text">
            {{ t("UseCases.Educators.testimonialText") }}
          </p>
          <div class="testimonial-author">
            <el-avatar
              :size="56"
              :src="`/assets/images/index/users/Sophia Martinez.png`"
              class="me-3 flex-shrink-0 object-cover"
            />
            <div class="author-info">
              <div class="author-name">
                {{ t("UseCases.Educators.testimonialAuthorName") }}
              </div>
              <div class="author-role">
                {{ t("UseCases.Educators.testimonialAuthorRole") }}
              </div>
            </div>
          </div>
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
/* educators 组件 */
import HowToDownload from "~/components/youtubeTomp4/howToDownload.vue";
useHead({
  title:
    "AI Transcription for Educators - Transcribe Lectures & Create Study Guides | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "Make lectures accessible with NeverCap. Our service helps you transcribe lectures to text and use AI to transcribe audio files to study guides. Support all learning styles."
    }
  ]
});

const { t } = useI18n();
const { $mitt } = useNuxtApp();
const ctaData = ref({
  title: t("UseCases.Educators.ctaTitle"),
  subtitle: t("UseCases.Educators.ctaSubtitle"),
  button: t("UseCases.Educators.ctaButton")
});
const handleJump = () => {
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
  text-align: center;
  position: relative;
  overflow: hidden;
}

.btn-ghost {
  background: transparent;
  color: var(--dark);
  padding: 10px 30px;
  border: 2px solid var(--dark);
  border-radius: 120px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s;
}

.btn-ghost:hover {
  background: var(--dark);
  color: white;
}

.btn2 {
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
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
  display: inline-block;
  color: var(--yellow);
  background: var(--yellow-bg);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Stats Section */
.stats-section {
  padding-bottom: 70px;
  background: white;
  border-bottom: 1px solid #e2e4e6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 16px;
  color: var(--gray);
}

/* Features Section */
.features-section {
  padding: 70px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.title-line {
  line-height: 78px;
  font-size: 56px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 14px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.feature-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 70px;
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

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.feature-description {
  font-size: 18px;
  color: var(--gray);
  margin-bottom: 30px;
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
  font-size: 14px;
  flex-shrink: 0;
}

.feature-visual {
  background: var(--light-gray);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  // border: 1px solid var(--line-color);
}

/* Platform Links Visual */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}

.platform-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
  border: 1px solid var(--line-color);
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.platform-card1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.platform-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.platform-name {
  font-weight: 600;
  color: var(--dark);
}

/* Workflow Section */
.workflow-section {
  padding: 70px 0;
  background: var(--light-gray);
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
  right: -20px;
  top: 20px;
  font-size: 24px;
  color: var(--primary);
  opacity: 0.5;
}

.workflow-step:last-child::after {
  display: none;
}

.step-number {
  width: 80px;
  height: 80px;
  background: var(--gradient);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 900;
  margin: 0 auto 20px;
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.step-description {
  font-size: 14px;
  color: var(--gray);
}

/* Use Cases Grid */
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.use-case-item {
  background: white;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.use-case-item1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.use-case-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.use-case-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.use-case-text {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.6;
}

/* Testimonial Section */
.testimonial-section {
  padding: 70px 0;
  background: white;
}

.testimonial-card {
  background: var(--light-gray);
  padding: 60px;
  border-radius: 24px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  border: 1px solid var(--line-color);
}

.quote-icon {
  font-size: 60px;
  color: var(--primary);
  opacity: 0.2;
  position: absolute;
  top: 30px;
  left: 40px;
}

.testimonial-text {
  font-size: 24px;
  line-height: 1.6;
  margin-bottom: 30px;
  font-weight: 600;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.author-avatar {
  width: 60px;
  height: 60px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 24px;
}

.author-info {
  text-align: left;
}

.author-name {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
}

.author-role {
  color: var(--gray);
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .stats-grid,
  .workflow-steps,
  .use-cases-grid {
    grid-template-columns: 1fr;
  }

  .feature-block {
    grid-template-columns: 1fr;
  }

  .feature-block:nth-child(even) {
    direction: ltr;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .workflow-step::after {
    display: none;
  }

  .platform-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonial-card {
    padding: 30px;

    .quote-icon {
      top: 8px;
      left: 12px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(-2rem);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-1rem);
  opacity: 0;
}
</style>
