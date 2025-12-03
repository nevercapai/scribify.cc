<template>
  <section class="bg-[#F9FAFC] px-4 py-[4.375rem]">
    <!-- 标题 -->
    <h1 class="m-auto mb-[4.375rem] w-full max-w-[62rem] text-center text-[2.5rem] font-bold">
      {{ $i("title") }}
      <span class="gradient-text">{{ $i("titleHighlight") }}</span>
    </h1>
    <!--2、 三步操作流程 -->
    <section class="m-auto grid max-w-[75rem] grid-cols-1 justify-center gap-6 px-4" :class="[`md:grid-cols-${steps}`]">
      <div
        v-for="(item, index) in steps"
        :key="index"
        class="single-item flex flex-col items-center rounded-xl transition"
      >
        <div class="index-wrap mb-8 flex items-center justify-center text-[1.375rem] font-semibold leading-[1.875rem]">
          <div class="index-circle">{{ index + 1 }}</div>
        </div>
        <div class="px-[20px] text-start text-lg leading-[1.75rem] text-[#64748B]">
          {{ $i(`step_${index + 1}_des`) }}
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const props = defineProps({
  steps: {
    type: Number,
    default: 3
  },
  module: {
    type: String,
    default: ""
  }
});
const $i = useI18nModule(props.module);
</script>

<style scoped>
.index-circle {
  align-items: center;
  background: var(--gradient);
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  height: 3.75rem;
  justify-content: center;
  width: 3.75rem;
}
.single-item {
  &:not(:last-child) {
    position: relative;
    &::after {
      @apply max-md:hidden;
      content: " ";
      height: 0.75rem;
      width: 4.875rem;
      position: absolute;
      top: 1.5rem;
      right: -2.5rem;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAMCAYAAADMOot6AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAATqADAAQAAAABAAAADAAAAACadg9uAAABG0lEQVRIDe2VsUrDUBSGz38NaadSh059BneRDhbnGAIOdfAJfAMHtyL6LjFNUhEH6SC49g3cnIrQrYmYe7wBr7Tl3s6F3Luce/7/H04+chIid4wE4rS4z3PuG00lCpvRdB3EJ9+ymCf56szEwoEzUdEaU09WeImz8oaZoeW6OnDrNIx3PiApx0lWZsmMuzqCyVN5JH/4QQt7UHkPZqhHOFZv2eHGLMCHR+IiDP051A6fyopmGwHX2AkAhfr+XbtVtSOyOgDBgxBfkPxsTTXXsK/quVrV5nLZ/eSP6eqNmQY6BWCKTusqGmJZa542XLURQEUCt1Hg3yl4/z8uB87Gq9ZBCyH4Mgrar9sxB26byF/PhHdftEZBgE9T5BdilVENXABJbAAAAABJRU5ErkJggg==);
    }
  }
}
</style>
