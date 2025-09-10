<template>
  <section class="article-content" id="content">
    <div class="container">
      <div v-html="renderedMarkdown" class="content-wrapper prose"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* ArticleContent 组件 */
import MarkdownIt from "markdown-it";
import blogType from "./type";
const config = useRuntimeConfig();
const { blog } = defineProps({
  blog: {
    default: () => blogType,
    type: Object,
    required: true
  }
});

const md = new MarkdownIt({
  html: true, // 允许 HTML 标签
  linkify: true, // 自动识别文本中的链接
  typographer: true, // 启用一些排版替换
  breaks: true // 将换行符转换为 <br>
});
const renderedMarkdown = computed(() => {
  if (blog?.articleInfo?.content) {
    console.log(
      "🍎🍎 ~ ArticleContent.vue:25 ~ blog.articleInfo.content:",
      blog.articleInfo.content
    );
    return md.render(blog.articleInfo.content);
  }
});
</script>

<style scoped lang="scss">
/* Article Content */
.article-content {
  padding: 0 0 80px;
  background: white;
}
.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
</style>
