<template>
  <div class="96-percent-accuracy">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container" style="position: relative; z-index: 1">
        <div class="hero-badge">
          <span>{{ t("Features.Accuracy.heroBadgeText") }}</span>
        </div>

        <h1>
          {{ t("Features.Accuracy.heroTitleLine1") }}<br />
          <span class="gradient-text">
            {{ t("Features.Accuracy.heroTitleHighlight") }}
          </span>
        </h1>

        <p class="hero-subtitle">
          {{ t("Features.Accuracy.heroSubtitle") }}
        </p>

        <div class="hero-cta">
          <span class="flex-center-m">
            <a
              @click="handleClick"
              href="javascript:void(0)"
              class="btn-primary"
              >{{ t("Features.Accuracy.primaryCta") }}</a
            >
          </span>
          <span class="flex-center-m">
            <a href="#languages" class="btn-secondary">
              {{ t("Features.Accuracy.secondaryCta") }}
            </a>
          </span>
        </div>

        <!-- Accuracy Stats -->
        <div class="accuracy-stats">
          <div class="stat-card">
            <div class="stat-percentage">
              {{ t("Features.Accuracy.statCard1Percentage") }}
            </div>
            <div class="stat-description">
              {{ t("Features.Accuracy.statCard1DescriptionLine1") }}<br />{{
                t("Features.Accuracy.statCard1DescriptionLine2")
              }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-percentage">
              {{ t("Features.Accuracy.statCard2Percentage") }}
            </div>
            <div class="stat-description">
              {{ t("Features.Accuracy.statCard2DescriptionLine1") }}<br />{{
                t("Features.Accuracy.statCard2DescriptionLine2")
              }}
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-percentage">
              {{ t("Features.Accuracy.statCard3Percentage") }}
            </div>
            <div class="stat-description">
              {{ t("Features.Accuracy.statCard3DescriptionLine1") }}<br />{{
                t("Features.Accuracy.statCard3DescriptionLine2")
              }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Language Section -->
    <section class="language-section" id="languages">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="gradient-text">
              {{ t("Features.Accuracy.languageSectionTitlePart1") }}
            </span>
            {{ t("Features.Accuracy.languageSectionTitlePart2") }}
          </h2>
          <p class="section-subtitle">
            {{ t("Features.Accuracy.languageSubtitle") }}
          </p>
        </div>

        <div class="language-grid">
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard1Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard1Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard1Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard2Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard2Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard2Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard3Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard3Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard3Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard4Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard4Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard4Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard5Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard5Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard5Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard6Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard6Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard6Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard7Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard7Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard7Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard8Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard8Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard8Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard9Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard9Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard9Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard10Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard10Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard10Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard11Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard11Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard11Accuracy") }}
            </div>
          </div>
          <div class="language-card">
            <div class="language-flag">
              {{ t("Features.Accuracy.languageCard12Flag") }}
            </div>
            <div class="language-name">
              {{ t("Features.Accuracy.languageCard12Name") }}
            </div>
            <div class="language-accuracy">
              {{ t("Features.Accuracy.languageCard12Accuracy") }}
            </div>
          </div>
        </div>

        <p style="text-align: center; color: var(--gray); margin-top: 30px">
          {{ t("Features.Accuracy.moreLanguagesText") }}
        </p>
      </div>
    </section>

    <!-- Feature Blocks -->
    <section class="feature-blocks">
      <div class="container">
        <!-- Feature 1: Word-Level Timestamps -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              t("Features.Accuracy.feature1Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("Features.Accuracy.feature1TitlePart1") }}
              <span class="gradient-text">{{
                t("Features.Accuracy.feature1TitleHighlight")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ t("Features.Accuracy.feature1Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature1Point1Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature1Point2Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature1Point3Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature1Point4Text") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="timestamp-demo">
              <div class="transcript-line">
                <span class="timestamp">{{
                  t("Features.Accuracy.transcriptLine1Timestamp")
                }}</span>
                <span class="speaker-label">{{
                  t("Features.Accuracy.transcriptLine1Speaker")
                }}</span>
                <span class="transcript-text">{{
                  t("Features.Accuracy.transcriptLine1Text")
                }}</span>
              </div>
              <div class="transcript-line">
                <span class="timestamp">{{
                  t("Features.Accuracy.transcriptLine2Timestamp")
                }}</span>
                <span class="speaker-label">{{
                  t("Features.Accuracy.transcriptLine2Speaker")
                }}</span>
                <span class="transcript-text">{{
                  t("Features.Accuracy.transcriptLine2Text")
                }}</span>
              </div>
              <div class="transcript-line">
                <span class="timestamp">{{
                  t("Features.Accuracy.transcriptLine3Timestamp")
                }}</span>
                <span class="speaker-label">{{
                  t("Features.Accuracy.transcriptLine3Speaker")
                }}</span>
                <span class="transcript-text">{{
                  t("Features.Accuracy.transcriptLine3Text")
                }}</span>
              </div>
              <div class="transcript-line">
                <span class="timestamp">{{
                  t("Features.Accuracy.transcriptLine4Timestamp")
                }}</span>
                <span class="speaker-label">{{
                  t("Features.Accuracy.transcriptLine4Speaker")
                }}</span>
                <span class="transcript-text">{{
                  t("Features.Accuracy.transcriptLine4Text")
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Speaker Identification -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              t("Features.Accuracy.feature2Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("Features.Accuracy.feature2TitlePart1") }}
              <span class="gradient-text">{{
                t("Features.Accuracy.feature2TitleHighlight")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ t("Features.Accuracy.feature2Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature2Point1Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature2Point2Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature2Point3Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature2Point4Text") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual gradient-bg">
            <div style="text-align: center; color: black">
              <div
                style="
                  font-size: 72px;
                  font-weight: 900;
                  margin-bottom: 20px;
                  color: var(--primary);
                "
              >
                {{ t("Features.Accuracy.feature2VisualNumber") }}
              </div>
              <div style="font-size: 24px; font-weight: 600">
                {{ t("Features.Accuracy.feature2VisualTitle") }}
              </div>
              <div
                style="
                  font-size: 16px;
                  margin-top: 10px;
                  opacity: 0.9;
                  color: #64748b;
                "
              >
                {{ t("Features.Accuracy.feature2VisualSubtext") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Perfect Formatting -->
        <div class="feature-block !mb-0">
          <div class="feature-content">
            <span class="feature-label">{{
              t("Features.Accuracy.feature3Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("Features.Accuracy.feature3TitlePart1") }}
              <span class="gradient-text">{{
                t("Features.Accuracy.feature3TitleHighlight")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ t("Features.Accuracy.feature3Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature3Point1Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature3Point2Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature3Point3Text") }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{ t("Features.Accuracy.feature3Point4Text") }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual">
            <div
              class="sm:p-[30px] p-0"
              style="
                background: var(--light-gray);
                border-radius: 12px;
              "
            >
              <h3
                style="
                  margin-bottom: 20px;
                  color: var(--dark);
                  font-weight: bold;
                "
                class="text-[1.17em]"
              >
                {{ t("Features.Accuracy.formattingTitle") }}
              </h3>
              <div style="margin-bottom: 20px">
                <div
                  style="
                    font-size: 12px;
                    color: var(--danger);
                    margin-bottom: 10px;
                    font-weight: 600;
                  "
                >
                  {{ t("Features.Accuracy.formattingBeforeLabel") }}
                </div>
                <div
                  style="font-size: 14px; color: var(--gray); line-height: 1.4"
                >
                  {{ t("Features.Accuracy.formattingBeforeText") }}
                </div>
              </div>
              <div>
                <div
                  style="
                    font-size: 12px;
                    color: var(--primary);
                    margin-bottom: 10px;
                    font-weight: 600;
                  "
                >
                  {{ t("Features.Accuracy.formattingAfterLabel") }}
                </div>
                <div
                  style="font-size: 14px; color: var(--dark); line-height: 1.8"
                >
                  {{ t("Features.Accuracy.formattingAfterText") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="comparison-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ t("Features.Accuracy.comparisonSubtitle") }}
            <span class="gradient-text">
              {{ t("Features.Accuracy.comparisonSectionTitle") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ t("Features.Accuracy.comparisonDes") }}
          </p>
        </div>

        <div class="comparison-table">
          <table>
            <thead>
            <tr>
              <th>{{ t("Features.Accuracy.tableHeader1") }}</th>
              <th>{{ t("Features.Accuracy.tableHeader2") }}</th>
              <th>{{ t("Features.Accuracy.tableHeader3") }}</th>
              <th>{{ t("Features.Accuracy.tableHeader4") }}</th>
              <th>{{ t("Features.Accuracy.tableHeader5") }}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <strong>{{ t("Features.Accuracy.tableRow1Feature") }}</strong>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader2')">
          <span class="check-mark">{{
              t("Features.Accuracy.tableRow1NeverCap")
            }}</span>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader3')">{{ t("Features.Accuracy.tableRow1Otter") }}</td>
              <td :data-label="t('Features.Accuracy.tableHeader4')">{{ t("Features.Accuracy.tableRow1Descript") }}</td>
              <td :data-label="t('Features.Accuracy.tableHeader5')">{{ t("Features.Accuracy.tableRow1Rev") }}</td>
            </tr>
            <tr>
              <td>
                <strong>{{ t("Features.Accuracy.tableRow2Feature") }}</strong>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader2')">
          <span class="check-mark">
            {{ t("Features.Accuracy.tableRow2NeverCap") }}
          </span>
              </td>
              <td class="check-mark" :data-label="t('Features.Accuracy.tableHeader3')">
                {{ t("Features.Accuracy.tableRow2Otter") }}
              </td>
              <td class="check-mark" :data-label="t('Features.Accuracy.tableHeader4')">
                {{ t("Features.Accuracy.tableRow2Descript") }}
              </td>
              <td class="x-mark" :data-label="t('Features.Accuracy.tableHeader5')">
                {{ t("Features.Accuracy.tableRow2Rev") }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{ t("Features.Accuracy.tableRow3Feature") }}</strong>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader2')">
          <span class="check-mark">{{
              t("Features.Accuracy.tableRow3NeverCap")
            }}</span>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader3')">{{ t("Features.Accuracy.tableRow3Otter") }}</td>
              <td :data-label="t('Features.Accuracy.tableHeader4')">{{ t("Features.Accuracy.tableRow3Descript") }}</td>
              <td class="x-mark" :data-label="t('Features.Accuracy.tableHeader5')">
                {{ t("Features.Accuracy.tableRow3Rev") }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{ t("Features.Accuracy.tableRow4Feature") }}</strong>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader2')">
          <span class="check-mark">{{
              t("Features.Accuracy.tableRow4NeverCap")
            }}</span>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader3')">{{ t("Features.Accuracy.tableRow4Otter") }}</td>
              <td :data-label="t('Features.Accuracy.tableHeader4')">{{ t("Features.Accuracy.tableRow4Descript") }}</td>
              <td class="x-mark" :data-label="t('Features.Accuracy.tableHeader5')">
                {{ t("Features.Accuracy.tableRow4Rev") }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{ t("Features.Accuracy.tableRow5Feature") }}</strong>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader2')">
          <span class="check-mark">
            {{ t("Features.Accuracy.tableRow5NeverCap") }}
          </span>
              </td>
              <td class="check-mark" :data-label="t('Features.Accuracy.tableHeader3')">
                {{ t("Features.Accuracy.tableRow5Otter") }}
              </td>
              <td class="check-mark" :data-label="t('Features.Accuracy.tableHeader4')">
                {{ t("Features.Accuracy.tableRow5Descript") }}
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader5')">{{ t("Features.Accuracy.tableRow5Rev") }}</td>
            </tr>
            <tr>
              <td>
                <strong>{{ t("Features.Accuracy.tableRow6Feature") }}</strong>
              </td>
              <td :data-label="t('Features.Accuracy.tableHeader2')">
          <span class="check-mark">{{
              t("Features.Accuracy.tableRow6NeverCap")
            }}</span>
              </td>
              <td class="x-mark" :data-label="t('Features.Accuracy.tableHeader3')">
                {{ t("Features.Accuracy.tableRow6Otter") }}
              </td>
              <td class="x-mark" :data-label="t('Features.Accuracy.tableHeader4')">
                {{ t("Features.Accuracy.tableRow6Descript") }}
              </td>
              <td class="x-mark" :data-label="t('Features.Accuracy.tableHeader5')">
                {{ t("Features.Accuracy.tableRow6Rev") }}
              </td>
            </tr>
            </tbody>
          </table>
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
/* 96-percent-accuracy 组件 */
useHead({
  title: "96% Accuracy AI Transcription - Word-Level Precision | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "Industry-leading 96% accuracy in 12 main languages. Word-level timestamps, smart speaker identification, perfect formatting. Professional transcription that actually works."
    }
  ]
});
const { t } = useI18n();
const ctaData = ref({
  title: t("Features.Accuracy.ctaTitle"),
  subtitle: t("Features.Accuracy.ctaSubtitle"),
  button: t("Features.Accuracy.finalCta")
});
const { $mitt } = useNuxtApp();
const handleClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};
</script>

<style scoped lang="scss">
.gradient-text {
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
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
  color: rgba(222, 166, 23, 1);
  background: rgba(255, 242, 210, 1);
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

/* Accuracy Stats Grid */
.accuracy-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.stat-card {
  background: #ffffff;
  border: 1px solid var(--line-color);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  // transition: all 0.3s;
}

.stat-card:hover {
  // transform: translateY(-10px);
  // box-shadow: 0 20px 60px rgba(99, 102, 241, 0.15);
}

.stat-percentage {
  font-size: 48px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 10px;
}

.stat-description {
  font-size: 16px;
  color: var(--gray);
}

/* Language Grid */
.language-section {
  padding-bottom: 70px;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
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

.language-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.language-card {
  background: #ffffff;
  border: 1px solid var(--line-color);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
}

.language-card1:hover {
  background: white;
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
}

.language-flag {
  font-size: 32px;
  margin-bottom: 10px;
}

.language-name {
  font-weight: 600;
  margin-bottom: 5px;
}

.language-accuracy {
  font-size: 14px;
  color: var(--primary);
  font-weight: 700;
}

/* Feature Blocks */
.feature-blocks {
  padding-bottom: 70px;
  background: var(--white);
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
  background: var(--light-gray);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.feature-visual.gradient-bg {
  // background: var(--gradient);
  background: #fff;
  border: 1px solid #e2e4e6;
}

/* Timestamp Visual */
.timestamp-demo {
  width: 100%;
}

.transcript-line {
  background: var(--light-gray);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s;
}

.transcript-line1:hover {
  background: #f0fdf4;
  transform: translateX(10px);
}

.timestamp {
  background: var(--primary);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  font-family: monospace;
  white-space: nowrap;
}

.speaker-label {
  background: var(--primary);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.transcript-text {
  flex: 1;
  font-size: 14px;
}

/* Comparison Section */
.comparison-section {
  padding-bottom: 70px;
  background: white;
}

.comparison-table {
  background: white;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  overflow: hidden;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th {
  background: var(--light-gray);
  padding: 20px;
  text-align: left;
  font-weight: 700;
  border-bottom: 2px solid #e5e7eb;
}

[dir="rtl"] .comparison-table th {
  text-align: right !important;
}

.comparison-table td {
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.check-mark {
  color: var(--primary);
  font-weight: bold;
  font-size: 20px;
}

.x-mark {
  color: var(--danger);
  font-weight: bold;
  font-size: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .accuracy-stats,
  .language-grid {
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

  .feature-visual {
    padding: 20px 16px;
    min-height: 200px;
    height: auto;
    border-radius: 16px;
    overflow-y: auto;
  }

  .comparison-table {
    border-radius: 0;
    border: 0;
  }

  .comparison-table table,
  .comparison-table thead,
  .comparison-table tbody,
  .comparison-table th,
  .comparison-table td,
  .comparison-table tr {
    display: block;
  }

  /* 隐藏表头 */
  .comparison-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  /* 每行变成卡片 */
  .comparison-table tr {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }

  .comparison-table tr:last-child {
    margin-bottom: 0;

    td:first-child {
      border-bottom: 1px solid #f3f4f6;
    }
  }

  /* 重置 td 样式 */
  .comparison-table td {
    border: none;
    padding: 8px 0;
    position: relative;
    padding-left: 40%;
    display: flex;
    align-items: center;
    min-height: 40px;
  }

  /* 第一个 td（功能列）特殊处理 */
  .comparison-table td:first-child {
    padding-left: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid #f3f4f6;
    margin-bottom: 12px;
    font-size: 16px;
  }

  /* 为每个 td 添加标签 */
  .comparison-table td:not(:first-child):before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 35%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
    color: #6b7280;
    font-size: 14px;
  }

  /* RTL 支持 */
  [dir="rtl"] .comparison-table td:not(:first-child) {
    padding-right: 40%;
    padding-left: 0;
  }

  [dir="rtl"] .comparison-table td:not(:first-child):before {
    right: 0;
    left: auto;
    text-align: right;
  }
}
</style>
