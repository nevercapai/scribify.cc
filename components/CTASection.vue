<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">
          {{ data.title }}
        </h2>
        <p class="cta-subtitle">
          {{ data.subtitle }}
        </p>
        <span @click="handleClick" class="btn-white cursor-pointer">
          {{ data.button }}
        </span>
        <p
          v-if="data.disclaimer"
          style="
            color: rgba(255, 255, 255, 0.8);
            margin-top: 20px;
            font-size: 14px;
          "
        >
          {{ data.disclaimer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* CTASection 组件 */
const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      title: "",
      subtitle: "",
      button: "",
      disclaimer: ""
    })
  }
});

const $i = useI18nModule("Index");
const { $mitt } = useNuxtApp();
const handleClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};
</script>

<style scoped lang="scss">
/* CTA Section */
.cta-section {
  padding: 114px 0;
  background: var(--gradient);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation: float 20s linear infinite;
}
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-30px, 30px) rotate(180deg);
  }
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
}

.cta-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 54px;
}

.btn-white {
  background: white;
  color: var(--primary);
  padding: 8px 60px;
  border-radius: 80px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  display: inline-block;
  transition: all 0.3s;
}

.btn-white:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
</style>
