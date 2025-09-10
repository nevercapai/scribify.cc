<template>
  <section class="blog-main">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $t("Blog.ListSection.title") }}
          <span class="gradient-text">
            {{ $t("Blog.ListSection.highlighted_text") }}
          </span>
        </h2>
        <p class="section-subtitle">
          {{ $t("Blog.ListSection.subtitle") }}
        </p>
      </div>

      <!-- Categories Filter -->
      <div class="categories-filter">
        <span
          v-for="(item, index) in categories"
          @click="categoryHandel(item, index)"
          class="category-btn"
          :class="{ active: index === activeIndex }"
        >
          {{ $t(`Blog.ListSection.categories[${index}]`) }}
        </span>
      </div>

      <!-- Blog Grid -->
      <div class="blog-grid">
        <!-- Blog Post 1 -->
        <NuxtLink
          v-for="blog in filteredBlogs"
          :to="`/blog/${blog.urlTitle}`"
          class="blog-card"
        >
          <div class="card-image">
            <el-image
              :src="blog.articleInfo.cover.url"
              class="h-[100%] w-[100%]"
              fit="cover"
            >
              <template #error>
                <div class="image-slot">
                  <el-image
                    src="/assets/images/blog/card.svg"
                    class="w-[86px] rounded-md"
                    fit="contain"
                  ></el-image>
                </div>
              </template>
            </el-image>
            <div class="card-category">
              {{ blog.category }}
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">
              {{ blog.articleInfo.title }}
            </h3>
            <p class="card-excerpt">
              {{ blog.articleInfo.introduction }}
            </p>
            <div class="card-meta">
              <span class="post-date">{{ blog.createTime }}</span>
              <span class="read-time"> {{ blog.timeToRead }} min read </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* list 组件 */
interface BlogItem {
  articleInfo: {
    title: string;
    introduction: string;
    content: string;
    cover: any;
  };
  userInfo: {
    name: string;
    avatar: any;
  };
  timeToRead: number;
  createTime: string;
  category: string;
  urlTitle: string;
}

const { blogs } = defineProps<{
  blogs: BlogItem[];
}>();
const blogsCopy = JSON.parse(JSON.stringify(blogs));
const activeIndex = ref(0);
const categories = ref([
  "All Posts",
  "Tutorials",
  "Podcasting",
  "Content Creation",
  "Business",
  "AI Tips"
]);
const categoryHandel = (item: string, index: number) => {
  activeIndex.value = index;
  // todo 请求或者前端删选需要的数据
};

const filteredBlogs = computed(() => {
  if (activeIndex.value === 0) return blogs; // "All Posts"
  const selectedCategory = categories.value[activeIndex.value];
  return blogs.filter((blog) => blog.category === selectedCategory);
});
</script>

<style scoped lang="scss">
/* Blog Main Section */
.gradient-text {
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.blog-main {
  padding: 45px 0 70px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line-color);
}

.card-image {
  height: 200px;
  background: #f9fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
  overflow: hidden;
}

.card-category {
  position: absolute;
  top: 24px;
  left: 24px;
  letter-spacing: 0.5px;

  padding: 3px 13px;
  border: 1px solid var(--line-color);
  border-radius: 20px;
  background: white;
  color: var(--gray);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  font-size: 12px;
}

.card-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.3;
}

.card-excerpt {
  font-size: 14px;
  color: var(--gray);
  margin-bottom: 20px;
  line-height: 1.6;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: var(--gray);
  margin-top: auto;
}

.read-time {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Categories Filter */
.categories-filter {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 8px 20px;
  border: 1px solid var(--line-color);
  border-radius: 20px;
  background: white;
  color: var(--gray);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  font-size: 14px;
  cursor: pointer;
}

.category-btn.active {
  border-color: #aaaeb3;
  color: #000000;
  background: #f7f7f7;
  text-decoration: none;
}
.category-btn:hover {
  color: #000000;
  background: #f7f7f7;
  text-decoration: none;
}
@media screen and (max-width: 991px) {
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
  }
}

@media screen and (max-width: 767px) {
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 26px;
  }
}
</style>
