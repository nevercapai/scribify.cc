<template>
  <div>
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Pricing Hero -->
    <section class="pricing-hero">
      <div class="container">
        <h1>
          {{ $t("Pricing.Cards.title") }}
          <br />
          <span class="gradient-text">
            {{ $t("Pricing.Cards.highlighted_text") }}
          </span>
        </h1>
        <p>
          {{ $t("Pricing.Cards.description") }}
        </p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <PricingCards style="padding-bottom: 70px"></PricingCards>

    <!-- Comparison Table -->
    <PricingComparisonTable></PricingComparisonTable>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header text-center font-bold text-[42px] mb-[50px]">
          <h2 class="section-title">
            {{ $t("Pricing.FAQ.title") }}
            <span class="gradient-text">
              {{ $t("Pricing.FAQ.titleHighligt") }}
            </span>
          </h2>
        </div>

        <div class="faq-grid">
          <div v-for="(item, index) of 6" class="faq-item">
            <h3 class="faq-question">
              {{ $t("Pricing.FAQ.items[" + index + "].question") }}
            </h3>
            <p class="faq-answer">
              {{ $t("Pricing.FAQ.items[" + index + "].answer") }}
            </p>
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
/* pricing 组件 */
const title = "Pricing - NeverCap | Truly Unlimited AI Transcription";
useHead({
  title,
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "NeverCap AI Transcription Service",
        description:
          "Truly unlimited AI transcription service with 96% accuracy, batch processing, and support for 100+ languages. No monthly caps or hidden fees.",
        brand: {
          "@type": "Brand",
          name: "NeverCap"
        },
        url: "https://nevercap.ai/pricing",
        image: "https://nevercap.ai/pics/nevercap-pricing.png",
        category: "Transcription Software",
        offers: [
          {
            "@type": "Offer",
            name: "Free Plan",
            description: "Perfect for trying out our service with daily limits",
            price: "0",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "0",
              priceCurrency: "USD"
            },
            availability: "https://schema.org/InStock",
            url: "https://nevercap.ai/pricing#free",
            seller: {
              "@type": "Organization",
              name: "NeverCap"
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Daily File Limit",
                value: "3 files per day"
              },
              {
                "@type": "PropertyValue",
                name: "File Duration Limit",
                value: "30 minutes per file"
              },
              {
                "@type": "PropertyValue",
                name: "File Size Limit",
                value: "250 MB per file"
              },
              {
                "@type": "PropertyValue",
                name: "Batch Upload",
                value: "1 file at a time"
              },
              {
                "@type": "PropertyValue",
                name: "Languages",
                value: "100+ languages"
              },
              {
                "@type": "PropertyValue",
                name: "Speaker Detection",
                value: "Yes"
              },
              {
                "@type": "PropertyValue",
                name: "Translation",
                value: "Yes"
              }
            ]
          },
          {
            "@type": "Offer",
            name: "Pro Monthly Plan",
            description:
              "Unlimited transcription with all professional features",
            price: "17.99",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "17.99",
              priceCurrency: "USD"
            },
            availability: "https://schema.org/InStock",
            url: "https://nevercap.ai/pricing#pro-monthly",
            seller: {
              "@type": "Organization",
              name: "NeverCap"
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Monthly Minutes",
                value: "Unlimited"
              },
              {
                "@type": "PropertyValue",
                name: "File Duration Limit",
                value: "10 hours per file"
              },
              {
                "@type": "PropertyValue",
                name: "File Size Limit",
                value: "5 GB per file"
              },
              {
                "@type": "PropertyValue",
                name: "Batch Upload",
                value: "50 files at once"
              },
              {
                "@type": "PropertyValue",
                name: "Priority Queue",
                value: "Yes"
              },
              {
                "@type": "PropertyValue",
                name: "Word-level Timestamps",
                value: "Yes"
              },
              {
                "@type": "PropertyValue",
                name: "Advanced Speaker ID",
                value: "Up to 20 speakers"
              },
              {
                "@type": "PropertyValue",
                name: "Formatted Output",
                value: "Paragraphs & punctuation"
              }
            ]
          },
          {
            "@type": "Offer",
            name: "Pro Annual Plan",
            description:
              "Best value - unlimited transcription with annual billing",
            price: "107.88",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "107.88",
              priceCurrency: "USD"
            },
            availability: "https://schema.org/InStock",
            url: "https://nevercap.ai/pricing#pro-annual",
            seller: {
              "@type": "Organization",
              name: "NeverCap"
            },
            priceValidUntil: "2025-12-31",
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Monthly Equivalent",
                value: "$8.99/month"
              },
              {
                "@type": "PropertyValue",
                name: "Savings",
                value: "50% off monthly price"
              },
              {
                "@type": "PropertyValue",
                name: "Monthly Minutes",
                value: "Unlimited"
              },
              {
                "@type": "PropertyValue",
                name: "File Duration Limit",
                value: "10 hours per file"
              },
              {
                "@type": "PropertyValue",
                name: "File Size Limit",
                value: "5 GB per file"
              },
              {
                "@type": "PropertyValue",
                name: "Batch Upload",
                value: "50 files at once"
              },
              {
                "@type": "PropertyValue",
                name: "Priority Queue",
                value: "Yes"
              },
              {
                "@type": "PropertyValue",
                name: "Word-level Timestamps",
                value: "Yes"
              },
              {
                "@type": "PropertyValue",
                name: "Advanced Speaker ID",
                value: "Up to 20 speakers"
              }
            ]
          }
        ],

        manufacturer: {
          "@type": "Organization",
          name: "NeverCap",
          url: "https://nevercap.ai"
        }
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Pricing - NeverCap AI Transcription",
        description:
          "Compare NeverCap pricing plans. Choose from Free, Pro Monthly ($17.99), or Pro Annual ($8.99/month) for unlimited AI transcription.",
        url: "https://nevercap.ai/pricing",

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
              name: "Pricing",
              item: "https://nevercap.ai/pricing"
            }
          ]
        }
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is it really unlimited?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Pro plans offer truly unlimited monthly transcription minutes with no caps or overage fees. Only technical limits: 10 hours per file, 5GB file size, 50 files per batch."
            }
          },
          {
            "@type": "Question",
            name: "Can I cancel anytime?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely! No contracts or cancellation fees. Cancel anytime from your dashboard and retain access until your billing period ends."
            }
          },
          {
            "@type": "Question",
            name: "What's the difference between plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Free: 3 files/day, 30min/file. Pro: Unlimited minutes, 10hr/file, 50-file batches, priority processing, word-level timestamps, advanced speaker ID."
            }
          },
          {
            "@type": "Question",
            name: "What payment methods do you accept?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We accept all major credit cards, debit cards, and PayPal for secure, hassle-free payments."
            }
          },
          {
            "@type": "Question",
            name: "How long do you keep my files?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Free plan: 30 days. Pro plans: Forever! Your transcripts are always available in your account."
            }
          },
          {
            "@type": "Question",
            name: "What about data security?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We're SOC 2 certified and use 256-bit encryption. We never use your content to train our models. Your data is yours."
            }
          }
        ]
      })
    }
  ],
  meta: [
    {
      name: "description",
      content:
        "Simple, transparent pricing for unlimited AI transcription. No hidden caps, no minute limits. Start free or go Pro for $17.99/month."
    }
  ]
});

const { t } = useI18n();
const ctaData = ref({
  title: t("Pricing.CTA.title"),
  subtitle: t("Pricing.CTA.subtitle"),
  button: t("Pricing.CTA.button"),
  disclaimer: t("Pricing.CTA.disclaimer")
});
</script>

<style scoped lang="scss">
/* Pricing Hero */
.pricing-hero {
  padding: 140px 0 80px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  text-align: center;
}

.pricing-hero h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  animation: slideUp 0.8s ease;
}

.gradient-text {
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pricing-hero p {
  font-size: 20px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
  animation: slideUp 1s ease;
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

/* FAQ Section */
.faq-section {
  padding: 70px 0;
  background: white;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: var(--light-gray);
  padding: 30px;
  border-radius: 12px;
}

.faq-question {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--dark);
}

.faq-answer {
  color: var(--gray);
  line-height: 1.8;
}

/* Footer */
footer {
  background: var(--dark);
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand h3 {
  font-size: 28px;
  margin-bottom: 16px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

.footer-column h4 {
  margin-bottom: 20px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .pricing-hero h1 {
    font-size: 36px;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
  }

  .comparison-table {
    overflow-x: auto;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
.section-header {
  text-align: center;
  margin-bottom: 50px;
}
.section-title {
  font-size: 42px;
  font-weight: bold;
  // margin-bottom: 16px;
}
</style>
