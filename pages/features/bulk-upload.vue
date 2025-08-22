<template>
  <div class="bulk-upload-wrap">
    <HeadNavbar></HeadNavbar>

    <section class="hero">
      <div class="container" style="position: relative; z-index: 1">
        <div class="hero-badge">
          <span>{{ t("Features.BulkUpload.heroBadgeText") }}</span>
        </div>

        <h1>
          {{ t("Features.BulkUpload.heroTitleLine1") }}<br />
          <span class="gradient-text">
            {{ t("Features.BulkUpload.heroTitleHighlight") }}
          </span>
        </h1>

        <p class="hero-subtitle">
          {{ t("Features.BulkUpload.heroSubtitle") }}
        </p>

        <div class="hero-cta">
          <span class="flex-center-m">
            <a
              @click="handleClick"
              href="javascript:void(0)"
              class="btn-primary"
            >
              {{ t("Features.BulkUpload.primaryCta") }}
            </a>
          </span>
          <span class="flex-center-m">
            <a href="#limits" class="btn-secondary">
              {{ t("Features.BulkUpload.secondaryCta") }}
            </a>
          </span>
        </div>

        <div class="reddit-banner">
          <div class="reddit-quote">
            {{ t("Features.BulkUpload.redditQuote") }}
          </div>
          <div class="reddit-author">
            <span>{{ t("Features.BulkUpload.redditAuthorIcon") }}</span>
            {{ t("Features.BulkUpload.redditAuthorText") }}
          </div>
        </div>
      </div>
    </section>

    <section class="comparison-section" id="limits">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("Features.BulkUpload.comparisonSectionTitlePart1") }}
            <span class="gradient-text">
              {{ t("Features.BulkUpload.comparisonSectionTitleHighlight") }}
            </span>
            {{ t("Features.BulkUpload.comparisonSectionTitlePart2") }}
          </h2>
          <p class="section-subtitle">
            {{ t("Features.BulkUpload.comparisonSubtitle") }}
          </p>
        </div>

        <div class="limits-grid">
          <div class="limit-card">
            <div class="service-logo">
              {{ t("Features.BulkUpload.limitCard1Service") }}
            </div>
            <div class="limit-number">
              {{ t("Features.BulkUpload.limitCard1Number") }}
            </div>
            <div class="limit-description">
              {{ t("Features.BulkUpload.limitCard1DescriptionLine1") }}<br />
              {{ t("Features.BulkUpload.limitCard1DescriptionLine2") }}
            </div>
          </div>

          <div class="limit-card">
            <div class="service-logo">
              {{ t("Features.BulkUpload.limitCard2Service") }}
            </div>
            <div class="limit-number">
              {{ t("Features.BulkUpload.limitCard2Number") }}
            </div>
            <div class="limit-description">
              {{ t("Features.BulkUpload.limitCard2DescriptionLine1") }}<br />
              {{ t("Features.BulkUpload.limitCard2DescriptionLine2") }}
            </div>
          </div>

          <div class="limit-card">
            <div class="service-logo">
              {{ t("Features.BulkUpload.limitCard3Service") }}
            </div>
            <div class="limit-number">
              {{ t("Features.BulkUpload.limitCard3Number") }}
            </div>
            <div class="limit-description">
              {{ t("Features.BulkUpload.limitCard3DescriptionLine1") }}<br />
              {{ t("Features.BulkUpload.limitCard3DescriptionLine2") }}
            </div>
          </div>

          <div class="limit-card nevercap">
            <div class="service-logo">
              {{ t("Features.BulkUpload.limitCard4Service") }}
            </div>
            <div class="limit-number">
              {{ t("Features.BulkUpload.limitCard4Number") }}
            </div>
            <div class="limit-description">
              {{ t("Features.BulkUpload.limitCard4DescriptionLine1") }}<br />
              {{ t("Features.BulkUpload.limitCard4DescriptionLine2") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-blocks">
      <div class="container">
        <!-- Feature 1 -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">
              {{ t("Features.BulkUpload.feature1Label") }}
            </span>
            <h2 class="feature-title">
              {{ t("Features.BulkUpload.feature1TitlePart1") }}
              <span class="gradient-text">
                {{ t("Features.BulkUpload.feature1TitleHighlight") }}
              </span>
              {{ t("Features.BulkUpload.feature1TitlePart2") }}
            </h2>
            <p class="feature-description">
              {{ t("Features.BulkUpload.feature1Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature1Point1Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature1Point2Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature1Point3Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature1Point4Text") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="upload-animation">
              <div class="upload-box">
                <div class="upload-icon">
                  <el-image
                    src="/assets/img/features/upload.svg"
                    class="h-[2rem] w-[2rem]"
                    fit="contain"
                  ></el-image>
                </div>
                <div class="upload-text">
                  {{ t("Features.BulkUpload.uploadAnimationText1") }}
                </div>
                <div class="upload-subtext">
                  {{ t("Features.BulkUpload.uploadAnimationText2") }}
                </div>
                <div class="file-badges">
                  <div class="file-badge">
                    {{ t("Features.BulkUpload.fileBadge1") }}
                  </div>
                  <div class="file-badge">
                    {{ t("Features.BulkUpload.fileBadge2") }}
                  </div>
                  <div class="file-badge">
                    {{ t("Features.BulkUpload.fileBadge3") }}
                  </div>
                  <div class="file-badge">
                    {{ t("Features.BulkUpload.fileBadge4") }}
                  </div>
                  <div class="file-badge">
                    {{ t("Features.BulkUpload.fileBadge5") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">
              {{ t("Features.BulkUpload.feature2Label") }}
            </span>
            <h2 class="feature-title">
              {{ t("Features.BulkUpload.feature2TitlePart1") }}
              <span class="gradient-text">
                {{ t("Features.BulkUpload.feature2TitleHighlight") }}
              </span>
            </h2>
            <p class="feature-description">
              {{ t("Features.BulkUpload.feature2Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature2Point1Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature2Point2Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature2Point3Text") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="timeline-visual">
              <div class="timeline-line"></div>
              <div class="timeline-steps">
                <div class="timeline-step">
                  <div class="step-icon">
                    {{ t("Features.BulkUpload.timelineStep1Icon") }}
                  </div>
                  <div class="step-title">
                    {{ t("Features.BulkUpload.timelineStep1Title") }}
                  </div>
                  <div class="step-time">
                    {{ t("Features.BulkUpload.timelineStep1Time") }}
                  </div>
                </div>
                <div class="timeline-step">
                  <div class="step-icon">
                    {{ t("Features.BulkUpload.timelineStep2Icon") }}
                  </div>
                  <div class="step-title">
                    {{ t("Features.BulkUpload.timelineStep2Title") }}
                  </div>
                  <div class="step-time">
                    {{ t("Features.BulkUpload.timelineStep2Time") }}
                  </div>
                </div>
                <div class="timeline-step">
                  <div class="step-icon">
                    {{ t("Features.BulkUpload.timelineStep3Icon") }}
                  </div>
                  <div class="step-title">
                    {{ t("Features.BulkUpload.timelineStep3Title") }}
                  </div>
                  <div class="step-time">
                    {{ t("Features.BulkUpload.timelineStep3Time") }}
                  </div>
                </div>
                <div class="timeline-step">
                  <div class="step-icon">
                    {{ t("Features.BulkUpload.timelineStep4Icon") }}
                  </div>
                  <div class="step-title">
                    {{ t("Features.BulkUpload.timelineStep4Title") }}
                  </div>
                  <div class="step-time">
                    {{ t("Features.BulkUpload.timelineStep4Time") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="feature-block !mb-0">
          <div class="feature-content">
            <span class="feature-label">
              {{ t("Features.BulkUpload.feature3Label") }}
            </span>
            <h2 class="feature-title">
              {{ t("Features.BulkUpload.feature3TitlePart1") }}
              <span class="gradient-text">
                {{ t("Features.BulkUpload.feature3TitleHighlight") }}
              </span>
              {{ t("Features.BulkUpload.feature3TitlePart2") }}
            </h2>
            <p class="feature-description">
              {{ t("Features.BulkUpload.feature3Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature3Point1Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature3Point2Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.BulkUpload.feature3Point3Text") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div style="text-align: center; color: black">
              <div
                style="
                  font-size: 72px;
                  font-weight: 900;
                  margin-bottom: 20px;
                  color: var(--primary);
                "
              >
                {{ t("Features.BulkUpload.feature3VisualNumber") }}
              </div>
              <div style="font-size: 24px; font-weight: 600">
                {{ t("Features.BulkUpload.feature3VisualTitle") }}
              </div>
              <div
                style="
                  font-size: 16px;
                  margin-top: 10px;
                  opacity: 0.9;
                  color: #64748b;
                "
              >
                {{ t("Features.BulkUpload.feature3VisualSubtext") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="use-cases-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("Features.BulkUpload.useCasesTitlePart1") }}
            <span class="gradient-text">
              {{ t("Features.BulkUpload.useCasesTitleHighlight") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ t("Features.BulkUpload.useCasesSubtitle") }}
          </p>
        </div>

        <div class="use-cases-grid">
          <div class="use-case-card">
            <div class="use-case-icon">
              <el-image
                src="/assets/img/features/useCase_1.svg"
                class="h-[30px] w-[40px] rounded-md"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="use-case-title">
              {{ t("Features.BulkUpload.useCase1Title") }}
            </h3>
            <p class="use-case-description">
              {{ t("Features.BulkUpload.useCase1Description") }}
            </p>
          </div>

          <div class="use-case-card">
            <div class="use-case-icon">
              <el-image
                src="/assets/img/features/useCase_2.svg"
                class="h-[45px] w-[40px] rounded-md"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="use-case-title">
              {{ t("Features.BulkUpload.useCase2Title") }}
            </h3>
            <p class="use-case-description">
              {{ t("Features.BulkUpload.useCase2Description") }}
            </p>
          </div>

          <div class="use-case-card">
            <div class="use-case-icon">
              <el-image
                src="/assets/img/features/useCase_3.svg"
                class="h-[40px] w-[40px] rounded-md"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="use-case-title">
              {{ t("Features.BulkUpload.useCase3Title") }}
            </h3>
            <p class="use-case-description">
              {{ t("Features.BulkUpload.useCase3Description") }}
            </p>
          </div>

          <div class="use-case-card">
            <div class="use-case-icon">
              <el-image
                src="/assets/img/features/useCase_4.svg"
                class="h-[35px] w-[40px] rounded-md"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="use-case-title">
              {{ t("Features.BulkUpload.useCase4Title") }}
            </h3>
            <p class="use-case-description">
              {{ t("Features.BulkUpload.useCase4Description") }}
            </p>
          </div>

          <div class="use-case-card">
            <div class="use-case-icon">
              <el-image
                src="/assets/img/features/useCase_5.svg"
                class="h-[35px] w-[40px] rounded-md"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="use-case-title">
              {{ t("Features.BulkUpload.useCase5Title") }}
            </h3>
            <p class="use-case-description">
              {{ t("Features.BulkUpload.useCase5Description") }}
            </p>
          </div>

          <div class="use-case-card">
            <div class="use-case-icon">
              <el-image
                src="/assets/img/features/useCase_6.svg"
                class="h-[40px] w-[40px] rounded-md"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="use-case-title">
              {{ t("Features.BulkUpload.useCase6Title") }}
            </h3>
            <p class="use-case-description">
              {{ t("Features.BulkUpload.useCase6Description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection :data="ctaData"></CTASection>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
/* bulk-upload 组件 */
useHead({
  title: "Bulk Upload Freedom - Process 50 Files at Once | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "Stop the '3 lifetime imports' nonsense. Upload 50 files simultaneously, process your entire archive overnight. True bulk transcription without limits."
    }
  ]
});
const { t } = useI18n();
const ctaData = ref({
  title: t("Features.BulkUpload.ctaTitle"),
  subtitle: t("Features.BulkUpload.ctaSubtitle"),
  button: t("Features.BulkUpload.finalCta")
});

const { $mitt } = useNuxtApp();
const handleClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};
</script>

<style scoped lang="scss">
/* Hero Section - Submagic Style */
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
  margin-bottom: 24px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--gray);
  margin-bottom: 40px;
  max-width: 700px;
}

.hero-cta {
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
}

/* Reddit Quote Banner */
.reddit-banner {
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  padding: 30px;
  border-radius: 20px;
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  color: white;
}

.reddit-banner::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: -50px;
  right: -50px;
}

.reddit-quote {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.reddit-author {
  font-size: 14px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Comparison Cards */
.comparison-section {
  padding-bottom: 70px;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 20px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.limits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.limit-card {
  background: white;
  border: 1px solid var(--line-color);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  position: relative;
  transition: all 0.3s;
}

.limit-card1:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(100, 116, 139, 0.1);
}

.limit-card.nevercap {
  border: 2px solid #dcfce7;
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
}

.limit-card.nevercap:hover {
  // box-shadow: 0 20px 40px rgba(16, 185, 129, 0.1);
}

.service-logo {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--gray);
  margin-bottom: 20px;
}

.limit-number {
  font-size: 48px;
  font-weight: 900;
  color: var(--gray);
  margin-bottom: 8px;
}

.limit-card.nevercap .limit-number {
  color: var(--secondary);
}

.limit-description {
  font-size: 14px;
  color: var(--gray);
}

/* Feature Blocks */
.feature-blocks {
  padding: 70px 0;
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
  font-size: 42px;
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
  border: 1px solid var(--line-color);
  // box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

/* Upload Animation */
.upload-animation {
  width: 100%;
  max-width: 400px;
}

.upload-box {
  background: var(--light-gray);
  border: 3px dashed var(--primary);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.upload-icon {
  font-size: 48px;
  margin-bottom: 20px;
  // animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.upload-text {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 10px;
}

.upload-subtext {
  font-size: 14px;
  color: var(--gray);
}

.file-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
  justify-content: center;
}

.file-badge {
  background: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Process Timeline */
.timeline-visual {
  position: relative;
  padding: 40px;
}

.timeline-line {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  height: 2px;
  background: #6367f1;
}

.timeline-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.timeline-step {
  text-align: center;
  flex: 1;
}

.step-icon {
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
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-time {
  font-size: 14px;
  color: var(--gray);
}

/* Use Cases */
.use-cases-section {
  padding-top: 70px;
  padding-bottom: 70px;
  background: white;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.use-case-card {
  background: #ffffff;
  border: 1px solid var(--line-color);
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  // transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.use-case-card1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.use-case-card1:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.use-case-card1:hover::before {
  transform: scaleX(1);
}

.use-case-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.use-case-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.use-case-description {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .limits-grid,
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
  }

  .timeline-steps {
    flex-direction: column;
    gap: 30px;
  }

  .timeline-line {
    display: none;
  }
}
</style>
