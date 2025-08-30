<template>
  <div>
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="badge">{{ $i("Hero.badge") }}</div>
          <h1>
            {{ $i("Hero.h1") }}
            <br />
            <span class="gradient-text">
              {{ $i("Hero.gradient") }}
            </span>
          </h1>
          <p class="hero-subtitle">
            {{ $i("Hero.subtitle") }}
          </p>
          <div class="cta-buttons">
            <span class="flex-center-m">
              <a
                @click="handleClick"
                href="javascript:void(0)"
                class="btn-primary"
              >
                {{ $i("Hero.FreeTrial") }}
              </a>
            </span>
            <span class="flex-center-m">
              <a @click="showDownload" class="btn-secondary">
                <span>▶</span> {{ $i("Hero.HowWorks") }}
              </a>
            </span>
          </div>
          <div class="flex justify-center">
            <div class="trust-badges">
              <span>
                <el-image
                  src="/assets/img/index/Unlimited.png"
                  class="relative top-[2px] me-[5px] h-[1rem] w-[1rem] rounded-md"
                  fit="contain"
                ></el-image>
                {{ $i("Hero.Unlimited") }}
              </span>
              <span>
                <el-image
                  src="/assets/img/index/NoCap.png"
                  class="relative top-[2px] me-[5px] h-[1rem] w-[1rem] rounded-md"
                  fit="contain"
                ></el-image>
                {{ $i("Hero.NoCap") }}
              </span>
              <span>
                <el-image
                  src="/assets/img/index/Hour.png"
                  class="relative top-[2px] me-[5px] h-[1rem] w-[1rem] rounded-md"
                  fit="contain"
                ></el-image>
                {{ $i("Hero.Hour") }}
              </span>
            </div>
          </div>
          <transition name="slide-fade">
            <howToDownload
              src="/assets/video/See How It Works.mp4"
              v-if="showHowToDownload"
            ></howToDownload>
          </transition>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">unlimited</div>
            <div class="stat-label">{{ $i("Stats.monthlyMinutes") }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">∞</div>
            <div class="stat-label">{{ $i("Stats.fileUploads") }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50</div>
            <div class="stat-label">{{ $i("Stats.batchProcessing") }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10hrs</div>
            <div class="stat-label">{{ $i("Stats.maxFileLength") }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="features pt-[70px]">
      <div class="container">
        <!-- Interactive Demo Section -->
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("FeaturesGrid.try_now") }} -
            <span class="gradient-text">
              {{ $i("FeaturesGrid.no_signup") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i("FeaturesGrid.experience_unltd") }}
            <br />
            {{ $i("FeaturesGrid.upload_50") }}
          </p>
        </div>
        <IndexFreeTrial class="mb-[70px]"></IndexFreeTrial>

        <!-- Original Features Section -->
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("FeaturesGrid.no_limits") }}
            <span class="gradient-text">
              {{ $i("FeaturesGrid.no_surprises") }}
            </span>
            {{ $i("FeaturesGrid.features") }}
          </h2>
          <p class="section-subtitle">
            {{ $i("FeaturesGrid.transparency") }}
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <el-image
                src="/assets/img/index/Original/Unlimited.svg"
                class="no-drag h-[1.875rem] w-[1.875rem]"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="feature-title">
              {{ $i("FeaturesGrid.feat_unltd") }}
            </h3>
            <p class="feature-description">
              {{ $i("FeaturesGrid.feat_unltd_desc") }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <el-image
                src="/assets/img/index/Original/Bulk.svg"
                class="no-drag h-[1.875rem] w-[1.875rem]"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="feature-title">
              {{ $i("FeaturesGrid.feat_bulk") }}
            </h3>
            <p class="feature-description">
              {{ $i("FeaturesGrid.feat_bulk_desc") }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <el-image
                src="/assets/img/index/Original/Batch.svg"
                class="no-drag h-[1.875rem] w-[1.875rem]"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="feature-title">
              {{ $i("FeaturesGrid.feat_batch") }}
            </h3>
            <p class="feature-description">
              {{ $i("FeaturesGrid.feat_batch_desc") }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <el-image
                src="/assets/img/index/Original/Accuracy.svg"
                class="no-drag h-[1.875rem] w-[1.875rem]"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="feature-title">
              {{ $i("FeaturesGrid.feat_accuracy") }}
            </h3>
            <p class="feature-description">
              {{ $i("FeaturesGrid.feat_accuracy_desc") }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <el-image
                src="/assets/img/index/Original/languages.svg"
                class="no-drag h-[1.875rem] w-[1.875rem]"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="feature-title">
              {{ $i("FeaturesGrid.feat_langs") }}
            </h3>
            <p class="feature-description">
              {{ $i("FeaturesGrid.feat_langs_desc") }}
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <el-image
                src="/assets/img/index/Original/Professional.svg"
                class="no-drag h-[1.875rem] w-[1.875rem]"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="feature-title">
              {{ $i("FeaturesGrid.feat_pro") }}
            </h3>
            <p class="feature-description">
              {{ $i("FeaturesGrid.feat_pro_desc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="use-cases">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("UseCases.built_for") }}
            <span class="gradient-text">
              {{ $i("UseCases.heavy_users") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i("UseCases.join_users") }}
          </p>
        </div>
        <div class="use-cases-grid">
          <template v-for="(item, index) in UseCaselist" :key="index">
            <router-link
              :to="$localePath(item.url)"
              class="use-case-card underline"
            >
              <div class="use-case-icon">
                <el-image
                  :src="`/assets/img/index/case/${item.moude}.svg`"
                  class="h-[3.5rem] w-[3.5rem]"
                  fit="contain"
                ></el-image>
              </div>
              <h3 class="use-case-title">
                {{ item.tilte }}
              </h3>
              <p class="use-case-description">
                {{ item.des }}
              </p>
            </router-link>
          </template>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials" style="background: var(--light-gray)">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Testimonials.title") }}
            <span class="gradient-text">
              {{ $i("Testimonials.highlighted_users") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Testimonials.subtitle") }}
          </p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <span class="quote-icon">"</span>
            <p class="testimonial-text">"{{ $i("Testimonials.Mike.text") }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <el-avatar
                  :size="54"
                  :src="`/assets/images/index/users/Jack Turner.png`"
                  class="me-3"
                />
              </div>
              <div class="author-info">
                <div class="author-name">
                  {{ $i("Testimonials.Mike.author") }}
                </div>
                <div class="author-role">
                  {{ $i("Testimonials.Mike.role") }}
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              "{{ $i("Testimonials.Sarah.text") }}"
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <el-avatar
                  :size="54"
                  :src="`/assets/images/index/users/Sophia Martinez.png`"
                  class="me-3"
                />
              </div>
              <div class="author-info">
                <div class="author-name">
                  {{ $i("Testimonials.Sarah.author") }}
                </div>
                <div class="author-role">
                  {{ $i("Testimonials.Sarah.role") }}
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              "{{ $i("Testimonials.Jessica.text") }}"
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">
                <el-avatar
                  :size="54"
                  :src="`/assets/images/index/users/Emma Thompson.png`"
                  class="me-3"
                />
              </div>
              <div class="author-info">
                <div class="author-name">
                  {{ $i("Testimonials.Jessica.author") }}
                </div>
                <div class="author-role">
                  {{ $i("Testimonials.Jessica.role") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Preview -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("PricingPreview.title") }}
            <span class="gradient-text">
              {{ $i("PricingPreview.highlighted_text") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i("PricingPreview.subtitle") }}
          </p>
        </div>
        <PricingCards></PricingCards>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("FAQSection.title") }}
            <span class="gradient-text">
              {{ $i("FAQSection.titleHighlight") }}
            </span>
          </h2>
        </div>
        <div style="max-width: 800px; margin: 0 auto">
          <details
            v-for="(faq, index) of 9"
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
              {{ t("Index.FAQSection.questions[" + index + "].question") }}
            </summary>
            <p style="margin-top: 16px; color: var(--gray); line-height: 22px">
              {{ t("Index.FAQSection.questions[" + index + "].answer") }}
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
/* index 组件 */
import HowToDownload from "~/components/youtubeTomp4/howToDownload.vue";
import { useI18nModule } from "~/utils/i18n";
const { t } = useI18n();
const $i = useI18nModule("Index");

const title =
  "NeverCap - Stop Paying for Limits: Truly Unlimited AI Transcription";
useHead({
  title,
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "NeverCap",
        url: "https://nevercap.ai",
        description:
          "NeverCap offers truly unlimited AI transcription to convert audio to text with 96% accuracy. Transcribe video and audio files in 100+ languages. No monthly caps, no hidden fees.",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Transcription Software",
        operatingSystem: "All",
        image: "https://nevercap.ai/pics/app-screenshot.png",
        screenshot: [
          "https://nevercap.ai/pics/transcription-demo.png",
          "https://nevercap.ai/pics/batch-upload.png",
          "https://nevercap.ai/pics/speaker-detection.png"
        ],
        author: {
          "@type": "Organization",
          name: "NeverCap",
          url: "https://nevercap.ai"
        },
        publisher: {
          "@type": "Organization",
          name: "NeverCap",
          url: "https://nevercap.ai"
        },
        softwareVersion: "2.0",
        datePublished: "2024-01-01",
        dateModified: "2025-08-18",
        featureList: [
          "Unlimited transcription (Pro plans)",
          "96% accuracy guarantee",
          "100+ supported languages",
          "Speaker identification up to 20 speakers",
          "Batch processing up to 50 files",
          "Word-level timestamps",
          "Multiple export formats (PDF, DOCX, SRT, etc.)",
          "Translation to 249+ languages",
          "10-hour file support",
          "5GB file size limit"
        ],
        offers: [
          {
            "@type": "Offer",
            name: "Free Plan",
            description: "3 files per day, up to 30 minutes per file",
            price: "0",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "0",
              priceCurrency: "USD",
              billingDuration: "P1M"
            }
          },
          {
            "@type": "Offer",
            name: "Pro Monthly",
            description:
              "Unlimited transcription with batch processing and priority queue",
            price: "17.99",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "17.99",
              priceCurrency: "USD",
              billingDuration: "P1M"
            }
          },
          {
            "@type": "Offer",
            name: "Pro Annual",
            description: "Unlimited transcription billed annually",
            price: "107.88",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "107.88",
              priceCurrency: "USD",
              billingDuration: "P1Y"
            }
          }
        ],
        browserRequirements: "Chrome, Firefox, Safari, Edge",
        memoryRequirements: "2GB RAM",
        processorRequirements: "Any modern processor",
        storageRequirements: "No local storage required - cloud-based",
        potentialAction: {
          "@type": "RegisterAction",
          target: "https://app.nevercap.ai/user/signup"
        },
        sameAs: [
          "https://x.com/nevercap",
          "https://www.youtube.com/@nevercap",
          "https://www.instagram.com/nevercap",
          "https://www.tiktok.com/@nevercap"
        ]
      })
    }
  ],
  meta: [
    {
      name: "description",
      content:
        "NeverCap offers truly unlimited AI transcription to convert audio to text with 96% accuracy. Transcribe video and audio files in 100+ languages. No minute caps, no hidden fees. Try it free."
    }
  ]
});

let UseCaselist = ref([
  {
    id: 1,
    moude: "podcasters",
    tilte: t("Index.UseCases.podcasters.title"),
    des: t("Index.UseCases.podcasters.des"),
    url: "/use-cases/podcasters"
  },
  {
    id: 4,
    moude: "content_creators",
    tilte: t("Index.UseCases.content_creators.title"),
    des: t("Index.UseCases.content_creators.des"),
    url: "/use-cases/content-creators"
  },
  {
    id: 2,
    moude: "journalists",
    tilte: t("Index.UseCases.journalists.title"),
    des: t("Index.UseCases.journalists.des"),
    url: "/use-cases/journalists"
  },
  {
    id: 3,
    moude: "researchers",
    tilte: t("Index.UseCases.researchers.title"),
    des: t("Index.UseCases.researchers.des"),
    url: "/use-cases/researchers"
  },
  {
    id: 5,
    moude: "business_teams",
    tilte: t("Index.UseCases.business_teams.title"),
    des: t("Index.UseCases.business_teams.des"),
    url: "/use-cases/business-teams"
  },
  {
    id: 6,
    moude: "educators",
    tilte: t("Index.UseCases.educators.title"),
    des: t("Index.UseCases.educators.des"),
    url: "/use-cases/educators"
  }
]);

const ctaData = ref({
  title: $i("CTASection.title"),
  subtitle: $i("CTASection.subtitle"),
  button: $i("CTASection.button"),
  disclaimer: $i("CTASection.disclaimer")
});

const { $mitt } = useNuxtApp();
const handleClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};

const showHowToDownload = ref(false);
const showDownload = () => {
  showHowToDownload.value = !showHowToDownload.value;
};
</script>

<style scoped lang="scss">
/* Navigation */
nav {
  position: fixed;
  top: 0;
  width: 100vw;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 18px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--gray);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary);
}

/* Dropdown Styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1001;
  top: 100%;
  left: 0;
  padding: 10px 0;
  margin-top: 5px;
}

.dropdown-content::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  height: 5px;
  background: transparent;
}

.dropdown-content a {
  color: var(--gray) !important;
  padding: 12px 20px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
}

.dropdown-content a:hover {
  background-color: var(--light-gray);
  color: var(--primary) !important;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dropdown-toggle svg {
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-toggle svg {
  transform: rotate(180deg);
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
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
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
  margin-bottom: 24px;
  animation: slideUp 0.8s ease;
}

.gradient-text {
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  padding: 54px 0 40px;
  background: white;
  border-top: 1px solid #e2e4e6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  transition: transform 0.3s;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 8px;
}

.stat-label {
  color: var(--gray);
  font-size: 14px;
}

/* Features Grid */
.features {
  padding-bottom: 70px;
  background: var(--light-gray);
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  // transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.feature-card1::before {
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

.feature-card:hover {
  // transform: translateY(-10px);
  // box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card1:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 1.875rem;
  height: 1.875rem;
  // background: var(--gradient);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  // font-size: 24px;
  color: white;
}

.feature-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}

.feature-description {
  font-size: 18px;
  color: var(--gray);
  line-height: 24px;
}

/* Demo Section */
.demo {
  padding: 80px 0;
  background: white;
}

.demo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.demo-content h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.demo-content p {
  color: var(--gray);
  margin-bottom: 30px;
  font-size: 18px;
}

/* Use Cases */
.use-cases {
  padding-bottom: 70px;
  background: var(--light-gray);
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
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  // transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
}

.use-case-card1:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
}

.use-case-icon {
  margin-bottom: 10px;
}

.use-case-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 18px;
}

.use-case-description {
  color: var(--gray);
  font-size: 18px;
  line-height: 24px;
}

/* Testimonials */
.testimonials {
  padding: 70px 0;
  background: #ffffff;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.testimonial-card {
  border: 1px solid var(--line-color);
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 1rem;
  position: relative;
  padding-bottom: 90px;
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
  font-size: 18px;
  color: #000000;
  line-height: 24px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
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

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }

  .stats-grid,
  .features-grid,
  .use-cases-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .demo-container {
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
}
@keyframes progress {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
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

:deep(.el-image img) {
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
