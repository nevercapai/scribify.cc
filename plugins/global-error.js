// plugins/global-error.js
import { useErrorReporting } from "~/utils/fsReport";
import { getObjType } from "~/utils/tools";

// 限制递归深度
const MAX_RECURSION_DEPTH = 2;

// 需要忽略的错误源列表
const IGNORED_ERROR_SOURCES = ["https://accounts.google.com/gsi/client"];

// 缓存已处理的错误，避免重复上报
const reportedErrors = new Set();

// 生成错误唯一标识
const getErrorSignature = (error) => {
  if (error instanceof Error) {
    return `${error.name}:${error.message}:${error.stack}`;
  }
  return JSON.stringify(error);
};

const getParams = (event) => {
  const eventProps = {};

  function getAllProperties(obj) {
    const props = new Set();
    let currentObj = obj;
    let level = 0;

    while (currentObj && level < MAX_RECURSION_DEPTH) {
      Object.getOwnPropertyNames(currentObj).forEach((prop) => props.add(prop));
      currentObj = Object.getPrototypeOf(currentObj);
      level++;
    }
    return Array.from(props);
  }

  function setEventProps(event, level, pre = "") {
    if (level > MAX_RECURSION_DEPTH || !event) {
      return;
    }

    const allProps = getAllProperties(event);
    allProps.forEach((key) => {
      try {
        const value = event[key];
        const type = getObjType(value);

        if (["String", "Error"].includes(type) && (value || value === 0)) {
          if (isNaN(key / 1)) {
            const fullKey = pre ? `${pre}.${key}` : key;
            eventProps[fullKey] = JSON.stringify(value);
          }
        } else if (
          ["HTMLScriptElement", "Object"].includes(type) &&
          value !== null
        ) {
          setEventProps(value, level + 1, key);
        }
      } catch (e) {
        eventProps[key] = `[Error getting property ${key}]`;
      }
    });
  }

  setEventProps(event, 1);
  return eventProps;
};

const { reportSystemError } = useErrorReporting();

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // 延迟初始化错误处理，确保不影响页面加载性能
    onNuxtReady(() => {
      // 资源加载错误处理
      window.addEventListener(
        "error",
        (event) => {
          try {
            // 检查是否需要忽略该错误
            if (
              event?.target?.src &&
              IGNORED_ERROR_SOURCES.some((source) =>
                event.target.src.includes(source)
              )
            ) {
              return;
            }

            const errorSignature = getErrorSignature(event);
            if (reportedErrors.has(errorSignature)) {
              return; // 避免重复上报
            }
            reportedErrors.add(errorSignature);

            const eventProps = getParams(event);
            const obj = {
              资源加载失败: JSON.stringify(event),
              ...eventProps
            };

            console.error("资源加载失败:", event, obj);
            reportSystemError(obj);
          } catch (e) {
            console.error("资源加载失败处理异常:", e);
          }
        },
        true
      );

      // 未捕获的Promise错误处理
      window.addEventListener("unhandledrejection", (event) => {
        try {
          const errorSignature = getErrorSignature(event.reason);
          if (reportedErrors.has(errorSignature)) {
            return; // 避免重复上报
          }
          reportedErrors.add(errorSignature);

          const eventProps = getParams(event);
          const obj = {
            未捕获的Promise错误: JSON.stringify(event),
            ...eventProps
          };

          console.error("未捕获的Promise错误:", event, obj);
          reportSystemError(obj);
        } catch (e) {
          console.error("未捕获的Promise错误处理异常:", e);
        }
      });
    });
  }

  // Vue错误处理
  nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
    try {
      const errorSignature = getErrorSignature(err);
      if (reportedErrors.has(errorSignature)) {
        return; // 避免重复上报
      }
      reportedErrors.add(errorSignature);

      const errProps = getParams(err);
      const infoProps = getParams(info);
      const obj = {
        Vue错误: JSON.stringify(err),
        ...errProps,
        ...infoProps
      };

      console.error("Vue错误:", err, info, obj);
      reportSystemError(obj);
    } catch (e) {
      console.error("Vue错误处理异常:", e);
    }
  };
});
