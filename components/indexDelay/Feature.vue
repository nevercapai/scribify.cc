<template>
  <section class="features py-[70px]">
    <div class="container">
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
            <NuxtImg
              src="/assets/img/index/Original/Unlimited.svg"
              class="no-drag h-[1.875rem] w-[1.875rem]"
              fit="contain"
              :alt="$i('FeaturesGrid.feat_unltd')"
              loading="lazy"
            ></NuxtImg>
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
            <NuxtImg
              src="/assets/img/index/Original/Bulk.svg"
              class="no-drag h-[1.875rem] w-[1.875rem]"
              fit="contain"
              :alt="$i('FeaturesGrid.feat_bulk')"
              loading="lazy"
            ></NuxtImg>
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
            <NuxtImg
              src="/assets/img/index/Original/Batch.svg"
              class="no-drag h-[1.875rem] w-[1.875rem]"
              fit="contain"
              :alt="$i('FeaturesGrid.feat_batch')"
              loading="lazy"
            ></NuxtImg>
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
            <NuxtImg
              src="/assets/img/index/Original/Accuracy.svg"
              class="no-drag h-[1.875rem] w-[1.875rem]"
              fit="contain"
              :alt="$i('FeaturesGrid.feat_accuracy')"
              loading="lazy"
            ></NuxtImg>
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
            <NuxtImg
              src="/assets/img/index/Original/languages.svg"
              class="no-drag h-[1.875rem] w-[1.875rem]"
              fit="contain"
              :alt="$i('FeaturesGrid.feat_langs')"
              loading="lazy"
            ></NuxtImg>
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
            <NuxtImg
              src="/assets/img/index/Original/Professional.svg"
              class="no-drag h-[1.875rem] w-[1.875rem]"
              fit="contain"
              :alt="$i('FeaturesGrid.feat_pro')"
              loading="lazy"
            ></NuxtImg>
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--line-color);
  position: relative;
  overflow: hidden;
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
</style>
