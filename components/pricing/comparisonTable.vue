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
            <td :data-label="$i(`plans[1]`)">
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
            <td :data-label="$i(`plans[2]`)">
              <div class="flex flex-col" v-if="index === 0">
                <strong>
                  {{ $i(`features[${index}].values[1].main`) }}
                </strong>
                <small style="color: var(--secondary)">
                  {{ $i(`features[${index}].values[1].note`) }}
                </small>
              </div>
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
            <td :data-label="$i(`plans[3]`)">
              <div class="flex flex-col" v-if="index === 0">
                <strong>
                  {{ $i(`features[${index}].values[2].main`) }}
                </strong>
                <small style="color: var(--secondary)">
                  {{ $i(`features[${index}].values[2].note`) }}
                </small>
              </div>
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


/* 移动端响应式 */
@media (max-width: 768px) {
  .comparison-table {
    padding: 20px 0;
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .section-title {
    font-size: 28px;
  }

  .comparison-table table,
  .comparison-table thead,
  .comparison-table tbody,
  .comparison-table th,
  .comparison-table td,
  .comparison-table tr {
    display: block;
  }

  /* 隐藏表头 */
  .comparison-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  /* 每行变成卡片 */
  .comparison-table tr {
    background: white;
    border: 1px solid #e2e4e6;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 12px;
  }

  .comparison-table tr:last-child {
    margin-bottom: 0;


    td:first-child {
      border-bottom: 1px solid #f3f4f6;
    }

  }

  /* 重置 td 样式 */
  .comparison-table td {
    border: none;
    padding: 8px 0;
    position: relative;
    padding-left: 40%;
    display: flex;
    align-items: center;
    min-height: 40px;
    text-align: left !important;
  }

  /* 功能名称列 */
  .comparison-table .feature-name {
    padding-left: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid #f3f4f6;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 600;
  }

  /* 为每个 td 添加标签 */
  .comparison-table td:not(.feature-name):before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 35%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 600;
    color: #6b7280;
    font-size: 14px;
  }

  /* RTL 支持 */
  [dir="rtl"] .comparison-table td:not(.feature-name) {
    padding-right: 40%;
    padding-left: 0;
    text-align: right !important;
  }

  [dir="rtl"] .comparison-table td:not(.feature-name):before {
    right: 0;
    left: auto;
    text-align: right;
  }

  .check-large,
  .x-mark {
    font-size: 18px;
  }
}
</style>
