<template>
  <section class="FAQ py-[70px]">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $i("FAQSection.title") }}
          <span class="gradient-text">
            NeverCap {{ $i("FAQSection.titleHighlight") }}
          </span>
        </h2>
      </div>
      <div style="max-width: 800px; margin: 0 auto">
        <details
          v-for="(faq, index) of 9"
          :key="index"
          style="
            background: white;
            margin-bottom: 16px;
            border-radius: 12px;
            padding: 24px;
            border: 1px solid #e2e4e6;
          "
        >
          <summary
            style="
              font-weight: bold;
              font-size: 18px;
              cursor: pointer;
              list-style: none;
            "
          >
            {{ t("Index.FAQSection.questions[" + index + "].question") }}
          </summary>
          <p style="margin-top: 16px; color: var(--gray); line-height: 22px">
            {{ t("Index.FAQSection.questions[" + index + "].answer") }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Index");
const { t } = useI18n();
</script>
<style lang="scss" scoped>
.FAQ {
  background: #fff;
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
details summary::-webkit-details-marker {
  display: none;
}

details summary::before {
  content: "+";
  float: right;
  font-size: 24px;
  line-height: 26px;
  color: var(--primary);
  transition: transform 0.3s;
}
[dir="rtl"] details summary::before {
  float: left !important;
}
details summary:hover {
  color: var(--primary);
}

details[open] summary::before {
  transform: rotate(45deg);
}
</style>
