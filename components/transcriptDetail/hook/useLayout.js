import { ref, toRefs, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useMediaQuery } from "@vueuse/core";

export default function useLayout(props, langId) {
  const container = ref(null);
  const resizer = ref(null); // 拖拽分隔条引用
  const leftPanel = ref(null); // 左侧面板引用
  const rightPanel = ref(null); // 右侧面板引用
  const isDragging = ref(false);
  const startX = ref(0);
  const offsetX = ref(0); // 临时拖拽偏移量
  const finalOffsetX = ref(0); // 持久化的最终偏移量
  const initialWidth = ref(0); // 初始宽度
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const dragEnabled = ref(false);
  const router = useRouter();
  const localePath = useLocalePath();
  const { isShowVideo, fileType } = toRefs(props.fileBaseInfo);
  isShowVideo.value ??= true;
  const { locale } = useI18n();
  const activeLanguage = useState("locale", () => locale.value);
  const isRtl = computed(() =>
    ["he-IL", "ar-SA"].includes(activeLanguage.value)
  );
  const lastFrameId = ref(null); // 用于rAF的引用
  const minPanelWidth = 450; // 最小面板宽度
  const throttleDelay = 10; // 节流延迟时间（毫秒）
  const lastThrottleTime = ref(0); // 上次执行的时间戳

  const isVideo = computed(() => {
    const mp4Type = ["MP4", "MOV", "MPEG", "WMV"];
    return !!mp4Type.find(
      (item) => item.toLowerCase() === fileType.value.toLowerCase()
    );
  });

  // 计算属性：当前布局样式
  const gridStyle = computed(() => {
    if (displayVideo.value) {
      // 使用固定初始布局，后续用transform实现拖拽
      return {
        "grid-template-columns": "1fr 1px 1fr",
        position: "relative",
        direction: isRtl.value ? "rtl" : "ltr"
      };
    }
    return {
      "grid-template-columns": "1fr",
      "grid-template-rows": "1fr",
      direction: isRtl.value ? "rtl" : "ltr"
    };
  });

  // 计算属性：分隔条样式
  const resizerStyle = computed(() => {
    const currentOffset = isDragging.value ? offsetX.value : finalOffsetX.value;
    return {
      transform: `translateX(${isRtl.value ? -currentOffset : currentOffset}px)`,
      transition: isDragging.value ? "none" : "transform 0.15s",
      "will-change": isDragging.value ? "transform" : "auto"
    };
  });

  // 计算属性：左侧面板样式（在RTL下，这是视觉上的右侧面板）
  const leftPanelStyle = computed(() => {
    const currentOffset = isDragging.value ? offsetX.value : finalOffsetX.value;
    // 在RTL布局中，"左侧"面板视觉上在右侧，宽度需要根据拖拽减少或增加
    if (isRtl.value) {
      return {
        width: `calc(100% + ${currentOffset}px)`,
        transition: isDragging.value ? "none" : "width 0.15s",
        "will-change": isDragging.value ? "width" : "auto"
      };
    } else {
      // LTR布局，左侧面板宽度随拖拽增加
      return {
        width: `calc(100% + ${currentOffset}px)`,
        transition: isDragging.value ? "none" : "width 0.15s",
        "will-change": isDragging.value ? "width" : "auto"
      };
    }
  });

  // 计算属性：右侧面板样式（在RTL下，这是视觉上的左侧面板）
  const rightPanelStyle = computed(() => {
    let currentOffset = isDragging.value ? offsetX.value : finalOffsetX.value;
    if (!displayVideo.value) {
      currentOffset = 0;
    }
    if (isRtl.value) {
      // RTL布局，"右侧"面板视觉上在左侧，需要向左移动并增加宽度
      return {
        transform: `translateX(${-currentOffset}px)`,
        transition: isDragging.value ? "none" : "transform 0.15s",
        width: `calc(100% - ${currentOffset}px)`,
        "will-change": isDragging.value ? "transform, width" : "auto"
      };
    } else {
      // LTR布局，右侧面板向右移动且宽度减少
      return {
        transform: `translateX(${currentOffset}px)`,
        transition: isDragging.value ? "none" : "transform 0.15s",
        width: `calc(100% - ${currentOffset}px)`,
        "will-change": isDragging.value ? "transform, width" : "auto"
      };
    }
  });

  // 计算属性：是否显示视频
  const displayVideo = computed(() => {
    return (
      isVideo.value && isDesktop.value && isShowVideo.value && !langId.value
    );
  });

  // 重置布局
  const resetLayout = () => {
    offsetX.value = 0;
  };

  // 监听显示视频状态变化，重置布局
  watch(
    () => displayVideo.value,
    (newVal) => {
      if (newVal === false) {
        resetLayout();
      } else {
        offsetX.value = finalOffsetX.value;
      }
    }
  );

  // 监听RTL状态变化，重置布局
  watch(isRtl, () => {
    resetLayout();
  });

  // 启用拖拽
  const enableDrag = () => {
    if (isDesktop.value) {
      dragEnabled.value = true;
    }
  };

  // 禁用拖拽
  const disableDrag = () => {
    if (!isDragging.value) {
      dragEnabled.value = false;
    }
  };

  // 开始拖拽
  const handleDragStart = (e) => {
    if (!dragEnabled.value || !isDesktop.value || !container.value) return;
    isDragging.value = true;
    startX.value = e.clientX;
    initialWidth.value = container.value.offsetWidth / 2; // 初始宽度为容器的一半
    offsetX.value = finalOffsetX.value; // 从最后保存的位置开始拖拽

    // 添加事件监听
    window.addEventListener("mousemove", handleDrag, { passive: true });
    window.addEventListener("mouseup", handleDragEnd);

    // 防止文本选择
    document.body.classList.add("no-select");

    // 添加硬件加速类
    if (container.value) {
      container.value.classList.add("hardware-accelerated");
    }
  };

  // 处理拖拽（使用transform实现），添加节流处理减少计算频率
  const handleDrag = (e) => {
    if (!isDragging.value || !container.value) return;

    // 使用节流限制处理频率
    const now = Date.now();
    if (now - lastThrottleTime.value < throttleDelay) return;
    lastThrottleTime.value = now;

    // 取消之前的动画帧
    if (lastFrameId.value) {
      cancelAnimationFrame(lastFrameId.value);
    }

    // 使用requestAnimationFrame减少重绘次数
    lastFrameId.value = requestAnimationFrame(() => {
      // 计算鼠标移动的像素差
      const deltaX = e.clientX - startX.value;

      // 在RTL模式下反转方向，使其与视觉方向一致
      const effectiveDelta = isRtl.value ? -deltaX : deltaX;

      // 应用偏移量变化，使用整数值避免小数导致的额外渲染计算
      const newOffset = offsetX.value + effectiveDelta;
      offsetX.value = Math.round(newOffset);

      // 在LTR和RTL模式下保持相同的物理移动感觉（向右拖动增加右侧空间，向左拖动增加左侧空间）
      const containerWidth = container.value.offsetWidth;
      const halfWidth = containerWidth / 2;

      // 计算新的偏移量，并限制在合理范围内
      const maxOffset = halfWidth - minPanelWidth; // 限制最小宽度
      offsetX.value = Math.max(-maxOffset, Math.min(offsetX.value, maxOffset));

      // 重置起始位置
      startX.value = e.clientX;
    });
  };

  // 结束拖拽
  const handleDragEnd = () => {
    isDragging.value = false;
    dragEnabled.value = false; // 结束后重置为未激活状态

    // 保存最终偏移量
    finalOffsetX.value = offsetX.value;

    // 取消可能还在进行的动画帧
    if (lastFrameId.value) {
      cancelAnimationFrame(lastFrameId.value);
      lastFrameId.value = null;
    }

    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("mouseup", handleDragEnd);

    // 移除防文本选择样式
    document.body.classList.remove("no-select");

    // 移除硬件加速类
    if (container.value) {
      container.value.classList.remove("hardware-accelerated");
    }
  };

  // 切换视频显示/隐藏
  const handelToggleVideo = () => {
    isShowVideo.value = !isShowVideo.value;
  };

  const handleBack = () => {
    const jumpTranscriptOrigin = window.sessionStorage.getItem(
      "jumpTranscriptOrigin"
    );
    if (jumpTranscriptOrigin && jumpTranscriptOrigin.startsWith("/")) {
      window.sessionStorage.removeItem("jumpTranscriptOrigin");
      return router.push({
        path: jumpTranscriptOrigin
      });
    }
    router.push({
      path: localePath("/")
    });
  };
  const devicePixelRatioDiff = ref(1);
  // 初始化组件时设置样式
  onMounted(() => {
    devicePixelRatioDiff.value = window.devicePixelRatio;
    if (
      props.fileBaseInfo.finalOffsetX &&
      props.fileBaseInfo.devicePixelRatioDiff === devicePixelRatioDiff.value
    ) {
      offsetX.value = props.fileBaseInfo.finalOffsetX;
      finalOffsetX.value = offsetX.value;
    }
    // 添加支持硬件加速的全局样式
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .hardware-accelerated * {
        transform: translateZ(0);
      }
    `;
    document.head.appendChild(styleEl);
  });

  return {
    container,
    resizer,
    leftPanel,
    rightPanel,
    isDragging,
    isDesktop,
    dragEnabled,
    isShowVideo,
    displayVideo,
    gridStyle,
    resizerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resetLayout,
    enableDrag,
    disableDrag,
    handleDragStart,
    handelToggleVideo,
    handleBack,
    devicePixelRatioDiff,
    finalOffsetX
  };
}
