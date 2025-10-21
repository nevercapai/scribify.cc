<template>
  <!-- More Free Tools Section -->
  <section>
    <div class="container">
      <h2 class="section-title">{{ $i("title") }}</h2>
      <p class="section-subtitle">{{ $i("title_des") }}</p>

      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <NuxtLink :to="$localePath('/resources/youtube-to-mp4')">
          <div class="resource-card" style="height: 100%">
            <div class="resource-icon">
              <el-image
                :src="`/assets/images/downloadMp4/MP4.svg`"
                class="w-[1.8rem]"
              ></el-image>
            </div>
            <h3 class="resource-title">{{ $i("YouTubeToMP") }}</h3>
            <p class="resource-description">
              {{ $i("YouTubeToMP_des") }}
            </p>
          </div>
        </NuxtLink>

        <NuxtLink :to="$localePath('/')">
          <div class="resource-card" style="height: 100%">
            <div class="resource-icon">
              <el-image
                :src="`/assets/images/downloadMp4/AI.svg`"
                class="w-[1.8rem]"
              ></el-image>
            </div>
            <h3 class="resource-title">{{ $i("AITranscription") }}</h3>
            <p class="resource-description">
              {{ $i("AITranscription_des") }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* MoreFreeTools 组件 */
const $i = useI18nModule("Resources.YouTubeToMP3.MoreFreeTools");
</script>

<style scoped lang="scss">
.section-title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 27px;
}

.section-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 56px;
}

.resource-card {
  background: #0e172b;
  border-radius: 16px;
  border: 1px solid #35205a;
  padding: 30px;
  text-align: center;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.resource-card:active {
  transform: scale(0.95);
}

.resource-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(90deg, #9332ea 0%, #be26d4 100%);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 24px;
}

.resource-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
}

.resource-description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}
</style>
