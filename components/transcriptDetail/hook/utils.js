import { useIntervalFn } from "@vueuse/core";

export const getParagraphElement = async (pData, paraId, dynamicScroller) => {
  if (!dynamicScroller) return false;
  const paraIndex = pData.findIndex((p) => p.pid === paraId);
  let isExistVirtualItemWrap = document.querySelector(`.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`);

  if (isExistVirtualItemWrap) {
    return { scrolled: false, paragraphElement: isExistVirtualItemWrap };
  }

  dynamicScroller.scrollToItem(paraIndex);
  let count = 0;

  return new Promise((resolve) => {
    const { pause } = useIntervalFn(() => {
      count++;
      let isExistVirtualItemWrap = document.querySelector(
        `.virtual-item-wrap[data-pid="${paraId}"][data-active="true"]`
      );
      if (isExistVirtualItemWrap || count >= 20) {
        // 暂停 清理定时器
        pause();
        return resolve({
          scrolled: true,
          paragraphElement: isExistVirtualItemWrap
        });
      }
    }, 50);
  });
};
// 滚动句子
export const scrollToSpecificWord = (containerElement, sid) => {
  if (!containerElement) return;
  try {
    // 尝试找到具体的句子
    const targetSpan = containerElement?.querySelector(`.sentence-wrapper[data-sid="${sid}"]`);

    let elementToScroll = targetSpan || containerElement;
    // 执行滚动
    elementToScroll?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  } catch (error) {
    console.warn("Error in scrollToSpecific:", error);
  }
};
export const isChildInParentViewport = (parent, child, partiallyVisible = true) => {
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();

  // 计算父元素内容区域
  const parentContentArea = {
    top: parentRect.top + parent.clientTop,
    left: parentRect.left + parent.clientLeft,
    right: parentRect.left + parent.clientLeft + parent.clientWidth,
    bottom: parentRect.top + parent.clientTop + parent.clientHeight
  };

  // 检查子元素是否在父元素内容区内
  const isInsideVertically = partiallyVisible
    ? childRect.top < parentContentArea.bottom && childRect.bottom > parentContentArea.top
    : childRect.top >= parentContentArea.top && childRect.bottom <= parentContentArea.bottom;

  const isInsideHorizontally = partiallyVisible
    ? childRect.left < parentContentArea.right && childRect.right > parentContentArea.left
    : childRect.left >= parentContentArea.left && childRect.right <= parentContentArea.right;

  return isInsideVertically && isInsideHorizontally;
};
export const isIos = () => {
  if (!process.client) return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};
export const dialogOpen = (dialogClass, handle) => {
  const el = document.querySelector(dialogClass);
  el._enterCloseHandler = (e) => {
    if (e.keyCode !== 13) return;
    setTimeout(() => {
      handle();
    }, 10);
  };
  document.addEventListener("keydown", el._enterCloseHandler);
};
export const dialogClose = (dialogClass) => {
  const el = document.querySelector(dialogClass);
  document.removeEventListener("keydown", el._enterCloseHandler);
  delete el._enterCloseHandler;
};
export const formatSecondsFromMs = (totalSeconds, hourAuto = false) => {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = parseInt(totalSeconds % 60);

  // 格式化为字符串
  const formattedDays = days > 0 ? `${days}d ` : "";
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  if (days > 0) {
    return `${formattedDays}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  if (hourAuto && hours < 1) {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
