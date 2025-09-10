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
  // 默认情况下，它会在服务端执行，并将数据序列化到页面中
  let suffix = "populate[0]=userInfo.avatar&populate[1]=articleInfo.cover";
  const config = useRuntimeConfig();
  if (config.public.env !== "production") {
    suffix += "&status=*";
  }
  const url = `https://strapi.scribify.ai/api/blogs?${suffix}`;
  const { data: response, pending, error, refresh } = await useFetch(url);

  blogs.value = (response.value as any).data;
  if (blogs.value.length) {
    blog.value = blogs.value[0];
  }
  // const res = await useAsyncData(
  //   "user-key", // 唯一键，用于重复数据删除和缓存
  //   () => $fetch(url)
  // );
};

getBlogs();
</script>

<style scoped lang="scss"></style>
