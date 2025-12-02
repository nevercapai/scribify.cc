<template>
  <div>
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Pricing Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="gift-badge">
            <span>🎁</span>
            <span>{{ t("cello.exclusiveAccess", { name }) }}</span>
          </div>

          <div class="referrer-info">
            <div class="referrer-avatar">{{ nameSplice }}</div>
            <div class="referrer-text">
              <div class="referrer-name">{{ name }}</div>
              <div class="referrer-subtitle">{{ t("cello.proMember") }}</div>
            </div>
          </div>

          <h1>
            {{ t("cello.save") }} <span class="gradient-text">$108/ {{ t("cello.year") }} </span
            >{{ t("cello.unlimitedTranscription") }}
          </h1>

          <div class="savings-highlight">{{ t("cello.specialPrice",{moneyOne:"$8.99",moneyTwo:"$9.99"}) }}</div>

          <div class="why-bob-chose">
            <h3>{{ t("cello.whyChose", { name }) }}</h3>
            <ul class="benefits-list">
              <li>
                <span class="check-icon">✓</span>
                <span>{{ t("cello.noLimits") }} </span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>{{ t("cello.uploadFiles") }}</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>{{ t("cello.longFiles") }}</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>{{ t("cello.accuracy") }}</span>
              </li>
            </ul>
          </div>

          <div class="pricing-card">
            <div class="pricing-header">
              <div class="price-comparison">
                <div class="price-item">
                  <div class="price-label">{{ t("cello.regularPrice") }}</div>
                  <div class="price-value regular">
                    $9.99<span style="font-size: 20px">{{ t("cello.perMonth") }}</span>
                  </div>
                </div>
                <div class="price-item">
                  <div class="price-label">{{ t("cello.yourSpecialPrice") }}</div>
                  <div class="price-value special">
                    $8.99<span style="font-size: 20px">{{ t("cello.perMonth") }}</span>
                  </div>
                  <div class="save-badge">{{ t("cello.save") }} 10%</div>
                </div>
              </div>
            </div>

            <div class="bob-credit">
              <strong>{{ t("cello.getsCredit", { name }) }}</strong> {{ t("cello.whenSubscribe") }}
            </div>

            <div @click="singUp" class="cta-button">{{ t("cello.activateNameGift", { name }) }}</div>

            <!-- <a href="#" class="existing-account-link">{{ t("cello.existingAccount") }}</a> -->
          </div>

          <div class="trust-badges">
            <div class="trust-badge"><strong>50,000+</strong> {{ t("cello.activeUsers") }}</div>
            <div class="trust-badge">
              <span class="star-rating">★★★★★</span>
              <strong>4.9</strong> {{ t("cello.rating") }}
            </div>
            <div class="trust-badge">
              <strong>{{ t("cello.noCreditCard") }}</strong
              >{{ t("cello.requiredFreeTrial") }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
const { $mitt } = useNuxtApp();
/* pricing 组件 */
const title = "Pricing - NeverCap | Truly Unlimited AI Transcription";
useHead({
  title: "cello - NeverCap",
  meta: [
    {
      name: "cello",
      content:
        "NeverCap Privacy Policy - Learn how we collect, use, and protect your personal information when using our unlimited AI transcription service."
    }
  ]
});

const { t } = useI18n();
const name = ref("JJBoon");
const nameSplice = computed(() => {
  return name.value.slice(0, 1);
});

onMounted(async() => {
  // setTimeout(async () => {
    try {
      //cello-product-id  cello-referral就是ucc脚本会自动存入cookie
      const referrerName = await window.CelloAttribution("getReferrerName");
      const campaignConfig = await window.CelloAttribution("getCampaignConfig");
      // const ucc = useCrossDomainCookie("ucc");
      name.value=referrerName
      console.log("Attribution methods working:", {
        referrerName,
        campaignConfig
      });
    } catch (error) {
      console.error("Attribution test failed:", error);
    }
  // }, 2000);
});
const singUp =()=>{
   $mitt.emit("goToEvent", { path: "/user/signup" });
}
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
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
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
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.gift-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  color: var(--orange);
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
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

.referrer-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
}

.referrer-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.referrer-text {
  text-align: left;
}

.referrer-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 4px;
}

.referrer-subtitle {
  font-size: 14px;
  color: var(--gray);
}

h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
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

.savings-highlight {
  font-size: 32px;
  font-weight: 700;
  color: var(--orange);
  margin-bottom: 40px;
  animation: slideUp 1s ease;
}

.why-bob-chose {
  background: white;
  border-radius: 20px;
  padding: 40px;
  margin: 40px 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  text-align: left;
  animation: slideUp 1.2s ease;
}

.why-bob-chose h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--dark);
}

.benefits-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: var(--dark);
}

.check-icon {
  width: 24px;
  height: 24px;
  background: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
}

.pricing-card {
  background: white;
  border-radius: 24px;
  padding: 50px;
  margin: 40px 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary);
  position: relative;
  animation: slideUp 1.4s ease;
}

.pricing-header {
  text-align: center;
  margin-bottom: 40px;
}

.price-comparison {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.price-item {
  text-align: center;
}

.price-label {
  font-size: 14px;
  color: var(--gray);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price-value {
  font-size: 48px;
  font-weight: 800;
}

.price-value.regular {
  color: var(--gray);
  text-decoration: line-through;
}

.price-value.special {
  color: var(--primary);
}

.save-badge {
  display: inline-block;
  background: var(--secondary);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
}

.bob-credit {
  background: rgba(16, 185, 129, 0.1);
  border-left: 4px solid var(--secondary);
  padding: 16px 20px;
  border-radius: 8px;
  margin: 30px 0;
  text-align: center;
}

.bob-credit strong {
  color: var(--secondary);
  font-size: 18px;
}

.cta-button {
  width: 100%;
  background: var(--gradient);
  color: white;
  padding: 20px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  display: block;
  text-align: center;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
}

.existing-account-link {
  text-align: center;
  display: block;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  margin-top: 20px;
  transition: color 0.3s;
}

.existing-account-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
  padding: 16px;
  background: rgba(249, 115, 22, 0.1);
  border-radius: 12px;
  color: var(--orange);
  font-weight: 600;
  font-size: 18px;
}

.countdown-number {
  background: var(--orange);
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 700;
}

.trust-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 60px;
  flex-wrap: wrap;
  animation: fadeIn 1.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gray);
  font-size: 14px;
}

.trust-badge strong {
  color: var(--dark);
}

.star-rating {
  color: var(--orange);
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }

  .savings-highlight {
    font-size: 24px;
  }

  .benefits-list {
    grid-template-columns: 1fr;
  }

  .price-comparison {
    flex-direction: column;
    gap: 20px;
  }

  .price-value {
    font-size: 36px;
  }

  .trust-badges {
    flex-direction: column;
    gap: 20px;
  }

  .referrer-info {
    flex-direction: column;
    text-align: center;
  }

  .referrer-text {
    text-align: center;
  }
}
</style>
