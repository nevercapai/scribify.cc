<template>
  <div class="unlimited-transcription-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container" style="position: relative; z-index: 1">
        <div class="hero-badge">
          <span>{{ t("Features.UnlimitedTranscription.heroBadgeText") }}</span>
        </div>

        <h1>
          {{ t("Features.UnlimitedTranscription.heroTitleLine1") }}<br />
          <span class="gradient-text">{{
            t("Features.UnlimitedTranscription.heroTitleLine2")
          }}</span>
        </h1>

        <p class="hero-subtitle">
          {{ t("Features.UnlimitedTranscription.heroSubtitle") }}
        </p>

        <div class="hero-cta">
          <span class="flex-center-m">
            <a
              @click="handleClick"
              href="javascript:void(0)"
              class="btn-primary"
            >
              {{ t("Features.UnlimitedTranscription.primaryCta") }}
            </a>
          </span>
          <span class="flex-center-m">
            <a href="#comparison" class="btn-secondary">
              {{ t("Features.UnlimitedTranscription.secondaryCta") }}
            </a>
          </span>
        </div>

        <!-- Visual Comparison -->
        <div class="visual-comparison" id="comparison">
          <div class="comparison-card bad">
            <span class="comparison-label bad">{{
              t("Features.UnlimitedTranscription.comparisonBadLabel")
            }}</span>
            <h3 class="comparison-title">
              {{ t("Features.UnlimitedTranscription.comparisonBadTitle") }}
            </h3>
            <ul class="comparison-list">
              <li>
                <span class="icon bad">{{
                  t("Features.UnlimitedTranscription.comparisonBadItem1Icon")
                }}</span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonBadItem1Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem1Text")
                  }}</span
                >
              </li>
              <li>
                <span class="icon bad">
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem2Icon")
                  }}
                </span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonBadItem2Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem2Text")
                  }}</span
                >
              </li>
              <li>
                <span class="icon bad">{{
                  t("Features.UnlimitedTranscription.comparisonBadItem3Icon")
                }}</span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonBadItem3Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem3Text")
                  }}</span
                >
              </li>
              <li>
                <span class="icon bad">
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem4Icon")
                  }}
                </span>
                <span
                  ><strong>
                    {{
                      t(
                        "Features.UnlimitedTranscription.comparisonBadItem4Strong"
                      )
                    }}
                  </strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem4Text")
                  }}
                </span>
              </li>
              <li>
                <span class="icon bad">
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem5Icon")
                  }}
                </span>
                <span>
                  {{
                    t("Features.UnlimitedTranscription.comparisonBadItem5Text")
                  }}
                </span>
              </li>
            </ul>
          </div>

          <div class="comparison-card good">
            <span class="comparison-label good">{{
              t("Features.UnlimitedTranscription.comparisonGoodLabel")
            }}</span>
            <h3 class="comparison-title">
              {{ t("Features.UnlimitedTranscription.comparisonGoodTitle") }}
            </h3>
            <ul class="comparison-list">
              <li>
                <span class="icon good">{{
                  t("Features.UnlimitedTranscription.comparisonGoodItem1Icon")
                }}</span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonGoodItem1Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonGoodItem1Text")
                  }}</span
                >
              </li>
              <li>
                <span class="icon good">{{
                  t("Features.UnlimitedTranscription.comparisonGoodItem2Icon")
                }}</span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonGoodItem2Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonGoodItem2Text")
                  }}</span
                >
              </li>
              <li>
                <span class="icon good">{{
                  t("Features.UnlimitedTranscription.comparisonGoodItem3Icon")
                }}</span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonGoodItem3Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonGoodItem3Text")
                  }}</span
                >
              </li>
              <li>
                <span class="icon good">{{
                  t("Features.UnlimitedTranscription.comparisonGoodItem4Icon")
                }}</span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonGoodItem4Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonGoodItem4Text")
                  }}</span
                >
              </li>
              <li>
                <span class="icon good">{{
                  t("Features.UnlimitedTranscription.comparisonGoodItem5Icon")
                }}</span>
                <span
                  ><strong>{{
                    t(
                      "Features.UnlimitedTranscription.comparisonGoodItem5Strong"
                    )
                  }}</strong>
                  {{
                    t("Features.UnlimitedTranscription.comparisonGoodItem5Text")
                  }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Blocks -->
    <section class="feature-blocks">
      <div class="container">
        <!-- Feature 1: No Monthly Caps -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              t("Features.UnlimitedTranscription.feature1Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("Features.UnlimitedTranscription.feature1TitlePart1") }}
              <span class="gradient-text">{{
                t("Features.UnlimitedTranscription.feature1TitlePart2")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ t("Features.UnlimitedTranscription.feature1Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature1Point1Text")
                }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature1Point2Text")
                }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature1Point3Text")
                }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual gradient-bg">
            <div class="stats-visual">
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature1Stat1Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature1Stat1Label") }}
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature1Stat2Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature1Stat2Label") }}
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature1Stat3Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature1Stat3Label") }}
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature1Stat4Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature1Stat4Label") }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Unlimited Uploads -->
        <div class="feature-block">
          <div class="feature-content">
            <span class="feature-label">{{
              t("Features.UnlimitedTranscription.feature2Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("Features.UnlimitedTranscription.feature2TitlePart1") }}
              <span class="gradient-text">{{
                t("Features.UnlimitedTranscription.feature2TitlePart2")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ t("Features.UnlimitedTranscription.feature2Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature2Point1Text")
                }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature2Point2Text")
                }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature2Point3Text")
                }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual table-visual-wrap">
            <div class="table-visual">
              <div class="table-row">
                <div class="label table-cell">
                  {{
                    t("Features.UnlimitedTranscription.feature2TableRow1Label")
                  }}
                </div>
                <div class="value table-cell">
                  <span class="limit-badge danger">{{
                    t("Features.UnlimitedTranscription.feature2TableRow1Value")
                  }}</span>
                </div>
              </div>
              <div class="table-row">
                <div class="label table-cell">
                  {{
                    t("Features.UnlimitedTranscription.feature2TableRow2Label")
                  }}
                </div>
                <div class="value table-cell">
                  <span class="limit-badge danger">{{
                    t("Features.UnlimitedTranscription.feature2TableRow2Value")
                  }}</span>
                </div>
              </div>
              <div class="table-row">
                <div class="label table-cell">
                  {{
                    t("Features.UnlimitedTranscription.feature2TableRow3Label")
                  }}
                </div>
                <div class="value table-cell">
                  <span class="limit-badge danger">{{
                    t("Features.UnlimitedTranscription.feature2TableRow3Value")
                  }}</span>
                </div>
              </div>
              <div class="table-row">
                <div class="label table-cell">
                  {{
                    t("Features.UnlimitedTranscription.feature2TableRow4Label")
                  }}
                </div>
                <div class="value table-cell">
                  <span class="limit-badge success">{{
                    t("Features.UnlimitedTranscription.feature2TableRow4Value")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Real Users -->
        <div class="feature-block !mb-0">
          <div class="feature-content">
            <span class="feature-label">{{
              t("Features.UnlimitedTranscription.feature3Label")
            }}</span>
            <h2 class="feature-title">
              {{ t("Features.UnlimitedTranscription.feature3TitlePart1") }}
              <span class="gradient-text">{{
                t("Features.UnlimitedTranscription.feature3TitlePart2")
              }}</span>
            </h2>
            <p class="feature-description">
              {{ t("Features.UnlimitedTranscription.feature3Description") }}
            </p>
            <ul class="feature-points">
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature3Point1Text")
                }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature3Point2Text")
                }}</span>
              </li>
              <li>
                <span class="check icon-duihao iconfont"></span>
                <span>{{
                  t("Features.UnlimitedTranscription.feature3Point3Text")
                }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual gradient-bg">
            <div class="stats-visual">
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature3Stat1Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature3Stat1Label") }}
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature3Stat2Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature3Stat2Label") }}
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature3Stat3Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature3Stat3Label") }}
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-number">
                  {{ t("Features.UnlimitedTranscription.feature3Stat4Number") }}
                </div>
                <div class="stat-label">
                  {{ t("Features.UnlimitedTranscription.feature3Stat4Label") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="trust-section">
      <div class="container">
        <div class="trust-badges">
          <div class="trust-badge">
            <div class="trust-number">
              {{ t("Features.UnlimitedTranscription.trustBadge1Number") }}
            </div>
            <div class="trust-label">
              {{ t("Features.UnlimitedTranscription.trustBadge1Label") }}
            </div>
          </div>
          <div class="trust-badge">
            <div class="trust-number">
              {{ t("Features.UnlimitedTranscription.trustBadge2Number") }}
            </div>
            <div class="trust-label">
              {{ t("Features.UnlimitedTranscription.trustBadge2Label") }}
            </div>
          </div>
          <div class="trust-badge">
            <div class="trust-number">
              {{ t("Features.UnlimitedTranscription.trustBadge3Number") }}
            </div>
            <div class="trust-label">
              {{ t("Features.UnlimitedTranscription.trustBadge3Label") }}
            </div>
          </div>
          <div class="trust-badge">
            <div class="trust-number">
              {{ t("Features.UnlimitedTranscription.trustBadge4Number") }}
            </div>
            <div class="trust-label">
              {{ t("Features.UnlimitedTranscription.trustBadge4Label") }}
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
const { t } = useI18n();
/* unlimited-transcription 组件 */
useHead({
  title: "Truly Unlimited Transcription - No Hidden Caps | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "Actually unlimited AI transcription. No monthly caps, no hidden limits, no fine print. While others fake it, we deliver true unlimited transcription."
    }
  ]
});
const ctaData = ref({
  title: t("Features.UnlimitedTranscription.ctaTitle"),
  subtitle: t("Features.UnlimitedTranscription.ctaSubtitle"),
  button: t("Features.UnlimitedTranscription.finalCta")
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

/* Visual Comparison - Submagic Style */
.visual-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 60px;
}

.comparison-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.comparison-card.bad {
  border: 2px solid #fee2e2;
}

.comparison-card.good {
  border: 2px solid #dcfce7;
  // background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
}

.comparison-label {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}

.comparison-label.bad {
  background: #fef2f2;
  color: var(--danger);
}

.comparison-label.good {
  background: #f0fdf4;
  color: var(--secondary);
}

.comparison-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.comparison-list {
  list-style: none;
}

.comparison-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
}

.comparison-list .icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  margin-top: 2px;
}

.comparison-list .icon.bad {
  background: #fef2f2;
  color: var(--danger);
}

.comparison-list .icon.good {
  background: #f0fdf4;
  color: var(--secondary);
}

/* Feature Blocks - Submagic Style */
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
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.feature-visual.gradient-bg {
  background: var(--gradient);
}

/* Stats Visual */
.stats-visual {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  max-height: 170px;
  max-width: 220px;
}

.stat-number {
  font-size: 48px;
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

/* Comparison Table Visual */
.table-visual {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--line-color);
  // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #e5e7eb;
}

.table-row:last-child {
  border-bottom: none;
}

.table-cell {
  padding: 20px;
  font-size: 14px;
}

.table-cell.label {
  background: var(--light-gray);
  font-weight: 600;
  color: var(--dark);
}

.table-cell.value {
  display: flex;
  align-items: center;
  gap: 10px;
}

.limit-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.limit-badge.danger {
  background: #fef2f2;
  color: var(--danger);
}

.limit-badge.success {
  background: #f0fdf4;
  color: var(--secondary);
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

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 56px;
  font-weight: 900;
  color: white;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.cta-subtitle {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
}

.btn-white {
  background: white;
  color: var(--primary);
  padding: 18px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  display: inline-block;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-white:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Trust Badges */
.trust-section {
  padding: 60px 0;
  background: var(--light-gray);
  border-top: 1px solid #e2e4e6;
}

.trust-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.trust-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.trust-number {
  font-size: 36px;
  font-weight: 900;
  color: var(--primary);
}

.trust-label {
  font-size: 14px;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .visual-comparison,
  .feature-block {
    grid-template-columns: 1fr;
  }

  .feature-block:nth-child(even) {
    direction: ltr;
  }

  .hero-cta {
    flex-direction: column;
  }

  .trust-badges {
    flex-direction: column;
    gap: 30px;
  }

  .feature-visual {
    padding: 20px;

    .table-cell {
      padding: 10px;
    }
  }

  .table-visual-wrap {
    min-height: auto;
  }

  .stats-visual {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;

    .stat-card {
      width: 220px;
    }
  }
}

.comparison-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #fef7ed 0%, #fff7ed 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.comparison-section::before {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(251, 191, 36, 0.08) 0%,
    transparent 70%
  );
  top: -300px;
  left: -300px;
  animation: float 25s ease-in-out infinite reverse;
}

.comparison-section::after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.05) 0%,
    transparent 70%
  );
  bottom: -200px;
  right: -200px;
  animation: float 20s ease-in-out infinite;
}
</style>
