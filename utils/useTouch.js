export const useTouch = () => {
  let lastTouchEnd = 0;

  const touchStart = (event) => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  };
  const touchEnd = (event) => {
    let now = new Date().getTime();
    if (now - lastTouchEnd <= 500) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  };

  const gestureStart = (event) => {
    event.preventDefault();
  };

  // 开始监听触摸事件
  const startTouchListening = () => {
    if (!process.client) return;

    document.addEventListener("touchstart", touchStart, { passive: false });
    document.addEventListener("touchend", touchEnd, { passive: false });
    document.addEventListener("gesturestart", gestureStart, { passive: false });
  };

  // 停止监听触摸事件
  const stopTouchListening = () => {
    if (!process.client) return;

    document.removeEventListener("touchstart", touchStart);
    document.removeEventListener("touchend", touchEnd);
    document.removeEventListener("gesturestart", gestureStart);
  };

  return {
    startTouchListening,
    stopTouchListening
  };
};
