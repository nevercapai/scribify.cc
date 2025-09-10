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
import blogType from "~/components/blog/type.js";
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Index");

// 获取路由参数
const route = useRoute();
const urlTitle = route.params.id;

let blog = ref(blogType);
const getBlog = async () => {
  // const { blogApi } = await import("~/api/blog");
  // const response = await blogApi.getBlogByUrlTitle(urlTitle as string);
  // blog.value = (response as any)?.data[0];
  let suffix = "populate[0]=userInfo.avatar&populate[1]=articleInfo.cover";
  const config = useRuntimeConfig();
  if (config.public.env !== "production") {
    suffix += "&status=*";
  }
  const url = `https://strapi.scribify.ai/api/blogs?${suffix}&filters[urlTitle][$eq]=${encodeURIComponent(urlTitle as string)}`;
  const { data: response, pending, error, refresh } = await useFetch(url);
  if ((response.value as any).data.length) {
    blog.value = (response.value as any).data[0];
  }
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
