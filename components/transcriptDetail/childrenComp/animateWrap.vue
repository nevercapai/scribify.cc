<template>
  <Transition
    enter-active-class="transition-all duration-200 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="transform opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="transform opacity-100"
    leave-to-class="transform opacity-0"
  >
    <slot></slot>
  </Transition>
</template>

<script setup></script>

<style lang="scss" scoped></style>
