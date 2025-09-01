// plugins/gtag.js
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // 延迟加载 GTAG 脚本，避免阻塞页面渲染
    onNuxtReady(() => {
      const config = useRuntimeConfig();
      const gtagId = config.public.gtagId;

      if (!gtagId) {
        console.warn("GTAG ID not configured");
        return;
      }

      // 检查是否已加载
      if (window.dataLayer && window.gtag) {
        return;
      }

      // 初始化 dataLayer
      window.dataLayer = window.dataLayer || [];

      // 定义 gtag 函数
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;

      // 加载 GTAG 脚本
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
      script.onload = () => {
        gtag("js", new Date());
        gtag("config", gtagId);
      };
      script.onerror = () => {
        console.error("Failed to load GTAG script");
      };

      document.head.appendChild(script);
    });

    // 封装全局事件上报方法
    const trackEvent = (
      action,
      category,
      label,
      value = null,
      customParams = {}
    ) => {
      // 开发环境下可选地打印日志
      if (process.env.NODE_ENV === "development") {
        console.log(
          location.href,
          "《---trackEvent===》",
          action,
          category,
          label,
          value,
          customParams
        );
      }

      if (window.gtag) {
        const eventParams = {
          event_category: category,
          event_label: label,
          ...customParams
        };

        // 只有当 value 不为 null 时才添加
        if (value !== null) {
          eventParams.value = value;
        }

        window.gtag("event", action, eventParams);
      }
    };

    // 注入到全局
    nuxtApp.provide("gtagEvent", trackEvent);
  }
});

// 组件中使用       事件类型  事件分类 事件标签
// (useNuxtApp().$gtagEvent as Function)('click', 'LOGO_Btn', 'Back to Home');

// 参数说明
// action（事件类型）：如 'click'、'submit'、'play' 等
// category（事件分类）：如 'CTA'、'Button'、'Form' 等
// label（事件标签）：如 'Homepage Banner'、'Login Form' 等
// value（可选，数值）：如 1、100 等

// 1. 事件类型（action） 可以自定义
// 事件类型（action）是你自定义的，常见的有：
// 'click'：点击（最常用）
// 'submit'：表单提交
// 'play'：视频播放
// 'pause'：视频暂停
// 'download'：下载
// 'scroll'：滚动
// 'view'：浏览/曝光
// 'share'：分享
// 'login'：登录
// 'signup'：注册
// 'add_to_cart'：加入购物车
// 'purchase'：购买

// 2. 事件分类（category）
// 事件分类（category）一般用来归类事件，常见的有：
// 'CTA'：号召性用语按钮（如“立即购买”按钮）
// 'Button'：普通按钮
// 'Form'：表单
// 'Video'：视频
// 'Banner'：横幅
// 'Menu'：菜单
// 'Ad'：广告
// 'Link'：链接
// 'Product'：产品
// 'User'：用户相关
