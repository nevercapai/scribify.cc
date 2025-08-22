<template>
  <div class="journalists-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <span>{{ $i("Journalists.hero.badge") }}</span>
            </div>

            <h1>
              {{ $i("Journalists.hero.title") }}<br /><span
                style="
                  background: var(--text-gradient);
                  -webkit-background-clip: text;
                  background-clip: text;
                  -webkit-text-fill-color: transparent;
                "
                >{{ $i("Journalists.hero.titleHighlight") }}</span
              >
            </h1>

            <p class="hero-subtitle">
              {{ $i("Journalists.hero.subtitle") }}
            </p>

            <div class="hero-cta">
              <span class="flex-center-m">
                <a
                  href="javascript:void(0)"
                  @click="signup"
                  class="btn-primary me-[10px] !px-9"
                >
                  {{ $i("Journalists.hero.ctaPrimary") }}
                </a>
              </span>
              <span class="flex-center-m">
                <a href="#solution" class="btn-secondary !px-9">
                  {{ $i("Journalists.hero.ctaSecondary") }}
                </a>
              </span>
            </div>

            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">{{
                  $i("Journalists.hero.stats.uploads.number")
                }}</span>
                <span class="stat-label">{{
                  $i("Journalists.hero.stats.uploads.label")
                }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{
                  $i("Journalists.hero.stats.accuracy.number")
                }}</span>
                <span class="stat-label">{{
                  $i("Journalists.hero.stats.accuracy.label")
                }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{
                  $i("Journalists.hero.stats.speed.number")
                }}</span>
                <span class="stat-label">{{
                  $i("Journalists.hero.stats.speed.label")
                }}</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-dashboard">
              <div class="dashboard-header">
                <h3 class="dashboard-title">
                  {{ $i("Journalists.hero.dashboard.title") }}
                </h3>
                <span class="dashboard-status">{{
                  $i("Journalists.hero.dashboard.status")
                }}</span>
              </div>
              <div class="interview-list">
                <div class="interview-item">
                  <div class="interview-info">
                    <div class="interview-icon">
                      <NuxtImg
                        class="h-[18px] w-[20px]"
                        :src="`/assets/images/use_cases/journalists/ccm.png`"
                        fit="contain"
                        loading="eager"
                      />
                    </div>
                    <div class="interview-details">
                      <h4>
                        {{
                          $i(
                            "Journalists.hero.dashboard.interviews.cityCouncil.title"
                          )
                        }}
                      </h4>
                      <span>{{
                        $i(
                          "Journalists.hero.dashboard.interviews.cityCouncil.duration"
                        )
                      }}</span>
                    </div>
                  </div>
                  <span class="interview-action">{{
                    $i(
                      "Journalists.hero.dashboard.interviews.cityCouncil.action"
                    )
                  }}</span>
                </div>
                <div class="interview-item">
                  <div class="interview-info">
                    <div class="interview-icon">
                      <NuxtImg
                        class="h-[18px] w-[18px]"
                        :src="`/assets/images/use_cases/journalists/ei.png`"
                        fit="contain"
                        loading="eager"
                      />
                    </div>
                    <div class="interview-details">
                      <h4>
                        {{
                          $i(
                            "Journalists.hero.dashboard.interviews.expertInterview.title"
                          )
                        }}
                      </h4>
                      <span>{{
                        $i(
                          "Journalists.hero.dashboard.interviews.expertInterview.duration"
                        )
                      }}</span>
                    </div>
                  </div>
                  <span class="interview-action">{{
                    $i(
                      "Journalists.hero.dashboard.interviews.expertInterview.action"
                    )
                  }}</span>
                </div>
                <div class="interview-item">
                  <div class="interview-info">
                    <div class="interview-icon">
                      <NuxtImg
                        class="h-[18px] w-[18px]"
                        :src="`/assets/images/use_cases/journalists/pc.png`"
                        fit="contain"
                        loading="eager"
                      />
                    </div>
                    <div class="interview-details">
                      <h4>
                        {{
                          $i(
                            "Journalists.hero.dashboard.interviews.pressConference.title"
                          )
                        }}
                      </h4>
                      <span>{{
                        $i(
                          "Journalists.hero.dashboard.interviews.pressConference.duration"
                        )
                      }}</span>
                    </div>
                  </div>
                  <span class="interview-action">{{
                    $i(
                      "Journalists.hero.dashboard.interviews.pressConference.action"
                    )
                  }}</span>
                </div>
                <div class="interview-item">
                  <div class="interview-info">
                    <div class="interview-icon">
                      <NuxtImg
                        class="h-[19px] w-[13px]"
                        :src="`/assets/images/use_cases/journalists/pi.png`"
                        fit="contain"
                        loading="eager"
                      />
                    </div>
                    <div class="interview-details">
                      <h4>
                        {{
                          $i(
                            "Journalists.hero.dashboard.interviews.phoneInterview.title"
                          )
                        }}
                      </h4>
                      <span>{{
                        $i(
                          "Journalists.hero.dashboard.interviews.phoneInterview.duration"
                        )
                      }}</span>
                    </div>
                  </div>
                  <span class="interview-action">{{
                    $i(
                      "Journalists.hero.dashboard.interviews.phoneInterview.action"
                    )
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="problem-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Journalists.problem.title") }}
            <span class="gradient-text">{{
              $i("Journalists.problem.titleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Journalists.problem.subtitle") }}
          </p>
        </div>

        <div class="problem-grid">
          <div
            class="problem-card"
            v-for="(icon, index) in problemIcons"
            :key="index"
          >
            <div class="problem-icon">
              <NuxtImg
                :src="`/assets/images/use_cases/journalists/${icon}`"
                fit="contain"
                class="h-[30px]"
                loading="eager"
              />
            </div>
            <h3 class="problem-title">
              {{
                $i(`Journalists.problem.problems.${problemKeys[index]}.title`)
              }}
            </h3>
            <p class="problem-description">
              {{
                $i(
                  `Journalists.problem.problems.${problemKeys[index]}.description`
                )
              }}
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 50px">
          <h3 style="font-size: 32px; font-weight: bold; margin-bottom: 20px">
            {{ $i("Journalists.problem.solution.title") }}
            <span
              style="
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ $i("Journalists.problem.solution.titleHighlight") }}</span
            >
          </h3>
          <p
            style="
              font-size: 20px;
              color: var(--gray);
              max-width: 700px;
              margin: 0 auto;
            "
          >
            {{ $i("Journalists.problem.solution.description") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="solution-section" id="solution">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <!-- {{ $i("Journalists.solution.title") }} -->
            <span class="gradient-text">{{
              $i("Journalists.solution.titleHighlight")
            }}</span>
            {{ $i("Journalists.solution.titleSuffix") }}
          </h2>
          <p class="section-subtitle">
            {{ $i("Journalists.solution.subtitle") }}
          </p>
        </div>

        <!-- Solution 1 -->
        <div class="solution-grid">
          <div class="solution-content">
            <span class="solution-label">{{
              $i("Journalists.solution.solutions.unlimitedUploads.label")
            }}</span>
            <h3 class="solution-title">
              {{ $i("Journalists.solution.solutions.unlimitedUploads.title") }}
            </h3>
            <p class="solution-description">
              {{
                $i(
                  "Journalists.solution.solutions.unlimitedUploads.description"
                )
              }}
            </p>
            <ul class="solution-points">
              <li v-for="(point, index) in unlimitedUploadsPoints" :key="index">
                <span class="check icon-duihao iconfont"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="solution-visual">
            <div
              style="text-align: center"
              class="flex flex-col items-center justify-center"
            >
              <div
                style="font-size: 48px; font-weight: 900; color: var(--primary)"
              >
                {{
                  $i(
                    "Journalists.solution.solutions.unlimitedUploads.visual.number"
                  )
                }}
              </div>
              <div style="font-size: 18px; color: var(--gray)">
                {{
                  $i(
                    "Journalists.solution.solutions.unlimitedUploads.visual.label"
                  )
                }}
              </div>
            </div>
          </div>
        </div>

        <!-- Solution 2 -->
        <div class="solution-grid">
          <div class="solution-content">
            <span class="solution-label">{{
              $i("Journalists.solution.solutions.instantSearch.label")
            }}</span>
            <h3 class="solution-title">
              {{ $i("Journalists.solution.solutions.instantSearch.title") }}
            </h3>
            <p class="solution-description">
              {{
                $i("Journalists.solution.solutions.instantSearch.description")
              }}
            </p>
            <ul class="solution-points">
              <li v-for="(point, index) in instantSearchPoints" :key="index">
                <span class="check icon-duihao iconfont"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="solution-visual">
            <div
              style="text-align: center"
              class="flex flex-col items-center justify-center"
            >
              <div
                style="font-size: 48px; font-weight: 900; color: var(--primary)"
              >
                {{
                  $i(
                    "Journalists.solution.solutions.instantSearch.searchDemo.placeholder"
                  )
                }}
              </div>
              <div style="font-size: 18px; color: var(--gray)">
                {{
                  $i(
                    "Journalists.solution.solutions.instantSearch.searchDemo.resultsText"
                  )
                }}
              </div>
            </div>
          </div>
        </div>

        <!-- Solution 3 -->
        <div class="solution-grid">
          <div class="solution-content">
            <span class="solution-label">{{
              $i("Journalists.solution.solutions.professionalAccuracy.label")
            }}</span>
            <h3 class="solution-title">
              {{
                $i("Journalists.solution.solutions.professionalAccuracy.title")
              }}
            </h3>
            <p class="solution-description">
              {{
                $i(
                  "Journalists.solution.solutions.professionalAccuracy.description"
                )
              }}
            </p>
            <ul class="solution-points">
              <li
                v-for="(point, index) in professionalAccuracyPoints"
                :key="index"
              >
                <span class="check icon-duihao iconfont"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="solution-visual">
            <div style="text-align: center">
              <div
                style="font-size: 64px; font-weight: 900; color: var(--primary)"
              >
                {{
                  $i(
                    "Journalists.solution.solutions.professionalAccuracy.visual.accuracy"
                  )
                }}
              </div>
              <div
                style="font-size: 18px; color: var(--gray); line-height: 22px"
              >
                {{
                  $i(
                    "Journalists.solution.solutions.professionalAccuracy.visual.label"
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <!-- Solution 4 -->
        <div class="solution-grid !mb-0">
          <div class="solution-content">
            <span class="solution-label">{{
              $i("Journalists.solution.solutions.ironclad.label")
            }}</span>
            <h3 class="solution-title">
              {{ $i("Journalists.solution.solutions.ironclad.title") }}
            </h3>
            <p class="solution-description">
              {{ $i("Journalists.solution.solutions.ironclad.description") }}
            </p>
            <ul class="solution-points">
              <li v-for="(point, index) in ironclad" :key="index">
                <span class="check icon-duihao iconfont"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="solution-visual">
            <div style="text-align: center">
              <div
                style="font-size: 64px; font-weight: 900; color: var(--primary)"
              >
                <!-- {{
                  $i("Journalists.solution.solutions.ironclad.visual.accuracy")
                }} -->
                <el-image
                  src="/assets/img/useCase/Security.svg"
                  class="h-[84px] w-[72px]"
                  fit="contain"
                ></el-image>
              </div>
              <div
                style="font-size: 18px; color: var(--gray); line-height: 22px"
              >
                {{ $i("Journalists.solution.solutions.ironclad.visual.label") }}
              </div>
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
            {{ $i("Journalists.features.title") }}
            <span class="gradient-text">{{
              $i("Journalists.features.titleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Journalists.features.subtitle") }}
          </p>
        </div>

        <div class="features-grid">
          <div
            class="feature-card"
            v-for="(icon, index) in featureIcons"
            :key="index"
          >
            <div class="feature-icon">
              <NuxtImg
                :src="`/assets/images/use_cases/journalists/${icon}.png`"
                fit="contain"
                class="h-[30px]"
                loading="eager"
              />
            </div>
            <h4 class="feature-name">
              {{
                $i(
                  `Journalists.features.featuresList.${featureKeys[index]}.title`
                )
              }}
            </h4>
            <p class="feature-description">
              {{
                $i(
                  `Journalists.features.featuresList.${featureKeys[index]}.description`
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section">
      <div class="container">
        <div
          class="testimonial-content"
          v-for="testimonial in testimonialsList"
          :key="testimonial.key"
        >
          <div class="testimonial-quote">
            "{{ $i(`Journalists.testimonials.${testimonial.i18nKey}.quote`) }}"
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">
              <NuxtImg
                :src="`/assets/images/index/users/${testimonial.avatar}.png`"
                fit="cover"
                loading="eager"
              />
            </div>
            <div class="author-info">
              <div class="author-name">
                {{ $i(`Journalists.testimonials.${testimonial.i18nKey}.name`) }}
              </div>
              <div class="author-role">
                {{ $i(`Journalists.testimonials.${testimonial.i18nKey}.role`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18nModule } from "~/utils/i18n";
useHead({
  title:
    "Unlimited Interview Transcription for Journalists & Writers | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "Discover why journalists choose NeverCap as the best interview transcription software. Instantly transcribe interviews, find quotes fast, and meet deadlines with unlimited, secure transcription."
    }
  ]
});

const $i = useI18nModule("UseCases");
interface Testimonial {
  key: string;
  avatar: string;
  i18nKey: string;
}

const testimonialsList: Testimonial[] = [
  { key: "jessica", avatar: "Sophia Martinez", i18nKey: "jessica" }
];

const problemIcons = ["ulki.png", "mcq.png", "cewg.png"];
const problemKeys = ["uploadLimits", "missingQuotes", "costExplosion"];
const featureIcons = ["ef", "efs", "sp", "tt", "ts", "mr", "sf", "bp"];
const featureKeys = [
  "languages",
  "exportFormats",
  "sourceProtection",
  "timestamps",
  "teamSharing",
  "mobileReady",
  "smartFormatting",
  "batchProcessing"
];

// Solution points computed from i18n
const unlimitedUploadsPoints = computed(() => {
  return [
    $i(
      "Journalists.solution.solutions.unlimitedUploads.points.simultaneousUpload"
    ),
    $i("Journalists.solution.solutions.unlimitedUploads.points.noLimits"),
    $i(
      "Journalists.solution.solutions.unlimitedUploads.points.processWhileWrite"
    )
  ];
});

const instantSearchPoints = computed(() => {
  return [
    $i("Journalists.solution.solutions.instantSearch.points.searchAll"),
    $i("Journalists.solution.solutions.instantSearch.points.wordTimestamps"),
    $i("Journalists.solution.solutions.instantSearch.points.jumpToMoments")
  ];
});

const professionalAccuracyPoints = computed(() => {
  return [
    $i(
      "Journalists.solution.solutions.professionalAccuracy.points.accuracyGuarantee"
    ),
    $i(
      "Journalists.solution.solutions.professionalAccuracy.points.handlesAccents"
    ),
    $i(
      "Journalists.solution.solutions.professionalAccuracy.points.smartPunctuation"
    )
  ];
});
const ironclad = computed(() => {
  return [
    $i("Journalists.solution.solutions.ironclad.points.accuracyGuarantee"),
    $i("Journalists.solution.solutions.ironclad.points.handlesAccents"),
    $i("Journalists.solution.solutions.ironclad.points.smartPunctuation")
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
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.08) 0%,
    transparent 70%
  );
  top: -300px;
  left: -300px;
  animation: float 25s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(30px, -30px) rotate(180deg);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text {
  max-width: 600px;
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
  line-height: 1.6;
  margin-bottom: 32px;
}

.hero-cta {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.hero-stats {
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid var(--line-color);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.stat-number {
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
}

.stat-label {
  font-size: 14px;
  color: var(--gray);
}

/* Hero Visual */
.hero-visual {
  position: relative;
}

.hero-dashboard {
  background: white;
  border-radius: 20px;
  // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--line-color);
  padding: 24px;
  position: relative;
  // animation: float-up 4s ease-in-out infinite;
}

@keyframes float-up {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.dashboard-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--dark);
}

.dashboard-status {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(230, 246, 241, 1);
  color: var(--secondary);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.interview-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.interview-item {
  background: var(--light-gray);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.interview-item:hover {
  background: #f0f4ff;
}

.interview-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.interview-icon {
  width: 40px;
  height: 40px;
  background: var(--text-gradient);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.interview-details h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
}

.interview-details span {
  font-size: 12px;
  color: var(--gray);
}

.interview-action {
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
}

/* Problem Section */
.problem-section {
  padding-bottom: 70px;
  background: var(--light-gray);
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

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.problem-card {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #e2e4e6;
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
}

.problem-description {
  color: var(--gray);
  line-height: 1.6;
}

/* Solution Section */
.solution-section {
  padding: 70px 0;
  background: white;
}

.solution-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 50px;
}

.solution-grid:nth-child(even) {
  direction: rtl;
}

.solution-grid:nth-child(even) > * {
  direction: ltr;
}

[dir="rtl"] .solution-grid:nth-child(even) {
  direction: ltr;
}

[dir="rtl"] .solution-grid:nth-child(even) > * {
  direction: rtl;
}

.solution-content {
  max-width: 500px;
}

.solution-label {
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

.solution-title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 14px;
}

.solution-description {
  font-size: 18px;
  color: var(--gray);
  margin-bottom: 28px;
  line-height: 1.7;
}

.solution-points {
  list-style: none;
}

.solution-points li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
}

.solution-points .check {
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
  margin-top: 2px;
}

.solution-visual {
  background: var(--light-gray);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Features Section */
.features-section {
  padding-bottom: 70px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
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

.feature-icon {
  width: 48px;
  height: 48px;
  background: #fff;
  color: var(--primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 auto 16px;
}

.feature-name {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
}

.feature-description {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.5;
  text-align: center;
}

/* Testimonial Section */
.testimonial-section {
  padding: 100px 0;
  background: var(--gradient);
  position: relative;
  overflow: hidden;
}

.testimonial-section::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation: float 20s linear infinite;
}

.testimonial-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.testimonial-quote {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  max-width: 800px;
  margin: 0 auto 24px;
  line-height: 1.4;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author-avatar {
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 700;
  font-size: 20px;
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
  font-size: 14px;
  opacity: 0.9;
}

/* CTA Section */
.cta-section {
  padding: 70px 0;
  background: white;
  text-align: center;
}

.cta-box {
  background: linear-gradient(135deg, #f8fafc 0%, #f3f4f6 100%);
  border-radius: 24px;
  padding: 60px;
  max-width: 900px;
  margin: 0 auto;
  border: 2px solid var(--primary);
}

.cta-title {
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 14px;
}

.cta-subtitle {
  font-size: 20px;
  color: var(--gray);
  margin-bottom: 24px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero-content,
  .solution-grid {
    grid-template-columns: 1fr;
  }

  .problem-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }
}
.search-demo {
  background: #eff0fe;
  border-radius: 11px;
  padding: 14px;
  color: var(--dark);
  font-size: 16px;
}
</style>
