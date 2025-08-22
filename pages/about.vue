<template>
  <div class="about-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section with Office Image -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="badge">
              {{ $i("Hero.badge") }}
            </div>
            <h1>
              {{ $i("Hero.title") }}
              <span class="gradient-text">
                {{ $i("Hero.highlighted_text") }}
              </span>
            </h1>
            <p class="hero-subtitle">
              {{ $i("Hero.description") }}
            </p>
          </div>
          <div class="office-image-container">
            <!-- Replace this div with your actual office image -->
            <div class="office-image-placeholder">
              <img
                src="/pics/company.png"
                alt="NeverCap Office"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  display: block;
                  border-radius: 12px;
                "
              />
            </div>
            <!-- To replace with actual image, use: -->
            <!-- <img src="path-to-your-office-image.jpg" alt="NeverCap Office" style="width: 100%; height: auto; display: block;"> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i("Stats.title") }}
            <span class="gradient-text">
              {{ $i("Stats.highlighted_text") }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i("Stats.subtitle") }}
          </p>
        </div>
        <div class="stats-grid">
          <div v-for="(item, index) of 3" class="stat-item">
            <div class="stat-number">
              {{ $i(`Stats.metrics[${index}].value`) }}
            </div>
            <div class="stat-label">
              {{ $i(`Stats.metrics[${index}].label`) }}
            </div>
            <p class="stat-description">
              {{ $i(`Stats.metrics[${index}].description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i(`Mission.title`) }}
            <span class="gradient-text">
              {{ $i(`Mission.highlighted_text`) }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i(`Mission.subtitle`) }}
          </p>
        </div>
        <div class="features-grid">
          <div v-for="(item, index) of 4" class="feature-card">
            <div class="feature-icon">
              <!-- {{ $i(`Mission.features[${index}].icon`) }} -->
              <el-image
                :src="`/assets/img/about/aboutFeatrue_${index + 1}.svg`"
                class="h-[3.5rem] w-[3.5rem] rounded-md"
                fit="contain"
              ></el-image>
            </div>
            <h3 class="feature-title">
              {{ $i(`Mission.features[${index}].title`) }}
            </h3>
            <p class="feature-description">
              {{ $i(`Mission.features[${index}].description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Info Section -->
    <section class="company-info">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            {{ $i(`Company.title`) }}
            <span class="gradient-text">
              {{ $i(`Company.highlighted_text`) }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{ $i(`Company.subtitle`) }}
          </p>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-label">
              {{ $i(`Company.details[0].label`) }}
            </div>
            <div class="info-value">
              {{ $i(`Company.details[0].value`) }}
            </div>
          </div>
          <div class="info-card">
            <div class="info-label">
              {{ $i(`Company.details[1].label`) }}
            </div>
            <div class="info-value">
              {{ $i(`Company.details[1].value[0]`) }}<br />
              {{ $i(`Company.details[1].value[1]`) }}<br />
              {{ $i(`Company.details[1].value[2]`) }}
            </div>
          </div>
          <div class="info-card">
            <div class="info-label">
              {{ $i(`Company.details[2].label`) }}
            </div>
            <div class="info-value">
              {{ $i(`Company.details[2].value[0]`) }}:
              <a href="mailto:support@nevercap.ai">support@nevercap.ai</a><br />
              {{ $i(`Company.details[2].value[1]`) }}
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
/* about 组件 */
const title = "About - NeverCap | AI-Powered Transcription Services";
useHead({
  title,
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NeverCap",
        legalName: "SCRIBIFY AI INC",
        url: "https://nevercap.ai",
        logo: "https://nevercap.ai/pics/nevercap-logo.png",
        image: "https://nevercap.ai/pics/company.png",
        description:
          "NeverCap provides truly unlimited AI transcription services with 96% accuracy, supporting 100+ languages and offering batch processing without monthly caps or hidden fees.",
        foundingDate: "2024",
        slogan: "Stop Paying for Limits: Truly Unlimited AI Transcription",
        mission:
          "To democratize access to accurate, unlimited AI transcription technology, empowering creators, businesses, and professionals to focus on what matters most - their content.",
        knowsAbout: [
          "AI Transcription",
          "Speech Recognition",
          "Audio Processing",
          "Natural Language Processing",
          "Machine Learning",
          "Multilingual Transcription",
          "Speaker Identification",
          "Batch Processing"
        ],
        areaServed: "Worldwide",
        serviceArea: {
          "@type": "GeoShape",
          name: "Global"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "NeverCap Transcription Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Transcription Service",
                description: "Unlimited AI transcription with 96% accuracy"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Batch Processing",
                description: "Process up to 50 files simultaneously"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Speaker Identification",
                description:
                  "Identify and label up to 20 speakers automatically"
              }
            }
          ]
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "0",
          highPrice: "17.99",
          offerCount: "3"
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            availableLanguage: "English",
            email: "mailto:support@nevercap.ai",
            url: "https://nevercap.ai/about"
          }
        ],
        sameAs: [
          "https://twitter.com/nevercap",
          "https://youtube.com/@nevercap",
          "https://instagram.com/nevercap",
          "https://tiktok.com/@nevercap"
        ],

        award: [
          "96% Accuracy Guarantee",
          "100+ Languages Supported",
          "Truly Unlimited Transcription"
        ],
        employee: [
          {
            "@type": "Person",
            name: "AI Engineering Team",
            jobTitle: "Machine Learning Engineers",
            worksFor: {
              "@type": "Organization",
              name: "NeverCap"
            }
          },
          {
            "@type": "Person",
            name: "Product Development Team",
            jobTitle: "Product Engineers",
            worksFor: {
              "@type": "Organization",
              name: "NeverCap"
            }
          }
        ],
        owns: {
          "@type": "SoftwareApplication",
          name: "NeverCap AI Transcription Platform",
          applicationCategory: "BusinessApplication"
        },
        publishingPrinciples: "https://nevercap.ai/privacy",
        diversityPolicy: "https://nevercap.ai/about#diversity",
        ethicsPolicy: "https://nevercap.ai/privacy#ethics"
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About NeverCap - AI Transcription Company",
        description:
          "Learn about NeverCap's mission to provide truly unlimited AI transcription services. Founded in 2024, we serve 50,000+ users worldwide with 96% accuracy and 100+ language support.",
        url: "https://nevercap.ai/about",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          name: "NeverCap",
          url: "https://nevercap.ai"
        },
        mainEntity: {
          "@type": "Organization",
          name: "NeverCap"
        },
        about: {
          "@type": "Thing",
          name: "AI Transcription Technology",
          description:
            "Advanced artificial intelligence technology for converting speech to text with industry-leading accuracy"
        },
        mentions: [
          {
            "@type": "SoftwareApplication",
            name: "NeverCap AI Platform",
            applicationCategory: "Transcription Software"
          },
          {
            "@type": "Service",
            name: "Unlimited Transcription",
            provider: {
              "@type": "Organization",
              name: "NeverCap"
            }
          },
          {
            "@type": "Product",
            name: "Batch Processing Technology",
            manufacturer: {
              "@type": "Organization",
              name: "NeverCap"
            }
          }
        ],
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://nevercap.ai"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About",
              item: "https://nevercap.ai/about"
            }
          ]
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".hero-content h1", ".hero-subtitle"]
        }
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "NeverCap's Mission: Truly Unlimited AI Transcription",
        description:
          "Our commitment to providing unlimited, accurate, and accessible AI transcription technology for creators, businesses, and professionals worldwide.",
        author: {
          "@type": "Organization",
          name: "NeverCap"
        },
        publisher: {
          "@type": "Organization",
          name: "NeverCap",
          logo: {
            "@type": "ImageObject",
            url: "https://nevercap.ai/pics/nevercap-logo.png"
          }
        },
        datePublished: "2024-01-01",
        dateModified: "2025-08-18",
        articleSection: "Company Mission",
        about: [
          {
            "@type": "Thing",
            name: "Unlimited Transcription",
            description:
              "No monthly caps, no hidden limits on transcription minutes"
          },
          {
            "@type": "Thing",
            name: "AI Accuracy",
            description: "96% accuracy guarantee with advanced machine learning"
          },
          {
            "@type": "Thing",
            name: "Global Accessibility",
            description:
              "100+ languages supported, making transcription accessible worldwide"
          },
          {
            "@type": "Thing",
            name: "Privacy Protection",
            description:
              "SOC 2 certified with customer data protection as priority"
          }
        ],
        keywords: [
          "AI transcription",
          "unlimited transcription",
          "speech to text",
          "96% accuracy",
          "100+ languages",
          "batch processing",
          "speaker identification",
          "privacy protection"
        ]
      })
    }
  ],
  meta: [
    {
      name: "description",
      content:
        "Learn about NeverCap's mission to provide the most accurate AI transcription services. 96%+ accuracy, 100+ languages supported, 249+ translation languages."
    }
  ]
});

const $i = useI18nModule("About");
const ctaData = ref({
  title: $i("CTA.title"),
  subtitle: $i("CTA.subtitle"),
  button: $i("CTA.button"),
  disclaimer: $i("CTA.disclaimer")
});
</script>

<style scoped lang="scss">
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  text-align: left;
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }
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
  animation: slideUp 1s ease;
  line-height: 1.8;
}

/* Office Image in Hero */
.office-image-container {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.office-image-placeholder {
  width: 100%;
  height: 400px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.office-image-placeholder::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
}

.placeholder-text {
  color: white;
  font-size: 20px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  padding: 16px 32px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

/* Stats Section */
.stats {
  padding-bottom: 70px;
  background: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  transition: transform 0.3s;
  background: var(--light-gray);
  padding: 40px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
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

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-item:hover::before {
  transform: scaleX(1);
}

.stat-number {
  font-size: 48px;
  font-weight: bold;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.stat-label {
  color: var(--gray);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-description {
  color: var(--gray);
  font-size: 14px;
  margin-top: 12px;
  line-height: 1.6;
}

/* Mission Section */
.mission {
  padding: 70px 0;
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.feature-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
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
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  // background: var(--gradient);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
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

/* Company Info Section */
.company-info {
  padding: 70px 0;
  background: white;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
}

.info-card {
  background: var(--light-gray);
  padding: 30px;
  border-radius: 12px;
  transition: all 0.3s;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.info-label {
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 12px;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 1px;
}

.info-value {
  color: var(--dark);
  line-height: 1.8;
  font-size: 16px;
}

.info-value a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s;
}

.info-value a:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }

  .stats-grid,
  .features-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  .office-image-placeholder {
    height: 250px;
  }
}
</style>
