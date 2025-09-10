<template>
  <div class="blog-wrap">
    <!-- Navigation -->
    <HeadNavbar></HeadNavbar>

    <!-- Hero -->
    <BlogHero></BlogHero>

    <!-- Featured Article Section -->
    <BlogFeatured :blog="blog"></BlogFeatured>

    <!-- Blog Main Section -->
    <BlogList :blogs="blogs"></BlogList>

    <!-- CTA Section -->
    <CTASection :data="ctaData" />

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
/* blog 组件 */
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Index");

const ctaData = ref({
  title: $i("CTASection.title"),
  subtitle: $i("CTASection.subtitle"),
  button: $i("CTASection.button"),
  disclaimer: $i("CTASection.disclaimer")
});

let blogs = ref([]);
let blog = ref({});
const getBlogs = async () => {
  let response: any = { data: [] };
  let storageTime = window.localStorage.getItem("Blogs_time") || 0;
  let Blogs_response = window.localStorage.getItem("Blogs_response");
  let flag = false;
  if (flag && storageTime && Date.now() - +storageTime < 1000 * 60 * 60 * 1) {
    response = JSON.parse(Blogs_response || "{ data: [] }");
  } else {
    const { blogApi } = await import("~/api/blog");
    response = await blogApi.getBlogs();
    window.localStorage.setItem("Blogs_time", Date.now().toString());
    window.localStorage.setItem("Blogs_response", JSON.stringify(response));
  }

  blogs.value = (response as any).data;
  blog.value = (response as any)?.data[0];
};
getBlogs();
</script>

<style scoped lang="scss"></style>
