<template>
  <section class="features pb-[70px]">
    <div class="container" style="padding: 0">
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
</template>
<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Index");
</script>
<style lang="scss" scoped>
.features {
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
</style>
