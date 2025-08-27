<template>
  <div class="terms-of-use-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>
            {{ $t("TermsOfUse.title") }}
            <span class="gradient-text">
              {{ $t("TermsOfUse.titleGradient") }}
            </span>
          </h1>
          <p class="hero-subtitle">
            {{ $t("TermsOfUse.subtitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Terms Content -->
    <div class="terms-container">
      <div class="terms-card">
        <div class="last-updated">
          {{ $t("TermsOfUse.lastUpdated", { date: $t("TermsOfUse.lastUpdatedDate") }) }}
        </div>

        <div class="terms-content">
          <h2>{{ $t("TermsOfUse.termsOfServiceTitle") }}</h2>

          <p>{{ $t("TermsOfUse.thankYou") }}</p>

          <p>
            {{ $t("TermsOfUse.companyDefinition") }}
          </p>

          <p>
            {{ $t("TermsOfUse.servicesDefinition") }}
          </p>

          <p>
            {{ $t("TermsOfUse.termsUpdate") }}
          </p>

          <h2>{{ $t("TermsOfUse.acceptanceTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.acceptanceDescription1") }}
          </p>

          <p>
            {{ $t("TermsOfUse.eligibilityRequirement") }}
          </p>

          <p>
            {{ $t("TermsOfUse.userResponsibility") }}
          </p>

          <p>
            {{ $t("TermsOfUse.termsRevision") }}
          </p>

          <h2>{{ $t("TermsOfUse.servicesTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.servicesDescription1") }}
          </p>

          <p>
            {{ $t("TermsOfUse.servicesOptions") }}
          </p>

          <p>
            {{ $t("TermsOfUse.servicesAccess") }}
          </p>

          <h2>{{ $t("TermsOfUse.accountTermsTitle") }}</h2>
          <ul>
            <li>
              {{ $t("TermsOfUse.accountSecurity") }}
            </li>
            <li>
              {{ $t("TermsOfUse.lawfulUse") }}
            </li>
            <li>
              {{ $t("TermsOfUse.contentResponsibility") }}
            </li>
            <li>
              {{ $t("TermsOfUse.humanRequirement") }}
            </li>
          </ul>

          <h2>{{ $t("TermsOfUse.paymentTitle") }}</h2>
          <ul>
            <li>
              {{ $t("TermsOfUse.freeTrial") }}
            </li>
            <li>
              {{ $t("TermsOfUse.upgradePolicy") }}
            </li>
            <li>
              {{ $t("TermsOfUse.taxes") }}
            </li>
            <li>
              {{ $t("TermsOfUse.refunds") }}
            </li>
          </ul>

          <h2>{{ $t("TermsOfUse.cancellationTitle") }}</h2>
          <ul>
            <li>
              {{ $t("TermsOfUse.cancellationPolicy") }}
            </li>
            <li>
              {{ $t("TermsOfUse.terminationRights") }}
            </li>
            <li>
              {{ $t("TermsOfUse.abusePolicy") }}
            </li>
          </ul>

          <h2>{{ $t("TermsOfUse.submissionsTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.submissionsDescription") }}
          </p>

          <h2>{{ $t("TermsOfUse.uptimeTitle") }}</h2>
          <ul>
            <li>
              {{ $t("TermsOfUse.serviceAvailability") }}
            </li>
            <li>
              {{ $t("TermsOfUse.throttlingPolicy") }}
            </li>
            <li>
              {{ $t("TermsOfUse.dataSecurity") }}
            </li>
            <li>
              {{ $t("TermsOfUse.thirdPartyVendors") }}
            </li>
          </ul>

          <h2>{{ $t("TermsOfUse.siteManagementTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.siteManagementDescription") }}
          </p>

          <h2>{{ $t("TermsOfUse.copyrightTitle") }}</h2>
          <ul>
            <li>
              {{ $t("TermsOfUse.copyrightCompliance") }}
            </li>
            <li>
              {{ $t("TermsOfUse.ipRights") }}
            </li>
            <li>
              {{ $t("TermsOfUse.contentModeration") }}
            </li>
            <i18n-t keypath="TermsOfUse.trademarkProtection" tag="li">
              <template #at>{{ $t("TermsOfUse.at") }}</template>
              <template #email>
                <a href="mailto:support@nevercap.ai" class="underline" style="color: var(--primary)">support@nevercap.ai</a>
              </template>
            </i18n-t>
            <li>
              {{ $t("TermsOfUse.prohibitedExploitation") }}
            </li>
            <li>
              {{ $t("TermsOfUse.impersonationProhibition") }}
            </li>
            <li>
              {{ $t("TermsOfUse.dmcaPolicy") }}
            </li>
          </ul>

          <h2>{{ $t("TermsOfUse.prohibitedActivitiesTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.generalProhibition") }}
          </p>

          <p>{{ $t("TermsOfUse.userObligations") }}</p>
          <ul>
            <li>
              {{ $t("TermsOfUse.dataScraping") }}
            </li>
            <li>
              {{ $t("TermsOfUse.fraud") }}
            </li>
            <li>
              {{ $t("TermsOfUse.securityInterference") }}
            </li>
            <li>
              {{ $t("TermsOfUse.defamation") }}
            </li>
            <li>
              {{ $t("TermsOfUse.harassment") }}
            </li>
            <li>
              {{ $t("TermsOfUse.supportAbuse") }}
            </li>
            <li>
              {{ $t("TermsOfUse.legalCompliance") }}
            </li>
            <li>
              {{ $t("TermsOfUse.framingProhibition") }}
            </li>
            <li>
              {{ $t("TermsOfUse.malware") }}
            </li>
            <li>
              {{ $t("TermsOfUse.automation") }}
            </li>
            <li>
              {{ $t("TermsOfUse.copyrightRemoval") }}
            </li>
            <li>
              {{ $t("TermsOfUse.impersonation") }}
            </li>
            <li>
              {{ $t("TermsOfUse.spyware") }}
            </li>
            <li>
              {{ $t("TermsOfUse.disruption") }}
            </li>
            <li>
              {{ $t("TermsOfUse.employeeHarassment") }}
            </li>
            <li>
              {{ $t("TermsOfUse.accessCircumvention") }}
            </li>
            <li>
              {{ $t("TermsOfUse.codeCopying") }}
            </li>
            <li>
              {{ $t("TermsOfUse.reverseEngineering") }}
            </li>
            <li>
              {{ $t("TermsOfUse.bots") }}
            </li>
            <li>
              {{ $t("TermsOfUse.buyingAgents") }}
            </li>
            <li>
              {{ $t("TermsOfUse.unauthorizedUse") }}
            </li>
            <li>
              {{ $t("TermsOfUse.competition") }}
            </li>
            <li>
              {{ $t("TermsOfUse.advertising") }}
            </li>
            <li>
              {{ $t("TermsOfUse.profileTransfer") }}
            </li>
          </ul>

          <h2>{{ $t("TermsOfUse.featuresTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.featuresDescription") }}
          </p>

          <p>
            {{ $t("TermsOfUse.bugsDescription") }}
          </p>

          <h2>{{ $t("TermsOfUse.correctionsTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.informationAccuracy") }}
          </p>

          <p>
            {{ $t("TermsOfUse.siteAvailability") }}
          </p>

          <h2>{{ $t("TermsOfUse.userDataTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.userDataDescription") }}
          </p>

          <h2>{{ $t("TermsOfUse.privacyPolicyTitle") }}</h2>
          <i18n-t keypath="TermsOfUse.privacyPolicyDescription" tag="p">
            <template #policy>
              <span @click="handleJump" class='underline cursor-pointer' style="color: var(--primary)">{{$t('Privacy.privacyPolicyTitle')}}</span>
            </template>
          </i18n-t>

          <h2>{{ $t("TermsOfUse.liabilityTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.liabilityIntroduction") }}
          </p>

          <p>
            {{ $t("TermsOfUse.liabilityWaiver") }}
          </p>

          <h2>{{ $t("TermsOfUse.miscellaneousTitle") }}</h2>
          <p>
            {{ $t("TermsOfUse.miscellaneousDescription") }}
          </p>

          <h2>{{ $t("TermsOfUse.contactTitle") }}</h2>
          <i18n-t keypath="TermsOfUse.contactDescription" tag="p">
            <template #at>{{ $t("TermsOfUse.at") }}</template>
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
/* terms-of-use 组件 */
useHead({
  title: "Terms of Service - NeverCap",
  meta: [
    {
      name: "description",
      content:
        "NeverCap Terms of Service - Learn about our terms and conditions for using our unlimited AI transcription service."
    }
  ]
});

const router = useRouter();
const localePath = useLocalePath();
const handleJump = () => {
  router.push(localePath('/privacy'));
}
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

/* Terms Content */
.terms-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 20px 60px 20px;
}

.terms-card {
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.terms-card::before {
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

.terms-content h2 {
  font-size: 24px;
  font-weight: 700;
  color: var(--dark);
  margin-top: 40px;
  margin-bottom: 20px;
}

.terms-content h2:first-of-type {
  margin-top: 0;
}

.terms-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
  margin-top: 30px;
  margin-bottom: 15px;
}

.terms-content p {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 16px;
}

.terms-content ul {
  margin: 20px 0;
  padding-left: 0;
  list-style: none;
}

.terms-content ul li {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 12px;
  font-size: 16px;
  padding-left: 30px;
  position: relative;
}

.terms-content ul li::before {
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

  .terms-card {
    padding: 40px 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
