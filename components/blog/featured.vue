<template>
  <section class="featured-article">
    <div class="container">
      <div class="featured-card">
        <div class="featured-image">
          <el-image
            :src="blog?.articleInfo?.cover?.url"
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
        <div class="featured-content">
          <div class="featured-badge">
            {{ $t("Blog.Featured.FeaturedGuide") }}
          </div>
          <h2 class="featured-title">
            {{ blog?.articleInfo?.title }}
          </h2>
          <p class="featured-excerpt">
            {{ blog?.articleInfo?.introduction }}
          </p>
          <div class="featured-meta">
            <!-- <div class="author-avatar">E</div> -->
            <div class="author-avatar-img">
              <el-image
                :src="blog?.userInfo?.avatar?.formats?.thumbnail?.url"
                class="h-[100%] w-[100%] rounded-md"
                fit="cover"
              >
                <template #error>
                  <div class="image-slot">
                    <el-image
                      src="assets/images/blog/avatar.svg"
                      class="w-[40px] rounded-md"
                      fit="contain"
                    ></el-image>
                  </div>
                </template>
              </el-image>
            </div>
            <div class="meta-info">
              <div class="author-name">
                {{ blog?.userInfo?.name }}
              </div>
              <div class="post-date">
                {{ blog?.userInfo?.createTime }}
              </div>
            </div>
          </div>
          <NuxtLink
            :to="`/blog/${encodeURIComponent(blog?.urlTitle)}`"
            class="btn-primary"
          >
            {{ $t("Blog.Featured.ReadFullGuide") }}
            <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* featured 组件 */
import blogType from "./type";
const { blog } = defineProps({
  blog: {
    default: () => blogType,
    type: Object,
    required: true
  }
});
const router = useRouter();
const localePath = useLocalePath();
const goToDetail = (urlTitle: string) => {
  router.push({
    path: localePath(`/blog/${encodeURIComponent(urlTitle)}`)
  });
};
</script>

<style scoped lang="scss">
/* Featured Article Section */
.featured-article {
  padding-bottom: 60px;
}

.featured-card {
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.featured-image {
  position: relative;
  height: 400px;
  background: #f9fafc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: white;
  overflow: hidden;
  border: 1px solid var(--line-color);
}

.featured-content {
  // padding: 40px;
}

.featured-badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.featured-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
}

.featured-excerpt {
  font-size: 18px;
  color: var(--gray);
  margin-bottom: 24px;
  line-height: 1.6;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
}
.author-avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--line-color);
  overflow: hidden;
}

.meta-info {
  flex: 1;
}

.author-name {
  font-weight: 600;
  color: var(--dark);
  font-size: 14px;
}

.post-date {
  font-size: 14px;
  color: var(--gray);
}

.btn-primary {
  padding: 8px 40px;
}
.img-position {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
