<template>
  <div class="explore-wrap">
    <div class="wrap">
      <div class="left-wrap flex flex-col justify-center">
        <div class="title">{{ $i("title") }}</div>
        <div class="category-title">{{ $i("des") }}</div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="category-list">
          <span v-for="(item, index) in 5" :key="index" class="category-btn">
            {{ $i(`tool_${index + 1}`) }}
          </span>
        </div>
        <div class="category-list">
          <span v-for="(item, index) in 5" :key="index" class="category-btn">
            {{ $i(`tool_1${index + 1}`) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* explore 组件 */
const $i = useI18nModule("Resources.Transcription.mp4Transcription.explore");
</script>

<style scoped lang="scss">
.explore-wrap {
  background: linear-gradient(90deg, #3470ff 0%, #9534e6 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  .wrap {
    width: 100%;
    max-width: 1200px;
    padding: 70px 20px 80px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 50px;
    .title {
      font-weight: 600;
      font-size: 42px;
      color: #ffffff;
      line-height: 59px;
      text-align: center;
      margin-bottom: 40px;
    }
    .category-title {
      font-weight: 400;
      font-size: 22px;
      color: #ffffff;
      line-height: 30px;
    }
    .category-list {
      display: flex;
      flex-wrap: wrap;
    }
    .category-btn {
      flex: none;
      margin-right: 0.75rem;
      padding: 0.5rem 0.8rem;
      border-radius: 100px;
      border: 1px solid #ffffff;
      color: white;
      margin-bottom: 28px;
      // cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .wrap {
      grid-template-columns: 1fr;
    }
  }
}
</style>
