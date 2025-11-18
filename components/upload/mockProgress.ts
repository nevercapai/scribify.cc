import { watch } from "vue";
/**
 * 模拟文件上传进度
 * @param {Object} options -  {progress: number, status: string}
 * @returns {Function} 停止函数
 */
function simulateUpload(options: any) {
  const totalTime = 10000; // 10秒
  const startTime = Date.now();
  const maxProgress = 99;

  let animationId = null;
  let stopWatcher = null;

  /**
   * 先快后慢再快的缓动函数
   * @param {number} t - 时间进度 (0-1)
   * @returns {number} - 缓动后的进度 (0-1)
   */
  function easeInOutQuadCustom(t) {
    if (t < 0.3) {
      // 前30%时间：快速上升
      const normalizedT = t / 0.3;
      return 0.4 * normalizedT * normalizedT;
    } else if (t < 0.7) {
      // 中间40%时间：缓慢上升
      const normalizedT = (t - 0.3) / 0.4;
      return 0.4 + 0.3 * (1 - Math.pow(1 - normalizedT, 3));
    } else {
      // 最后30%时间：快速上升到99
      const normalizedT = (t - 0.7) / 0.3;
      return 0.7 + 0.3 * (normalizedT * normalizedT);
    }
  }

  function updateProgress() {
    const elapsed = Date.now() - startTime;
    const timeProgress = Math.min(elapsed / totalTime, 1);

    // 应用缓动函数
    const easedProgress = easeInOutQuadCustom(timeProgress);
    const progress = Math.floor(easedProgress * maxProgress);

    // 更新响应式对象
    options.progress = progress;

    // 如果还没到10秒，继续动画
    if (timeProgress < 1) {
      animationId = requestAnimationFrame(updateProgress);
    } else {
      // 10秒后保持在99
      options.progress = maxProgress;
    }
  }

  // 监听status变化
  stopWatcher = watch(
    () => options.status,
    (newStatus) => {
      if (newStatus === "success") {
        // 停止动画
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        // 设置进度为100
        options.progress = 100;
      }
    }
  );

  // 初始化状态
  options.status = "uploading";
  options.progress = 0;

  // 开始动画
  updateProgress();

  // 返回停止函数
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (stopWatcher) {
      stopWatcher();
    }
  };
}
export default simulateUpload;
