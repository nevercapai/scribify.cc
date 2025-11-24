<template>
  <section class="testimonials" style="background: var(--light-gray)">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $i("title") }}
          <span class="gradient-text"> {{ $i("titleHighlight") }}</span>
        </h2>
        <p class="section-subtitle">
          {{ $i("des") }}
        </p>
      </div>
      <div class="testimonials-grid">
        <div v-for="(item, index) of 3" :key="index" class="testimonial-card">
          <span class="quote-icon">"</span>
          <p class="testimonial-text">"{{ $i("people_" + (index + 1) + "_content") }}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">
              <el-avatar :size="54" class="me-3">
                <NuxtImg
                  :src="`/assets/images/index/users/${people[index]}.png`"
                  fit="cover"
                  loading="lazy"
                  :alt="people[index]"
                ></NuxtImg>
              </el-avatar>
            </div>
            <div class="author-info">
              <div class="author-name">{{ people[index] }}</div>
              <div class="author-role">
                {{ $i("people_" + (index + 1) + "_job") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Resources.Transcription.videoTranscription.reviews");
const people = ref(["Liam Carter", "Emma Thompson", "Lily Baker"]);
</script>
<style lang="scss" scoped>
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
/* Testimonials */
.testimonials {
  padding: 70px 0;
  background: #ffffff;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.testimonial-card {
  border: 1px solid var(--line-color);
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 1rem;
  position: relative;
  padding-bottom: 90px;
}

.quote-icon {
  font-size: 48px;
  color: var(--primary);
  opacity: 0.2;
  position: absolute;
  top: 20px;
  right: 20px;
}

.testimonial-text {
  font-size: 18px;
  color: #000000;
  line-height: 24px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.author-role {
  font-size: 14px;
  color: var(--gray);
}
</style>
