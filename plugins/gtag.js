// plugins/gtag.js
export default defineNuxtPlugin((nuxtApp) => {
  // export default ({ app }) => {
  if (process.client) {
    // 插入 gtag 脚本
    (function () {
      const script = document.createElement("script");
      script.async = true;
      const config = useRuntimeConfig();
      let gtagId  = config.public.gtagId;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", gtagId);
    })();

    // 封装全局事件上报方法
    const trackEvent = (
      action,
      category,
      label,
      value = null,
      customParams = {}
    ) => {
      console.log(
        location.href,
        "《---trackEvent===》",
        action,
        category,
        label,
        (value = null),
        (customParams = {})
      );
      if (window.gtag) {
        window.gtag("event", action, {
          location: location.href,
          event_category: category,
          event_label: label,
          ...(value !== null ? { value } : {}),
          ...customParams // 合并自定义参数
        });
      }
    };
    // 注入到全局
    nuxtApp.provide("gtagEvent", trackEvent);

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
  }
});
