<template>
  <el-dialog
    v-model="visible"
    :show-close="false"
    :close-on-click-modal="false"
    :destroy-on-close="true"
    append-to-body
    class="customer-sub-dialog"
  >
    <div class="flex items-center bg-white">
      <subscription-content @close="visible = false" />
    </div>
  </el-dialog>
</template>

<script setup>
const { t } = useI18n();
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  }
});
const emits = defineEmits(["update:modelValue"]);
const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  }
});
// 响应式状态
</script>

<style>
.customer-sub-dialog {
  max-width: calc(100% - 2rem);
  width: 53.0625rem !important;
  padding: 0 !important;
  border-radius: 0.6rem !important;
}
.customer-sub-dialog .el-dialog__header {
  display: none;
}
.customer-sub-dialog .el-dialog__body {
  border-radius: 0.6rem !important;
  overflow: hidden;
}
</style>
