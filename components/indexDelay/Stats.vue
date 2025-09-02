<template>
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">unlimited</div>
          <div class="stat-label">{{ $i("Stats.monthlyMinutes") }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">∞</div>
          <div class="stat-label">{{ $i("Stats.fileUploads") }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50</div>
          <div class="stat-label">{{ $i("Stats.batchProcessing") }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">10hrs</div>
          <div class="stat-label">{{ $i("Stats.maxFileLength") }}</div>
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
/* Stats Section */
.stats {
  padding: 54px 0 40px;
  background: white;
  border-top: 1px solid #e2e4e6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  transition: transform 0.3s;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 8px;
}

.stat-label {
  color: var(--gray);
  font-size: 14px;
}
</style>
