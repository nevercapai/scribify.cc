<template>
  <div class="blog-detail-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Breadcrumbs Section -->
    <BlogBreadcrumbsHero :blog="blog"></BlogBreadcrumbsHero>

    <!-- Article Content -->
    <BlogArticleContent :blog="blog" />>

    <!-- CTA Section -->
    <CTASection :data="ctaData" />

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
/* blog-detail 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Index");

// 获取路由参数
const route = useRoute();
const urlTitle = route.params.id;

let blog = ref({});
const getBlog = async () => {
  const { blogApi } = await import("~/api/blog");
  const response = await blogApi.getBlogByUrlTitle(urlTitle as string);
  blog.value = (response as any)?.data[0];
};
getBlog();

const ctaData = ref({
  title: $i("CTASection.title"),
  subtitle: $i("CTASection.subtitle"),
  button: $i("CTASection.button"),
  disclaimer: $i("CTASection.disclaimer")
});
</script>

<style scoped lang="scss"></style>
