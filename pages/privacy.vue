<template>
  <div class="privacy-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>
            {{ $t("Privacy.title") }}
            <span class="gradient-text">
              {{ $t("Privacy.titleGradient") }}
            </span>
          </h1>
          <p class="hero-subtitle">
            {{ $t("Privacy.subtitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Content -->
    <div class="privacy-container">
      <div class="privacy-card">
        <div class="last-updated">
          {{
            $t("Privacy.lastUpdated", { date: $t("Privacy.lastUpdatedDate") })
          }}
        </div>

        <div class="privacy-content">
          <h2>{{ $t("Privacy.privacyPolicyTitle") }}</h2>

          <i18n-t keypath="Privacy.policyDescription" tag="p">
            <template #url>
              <a href="https://www.nevercap.ai/" target="_blank" class="underline" style="color: var(--primary)">https://www.nevercap.ai/</a>
            </template>
          </i18n-t>

          <p>
            {{ $t("Privacy.policyAgreement") }}
          </p>

          <p>
            {{ $t("Privacy.policyOverview") }}
          </p>

          <h2>{{ $t("Privacy.scopeTitle") }}</h2>
          <p>
            {{ $t("Privacy.scopeDescription") }}
          </p>

          <h2>{{ $t("Privacy.collectionTitle") }}</h2>
          <p>
            {{ $t("Privacy.collectionPrinciple") }}
          </p>

          <h3>{{ $t("Privacy.identityTitle") }}</h3>
          <p>
            {{ $t("Privacy.identityDescription") }}
          </p>

          <h3>{{ $t("Privacy.billingTitle") }}</h3>
          <p>
            {{ $t("Privacy.billingDescription") }}
          </p>

          <h3>{{ $t("Privacy.productInteractionsTitle") }}</h3>
          <p>
            {{ $t("Privacy.productInteractionsDescription") }}
          </p>

          <h3>{{ $t("Privacy.websiteInteractionsTitle") }}</h3>
          <p>
            {{ $t("Privacy.websiteInteractionsDescription") }}
          </p>

          <h3>{{ $t("Privacy.cookiesTitle") }}</h3>
          <p>
            {{ $t("Privacy.cookiesDescription1") }}
          </p>

          <p>
            {{ $t("Privacy.cookiesDescription2") }}
          </p>

          <h3>{{ $t("Privacy.correspondenceTitle") }}</h3>
          <p>
            {{ $t("Privacy.correspondenceDescription") }}
          </p>

          <h2>{{ $t("Privacy.accessTitle") }}</h2>
          <p>
            {{ $t("Privacy.accessDescription1") }}
          </p>

          <p>
            {{ $t("Privacy.accessDescription2") }}
          </p>

          <p>{{ $t("Privacy.accessDescription3") }}</p>

          <ul>
            <li>
              {{ $t("Privacy.dataRequests") }}
            </li>
            <li>
              {{ $t("Privacy.preservationRequests") }}
            </li>
            <li>
              {{ $t("Privacy.taxAudits") }}
            </li>
          </ul>

          <h2>{{ $t("Privacy.securityTitle") }}</h2>
          <p>
            {{ $t("Privacy.securityDescription") }}
          </p>

          <h2>{{ $t("Privacy.deletionTitle") }}</h2>
          <p>
            {{ $t("Privacy.deletionDescription") }}
          </p>

          <h2>{{ $t("Privacy.locationTitle") }}</h2>
          <p>
            {{ $t("Privacy.locationDescription") }}
          </p>

          <h2>{{ $t("Privacy.childrenTitle") }}</h2>
          <i18n-t keypath="Privacy.childrenDescription" tag="p">
            <template #at>{{$t('Privacy.at')}}</template>
            <template #email>
              <a href="mailto:support@nevercap.ai" class="underline" style="color: var(--primary)">support@nevercap.ai</a>
            </template>
          </i18n-t>

          <h2>{{ $t("Privacy.updatesTitle") }}</h2>
          <p>
            {{ $t("Privacy.updatesDescription") }}
          </p>

          <h2>{{ $t("Privacy.contactTitle") }}</h2>
          <i18n-t keypath="Privacy.contactDescription" tag="p">
            <template #at>{{$t('Privacy.at')}}</template>
            <template #email>
              <a href="mailto:support@nevercap.ai" class="underline" style="color: var(--primary)">support@nevercap.ai</a>
            </template>
          </i18n-t>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
/* privacy 组件 */
useHead({
  title: "Privacy Policy - NeverCap",
  meta: [
    {
      name: "description",
      content:
        "NeverCap Privacy Policy - Learn how we collect, use, and protect your personal information when using our unlimited AI transcription service."
    }
  ]
});
</script>

<style scoped lang="scss">
/* Hero Section */
.hero {
  padding: 120px 0 10px;
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
  // animation: float 20s ease-in-out infinite;
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

h1 {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 14px;
  // animation: slideUp 0.8s ease;
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  // animation: slideUp 1s ease;
}

/* Privacy Content */
.privacy-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 20px 60px 20px;
}

.privacy-card {
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.privacy-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient);
}

.last-updated {
  display: inline-block;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 40px;
}

.privacy-content h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--dark);
  margin-top: 40px;
  margin-bottom: 20px;
}

.privacy-content h2:first-of-type {
  margin-top: 0;
}

.privacy-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
  margin-top: 30px;
  margin-bottom: 15px;
}

.privacy-content p {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 16px;
}

.privacy-content ul {
  margin: 20px 0;
  padding-left: 0;
  list-style: none;
}

.privacy-content ul li {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 12px;
  font-size: 16px;
  padding-left: 30px;
  position: relative;
}

.privacy-content ul li::before {
  content: "-";
  color: var(--primary);
  font-weight: bold;
  position: absolute;
  left: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }

  .privacy-card {
    padding: 40px 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
