import { ofetch } from "ofetch";
import { Msg } from "~/utils/tools";
import { useErrorReporting } from "~/utils/fsReport";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";
import useJumpPage from "~/hooks/useJumpPage";
const { reportSystemError } = useErrorReporting();
const config = useRuntimeConfig();
const baseURL = config.public.baseUrl as string;
const { $mitt } = useNuxtApp();
function goToLogin() {
  if (process.client) {
    const userStore = useUserStore();
    const localePath = useLocalePath();
    userStore.setUserInfo("");
    console.log(2222, "🚀===");

    const userInfoEmailCookie = useCrossDomainCookie("userInfoEmail");
    setTimeout(() => {
      if (!userInfoEmailCookie.value) {
        userInfoEmailCookie.value = "";
        navigateTo(localePath("/"));
        return;
      }
      userInfoEmailCookie.value = "";
      $mitt.emit("goToEvent", { path: "/user/login" });
    }, 50);
  }
}
function responseReport(res: any) {
  let { response, options } = res;
  let data = response._data || {};
  const endTime = Date.now();
  const startTime = Number(options.headers.get("X-Date-Now")) || endTime;
  const resTime = Date.now() - startTime;
  let compareTime = 3000;
  let obj = {
    接口超时多少上报: `${compareTime}毫秒`,
    接口耗时: `${resTime}毫秒`,
    接口地址: response.url,
    服务端debugID: response.headers?.get("x-debug-request-id"),
    服务端date: response.headers?.get("date"),
    cardType5: "hr",
    code: data?.code,
    message: data?.message || "",
    status: response?.status,
    statusText: response?.statusText
  };
  if (resTime > compareTime) {
    reportSystemError(obj);
  }

  if (data?.code) {
    reportSystemError(response, false); // 报错上传
  }
}
// 创建请求实例
const request = ofetch.create({
  // 基础配置
  baseURL,
  // 请求拦截
  onRequest({ options }) {
    // 在这里可以添加token等认证信息
    let language = useNuxtApp().$i18n?.locale?.value || "en-US";
    const offset = -new Date().getTimezoneOffset() / 60;
    const utcOffset = `UTC${offset >= 0 ? "+" : ""}${offset}:00`;
    const token = useCrossDomainCookie("token");
    const headers = new Headers(options.headers);
    const XLanguage = headers.get("X-Language"); // 接口已经传了【X-Language】
    if (!XLanguage) {
      headers.set("X-Language", `${language}`); // 当前系统语言
    }
    headers.set("X-Time-Zone", `${utcOffset}`); // UTC偏移量
    headers.set("X-Date-Now", `${Date.now()}`); // Date.now()
    const Auth = headers.get("Authorization"); // 登录接口已经传了【Authorization】
    if (token.value && !Auth) {
      headers.set("Authorization", `Bearer ${token.value}`);
      options.headers = headers;
    } else {
      options.headers = headers;
    }
    // 添加邮箱到请求上下文，供后续使用
    // options.context = { email: currentEmail };
  },
  // 响应拦截
  onResponse(res) {
    try {
      responseReport(res);
    } catch (error) {
      console.log("🍎🍎 onResponse responseReport ~ error:", error);
    }
    return res.response._data;
  },
  // 错误处理
  onResponseError({ response, options }) {
    let data = response._data || {};
    const userInfoEmailCookie = useCrossDomainCookie("userInfoEmail");
    // const currentEmail = options.context?.email || ""; // 从请求上下文中获取邮箱
    if ([401].includes(data?.code)) {
      if (userInfoEmailCookie.value) {
        Msg({
          message:
            data?.message || data?.code || `${data?.error}【${data?.status}】`,
          type: "error"
        });
      }

      goToLogin();
      return Promise.reject(data);
    }
    try {
      reportSystemError(response, false); // 报错上传
    } catch (error) {
      console.log("🍎🍎 onResponseError reportSystemError ~ error:", error);
    }
    Msg({
      message:
        data?.message || data?.code || `${data?.error}【${data?.status}】`,
      type: "error"
    });
    goToLogin();
    return Promise.reject(response._data);
  }
});

export default request;
