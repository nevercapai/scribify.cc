// 引入 vConsole
import VConsole from "vconsole";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    (function () {
      if (window?.localStorage.getItem("VConsoleShow")) {
        // 初始化 vConsole
        const vConsole = new VConsole();
        console.log("vConsole 已初始化");
      }
    })();
  }
});
