<template>
  <!--  卡片列表   -->
  <section class="features" :style="{ 'text-align': textAlign }">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ params.title }}
          <p v-if="isHighlightNewLine" class="gradient-text">
            {{ params.titleHighlight }}
          </p>
          <span class="gradient-text" v-else>
            {{ params.titleHighlight }}
          </span>
        </h2>
      </div>
      <div class="features-grid" :class="featuresGridClass">
        <div v-for="(item, index) of params.list" :key="index" class="feature-card" :class="featuresCardClass">
          <div class="feature-icon" :class="featureCardIconClass">
            <NuxtImg
              :src="item.img"
              :class="item.iconClass || 'h-[1.875rem] w-[1.875rem]'"
              class="no-drag"
              fit="contain"
              alt="nevercap image"
              loading="lazy"
            ></NuxtImg>
          </div>
          <h3 class="feature-title">
            {{ item.title }}
          </h3>
          <p class="feature-description">
            {{ item.des }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps({
  textAlign: {
    type: String,
    default: () => "start"
  },
  isHighlightNewLine: {
    type: Boolean,
    default: false
  },
  params: {
    type: Object,
    default: () => ({})
  },
  featuresGridClass: {
    type: String,
    default: () => ""
  },
  featuresCardClass: {
    type: String,
    default: () => ""
  },
  featureCardIconClass: {
    type: String,
    default: () => ""
  }
});
</script>
<style lang="scss" scoped>
.features {
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 3.125rem; // 50px -> 3.125rem
}

.section-title {
  font-size: 2.625rem; // 42px -> 2.625rem
  font-weight: bold;
  margin-bottom: 0.875rem; // 14px -> 0.875rem
}

.section-subtitle {
  font-size: 1.125rem; // 18px -> 1.125rem
  color: var(--gray);
  max-width: 37.5rem; // 600px -> 37.5rem
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem; // 20px -> 1.25rem
}

.feature-card {
  background: white;
  padding: 1.75rem;
  border-radius: 1rem;
  border: 0.0625rem solid var(--line-color); // 1px -> 0.0625rem
  position: relative;
  overflow: hidden;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.375rem; // 22px -> 1.375rem
  font-weight: bold;
  margin-bottom: 1rem; // 16px -> 1rem
}

.feature-description {
  font-size: 1.125rem; // 18px -> 1.125rem
  color: var(--gray);
  line-height: 1.5rem; // 24px -> 1.5rem
}
</style>
