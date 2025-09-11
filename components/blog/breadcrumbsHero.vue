<template>
  <section class="breadcrumbs-section">
    <div class="container">
      <div class="breadcrumbs-content">
        <div class="breadcrumbs">
          <a :href="currentWebSite + '/'">
            {{ $t("Blog.Detail.Home") }}
          </a>
          <span class="breadcrumb-separator">></span>
          <a :href="currentWebSite + '/blog'">
            {{ $t("Blog.Detail.Blog") }}
          </a>
          <span class="breadcrumb-separator">></span>
          <span>{{ blog?.urlTitle }}</span>
        </div>

        <div class="breadcrumbs-grid">
          <div class="breadcrumbs-left">
            <h1 class="post-title">
              {{ blog?.articleInfo?.title }}
            </h1>
            <p class="post-subtitle">
              {{ blog?.articleInfo?.introduction }}
            </p>

            <div class="intro-cta">
              <div class="cta-buttons">
                <button @click="handleClick" class="btn-primary !px-[44px]">
                  {{ $t("Blog.Detail.GoToSignup") }}
                </button>
                <button @click="showDownload" class="btn-secondary !px-[30px]">
                  <span>▶</span> {{ $t("Blog.Detail.HowWorks") }}
                </button>
              </div>
            </div>
          </div>

          <div class="breadcrumbs-right">
            <div class="featured-image">
              <el-image
                :src="blog?.articleInfo?.cover.url"
                class="h-[100%] w-[100%] rounded-md"
                fit="cover"
              >
                <template #error>
                  <div class="image-slot">
                    <el-image
                      src="/assets/images/blog/card.svg"
                      class="img-position w-[86px] rounded-md"
                      fit="contain"
                    ></el-image>
                  </div>
                </template>
              </el-image>
            </div>
          </div>
        </div>

        <transition name="slide-fade">
          <LazyYoutubeTomp4HowToDownload
            src="/assets/video/See How It Works.mp4"
            v-if="showHowToDownload"
            style="margin-top: 20px"
          ></LazyYoutubeTomp4HowToDownload>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* breadcrumbsHero 组件 */
import blogType from "./type";
const config = useRuntimeConfig();
const currentWebSite = ref(config.public.currentWebSite);
const { blog } = defineProps({
  blog: {
    default: () => blogType,
    type: Object,
    required: true
  }
});

const { $mitt } = useNuxtApp();
const handleClick = () => {
  $mitt.emit("goToEvent", { path: "/user/signup" });
};

const showHowToDownload = ref(false);
const showDownload = () => {
  showHowToDownload.value = !showHowToDownload.value;
};
</script>

<style scoped lang="scss">
/* Breadcrumbs Section */
.breadcrumbs-section {
  padding: 120px 0 70px;
  position: relative;
  overflow: hidden;
}

.breadcrumbs-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.breadcrumbs-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 80px;
  align-items: start;
  margin-top: 40px;
}

.breadcrumbs-left {
  text-align: left;
  padding-right: 20px;
}

.breadcrumbs-right {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
  color: var(--gray);
}

.breadcrumbs a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumbs a:hover {
  color: var(--primary-dark);
}

.breadcrumb-separator {
  color: var(--gray);
}

.post-title {
  font-size: 42px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
  color: var(--dark);
}

.post-subtitle {
  font-size: 18px;
  color: var(--gray);
  margin-bottom: 40px;
  line-height: 1.7;
  font-weight: 400;
}

.featured-image {
  width: 100%;
  max-width: 450px;
  height: 350px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  color: white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: #f9fafc;
  border: 1px solid var(--line-color);
}

.featured-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.intro-cta {
  margin-top: 40px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

@media screen and (max-width: 991px) {
  .breadcrumbs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: start;
    margin-top: 40px;
  }
}
.img-position {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
