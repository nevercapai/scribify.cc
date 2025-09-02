<template>
  <section class="features pt-[70px]">
    <div class="container">
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
      <IndexFreeTrial></IndexFreeTrial>
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
