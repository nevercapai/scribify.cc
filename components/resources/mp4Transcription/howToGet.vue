<template>
  <div class="py-[70px]" style="background: var(--light-gray)">
    <div class="container">
      <h2 class="mb-[50px] text-[2.5rem] font-bold leading-snug">
        {{ $i("title") }}
        <div class="gradient-text" style="display: table">{{ $i("titleHighlight") }}</div>
      </h2>
      <div class="feature-block">
        <div class="feature-content">
          <ul class="feature-points">
            <li v-for="(item, index) of 6" :key="index + 1">
              <div class="check">
                <span class="icon-duihao iconfont text-xs"></span>
              </div>
              <span class="ms-7">{{ $i(`fun_${index + 1}`) }}</span>
            </li>
          </ul>
        </div>
        <div class="feature-visual">
          <el-image
            src="/assets/images/resources/Transcription/mp4Transcription/howToGet.svg"
            class="w-[542px] max-w-[90%]"
            alt="NeverCap"
          ></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.mp4Transcription.howToGet");
</script>

<style scoped>
.feature-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 768px) {
  .feature-block {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.feature-description {
  font-size: 18px;
  color: var(--gray);
  margin-bottom: 30px;
  line-height: 1.8;
}

.feature-points {
  list-style: none;
}

.feature-points li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  position: relative;
}

.feature-points .check {
  width: 18px;
  height: 18px;
  background: var(--secondary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
  position: absolute;
  top: 6px;
}
.feature-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
}
</style>
