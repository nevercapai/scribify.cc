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

const detailItem = {
  id: 1,
  urlTitle: "how-to-transcribe-50-hours-of-content-in-one-weekend",
  title: "How to Transcribe 50 Hours of Content in One Weekend",
  introduction:
    "Learn the professional workflow that podcasters and content creators use to process entire archives with batch transcription. No more choosing which episodes deserve transcripts.",
  content:
    "content-----------------------==========================------------------------content",
  cover: "/assets/images/blog/card.svg",
  category: 1,
  timeToRead: "5 min read",
  createTime: "January 15, 2025",
  name: "Editorial Team",
  avatar: "/assets/images/blog/avatar.svg"
};
let blogs = ref([]);
let blog = ref({});
const getBlogs = async () => {
  const { blogApi } = await import("~/api/blog");
  const response = await blogApi.getBlogs();
  blogs.value = (response as any).data;
  blog.value = (response as any)?.data[0];
};
getBlogs();
</script>

<style scoped lang="scss"></style>
