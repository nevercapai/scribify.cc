<template>
  <div
    @click="handleJump"
    class="flex h-[2.75rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[1.375rem] text-xl font-medium duration-75 ease-linear hover:bg-opacity-80 hover:text-opacity-80 md:hover:scale-[1.03]"
  >
    <span class="me-3 truncate">{{ text }}</span>
    <svg class="icon text-xs" aria-hidden="true">
      <use xlink:href="#icon-guanwangjiantou"></use>
    </svg>
  </div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: "Try for Free"
  }
});
const { $mitt } = useNuxtApp();
const handleJump = () => {
  $mitt.emit("signup");
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
