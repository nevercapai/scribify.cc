// 提示
export const useTourStore = defineStore("tour", () => {
  const step = ref<null | number>(null); // 1,2,3

  const { startTouchListening, stopTouchListening } = useTouch();
  const nextStep = () => {
    if (step.value === null) {
      startTouchListening();
      step.value = 1;
      return;
    }
    if (step.value === 3) {
      stopTouchListening();
      step.value = null;
      return;
    }
    step.value = step.value + 1;
  };

  const nextStepWithOperation = () => {
    if (step.value === null) return;
    // 手机模式需要交互
    step.value = step.value! + 0.5;
  };

  return {
    step,
    nextStep,
    nextStepWithOperation
  };
});
