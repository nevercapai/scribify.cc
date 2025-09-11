<template>
  <section class="heroSection-wrap">
    <div class="container">
      <h1>
        {{ $t("Blog.Hero.title") }}
        <span class="gradient-text">
          {{ $t("Blog.Hero.highlighted_text") }}
        </span>
      </h1>
      <p>
        <i18n-t keypath="Blog.Hero.description" tag="p">
          <template #NeverCap>
            <a :href="HomeUrl" style="text-decoration: none; color: inherit">
              NeverCap
            </a>
          </template>
        </i18n-t>
        <!-- {{ $t("Blog.Hero.description") }} -->
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
/* heroSection 组件 */
const config = useRuntimeConfig();
let currentWebSite = config.public.currentWebSite;
const HomeUrl = computed(() => {
  return currentWebSite + "/";
});
</script>

<style scoped lang="scss">
/* Pricing Hero */
.heroSection-wrap {
  padding: 140px 0 70px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  text-align: center;
}

.heroSection-wrap h1 {
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

.heroSection-wrap p {
  font-size: 20px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
  animation: slideUp 1s ease;
}

@media (max-width: 768px) {
  .heroSection-wrap h1 {
    font-size: 36px;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
  }
}
</style>
