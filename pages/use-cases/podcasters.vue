<template>
  <div class="podcasters-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="badge">{{ $i("Podcasters.badge") }}</div>
          <h1>
            {{ $i("Podcasters.heroTitle") }}
            <span class="gradient-text">{{
              $i("Podcasters.heroTitleHighlight")
            }}</span>
          </h1>
          <p class="hero-subtitle">
            {{ $i("Podcasters.heroSubtitle") }}
          </p>
          <div class="cta-buttons">
            <span class="flex-center-m">
              <a
                href="javascript:void(0)"
                @click="signup"
                class="btn-primary"
                >{{ $i("Podcasters.ctaPrimary") }}</a
              >
            </span>
            <span class="flex-center-m">
              <a href="#workflow" class="btn-secondary">
                <span>▶</span> {{ $i("Podcasters.ctaSecondary") }}
              </a>
            </span>
          </div>
          <div class="flex justify-center">
            <div class="trust-badges">
            <span>
              <el-image
                src="/assets/img/useCase/trustBadge1.svg"
                class="relative top-[2px] me-[5px] h-[1rem] w-[1rem]"
                fit="contain"
              ></el-image>
              {{ $i("Podcasters.trustBadge1") }}
            </span>
              <span>
              <el-image
                src="/assets/img/useCase/trustBadge2.svg"
                class="relative top-[2px] me-[5px] h-[1rem] w-[1rem]"
                fit="contain"
              ></el-image>
              {{ $i("Podcasters.trustBadge2") }}
            </span>
              <span>
              <el-image
                src="/assets/img/useCase/trustBadge3.svg"
                class="relative top-[2px] me-[5px] h-[1rem] w-[1rem]"
                fit="contain"
              ></el-image>
              {{ $i("Podcasters.trustBadge3") }}
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">
              {{ $i("Podcasters.stats.stat1.number") }}
            </div>
            <div class="stat-label">
              {{ $i("Podcasters.stats.stat1.label") }}
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              {{ $i("Podcasters.stats.stat2.number") }}
            </div>
            <div class="stat-label">
              {{ $i("Podcasters.stats.stat2.label") }}
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              {{ $i("Podcasters.stats.stat3.number") }}
            </div>
            <div class="stat-label">
              {{ $i("Podcasters.stats.stat3.label") }}
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              {{ $i("Podcasters.stats.stat4.number") }}
            </div>
            <div class="stat-label">
              {{ $i("Podcasters.stats.stat4.label") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Solution Section -->
    <section class="problem-solution">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Podcasters.problemTitle") }}
            <span class="gradient-text">{{
              $i("Podcasters.problemTitleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Podcasters.problemSubtitle") }}
          </p>
        </div>

        <div class="problem-grid">
          <div class="problem-card">
            <div class="problem-icon">
              <NuxtImg
                class="w-[1.875rem]"
                :src="`/assets/images/use_cases/podcasters/${problemIcons[0]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="problem-title">
              {{ $i("Podcasters.problems.problem1.title") }}
            </h3>
            <p class="problem-description">
              {{ $i("Podcasters.problems.problem1.description") }}
            </p>
          </div>

          <div class="problem-card">
            <div class="problem-icon">
              <NuxtImg
                class="w-[1.875rem]"
                :src="`/assets/images/use_cases/podcasters/${problemIcons[1]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="problem-title">
              {{ $i("Podcasters.problems.problem2.title") }}
            </h3>
            <p class="problem-description">
              {{ $i("Podcasters.problems.problem2.description") }}
            </p>
          </div>

          <div class="problem-card">
            <div class="problem-icon">
              <NuxtImg
                class="w-[1.875rem]"
                :src="`/assets/images/use_cases/podcasters/${problemIcons[2]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="problem-title">
              {{ $i("Podcasters.problems.problem3.title") }}
            </h3>
            <p class="problem-description">
              {{ $i("Podcasters.problems.problem3.description") }}
            </p>
          </div>
        </div>

        <div style="text-align: center">
          <h3 style="font-size: 32px; font-weight: bold; margin-bottom: 20px">
            {{ $i("Podcasters.solutionTitle") }}
            <span class="gradient-text">{{
              $i("Podcasters.solutionTitleHighlight")
            }}</span>
          </h3>
          <p
            style="
              font-size: 18px;
              color: var(--gray);
              max-width: 700px;
              margin: 0 auto;
            "
          >
            {{ $i("Podcasters.solutionDescription") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section class="workflow" id="workflow">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Podcasters.workflowTitle") }}
            <span class="gradient-text">{{
              $i("Podcasters.workflowTitleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Podcasters.workflowSubtitle") }}
          </p>
        </div>

        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <h3 class="step-title">
              {{ $i("Podcasters.workflow.step1.title") }}
            </h3>
            <p class="step-description">
              {{ $i("Podcasters.workflow.step1.description") }}
            </p>
          </div>

          <div class="workflow-step">
            <div class="step-number">2</div>
            <h3 class="step-title">
              {{ $i("Podcasters.workflow.step2.title") }}
            </h3>
            <p class="step-description">
              {{ $i("Podcasters.workflow.step2.description") }}
            </p>
          </div>

          <div class="workflow-step">
            <div class="step-number">3</div>
            <h3 class="step-title">
              {{ $i("Podcasters.workflow.step3.title") }}
            </h3>
            <p class="step-description">
              {{ $i("Podcasters.workflow.step3.description") }}
            </p>
          </div>

          <div class="workflow-step">
            <div class="step-number">4</div>
            <h3 class="step-title">
              {{ $i("Podcasters.workflow.step4.title") }}
            </h3>
            <p class="step-description">
              {{ $i("Podcasters.workflow.step4.description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Podcasters.featuresTitle") }}
            <span class="gradient-text">{{
              $i("Podcasters.featuresTitleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Podcasters.featuresSubtitle") }}
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <NuxtImg
                class="h-[30px] w-[33px]"
                :src="`/assets/images/use_cases/podcasters/${featureIcons[0]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="feature-title">
              {{ $i("Podcasters.features.feature1.title") }}
            </h3>
            <p class="feature-description">
              {{ $i("Podcasters.features.feature1.description") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <NuxtImg
                class="h-[30px] w-[30px]"
                :src="`/assets/images/use_cases/podcasters/${featureIcons[1]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="feature-title">
              {{ $i("Podcasters.features.feature2.title") }}
            </h3>
            <p class="feature-description">
              {{ $i("Podcasters.features.feature2.description") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <NuxtImg
                class="h-[31px] w-[24px]"
                :src="`/assets/images/use_cases/podcasters/${featureIcons[2]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="feature-title">
              {{ $i("Podcasters.features.feature3.title") }}
            </h3>
            <p class="feature-description">
              {{ $i("Podcasters.features.feature3.description") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <NuxtImg
                class="h-[26px] w-[30px]"
                :src="`/assets/images/use_cases/podcasters/${featureIcons[3]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="feature-title">
              {{ $i("Podcasters.features.feature4.title") }}
            </h3>
            <p class="feature-description">
              {{ $i("Podcasters.features.feature4.description") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <NuxtImg
                class="h-[31px] w-[31px]"
                :src="`/assets/images/use_cases/podcasters/${featureIcons[4]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="feature-title">
              {{ $i("Podcasters.features.feature5.title") }}
            </h3>
            <p class="feature-description">
              {{ $i("Podcasters.features.feature5.description") }}
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <NuxtImg
                class="h-[30px] w-[30px]"
                :src="`/assets/images/use_cases/podcasters/${featureIcons[5]}`"
                fit="contain"
                loading="eager"
              />
            </div>
            <h3 class="feature-title">
              {{ $i("Podcasters.features.feature6.title") }}
            </h3>
            <p class="feature-description">
              {{ $i("Podcasters.features.feature6.description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Podcasters.testimonialsTitle") }}
            <span class="gradient-text">{{
              $i("Podcasters.testimonialsTitleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Podcasters.testimonialsSubtitle") }}
          </p>
        </div>

        <div class="testimonials-grid">
          <div
            v-for="testimonial in testimonialsList"
            :key="testimonial.key"
            class="testimonial-card"
          >
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              {{ $i(`Podcasters.testimonials.${testimonial.i18nKey}.text`) }}
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
                    $i(`Podcasters.testimonials.${testimonial.i18nKey}.name`)
                  }}
                </div>
                <div class="author-role">
                  {{
                    $i(`Podcasters.testimonials.${testimonial.i18nKey}.role`)
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="comparison">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Podcasters.comparisonTitle") }}
            <span class="gradient-text">{{
              $i("Podcasters.comparisonTitleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Podcasters.comparisonSubtitle") }}
          </p>
        </div>

        <div class="comparison-table">
          <table>
            <thead>
            <tr>
              <th>{{ $i("Podcasters.comparison.headers.feature") }}</th>
              <th style="background: #f0fdf4">
                {{ $i("Podcasters.comparison.headers.nevercap") }}
              </th>
              <th>{{ $i("Podcasters.comparison.headers.otter") }}</th>
              <th>{{ $i("Podcasters.comparison.headers.descript") }}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <strong>{{
                    $i("Podcasters.comparison.rows.monthlyLimit.feature")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.nevercap')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.monthlyLimit.nevercap")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.otter')">
                {{ $i("Podcasters.comparison.rows.monthlyLimit.otter") }}
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.descript')">
                {{ $i("Podcasters.comparison.rows.monthlyLimit.descript") }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{
                    $i("Podcasters.comparison.rows.uploadLimit.feature")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.nevercap')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.uploadLimit.nevercap")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.otter')">
                {{ $i("Podcasters.comparison.rows.uploadLimit.otter") }}
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.descript')">
                {{ $i("Podcasters.comparison.rows.uploadLimit.descript") }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{
                    $i("Podcasters.comparison.rows.batchProcessing.feature")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.nevercap')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.batchProcessing.nevercap")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.otter')">
          <span class="x-mark">{{
              $i("Podcasters.comparison.rows.batchProcessing.otter")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.descript')">
          <span class="x-mark">{{
              $i("Podcasters.comparison.rows.batchProcessing.descript")
            }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{
                    $i("Podcasters.comparison.rows.maxLength.feature")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.nevercap')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.maxLength.nevercap")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.otter')">{{ $i("Podcasters.comparison.rows.maxLength.otter") }}</td>
              <td :data-label="$i('Podcasters.comparison.headers.descript')">
                {{ $i("Podcasters.comparison.rows.maxLength.descript") }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{
                    $i("Podcasters.comparison.rows.speakerDetection.feature")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.nevercap')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.speakerDetection.nevercap")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.otter')">
                {{ $i("Podcasters.comparison.rows.speakerDetection.otter") }}
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.descript')">
                {{
                  $i("Podcasters.comparison.rows.speakerDetection.descript")
                }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{
                    $i("Podcasters.comparison.rows.smartFormatting.feature")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.nevercap')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.smartFormatting.nevercap")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.otter')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.smartFormatting.otter")
            }}</span>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.descript')">
          <span class="check-mark">{{
              $i("Podcasters.comparison.rows.smartFormatting.descript")
            }}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>{{
                    $i("Podcasters.comparison.rows.price.feature")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.nevercap')">
                <strong>{{
                    $i("Podcasters.comparison.rows.price.nevercap")
                  }}</strong>
              </td>
              <td :data-label="$i('Podcasters.comparison.headers.otter')">{{ $i("Podcasters.comparison.rows.price.otter") }}</td>
              <td :data-label="$i('Podcasters.comparison.headers.descript')">{{ $i("Podcasters.comparison.rows.price.descript") }}</td>
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
/* podcasters 组件 */
import { useI18nModule } from "~/utils/i18n";
useHead({
  title:
    "Unlimited Podcast Transcription - No Episode Limits | NeverCap for Podcasters",
  meta: [
    {
      name: "description",
      content:
        "Transcribe your entire podcast archive. Generate show notes for every episode. Upload 50 episodes at once. No monthly caps, no upload limits. Built for podcasters who create."
    }
  ]
});
const $i = useI18nModule("UseCases");
const { t } = useI18n();
const ctaData = ref({
  title: $i("Podcasters.ctaTitle"),
  subtitle: $i("Podcasters.ctaSubtitle"),
  button: $i("Podcasters.ctaButton"),
  disclaimer: $i("Podcasters.ctaDisclaimer")
});

// Define testimonials type
interface Testimonial {
  key: string;
  avatar: string;
  i18nKey: string;
}

// Define testimonials list for looping
const testimonialsList: Testimonial[] = [
  {
    key: "mike",
    avatar: "Sophia Martinez.png",
    i18nKey: "mike"
  },
  {
    key: "sarah",
    avatar: "Liam Carter.png",
    i18nKey: "sarah"
  }
];

// Define problem icons
const problemIcons = ["ulk.png", "mso.png", "cewg.png"];

// Define feature icons
const featureIcons = [
  "msd.png",
  "tc.png",
  "sf.png",
  "so.png",
  "1l.png",
  "bp.png"
];
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
  border-radius: 22px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
  animation: slideDown 0.6s ease;
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
  margin-bottom: 14px;
  animation: slideUp 0.8s ease;
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
  animation: slideUp 1s ease;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
  animation: slideUp 1.2s ease;
}

.trust-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  opacity: 0.7;
  animation: fadeIn 1.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}

/* Stats Section */
.stats {
  padding-bottom: 70px;
  background: white;
  border-bottom: 1px solid var(--line-color);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

//.stat-item {
//  transition: transform 0.3s;
//}
//
//.stat-item:hover {
//  transform: translateY(-5px);
//}

.stat-number {
  font-size: 36px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 8px;
}

.stat-label {
  color: var(--gray);
  font-size: 14px;
}

/* Problem Solution Section */
.problem-solution {
  padding: 70px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 14px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.problem-card {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  //transition: all 0.3s;
}

//.problem-card:hover {
//  //transform: translateY(-10px);
//  box-shadow: 0 10px 20px rgba(100, 116, 139, 0.1);
//}

.problem-icon {
  font-size: 32px;
  margin-bottom: 20px;
}

.problem-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: var(--dark);
}

.problem-description {
  color: var(--gray);
  line-height: 1.6;
}

/* Workflow Section */
.workflow {
  padding: 70px 0;
  background: var(--light-gray);
}

.workflow-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.workflow-step {
  text-align: center;
  position: relative;
}

.workflow-step::after {
  content: "→";
  position: absolute;
  right: -30px;
  top: 10px;
  font-size: 24px;
  color: var(--primary);
  opacity: 0.5;
}

.workflow-step:last-child::after {
  display: none;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.step-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.step-description {
  font-size: 14px;
  color: var(--gray);
}

/* Features Grid */
.features {
  padding: 70px 0;
  background: white;
  overflow: hidden;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  //transition: all 0.3s;
}

//.feature-card:hover {
//  //transform: translateY(-10px);
//  box-shadow: 0 10px 20px rgba(100, 116, 139, 0.1);
//}

//.feature-card:hover::before {
//  transform: scaleX(1);
//}

.feature-icon {
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
}

.feature-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
}

.feature-description {
  color: var(--gray);
  line-height: 1.8;
}

/* Testimonials */
.testimonials {
  padding: 70px 0;
  background: var(--light-gray);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.testimonial-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  position: relative;
  border: 1px solid var(--line-color);
}

.quote-icon {
  font-size: 48px;
  color: var(--primary);
  opacity: 0.2;
  position: absolute;
  top: 20px;
  right: 20px;
}

.testimonial-text {
  margin-bottom: 20px;
  line-height: 1.8;
  position: relative;
  z-index: 1;
  font-size: 16px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.author-role {
  font-size: 14px;
  color: var(--gray);
}

/* Comparison Section */
.comparison {
  padding: 70px 0;
  background: white;
}

.comparison-table {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--line-color);
  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin-top: 50px;
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
  border-bottom: 2px solid var(--line-color);
}

[dir="rtl"] .comparison-table th {
  text-align: right !important;
}

.comparison-table td {
  padding: 20px;
  border-bottom: 1px solid var(--line-color);
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.check-mark {
  color: var(--secondary);
  font-weight: bold;
  font-size: 20px;
}

.x-mark {
  color: #64748b;
  font-weight: bold;
  font-size: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }

  .stats-grid,
  .features-grid,
  .problem-grid,
  .workflow-steps,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .trust-badges {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .workflow-step::after {
    display: none;
  }

  table {
    border: 0;
  }

  .comparison-table {
    margin-top: 30px;
    border: 0;
    border-radius: 0;
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
    border: 1px solid var(--line-color);
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 12px;
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

  /* 功能名称列 */
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

  .check-mark,
  .x-mark {
    font-size: 18px;
  }
}
</style>
