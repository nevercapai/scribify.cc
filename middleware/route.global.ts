import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";
import useJumpPage from "~/hooks/useJumpPage";

export default defineNuxtRouteMiddleware((to, from) => {
  const isClient = process.client;
  const { $mitt } = useNuxtApp();
  // 判断页面 meta 是否需要登录
  if (to.meta.requireAuth) {
    // 这里根据你的 userStore 或 token 判断是否已登录
    const token = useCrossDomainCookie("token");
    // const userStore = useUserStore();
    if (!token.value) {
      console.log("navigateTo_1");
      // 未登录，跳转到登录页
      return $mitt.emit("goToEvent", { path: "/user/login" });
    }
  }
  // 404 如果路由不存在，重定向到首页
  if (!to.matched.length) {
    console.log("navigateTo_2");
    return $mitt.emit("goToEvent", { path: "/user/login" });
  }
  if (!isClient) {
    return;
  }
  // 生产环境，如果路由包含 zzTest，则重定向到首页。除非缓存设置有值
  const isPro = process.env.NODE_ENV === "production"; // 生产环境
  if (
    isPro &&
    to.fullPath.includes("/zzTest/") &&
    !window.localStorage.getItem("zzTest")
  ) {
    console.log("navigateTo_3");
    return $mitt.emit("goToEvent", { path: "/user/login" });
  }
  // 页面跳转
  if (from.name !== undefined) {
    const path = to.path;
    if (path.includes("/transcript/") && !from.path.includes('/getPro')) {
      window.sessionStorage.setItem("jumpTranscriptOrigin", from.path);
    }
  }
});
