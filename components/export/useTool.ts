export const useTool = () => {
  // 假进度条逻辑
  const progressTimerMap = ref<Record<any, any>>({});

  const startFakeProgress = (
    progressMap: Ref<Record<any, any>>,
    taskId: string
  ) => {
    // 确保初始进度存在
    if (!progressMap.value[taskId]) {
      progressMap.value[taskId] = 0;
    }

    const increment = () => {
      // 获取当前进度
      const currentProgress = progressMap.value[taskId];

      // 如果进度小于90，继续增加
      if (currentProgress < 90) {
        // 每次增加1-5的随机进度
        const increase = Math.random() * 4 + 1;

        // 确保不超过90
        if (progressMap.value[taskId] < 100) {
          progressMap.value[taskId] = Math.min(currentProgress + increase, 90);
        }

        // 1秒后再次更新
        setTimeout(increment, 1000);
      }
    };

    // 开始进度更新
    increment();
  };

  const downloadFile = async (url: string, fileName?: string): void => {
    // 验证URL
    // 不直接使用url的原因 a标签多次触发下载，a标签对于浏览器来说意味着页面跳转，无延迟多次触发跳转时，浏览器浏览器取消了访问上一个页面的请求
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      // 创建隐藏的a标签元素
      const link = document.createElement("a");
      link.href = blobUrl;
      link.style.display = "none";
      const name = fileName || url.split("/").pop() || "";
      link.setAttribute("download", decodeURIComponent(name));
      // 添加到DOM，触发点击，然后移除
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    } catch (error) {
      console.error("download err:", error);
    }
  };

  return {
    startFakeProgress,
    downloadFile
  };
};
