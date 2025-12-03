<template>
  <div class="py-[4.375rem]">
    <div class="container flex flex-col">
      <h2 class="text-[2.5rem] font-bold leading-snug" :class="[params.titleHighlight ? 'mb-7' : 'mb-12']">
        {{ params.title }}
        <div class="gradient-text" style="display: table">{{ params.titleHighlight }}</div>
      </h2>
      <div
        v-if="params.subTitle"
        class="sub-title grid grid-cols-1 gap-[1.875rem] md:mb-4 md:grid-cols-2 md:gap-[5rem]"
      >
        <p class="text-start text-lg text-[var(--gray)]">{{ params.subTitle }}</p>
        <div></div>
      </div>
      <div class="feature-block">
        <div class="feature-content">
          <ul class="feature-points">
            <li v-for="(item, index) of params.list" :key="index + 1">
              <div class="check">
                <span class="icon-duihao iconfont text-xs"></span>
              </div>
              <span class="ms-7">{{ item.des }}</span>
            </li>
          </ul>
        </div>
        <div class="feature-visual">
          <NuxtImg
            :src="params.rightImg"
            class="no-drag w-[33.875rem] max-w-[90%]"
            fit="contain"
            alt="nevercap image"
            loading="lazy"
          ></NuxtImg>
        </div>
      </div>
      <div
        v-if="params.summary"
        class="summary mt-4 grid grid-cols-1 gap-[1.875rem] md:-mt-3 md:grid-cols-2 md:gap-[5rem]"
      >
        <p class="text-start text-lg text-[var(--gray)]">{{ params.summary }}</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  params: {
    type: Object,
    default: () => ({})
  }
});
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
