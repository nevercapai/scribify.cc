<template>
  <div class="explore-wrap">
    <div class="wrap">
      <div class="title">Explore further</div>
      <div class="category-title">Tools to transcribe to text</div>
      <div class="category-list">
        <span v-for="(item, index) in 13" :key="index" class="category-btn">
          {{ $i(`transcribe_${index + 1}`) }}
        </span>
      </div>
      <div class="category-title">Other related tools</div>
      <div class="category-list">
        <span v-for="(item, index) in 7" :key="index" class="category-btn">
          {{ $i(`transcribe_${index + 1}`) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* explore 组件 */
const $i = useI18nModule("Resources.Transcription.videoTranscription.explore");
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
    padding-top: 70px;
    padding-bottom: 20px;
    .title {
      font-weight: 600;
      font-size: 42px;
      color: #ffffff;
      line-height: 59px;
      text-align: center;
      margin-bottom: 40px;
    }
    .category-title {
      font-weight: 500;
      font-size: 22px;
      color: #ffffff;
      line-height: 30px;
      margin-bottom: 24px;
    }
    .category-list {
      margin-bottom: 32px;
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
      margin-bottom: 1rem;
      cursor: pointer;
    }
  }
}
</style>
