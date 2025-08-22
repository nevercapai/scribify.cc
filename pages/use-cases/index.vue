<template>
  <div class="index-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>
            {{ $i("AllUseCases.builtFor") }}
            <span class="gradient-text">{{
              $i("AllUseCases.heavyUsers")
            }}</span>
            {{ $i("AllUseCases.whoActuallyNeed") }}
          </h1>
          <p class="hero-subtitle">
            {{ $i("AllUseCases.heroSubtitle") }}
          </p>
          <div class="hero-cta">
            <span class="flex-center-m">
              <a href="javascript:void(0)" class="btn-primary" @click="signup">
                {{ $iIndex("Hero.FreeTrial") }}
              </a>
            </span>
            <span class="flex-center-m">
              <a href="#use-cases" class="btn-secondary">
                {{ $iIndex("Hero.ExploreUseCases") }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Grid -->
    <section class="use-cases-section" id="use-cases">
      <div class="container">
        <div class="use-cases-grid">
          <a
            v-for="useCase in useCasesList"
            :key="useCase.key"
            :href="useCase.href"
            class="use-case-card"
          >
            <div class="use-case-header">
              <div class="use-case-icon">
                <NuxtImg
                  :src="`/assets/images/use_cases/all/${useCase.icon}.png`"
                  fit="contain"
                  class="h-[56px] w-[56px]"
                  loading="eager"
                />
              </div>
              <h3 class="use-case-title">
                {{ $i(`AllUseCases.${useCase.i18nKey}.title`) }}
              </h3>
              <p class="use-case-pain">
                {{ $i(`AllUseCases.${useCase.i18nKey}.pain`) }}
              </p>
              <p class="use-case-description">
                {{ $i(`AllUseCases.${useCase.i18nKey}.description`) }}
              </p>
            </div>
            <div class="use-case-body">
              <ul class="use-case-benefits">
                <li>
                  <span class="benefit-check icon-duihao iconfont"></span>
                  <span>{{
                    $i(`AllUseCases.${useCase.i18nKey}.benefits.benefit1`)
                  }}</span>
                </li>
                <li>
                  <span class="benefit-check icon-duihao iconfont"></span>
                  <span>{{
                    $i(`AllUseCases.${useCase.i18nKey}.benefits.benefit2`)
                  }}</span>
                </li>
                <li>
                  <span class="benefit-check icon-duihao iconfont"></span>
                  <span>{{
                    $i(`AllUseCases.${useCase.i18nKey}.benefits.benefit3`)
                  }}</span>
                </li>
                <li>
                  <span class="benefit-check icon-duihao iconfont"></span>
                  <span>{{
                    $i(`AllUseCases.${useCase.i18nKey}.benefits.benefit4`)
                  }}</span>
                </li>
              </ul>
              <div class="use-case-stats">
                <div class="stat-item">
                  <span class="stat-number">{{
                    $i(`AllUseCases.${useCase.i18nKey}.stats.stat1.number`)
                  }}</span>
                  <span class="stat-label">{{
                    $i(`AllUseCases.${useCase.i18nKey}.stats.stat1.label`)
                  }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{
                    $i(`AllUseCases.${useCase.i18nKey}.stats.stat2.number`)
                  }}</span>
                  <span class="stat-label">{{
                    $i(`AllUseCases.${useCase.i18nKey}.stats.stat2.label`)
                  }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{
                    $i(`AllUseCases.${useCase.i18nKey}.stats.stat3.number`)
                  }}</span>
                  <span class="stat-label">{{
                    $i(`AllUseCases.${useCase.i18nKey}.stats.stat3.label`)
                  }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Customer Quotes Section -->
    <section class="quotes-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("AllUseCases.quotes.title")
            }}<span class="gradient-text">{{
              $i("AllUseCases.quotes.titleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("AllUseCases.quotes.subtitle") }}
          </p>
        </div>

        <div class="quotes-grid">
          <div
            v-for="testimonial in testimonialsList"
            :key="testimonial.key"
            class="quote-card"
          >
            <span class="quote-icon">"</span>
            <p class="quote-text">
              {{
                $i(
                  `AllUseCases.quotes.testimonials.${testimonial.i18nKey}.textBefore`
                )
              }}
              <span class="highlight">{{
                $i(
                  `AllUseCases.quotes.testimonials.${testimonial.i18nKey}.highlight`
                )
              }}</span>
              {{
                $i(
                  `AllUseCases.quotes.testimonials.${testimonial.i18nKey}.textAfter`
                )
              }}
            </p>
            <div class="quote-author">
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
                      `AllUseCases.quotes.testimonials.${testimonial.i18nKey}.name`
                    )
                  }}
                </div>
                <div class="author-role">
                  {{
                    $i(
                      `AllUseCases.quotes.testimonials.${testimonial.i18nKey}.role`
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="industries-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("AllUseCases.industries.title")
            }}<span class="gradient-text">{{
              $i("AllUseCases.industries.titleHighlight")
            }}</span>
          </h2>
          <p class="section-subtitle">
            {{ $i("AllUseCases.industries.subtitle") }}
          </p>
        </div>

        <div class="industries-grid">
          <span class="industry-logo">{{
            $i("AllUseCases.industries.list.media")
          }}</span>
          <span class="industry-logo">{{
            $i("AllUseCases.industries.list.education")
          }}</span>
          <span class="industry-logo">{{
            $i("AllUseCases.industries.list.healthcare")
          }}</span>
          <span class="industry-logo">{{
            $i("AllUseCases.industries.list.technology")
          }}</span>
          <span class="industry-logo">{{
            $i("AllUseCases.industries.list.finance")
          }}</span>
          <span class="industry-logo">{{
            $i("AllUseCases.industries.list.legal")
          }}</span>
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
/* index 组件 */
import { useI18nModule } from "~/utils/i18n";
useHead({
  title: "Use Cases - Who Uses Unlimited Transcription | NeverCap",
  meta: [
    {
      name: "description",
      content:
        "From podcasters with years of backlog to researchers with hundreds of interviews. See how professionals use NeverCap to break free from upload limits and minute caps."
    }
  ]
});
const $i = useI18nModule("UseCases");
const $iIndex = useI18nModule("Index");
const { t } = useI18n();
const ctaData = ref({
  title: $i("AllUseCases.cta.title"),
  subtitle: $i("AllUseCases.cta.subtitle"),
  button: $i("AllUseCases.cta.button")
});

// Define the use case type
interface UseCase {
  key: string;
  href: string;
  icon: string;
  i18nKey: string;
}

// Define the use cases list for looping
const useCasesList: UseCase[] = [
  {
    key: "podcasters",
    href: "/use-cases/podcasters",
    icon: "pt",
    i18nKey: "podcasters"
  },
  {
    key: "journalists",
    href: "/use-cases/journalists",
    icon: "jw",
    i18nKey: "journalists"
  },
  {
    key: "contentCreators",
    href: "/use-cases/content-creators",
    icon: "cc",
    i18nKey: "contentCreators"
  },
  {
    key: "researchers",
    href: "/use-cases/researchers",
    icon: "ra",
    i18nKey: "researchers"
  },
  {
    key: "businessTeams",
    href: "/use-cases/business-teams",
    icon: "bt",
    i18nKey: "businessTeams"
  },
  {
    key: "educators",
    href: "/use-cases/educators",
    icon: "et",
    i18nKey: "educators"
  }
];

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
    avatar: "Ava Wilson.png",
    i18nKey: "mike"
  },
  {
    key: "jessica",
    avatar: "David Chen.png",
    i18nKey: "jessica"
  },
  {
    key: "sarah",
    avatar: "Emma Clark.png",
    i18nKey: "sarah"
  },
  {
    key: "carlos",
    avatar: "Emma Thompson.png",
    i18nKey: "carlos"
  }
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

.hero-content {
  position: relative;
  z-index: 1;
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
  margin: 0 auto 40px;
  line-height: 1.6;
}
.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Use Cases Grid */
.use-cases-section {
  padding-bottom: 70px;
  background: white;
  overflow: hidden;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.use-case-card {
  background: #ffffff;
  border: 1px solid var(--line-color);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.use-case-card:hover {
  // transform: translateY(-10px);
  // box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
  text-decoration: none;
  color: inherit;
}

.use-case-header {
  padding: 40px 30px 30px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid var(--line-color);
}

.use-case-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: inline-block;
  // animation: bounce 2s infinite;
}

.use-case-card:hover .use-case-icon {
  animation-play-state: paused;
  // transform: scale(1.1);
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

.use-case-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--dark);
}

.use-case-pain {
  font-size: 16px;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 16px;
  font-style: italic;
}

.use-case-description {
  font-size: 15px;
  color: var(--gray);
  line-height: 1.6;
}

.use-case-body {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.use-case-benefits {
  list-style: none;
  margin-bottom: 24px;
  flex: 1;
}

.use-case-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--dark);
}

.benefit-check {
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

.benefit-coming-soon {
  width: 20px;
  height: 20px;
  background: #f59e0b;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  flex-shrink: 0;
  margin-top: 2px;
}

.coming-soon-text {
  color: #64748b;
  font-style: italic;
}

.coming-soon-badge {
  background: #fef3c7;
  color: #92400e;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 8px;
}

.use-case-stats {
  background: var(--light-gray);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-around;
  margin-top: auto;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  display: block;
}

.stat-label {
  font-size: 11px;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Customer Quotes Section */
.quotes-section {
  padding: 70px 0;
  background: var(--light-gray);
  overflow: hidden;
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

.quotes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.quote-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  position: relative;
  border: 1px solid var(--line-color);
  //box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.quote-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 48px;
  color: var(--primary);
  opacity: 0.1;
}

.quote-text {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.quote-text .highlight {
  color: #475569;
  font-weight: 600;
}

.quote-author {
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

/* Industries Section */
.industries-section {
  padding: 70px 0;
  background: white;
  text-align: center;
}

.industries-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-top: 30px;
  opacity: 0.6;
}

.industry-logo {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .use-cases-grid {
    grid-template-columns: 1fr;
  }

  .quotes-grid {
    grid-template-columns: 1fr;
  }

  .industries-grid {
    gap: 30px;
  }
}
</style>
