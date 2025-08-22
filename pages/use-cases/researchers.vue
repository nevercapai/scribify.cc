<template>
  <div class="researchers-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-badge">{{ t("UseCases.Researchers.heroBadge") }}</div>

        <h1>
          <span class="title-line">{{
            t("UseCases.Researchers.heroTitle1")
          }}</span
          ><br />
          <span
            style="
              background: var(--text-gradient);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
            class="title-line"
            >{{ t("UseCases.Researchers.heroTitle2") }}</span
          >
        </h1>

        <p class="hero-subtitle">
          {{ t("UseCases.Researchers.heroSubtitle") }}
        </p>

        <div class="hero-cta">
          <span class="flex-center-m">
            <a @click="handleJump" class="btn-primary">{{
              t("UseCases.Researchers.heroCtaPrimary")
            }}</a>
          </span>
          <span class="flex-center-m">
            <a href="#features" class="btn-secondary">{{
              t("UseCases.Researchers.heroCtaSecondary")
            }}</a>
          </span>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">{{
              t("UseCases.Researchers.statsInterviewHours")
            }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">96%</span>
            <span class="stat-label">{{
              t("UseCases.Researchers.statsAccuracy")
            }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">20</span>
            <span class="stat-label">{{
              t("UseCases.Researchers.statsSpeakersId")
            }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">GDPR</span>
            <span class="stat-label">{{
              t("UseCases.Researchers.statsCompliant")
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="problem-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.Researchers.problemTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.Researchers.problemTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.Researchers.problemSubtitle") }}
          </p>
        </div>

        <div class="problems-grid">
          <div class="problem-card">
            <nuxt-img
              class="mb-6 h-auto w-9"
              src="/assets/images/useCase/researchers/icon1.svg"
            />
            <h3 class="problem-title">
              {{ t("UseCases.Researchers.problemCard1Title") }}
            </h3>
            <p class="problem-description">
              {{ t("UseCases.Researchers.problemCard1Desc") }}
            </p>
          </div>

          <div class="problem-card">
            <nuxt-img
              class="mb-6 h-auto w-7"
              src="/assets/images/useCase/researchers/icon2.svg"
            />
            <h3 class="problem-title">
              {{ t("UseCases.Researchers.problemCard2Title") }}
            </h3>
            <p class="problem-description">
              {{ t("UseCases.Researchers.problemCard2Desc") }}
            </p>
          </div>

          <div class="problem-card">
            <nuxt-img
              class="mb-6 h-auto w-7"
              src="/assets/images/useCase/researchers/icon3.svg"
            />
            <h3 class="problem-title">
              {{ t("UseCases.Researchers.problemCard3Title") }}
            </h3>
            <p class="problem-description">
              {{ t("UseCases.Researchers.problemCard3Desc") }}
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 70px">
          <h3 style="font-size: 32px; font-weight: bold; margin-bottom: 14px">
            {{ t("UseCases.Researchers.title") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
            >
              {{ t("UseCases.Researchers.solutionTitle") }}
            </span>
          </h3>
          <p
            style="
              font-size: 18px;
              color: var(--gray);
              max-width: 700px;
              margin: 0 auto;
            "
          >
            {{ t("UseCases.Researchers.solutionDesc") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section" id="features">
      <div class="container !pt-[70px]">
        <!-- Feature 1: Unlimited Processing -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              t("UseCases.Researchers.feature1Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("UseCases.Researchers.feature1Title")
              }}<span class="gradient-text">
                &#8202;{{
                  t("UseCases.Researchers.feature1TitleHl")
                }}&#8202; </span
              >{{ t("UseCases.Researchers.feature1TitlePost") }}
            </h2>
            <p class="feature-description">
              {{ t("UseCases.Researchers.feature1Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature1Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature1Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature1Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature1Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div style="text-align: center" class="flex flex-col items-center">
              <nuxt-img
                class="w-[9.25rem]"
                src="/assets/images/useCase/researchers/icon4.svg"
              />
              <div
                style="font-size: 24px; font-weight: 600; color: var(--dark)"
              >
                {{ t("UseCases.Researchers.feature1Visual1") }}
              </div>
              <div
                style="font-size: 16px; color: var(--gray); margin-top: 10px"
              >
                {{ t("UseCases.Researchers.feature1Visual2") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Multi-Speaker Excellence -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              t("UseCases.Researchers.feature2Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("UseCases.Researchers.feature2Title")
              }}<span class="gradient-text">
                &#8202;{{
                  t("UseCases.Researchers.feature2TitleHl")
                }}&#8202; </span
              >{{ t("UseCases.Researchers.feature2TitlePost") }}
            </h2>
            <p class="feature-description">
              {{ t("UseCases.Researchers.feature2Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature2Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature2Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature2Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature2Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="conversation-demo">
              <div class="conversation-line">
                <div class="speaker-avatar speaker-1">P1</div>
                <div class="conversation-content">
                  <div class="speaker-label">
                    {{ t("UseCases.Researchers.conversationParticipant1") }}
                  </div>
                  <div class="conversation-text">
                    {{ t("UseCases.Researchers.conversationText1") }}
                  </div>
                </div>
              </div>
              <div class="conversation-line">
                <div class="speaker-avatar speaker-2">P2</div>
                <div class="conversation-content">
                  <div class="speaker-label">
                    {{ t("UseCases.Researchers.conversationParticipant2") }}
                  </div>
                  <div class="conversation-text">
                    {{ t("UseCases.Researchers.conversationText2") }}
                  </div>
                </div>
              </div>
              <div class="conversation-line">
                <div class="speaker-avatar speaker-3">P3</div>
                <div class="conversation-content">
                  <div class="speaker-label">
                    {{ t("UseCases.Researchers.conversationParticipant3") }}
                  </div>
                  <div class="conversation-text">
                    {{ t("UseCases.Researchers.conversationText3") }}
                  </div>
                </div>
              </div>
              <div class="conversation-line">
                <div class="speaker-avatar speaker-2">P2</div>
                <div class="conversation-content">
                  <div class="speaker-label">
                    {{ t("UseCases.Researchers.conversationParticipant2") }}
                  </div>
                  <div class="conversation-text">
                    {{ t("UseCases.Researchers.conversationText4") }}
                  </div>
                </div>
              </div>
              <div class="conversation-line">
                <div class="speaker-avatar speaker-4">P4</div>
                <div class="conversation-content">
                  <div class="speaker-label">
                    {{ t("UseCases.Researchers.conversationParticipant4") }}
                  </div>
                  <div class="conversation-text">
                    {{ t("UseCases.Researchers.conversationText5") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Research-Grade Accuracy -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              t("UseCases.Researchers.feature3Label")
            }}</span>
            <h2 class="feature-title">
              <span class="gradient-text">
                {{ t("UseCases.Researchers.feature3TitleHl") }}&#8202; </span
              >{{ t("UseCases.Researchers.feature3Title") }}
            </h2>
            <p class="feature-description">
              {{ t("UseCases.Researchers.feature3Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature3Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature3Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature3Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature3Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual" style="background: var(--gradient)">
            <div style="text-align: center; color: white">
              <div
                style="font-size: 72px; font-weight: 900; margin-bottom: 20px"
              >
                96%
              </div>
              <div style="font-size: 24px; font-weight: 600">
                {{ t("UseCases.Researchers.feature3Visual1") }}
              </div>
              <div style="font-size: 16px; margin-top: 10px; opacity: 0.9">
                {{ t("UseCases.Researchers.feature3Visual2") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 4: Security & Compliance -->
        <div class="feature-block !mb-0">
          <div class="feature-content">
            <span class="feature-label">{{
              t("UseCases.Researchers.feature4Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("UseCases.Researchers.feature4Title")
              }}<span class="gradient-text">
                &#8202;{{ t("UseCases.Researchers.feature4TitleHl") }}
              </span>
            </h2>
            <p class="feature-description">
              {{ t("UseCases.Researchers.feature4Desc") }}
            </p>
            <ul class="feature-points">
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature4Point1") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature4Point2") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature4Point3") }}</span>
              </li>
              <li>
                <div class="check">
                  <span class="icon-duihao iconfont text-xs"></span>
                </div>
                <span>{{ t("UseCases.Researchers.feature4Point4") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div style="text-align: center" class="flex flex-col items-center">
              <nuxt-img
                class="mb-[3.125rem] w-[4.5rem]"
                src="/assets/images/useCase/researchers/icon5.svg"
              />
              <div
                style="
                  display: flex;
                  gap: 20px;
                  justify-content: center;
                  flex-wrap: wrap;
                "
              >
                <div
                  style="
                    background: var(--light-gray);
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                  "
                >
                  GDPR
                </div>
                <div
                  style="
                    background: var(--light-gray);
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                  "
                >
                  HIPAA
                </div>
                <div
                  style="
                    background: var(--light-gray);
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                  "
                >
                  SOC 2
                </div>
                <div
                  style="
                    background: var(--light-gray);
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                  "
                >
                  ISO 27001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="problem-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("UseCases.Researchers.useCasesTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.Researchers.useCasesTitle2") }}</span
            >
          </h2>
          <p class="section-subtitle">
            {{ t("UseCases.Researchers.useCasesSubtitle") }}
          </p>
        </div>

        <div class="use-cases-grid">
          <div class="use-case-item">
            <nuxt-img
              class="w-[39px]"
              src="/assets/images/useCase/researchers/icon6.svg"
            />
            <h3 class="use-case-title">
              {{ t("UseCases.Researchers.useCase1Title") }}
            </h3>
            <p class="use-case-desc">
              {{ t("UseCases.Researchers.useCase1Desc") }}
            </p>
          </div>

          <div class="use-case-item">
            <nuxt-img
              class="w-[31px]"
              src="/assets/images/useCase/researchers/icon7.svg"
            />
            <h3 class="use-case-title">
              {{ t("UseCases.Researchers.useCase2Title") }}
            </h3>
            <p class="use-case-desc">
              {{ t("UseCases.Researchers.useCase2Desc") }}
            </p>
          </div>

          <div class="use-case-item">
            <nuxt-img
              class="w-[33px]"
              src="/assets/images/useCase/researchers/icon8.svg"
            />
            <h3 class="use-case-title">
              {{ t("UseCases.Researchers.useCase3Title") }}
            </h3>
            <p class="use-case-desc">
              {{ t("UseCases.Researchers.useCase3Desc") }}
            </p>
          </div>

          <div class="use-case-item">
            <nuxt-img
              class="w-[30px]"
              src="/assets/images/useCase/researchers/icon9.svg"
            />
            <h3 class="use-case-title">
              {{ t("UseCases.Researchers.useCase4Title") }}
            </h3>
            <p class="use-case-desc">
              {{ t("UseCases.Researchers.useCase4Desc") }}
            </p>
          </div>

          <div class="use-case-item">
            <nuxt-img
              class="w-[33px]"
              src="/assets/images/useCase/researchers/icon10.svg"
            />
            <h3 class="use-case-title">
              {{ t("UseCases.Researchers.useCase5Title") }}
            </h3>
            <p class="use-case-desc">
              {{ t("UseCases.Researchers.useCase5Desc") }}
            </p>
          </div>

          <div class="use-case-item">
            <nuxt-img
              class="w-[40px]"
              src="/assets/images/useCase/researchers/icon11.svg"
            />
            <h3 class="use-case-title">
              {{ t("UseCases.Researchers.useCase6Title") }}
            </h3>
            <p class="use-case-desc">
              {{ t("UseCases.Researchers.useCase6Desc") }}
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
            {{ t("UseCases.Researchers.testimonialTitle") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ t("UseCases.Researchers.testimonialTitle2") }}</span
            >
          </h2>
        </div>

        <div class="testimonial-card">
          <span class="quote-icon">"</span>
          <p class="testimonial-text">
            "{{ t("UseCases.Researchers.testimonialText")
            }}<span class="highlight">
              {{ t("UseCases.Researchers.testimonialText2Hl") }}</span
            >
            {{ t("UseCases.Researchers.testimonialText3") }}&nbsp;<span
              class="highlight"
            >
              {{ t("UseCases.Researchers.testimonialText4Hl") }}</span
            >
            {{ t("UseCases.Researchers.testimonialText5") }}&nbsp;<span
              class="highlight"
            >
              {{ t("UseCases.Researchers.testimonialText6Hl") }}</span
            >
            {{ t("UseCases.Researchers.testimonialText7") }}"
          </p>
          <div class="testimonial-author">
            <el-avatar
              :size="56"
              :src="`/assets/images/index/users/Jack Turner.png`"
              class="me-3"
            />
            <div class="author-info">
              <div class="author-name">
                {{ t("UseCases.Researchers.testimonialAuthorName") }}
              </div>
              <div class="author-role">
                {{ t("UseCases.Researchers.testimonialAuthorRole") }}
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
/* researchers 组件 */
useHead({
  title:
    "AI Transcription for Researchers & Academics - Break Free from Data Limits | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "Process unlimited interviews, focus groups, and research data. No more choosing which sessions to transcribe. 96% accuracy with 20-speaker identification for complex discussions."
    }
  ]
});
const { t } = useI18n();
const ctaData = ref({
  title: t("UseCases.Researchers.ctaTitle"),
  subtitle: t("UseCases.Researchers.ctaSubtitle"),
  button: t("UseCases.Researchers.ctaButton")
});
const { $mitt } = useNuxtApp();
const handleJump = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};
</script>
<style lang="scss" scoped src="./common.scss"></style>
<style scoped lang="scss">
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

/* Hero Section */
.hero {
  padding: 140px 0 70px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  text-align: center;
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

.hero-badge {
  display: inline-block;
  background: rgba(230, 246, 241, 1);
  color: var(--secondary);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  animation: slideDown 0.6s ease;
}

.hero h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 21px;
  letter-spacing: -1px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.title-line {
  line-height: 78px;
  font-size: 56px;
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
  flex-wrap: wrap;
}

/* Stats Bar */
.stats-bar {
  background: white;
  padding-bottom: 70px;
  border-bottom: 1px solid #e2e4e6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 900;
  color: var(--primary);
  display: block;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Problem Section */
.problem-section {
  padding: 70px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
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

.problems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.problem-card {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e4e6;
  transition: all 0.3s;
}

.problem-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(100, 116, 139, 0.1);
}

.problem-icon {
  font-size: 32px;
  margin-bottom: 25px;
}

.problem-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #000;
}

.problem-description {
  font-size: 18px;
  color: var(--gray);
  line-height: 1.6;
}

/* Solution Features */
.features-section {
  padding-bottom: 70px;
  background: var(--light-gray);
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
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.feature-description {
  font-size: 17px;
  color: var(--gray);
  margin-bottom: 30px;
  line-height: 1.8;
}

.feature-points {
  list-style: none;
}

.feature-points li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
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
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
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
  border: 1px solid var(--line-color);
  // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* Multi-speaker Conversation Demo */
.conversation-demo {
  width: 100%;
}

.conversation-line {
  background: var(--light-gray);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s;
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.conversation-line:nth-child(1) {
  animation-delay: 0.1s;
}
.conversation-line:nth-child(2) {
  animation-delay: 0.2s;
}
.conversation-line:nth-child(3) {
  animation-delay: 0.3s;
}
.conversation-line:nth-child(4) {
  animation-delay: 0.4s;
}
.conversation-line:nth-child(5) {
  animation-delay: 0.5s;
}

.speaker-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
}

.speaker-1 {
  background: #6366f1;
}
.speaker-2 {
  background: #10b981;
}
.speaker-3 {
  background: #f59e0b;
}
.speaker-4 {
  background: #ef4444;
}

.conversation-content {
  flex: 1;
}

.speaker-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}

.conversation-text {
  font-size: 14px;
  color: var(--dark);
  line-height: 1.5;
}

/* Use Cases Grid */
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.use-case-item {
  background: white;
  padding: 30px;
  border-radius: 16px;
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  border: 1px solid var(--line-color);
}

.use-case-item1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.use-case-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.use-case-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 12px;
}

.use-case-desc {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.6;
}

/* Testimonial Section */
.testimonial-section {
  padding-bottom: 70px;
  background: white;
}

.testimonial-card {
  max-width: 800px;
  margin: 0 auto;
  background: var(--light-gray);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  border: 1px solid var(--line-color);
}

.quote-icon {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 60px;
  color: var(--primary);
  opacity: 0.1;
}

.testimonial-text {
  font-size: 20px;
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
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 4px;
  font-size: 16px;
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
  .problems-grid {
    grid-template-columns: 1fr;
  }

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
}
</style>
