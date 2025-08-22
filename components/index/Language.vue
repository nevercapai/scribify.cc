<template>
  <!--3、 介绍说明 -->
  <section
    class="language-wrap mx-auto flex max-w-[80rem] flex-col items-center justify-between px-[2.5rem] py-[4.75rem] md:flex-row"
  >
    <!-- 右侧图片 -->
    <div
      class="flex flex-shrink-0 justify-start md:flex-[0_0_38%] md:basis-[38%]"
    >
      <el-image
        :src="`/assets/images/index_black/${data.img}.png`"
        class="relative left-[2rem] max-w-full object-contain xl:w-[80%]"
        fit="contain"
      ></el-image>
    </div>
    <!-- 左侧文字 -->
    <div class="max-w-[38.75rem] text-start md:flex-[0_0_62%] md:basis-[62%]">
      <h1 class="mb-[1.875rem] text-[2.5rem] font-medium">
        {{ data.title }}
      </h1>
      <ul class="flex flex-col gap-[1.625rem] text-lg font-normal">
        <li
          v-for="item in data.list"
          :key="item.id"
          class="flex items-start gap-[0.625rem]"
        >
          <span class="mt-[-0.25rem] text-[1.6rem]">
            <el-image
              :src="`/assets/images/index_black/to-right.svg`"
              class="h-[0.75rem] w-[0.875rem] object-contain"
              fit="contain"
            ></el-image>
          </span>
          <span class="text-[rgba(255,255,255,0.7)]">
            {{ item.content }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
const data = ref({
  title: "Largest language facilitation",
  img: "Language",
  list: [
    {
      id: 1,
      content: "Recognize media files in 100+ spoken languages"
    },
    {
      id: 2,
      content: "Translate transcripts to 249+ languages "
    },
    {
      id: 3,
      content: "Export translated transcripts in various formats or subtitles"
    }
  ]
});
</script>

<style scoped lang="scss">
.language-wrap {
  position: relative;
  &::after {
    position: absolute;
    bottom: 3.5rem;
    left: 0;
    content: " ";
    width: 100%;
    height: 1px;
    background: linear-gradient(
      315deg,
      rgba(0, 0, 0, 1),
      rgba(105, 32, 122, 1),
      rgba(0, 0, 0, 1)
    );
  }
}
</style>
