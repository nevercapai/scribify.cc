<template>
  <section class="pricing-section">
    <div class="pricing-cards">
      <div
        v-for="(item, i) in [0, 1, 2]"
        :key="'item' + i"
        class="pricing-card"
        :class="{ featured: i === 1 }"
      >
        <template v-if="i == 1">
          <div class="popular-badge">
            {{ $i("plans[" + i + "].badge") }}
          </div>
        </template>
        <template v-else-if="i == 2">
          <div :id="`valueBadge${i}`" class="value-badge">
            {{ $i("plans[" + i + "].badge") }}<span>Save 50%</span>
          </div>
        </template>

        <h3 class="plan-name">
          {{ $i("plans[" + i + "].name") }}
        </h3>
        <div class="plan-price" :class="{ pro: i > 0, free: i === 0 }">
          {{ $i("plans[" + i + "].price") }}
          <span class="price-period">
            /{{ $i("plans[" + i + "].period") }}
          </span>
        </div>
        <template v-if="i === 0">
          <p style="color: var(--gray); font-size: 14px; margin-bottom: 30px">
            {{ $i("plans[" + i + "].discount") }}
          </p>
        </template>
        <template v-else>
          <p class="promo-price">
            {{ $i("plans[" + i + "].discount") }}
          </p>
        </template>

        <div class="feature-section">
          <h4>{{ $i("plans[" + i + "].limits.title") }}</h4>
          <ul class="feature-list">
            <li v-for="(limit, j) in [0, 1, 2, 3]" :key="`limit` + j">
              <span class="check-icon">✓</span>
              <strong v-if="i > 0 && j === 0">
                {{ $i("plans[" + i + "].limits.items[" + j + "]") }}
              </strong>
              <template v-else>
                {{ $i("plans[" + i + "].limits.items[" + j + "]") }}
              </template>
            </li>
          </ul>
        </div>

        <div class="feature-section">
          <h4>{{ $i("plans[" + i + "].features.title") }}</h4>
          <ul class="feature-list">
            <li v-for="(feature, j) in [0, 1, 2, 3]" :key="`feature` + j">
              <span class="check-icon">✓</span>
              {{ $i("plans[" + i + "].features.items[" + j + "]") }}
            </li>
          </ul>
        </div>

        <div class="plan-description">
          {{ $i("plans[" + i + "].cta.text") }}
        </div>

        <a
          @click="handleClick(i)"
          class="pay-button"
          :class="i > 0 ? 'btn-primary' : 'btn-secondary'"
        >
          {{ $i("plans[" + i + "].cta.button") }}
        </a>
      </div>
    </div>

    <!-- <p
      style="
        text-align: center;
        margin-top: 40px;
        font-size: 14px;
        color: var(--gray);
        font-style: italic;
        padding: 0 20px;
      "
    >
      {{ $i("disclaimer") }}
    </p> -->
  </section>
</template>

<script setup lang="ts">
/* pricingCards 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Pricing.Cards");
const { $mitt } = useNuxtApp();
const handleClick = (type: Number) => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};

onMounted(() => {
  if (process.client) {
    const valueBadge = document.getElementById("valueBadge2");
    const height = valueBadge?.clientHeight;
    if (height) {
      valueBadge?.style.setProperty("top", -(height / 2) + "px");
    }
  }
})
</script>

<style scoped lang="scss">
/* Pricing Cards Section */
.pricing-section {
  padding: 0;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  // 响应式布局调整
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.pricing-card {
  background: white;
  border-radius: 20px;
  padding: 38px;
  border: 1px solid var(--line-color);
  // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s;
  // padding-bottom: 100px;
}

.pricing-card:hover {
  transform: translateY(-5px);
  // box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.pricing-card.featured {
  border: 2px solid var(--primary);
  // box-shadow: 0 20px 60px rgba(99, 102, 241, 0.15);
}

.popular-badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: white;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.value-badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--secondary);
  color: white;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.plan-name {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--dark);
}

.plan-price {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
}

.plan-price.free {
  color: var(--gray);
}

.plan-price.pro {
  color: var(--primary);
}

.price-period {
  font-size: 16px;
  color: var(--gray);
  font-weight: normal;
}

.promo-price {
  font-size: 14px;
  color: var(--secondary);
  margin-bottom: 20px;
  font-weight: 600;
}

.billing-info {
  font-size: 14px;
  color: var(--secondary);
  margin-bottom: 20px;
  font-weight: 600;
}

.feature-section {
  margin-bottom: 26px;
}

.feature-section h4 {
  font-size: 14px;
  color: var(--gray);
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  font-size: 14px;
}

.check-icon {
  width: 18px;
  height: 18px;
  background: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  flex-shrink: 0;
}

.plan-description {
  border-top: 1px solid #e5e7eb;
  padding: 20px 0;
  height: 100px;
  font-size: 18px;
  line-height: 24px;
  color: var(--primary);
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.save-indicator {
  background: var(--secondary);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
}
.pay-button {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  // cursor: pointer;
  // position: absolute;
  // bottom: 40px;
  // left: 40px;
  // width: calc(100% - 80px);
  // text-align: center;
  // justify-content: center;
}
</style>
