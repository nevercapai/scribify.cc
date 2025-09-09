<template>
  <div>
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <IndexDelayHero></IndexDelayHero>

    <!-- Stats Section -->
    <IndexDelayStats></IndexDelayStats>

    <!--   FreeTrial Section -->
    <IndexDelayTrial></IndexDelayTrial>

    <!-- Features Grid   Section-->
    <IndexDelayFeature></IndexDelayFeature>

    <!-- Use Cases  Section -->
    <IndexDelayUseCases></IndexDelayUseCases>

    <!-- Testimonials Section -->
    <IndexDelayTestimonials></IndexDelayTestimonials>

    <!-- Pricing Preview -->
    <IndexDelayPricing></IndexDelayPricing>

    <!-- FAQ Section -->
    <IndexDelayFAQ></IndexDelayFAQ>

    <!-- CTA Section -->
    <CTASection :data="ctaData" />

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
/* index 组件 */
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
        url: "https://nevercap.ai/",
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
          url: "https://nevercap.ai/"
        },
        publisher: {
          "@type": "Organization",
          name: "NeverCap",
          url: "https://nevercap.ai/"
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
          "https://x.com/NeverCapAI",
          "https://youtube.com/@nevercapai",
          "https://www.instagram.com/nevercap.ai",
          "https://www.tiktok.com/@nevercap.ai"
        ]
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NeverCap",
        alternateName: ["nevercap", "nevercap.ai"],
        url: "https://nevercap.ai/",
        logo: "https://nevercap.ai/assets/logo.svg",
        sameAs: [
          "https://x.com/NeverCapAI",
          "https://youtube.com/@nevercapai",
          "https://www.instagram.com/nevercap.ai",
          "https://www.tiktok.com/@nevercap.ai"
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

const ctaData = ref({
  title: $i("CTASection.title"),
  subtitle: $i("CTASection.subtitle"),
  button: $i("CTASection.button"),
  disclaimer: $i("CTASection.disclaimer")
});

onMounted(async () => {});
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

/* Responsive */
@media (max-width: 768px) {
  :deep(h1) {
    font-size: 36px !important;
  }

  :deep(.stats-grid) {
    grid-template-columns: 1fr !important;
  }
  :deep(.features-grid) {
    grid-template-columns: 1fr !important;
  }
  :deep(.use-cases-grid) {
    grid-template-columns: 1fr !important;
  }
  :deep(.testimonials-grid) {
    grid-template-columns: 1fr !important;
  }

  :deep(.cta-buttons) {
    flex-direction: column !important;
  }

  :deep(.trust-badges) {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 20px !important;
  }
}
</style>
