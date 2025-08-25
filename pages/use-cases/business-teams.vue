<template>
  <div class="business-teams-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div
          class="hero-content"
          style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          "
        >
          <div>
            <div class="hero-badge">
              <span>{{ t("UseCases.BusinessTeams.heroBadge") }}</span>
            </div>

            <h1 style="margin-bottom: 24px">
              <span class="title-line">
                {{ t("UseCases.BusinessTeams.heroTitle1") }}
              </span>
              <br />
              <span class="title-line gradient-text">{{
                t("UseCases.BusinessTeams.heroTitle2")
              }}</span>
            </h1>

            <p class="hero-subtitle">
              {{ t("UseCases.BusinessTeams.heroSubtitle") }}
            </p>

            <div class="hero-cta">
              <span class="flex-center-m">
                <a
                  href="javascript:void(0)"
                  @click="signup"
                  class="btn-primary mb-[20px] me-[10px] !px-[50px]"
                >
                  {{ t("UseCases.BusinessTeams.heroCtaPrimary") }}
                </a>
              </span>
              <span class="flex-center-m">
                <a href="#features" class="btn-secondary !px-[30px]">{{
                  t("UseCases.BusinessTeams.heroCtaSecondary")
                }}</a>
              </span>
            </div>
          </div>

          <!-- Recording Interface -->
          <div
            class="p-[10px] sm:p-[40px]"
            style="
              background: #1a1f2e;
              border-radius: 24px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            "
          >
            <div
              style="
                background: #000;
                border-radius: 16px;
                padding: 60px 40px;
                text-align: center;
                position: relative;
                overflow: hidden;
              "
            >
              <div
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  height: 4px;
                  background: linear-gradient(
                    90deg,
                    var(--primary) 0%,
                    var(--primary) 100%
                  );
                "
                class="recording-interface"
              ></div>

              <div
                style="
                  color: white;
                  font-size: 24px;
                  margin-bottom: 20px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 12px;
                "
              >
                <span
                  style="
                    width: 12px;
                    height: 12px;
                    background: #ef4444;
                    border-radius: 50%;
                  "
                  class="recording-dot"
                ></span>
                <span>{{ t("UseCases.BusinessTeams.recordingStatus") }}</span>
              </div>

              <div
                style="
                  font-size: 48px;
                  font-weight: 300;
                  color: white;
                  font-family: monospace;
                  margin-bottom: 40px;
                "
              >
                00:00:02
              </div>

              <div style="display: flex; justify-content: center; gap: 25px">
                <nuxt-img
                  class="w-[56px]"
                  src="/assets/images/useCase/business-teams/icon2.svg"
                />
                <nuxt-img
                  class="w-[56px]"
                  src="/assets/images/useCase/business-teams/icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">∞</div>
            <div class="stat-label">
              {{ t("UseCases.BusinessTeams.statsMeetingMinutes") }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number">Live</div>
            <div class="stat-label">
              {{ t("UseCases.BusinessTeams.statsLiveRecording") }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number">20+</div>
            <div class="stat-label">
              {{ t("UseCases.BusinessTeams.statsSpeakerID") }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number">Instant</div>
            <div class="stat-label">
              {{ t("UseCases.BusinessTeams.statsInstantUpload") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.BusinessTeams.featuresTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.BusinessTeams.featuresTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.BusinessTeams.featuresSubtitle") }}
          </p>
        </div>

        <!-- Feature 1: Direct Recording -->
        <div class="feature-grid">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.BusinessTeams.feature1Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.BusinessTeams.feature1Desc") }}
            </p>
            <ul class="feature-benefits">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature1Benefit1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature1Benefit2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature1Benefit3") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div style="text-align: center" class="flex flex-col items-center">
              <nuxt-img
                class="mb-[40px] w-[267px]"
                src="/assets/images/useCase/business-teams/icon3.svg"
              />
              <div
                style="font-size: 24px; font-weight: 700; color: var(--primary)"
              >
                {{ t("UseCases.BusinessTeams.feature1Visual1") }}
              </div>
              <div
                style="font-size: 16px; color: var(--gray); margin-top: 10px"
              >
                {{ t("UseCases.BusinessTeams.feature1Visual2") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Instant Upload -->
        <div class="feature-grid">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.BusinessTeams.feature2Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.BusinessTeams.feature2Desc") }}
            </p>
            <ul class="feature-benefits">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature2Benefit1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature2Benefit2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature2Benefit3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature2Benefit4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div
              style="
                background: var(--light-gray);
                padding: 30px;
                border-radius: 12px;
              "
            >
              <div style="text-align: center; margin-bottom: 20px">
                <div
                  style="font-size: 18px; font-weight: 600; color: var(--dark)"
                >
                  {{ t("UseCases.BusinessTeams.feature2Visual1") }}
                </div>
              </div>
              <div
                style="
                  display: flex;
                  gap: 10px;
                  flex-wrap: wrap;
                  justify-content: center;
                "
              >
                <span
                  style="
                    background: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 12px;
                  "
                  class="flex items-center"
                >
                  <nuxt-img
                    class="me-[4px] w-[12px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  team_standup.mp3</span
                >
                <span
                  style="
                    background: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 12px;
                  "
                  class="flex items-center"
                >
                  <nuxt-img
                    class="me-[4px] w-[12px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  client_call.wav</span
                >
                <span
                  style="
                    background: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 12px;
                  "
                  class="flex items-center"
                >
                  <nuxt-img
                    class="me-[4px] w-[12px]"
                    src="/assets/images/useCase/business-teams/icon4.svg"
                  />
                  brainstorm.m4a</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Team Collaboration -->
        <div class="feature-grid">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.BusinessTeams.feature3Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.BusinessTeams.feature3Desc") }}
            </p>
            <ul class="feature-benefits">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature3Benefit1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature3Benefit2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature3Benefit3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature3Benefit4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div
              style="
                background: var(--gradient);
                padding: 40px;
                border-radius: 12px;
                color: white;
                text-align: center;
              "
            >
              <div
                style="font-size: 48px; font-weight: 900; margin-bottom: 10px"
              >
                20+
              </div>
              <div style="font-size: 18px">
                {{ t("UseCases.BusinessTeams.feature3Visual1") }}
              </div>
              <div style="font-size: 14px; margin-top: 10px; opacity: 0.9">
                {{ t("UseCases.BusinessTeams.feature3Visual2") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 4: Smart Search -->
        <div class="feature-grid !mb-0">
          <div class="feature-content">
            <h3 class="feature-title">
              {{ t("UseCases.BusinessTeams.feature4Title") }}
            </h3>
            <p class="feature-description">
              {{ t("UseCases.BusinessTeams.feature4Desc") }}
            </p>
            <ul class="feature-benefits">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature4Benefit1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature4Benefit2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.BusinessTeams.feature4Benefit3") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div style="padding: 10px">
              <div
                style="
                  background: var(--light-gray);
                  padding: 12px 20px;
                  border-radius: 8px;
                  margin-bottom: 15px;
                "
              >
                <input
                  type="text"
                  :placeholder="
                    t('UseCases.BusinessTeams.feature4SearchPlaceholder')
                  "
                  style="
                    border: none;
                    background: transparent;
                    width: 100%;
                    font-size: 16px;
                    outline: none;
                  "
                />
              </div>
              <div
                style="font-size: 12px; color: var(--gray); margin-bottom: 15px"
              >
                {{ t("UseCases.BusinessTeams.feature4SearchResults") }}
              </div>
              <div
                style="
                  background: white;
                  padding: 12px;
                  border-radius: 8px;
                  margin-bottom: 10px;
                  border-left: 3px solid var(--primary);
                "
              >
                <div style="font-weight: 600; font-size: 14px">
                  {{ t("UseCases.BusinessTeams.feature4Meeting1") }}
                </div>
                <div style="font-size: 12px; color: var(--gray)">
                  {{ t("UseCases.BusinessTeams.feature4Meeting1Text") }}
                </div>
              </div>
              <div
                style="
                  background: white;
                  padding: 12px;
                  border-radius: 8px;
                  margin-bottom: 10px;
                  border-left: 3px solid var(--primary);
                "
              >
                <div style="font-weight: 600; font-size: 14px">
                  {{ t("UseCases.BusinessTeams.feature4Meeting2") }}
                </div>
                <div style="font-size: 12px; color: var(--gray)">
                  {{ t("UseCases.BusinessTeams.feature4Meeting2Text") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section class="workflow-section" id="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.BusinessTeams.workflowTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.BusinessTeams.workflowTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.BusinessTeams.workflowSubtitle") }}
          </p>
        </div>

        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <h3 class="step-title">
              {{ t("UseCases.BusinessTeams.workflowStep1Title") }}
            </h3>
            <p class="step-description">
              {{ t("UseCases.BusinessTeams.workflowStep1Desc") }}
            </p>
          </div>
          <div class="workflow-step">
            <div class="step-number">2</div>
            <h3 class="step-title">
              {{ t("UseCases.BusinessTeams.workflowStep2Title") }}
            </h3>
            <p class="step-description">
              {{ t("UseCases.BusinessTeams.workflowStep2Desc") }}
            </p>
          </div>
          <div class="workflow-step">
            <div class="step-number">3</div>
            <h3 class="step-title">
              {{ t("UseCases.BusinessTeams.workflowStep3Title") }}
            </h3>
            <p class="step-description">
              {{ t("UseCases.BusinessTeams.workflowStep3Desc") }}
            </p>
          </div>
          <div class="workflow-step">
            <div class="step-number">4</div>
            <h3 class="step-title">
              {{ t("UseCases.BusinessTeams.workflowStep4Title") }}
            </h3>
            <p class="step-description">
              {{ t("UseCases.BusinessTeams.workflowStep4Desc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.BusinessTeams.testimonialsTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.BusinessTeams.testimonialsTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.BusinessTeams.testimonialsSubtitle") }}
          </p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              {{ t("UseCases.BusinessTeams.testimonial1Text") }}
            </p>
            <div class="testimonial-author">
              <el-avatar
                :size="56"
                :src="`/assets/images/index/users/Liam Carter.png`"
                class="me-3"
              />
              <div class="author-info">
                <div class="author-name">
                  {{ t("UseCases.BusinessTeams.testimonial1AuthorName") }}
                </div>
                <div class="author-role">
                  {{ t("UseCases.BusinessTeams.testimonial1AuthorRole") }}
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              {{ t("UseCases.BusinessTeams.testimonial2Text") }}
            </p>
            <div class="testimonial-author">
              <el-avatar
                :size="56"
                :src="`/assets/images/index/users/Ava Wilson.png`"
                class="me-3"
              />
              <div class="author-info">
                <div class="author-name">
                  {{ t("UseCases.BusinessTeams.testimonial2AuthorName") }}
                </div>
                <div class="author-role">
                  {{ t("UseCases.BusinessTeams.testimonial2AuthorRole") }}
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              {{ t("UseCases.BusinessTeams.testimonial3Text") }}
            </p>
            <div class="testimonial-author">
              <el-avatar
                :size="56"
                :src="`/assets/images/index/users/Emma Thompson.png`"
                class="me-3"
              />
              <div class="author-info">
                <div class="author-name">
                  {{ t("UseCases.BusinessTeams.testimonial3AuthorName") }}
                </div>
                <div class="author-role">
                  {{ t("UseCases.BusinessTeams.testimonial3AuthorRole") }}
                </div>
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
/* business-teams 组件 */
useHead({
  title: "NeverCap for Business Teams - Unlimited AI Meeting Transcription",
  meta: [
    {
      name: "description",
      content:
        "Boost team productivity. Instantly transcribe meetings from Zoom, Google Meet, and Teams. Use our free plan to transcribe a zoom recording to text free."
    }
  ]
});
const { t } = useI18n();
const ctaData = ref({
  title: t("UseCases.BusinessTeams.ctaTitle"),
  subtitle: t("UseCases.BusinessTeams.ctaSubtitle"),
  button: t("UseCases.BusinessTeams.ctaButton")
});
const { $mitt } = useNuxtApp();
const signup = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};
</script>

<style scoped lang="scss">
/* Hero Section */
.hero {
  padding: 140px 0 0;
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

.hero-subtitle {
  font-size: 20px;
  color: var(--gray);
  max-width: 700px;
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-cta {
  // display: flex;
  // gap: 20px;
  // flex-direction: row;
  margin-bottom: 40px;
}

/* Recording Demo Section */
.recording-demo {
  background: var(--dark);
  border-radius: 24px;
  padding: 40px;
  margin-top: 60px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.recording-interface {
  background: #000;
  border-radius: 16px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: recording-progress 3s linear infinite;
}

.recording-interface::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--primary) 0%,
    var(--secondary) 50%,
    var(--primary) 100%
  );
}

@keyframes recording-progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.recording-status {
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.recording-dot {
  width: 12px;
  height: 12px;
  background: #ef4444;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.recording-timer {
  font-size: 48px;
  font-weight: 300;
  color: white;
  font-family: monospace;
  margin-bottom: 40px;
}

.recording-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.control-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.control-btn.stop {
  background: #ef4444;
  border-color: #ef4444;
}

/* Stats Section */
.stats-section {
  padding: 50px 0 70px;
  background: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.title-line {
  line-height: 78px;
  font-size: 56px;
}

.stat-card {
  text-align: center;
  padding: 40px 20px;
  background: var(--light-gray);
  border-radius: 20px;
  transition: all 0.3s;
}

.stat-card:hover {
}

.stat-number {
  font-size: 48px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 16px;
  color: var(--gray);
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

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  align-items: center;
  margin-bottom: 70px;
}

.feature-grid:nth-child(even) {
  direction: rtl;
}

.feature-grid:nth-child(even) > * {
  direction: ltr;
}

[dir="rtl"] .feature-grid:nth-child(even) {
  direction: ltr;
}

[dir="rtl"] .feature-grid:nth-child(even) > * {
  direction: rtl;
}

.feature-content {
  max-width: 500px;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: var(--primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 24px;
}

.feature-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.feature-description {
  font-size: 18px;
  color: var(--gray);
  margin-bottom: 30px;
  line-height: 1.8;
}

.feature-benefits {
  list-style: none;
}

.feature-benefits li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
}

.check {
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
  background: white;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid var(--line-color);
  // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  position: relative;
}

.workflow-step {
  text-align: center;
  position: relative;
  z-index: 1;
}

.workflow-step:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 30px; /* step-number的中心高度 */
  height: 1px;
  background: var(--primary);
  z-index: -1;
  @apply sm:w-[0px] md:right-[-80px] md:w-[120px] lg:right-[-110px] lg:w-[187px];
}

.step-number {
  width: 60px;
  height: 60px;
  background: white;
  border: 3px solid var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 24px;
  font-weight: bold;
  color: var(--primary);
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

/* Testimonials Section */
.testimonials-section {
  padding: 70px 0;
  background: var(--light-gray);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.testimonial-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 2px;
}

.author-role {
  font-size: 14px;
  color: var(--gray);
}

/* Integration Section */
.integration-section {
  padding: 70px 0;
  background: white;
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.integration-card {
  background: var(--light-gray);
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.integration-card:hover {
  background: white;
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
}

.integration-logo {
  font-size: 32px;
  margin-bottom: 10px;
}

.integration-name {
  font-weight: 600;
  color: var(--dark);
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero-content {
    grid-template-columns: 1fr !important;
  }

  .stats-grid,
  .workflow-steps,
  .testimonials-grid,
  .integration-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid:nth-child(even) {
    direction: ltr;
  }
}
</style>
