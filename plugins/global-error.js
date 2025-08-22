import { useErrorReporting } from "~/utils/fsReport";
import { getObjType } from "~/utils/tools";
const getParams = (event) => {
  // 获取所有属性，包括不可枚举和继承属性
  function getAllProperties(obj) {
    const props = new Set();
    let currentObj = obj;
    while (currentObj) {
      Object.getOwnPropertyNames(currentObj).forEach((prop) => props.add(prop));
      currentObj = Object.getPrototypeOf(currentObj);
    }
    return Array.from(props);
  }
  function setEventProps(event, level, pre = "") {
    if (level > 3) {
      return;
    }
    level++;
    const allProps = getAllProperties(event); // 获取事件对象的所有属性
    allProps.forEach((key) => {
      let value = event[key];
      let type = getObjType(value);
      try {
        if (["String", "Error"].includes(type) && (value || value === 0)) {
          if (isNaN(key / 1)) {
            if (!eventProps[key]) {
              eventProps[key] = JSON.stringify(value);
            } else {
              if (eventProps[key] !== JSON.stringify(value)) {
                eventProps[`${pre}.${key}`] = JSON.stringify(value);
              }
            }
          }
        } else if (["HTMLScriptElement"].includes(type)) {
          setEventProps(value, level, key);
        } else if (["Object"].includes(type)) {
          setEventProps(value, level, key);
        } else {
          // todo NoThing ['Array', 'Function', 'Date', 'Boolean', 'RegExp', 'Undefined', 'Null']
        }
      } catch (e) {
        eventProps[key] = `[Error getting property ${key}]`;
      }
    });
  }
  const eventProps = {};
  setEventProps(event, 1);

  console.log("事件对象完整属性eventProps:", eventProps);
  return eventProps;
};
const { reportSystemError } = useErrorReporting();
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.addEventListener(
      "error",
      (event) => {
        // 这里可以上报错误或自定义处理
        let eventProps = getParams(event);
        let obj = {
          资源加载失败: JSON.stringify(event),
          ...eventProps
        };

        const arr = ["https://accounts.google.com/gsi/client"];
        if (obj?.src && arr.filter((item) => obj?.src?.includes(item)).length) {
          return; // google 登录脚本加载错误，不上报。开代理后解决
        }
        console.error("资源加载失败:", event, obj);
        try {
          reportSystemError(obj);
        } catch (e) {
          console.error("资源加载失败 reportSystemError:", e);
        }
      },
      true
    ); // 第三个参数 true 表示捕获阶段，可以捕获资源加载错误

    window.addEventListener("unhandledrejection", (event) => {
      // 处理未捕获的Promise错误
      let eventProps = getParams(event);
      let obj = {
        未捕获的Promise错误: JSON.stringify(event),
        ...eventProps
      };
      console.error("未捕获的Promise错误:", event, obj);
      try {
        reportSystemError(obj);
      } catch (e) {
        console.error("未捕获的Promise错误 reportSystemError:", e);
      }
    });
  }
  nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
    // 这里可以上报错误

    let errProps = getParams(err);
    let infoProps = getParams(info);
    let obj = {
      Vue错误: JSON.stringify(err),
      ...errProps,
      ...infoProps
    };
    console.error("Vue错误:", err, info, obj);
    try {
      reportSystemError(obj);
    } catch (e) {
      console.error("Vue错误 reportSystemError:", e);
    }
  };
});
