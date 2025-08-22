// composables/useZoomReset.js
export const useZoomReset = () => {
  const isIos = () => {
    if (!process.client) return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  };
  const forceResetZoom = (emit: any) => {
    if (!process.client) return;

    if (isIos()) {
      window.location.href = window.location.pathname + "?r=" + Date.now();
      return;
    } else {
      emit("update:beginnersTutorial", true);
    }

    // 获取当前viewport设置
    let viewport = document.querySelector(
      'meta[name="viewport"]'
    ) as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.name = "viewport";
      document.head.appendChild(viewport);
    }

    // 临时禁用缩放并强制重置
    const originalContent = viewport.content;
    viewport.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";

    // 触发重绘
    document.body.style.zoom = "1";

    // 短暂延迟后恢复设置
    setTimeout(() => {
      viewport.content =
        originalContent || "width=device-width, initial-scale=1.0";
      document.body.style.zoom = "";
    }, 100);
  };

  const RESET_COOLDOWN = 90000; // 10秒冷却时间
  const detectAndReset = (emit: any) => {
    if (!process.client) return false;

    // 检测多种缩放指标
    const checks = [
      window.visualViewport && window.visualViewport.scale > 1.01,
      window.innerWidth / document.documentElement.clientWidth < 0.99,
      window.devicePixelRatio !==
        (window.screen?.availWidth / window.innerWidth || 1)
    ];

    const isZoomed = checks.some((check) => check);

    if (isZoomed) {
      const resetParam = new URLSearchParams(location.search).get("r");
      const timeSinceReset = resetParam
        ? Date.now() - parseInt(resetParam)
        : RESET_COOLDOWN + 1;

      if (timeSinceReset >= RESET_COOLDOWN) {
        forceResetZoom(emit);
        return !isIos();
      }
    }

    emit("update:beginnersTutorial", true);

    return true;
  };

  return {
    forceResetZoom,
    detectAndReset
  };
};
