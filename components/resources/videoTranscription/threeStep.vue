<template>
  <section class="workflow-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $i("title") }}
          <span class="gradient-text"> {{ $i("titleHighlight") }}</span>
        </h2>
      </div>

      <div class="workflow-steps">
        <div class="workflow-step">
          <div class="step-number">
            <NuxtImg
              :src="`/assets/images/resources/Transcription/videoTranscription/threeStep_1.svg`"
              class="h-[3.5rem] w-[3.5rem]"
              fit="contain"
              alt="nevercap image"
              loading="lazy"
            ></NuxtImg>
          </div>
          <div class="step-title">
            {{ $i("step_1_title") }}
          </div>
          <div class="step-description">
            {{ $i("step_1_des") }}
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">
            <NuxtImg
              :src="`/assets/images/resources/Transcription/videoTranscription/threeStep_2.svg`"
              class="h-[3.5rem] w-[3.5rem]"
              fit="contain"
              alt="nevercap image"
              loading="lazy"
            ></NuxtImg>
          </div>
          <div class="step-title">
            {{ $i("step_2_title") }}
          </div>
          <div class="step-description">
            {{ $i("step_2_des") }}
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">
            <NuxtImg
              :src="`/assets/images/resources/Transcription/videoTranscription/threeStep_3.svg`"
              class="h-[3.5rem] w-[3.5rem]"
              fit="contain"
              alt="nevercap image"
              loading="lazy"
            ></NuxtImg>
          </div>
          <div class="step-title">
            {{ $i("step_3_title") }}
          </div>
          <div class="step-description">
            {{ $i("step_3_des") }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* threeStep 组件 */
const $i = useI18nModule("Resources.Transcription.videoTranscription.threeStep");
</script>

<style scoped lang="scss">
.section-header {
  text-align: center;
  margin-bottom: 50px;
}
.section-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 14px;
}
/* Workflow Section */
.workflow-section {
  padding: 70px 0;
  background: var(--light-gray);
}

.workflow-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 106px;
  margin-top: 60px;
}

.workflow-step {
  text-align: center;
  position: relative;
}

.workflow-step::after {
  content: url("/assets/images/resources/Transcription/videoTranscription/threeStep_arrow.svg");
  position: absolute;
  top: 50%;
  @apply ltr:right-[-74px] rtl:left-[-74px] rtl:rotate-180;
}

.workflow-step:last-child::after {
  display: none;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 900;
  margin: 0 auto 32px;
}

.step-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 18px;
}

.step-description {
  font-size: 18px;
  color: var(--gray);
}
.workflow-step {
  background: #ffffff;
  border: 1px solid var(--line-color);
  border-radius: 16px;
  padding: 48px 24px 30px;
}

@media (max-width: 768px) {
  .workflow-steps {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    margin-top: 60px;
  }
  .workflow-step::after {
    content: "";
    position: absolute;
    right: -74px;
    top: 50%;
  }
}
</style>
