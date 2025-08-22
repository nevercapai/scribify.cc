<template>
  <section class="comparison-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $i("header.title") }}
          <span class="gradient-text">
            {{ $i("header.highlighted_text") }}
          </span>
        </h2>
        <p class="section-subtitle">
          {{ $i("header.subtitle") }}
        </p>
      </div>

      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>
                {{ $i(`plans[0]`) }}
              </th>
              <th>{{ $i(`plans[1]`) }}</th>
              <th style="background: rgba(99, 102, 241, 0.05)">
                {{ $i(`plans[2]`) }}
              </th>
              <th style="background: rgba(168, 85, 247, 0.05)">
                {{ $i(`plans[3]`) }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in 14">
              <td class="feature-name">
                {{ $i(`features[${index}].name`) }}
              </td>
              <td>
                <template v-if="[7].includes(index)">
                  <span class="check-large">✓</span>
                </template>
                <template v-else-if="[9, 10].includes(index)">
                  <span class="x-mark">✗</span>
                </template>
                <template v-else>
                  {{ $i(`features[${index}].values[0]`) }}
                </template>
              </td>
              <td>
                <template v-if="index === 0">
                  <strong>
                    {{ $i(`features[${index}].values[1].main`) }}
                  </strong>
                  <br />
                  <small style="color: var(--secondary)">
                    {{ $i(`features[${index}].values[1].note`) }}
                  </small>
                </template>
                <template v-else-if="index === 1">
                  <strong>
                    {{ $i(`features[${index}].values[1]`) }}
                  </strong>
                </template>
                <template v-else-if="[7, 9, 10].includes(index)">
                  <span class="check-large">✓</span>
                </template>
                <template v-else>
                  {{ $i(`features[${index}].values[1]`) }}
                </template>
              </td>
              <td>
                <template v-if="index === 0">
                  <strong>
                    {{ $i(`features[${index}].values[2].main`) }}
                  </strong>
                  <br />
                  <small style="color: var(--secondary)">
                    {{ $i(`features[${index}].values[2].note`) }}
                  </small>
                </template>
                <template v-else-if="index === 1">
                  <strong>
                    {{ $i(`features[${index}].values[2]`) }}
                  </strong>
                </template>
                <template v-else-if="[7, 9, 10].includes(index)">
                  <span class="check-large">✓</span>
                </template>
                <template v-else>
                  {{ $i(`features[${index}].values[2]`) }}
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* comparisonTable 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Pricing.ComparisonTable");
</script>

<style scoped lang="scss">
/* Comparison Table */
.comparison-section {
  padding: 70px 0;
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.comparison-table {
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e4e6;
  overflow: hidden;
  // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th {
  background: var(--light-gray);
  padding: 20px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #e5e7eb;
}
[dir='rtl'] .comparison-table th {
  text-align: right;
}

.comparison-table th:not(:first-child) {
  text-align: center;
}

.comparison-table td {
  padding: 20px;
  border-bottom: 1px solid #e2e4e6;
}

.comparison-table td:not(:first-child) {
  text-align: center;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table .feature-name {
  font-weight: 500;
  color: var(--dark);
}

.check-large {
  color: var(--secondary);
  font-size: 20px;
}

.x-mark {
  color: #ef4444;
  font-size: 20px;
}
</style>
