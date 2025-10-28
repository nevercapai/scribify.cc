import { ref, reactive } from 'vue';
import { Decrypt, getUTCTime, timeUTCToLocal } from './tools';
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie.js";

// 扩展 window 类型
declare global {
  interface Window {
    $customer_detail_pre_v2?: string;
    $customer_detail_index_v2?: string;
  }
}

interface WebhookUrl {
  testing: string;
  production: string;
  customDataTesting: string;
  customDataProduction: string;
  privatization?: string;
  customDataTesting_fs: string;
  customDataProduction_fs: string;
}

export function useErrorReporting() {
  // 环境 host
  const testingEnvHosts = ['localhost-', 'scribify.cc', 'app.scribify.cc', 'scribify.ai', 'app.scribify.ai'];
  const productionEnvHosts = ['nevercap.ai', 'app.nevercap.ai'];

  // webhook url
  const webhookUrl: WebhookUrl = {
    testing: Decrypt('ebxaZVDU7KprTl8QqXbhxqRUZ7ipw5mZByuwwtc+er4HJj+vFnAujkKjoemPJVsWNn4icdt1nUeX210KDzKRw3IaYbrnWg8xg0bNQZxXq2QDzqnnQEERO9gCUepFBOgB'),
    production: Decrypt('ebxaZVDU7KprTl8QqXbhxqRUZ7ipw5mZByuwwtc+er5z8kaTSbyjBzc7ujtTE1C0QR5DOwl4sBUxXe/2LSe61QmadvqX1fTc1W1YzrbD4u08jYUb0gBpdPk2/upNMsoV'),
    customDataTesting: Decrypt('ebxaZVDU7KprTl8QqXbhxqRUZ7ipw5mZByuwwtc+er46sfroN5SV+DN5CoRHcr/lVtYH1E1VYJlHN0JifMZMdBzWJAv3yoASlH10SA5K3ZSR54eBhz9ttmOzxzZg1nIc'),
    customDataProduction: Decrypt('ebxaZVDU7KprTl8QqXbhxqRUZ7ipw5mZByuwwtc+er6pzXM+Xgb1GvVTlQyso0uD5MqkdSNNL73IlTgvcNeRmFnIQZlMhXZAIV2YPjnNg07aHwEvAJ61aq38Jmwiqi8P'),
    customDataTesting_fs: Decrypt("CLTxMbk1XJ3zRmaS1aQevWlQvHvb5BUqfsR2Rdwx9t0Jq3VA0U6R/zeTpaAcP1Mh"),
    customDataProduction_fs: Decrypt("Uft4YPDIVqsAljl9hjpyjeA3uFS40eR4bLzJa92mV4AJq3VA0U6R/zeTpaAcP1Mh")

  };

  // 日志内容
  const logArr = ref<any[]>([]);

  // 获取 webhook url
  function getWebhookUrl(customData = true) {
    const { hostname } = window.location;
    if (productionEnvHosts.includes(hostname)) {
      return customData ? webhookUrl.customDataProduction : webhookUrl.production;
    }
    if (testingEnvHosts.includes(hostname)) {
      return customData ? webhookUrl.customDataTesting : webhookUrl.testing;
    }
    // return customData ? webhookUrl.customDataTesting : webhookUrl.testing;
    return '';
  }

  // 系统报错日志通知
  let TanmaUser: any[] = [];
  try {
    TanmaUser = JSON.parse(Decrypt('MIBo35PvYLv/tH+m9TgpfW+O1WsHQEcvrDaGj6AMnxY8P/BjIJsBkpaHXV+tj9LDqwGHwzP40EKgOZgctDxC6uophKlOQgcR7vMtWgEd22YaIwVBQ4dAYvg7ivpe1T1ZBX6Fm0khNqDcS0XIjce5iBXWxiNwqS934Djwow7Z+LMX0VIqO9n60o/TS2H0PtYIk95AxCpUjSiSjPoAImT0arFMdDynW48iW35thOrxAh+CTGqKEV5m0hyhts//UZIy7UDqacHSolu3hgy9+znsEjW4ZCtuomypUhLuG77DrK/yVSbcp9yKOBwFgkj8n8HFzJGy77xbN4nEaa+0gM9PMmqk1iiHeqVVO//ly/mbgnQ3azafDrCRI248jfFj21J3B9NDae74WumK2NF82Y7pNcafXMGvD8jqB8gNoz0muDmxnaKF508U0nPLXWjNWNp2I+n7uCluES0TBbY1EaCXQo0zSDpWzAlzFlkUZP4zP1fLBwU+lr+oPVFsfl2/R2r4OJSBDzcWozU5mPNjuAEDvxgCoCdTClRFh96xsoxhgnCyukppiDj1voWltrr1BMMNxhDlQzwRlrbRiAPhcU9FqC0rnZlMwWKLv7N5yTHP46Gal+jwnP/77jAR3bzwuasVGNTEbvmusFulcUTaec/RN9FHyXAYNdo8BsB0bUy2UQUvTuxvnlWwh369HcNBIEWlwjFuCJQ3ckPAzPKXZfgFlNLbbxa2qKpUgvmOE/Wa4ROEKwEF6X24UEklK3LZWp26KrGb/l8+W0OG6UFinTAF5TyzfkUdWJyipMvv9H2hjZZBHGx+7dbBdYYRuiAxG6ZnDLDAzFWUpbSEoULBEcrhLzHyi+WxbdUvKLx9QjU9wZ2PQ+F43dRGLHdGLPlTZm+yXsdygJXMHTseC/tY2URd++RuGoyXMH0VoNlWFRwvXfFn7GpDrnzZRvQ49IscsVwOogJttSZRCxFJfSOoYFGdwEBvzxUPBeirT0iiGPe3vKxqCxX4yBU/YbAN01Co6n/Kwwnb8LOJNJo+BR8WuMBzR26cbieEI6hmaR86pPDLI16dOx8smFeK+V0ojuSe84+4FcA2kQ/ghoImF6TnyT+1cMuYuYdrFB/94WhmH6uzErU1sb1Ur2/DgKSZ81RsG2XK'))
  } catch (err) {
    console.log("err", err);
  }
  const exceptCode = [401, 610013, 140012];
  /**
   * 401 用户登录过期需要重新登录
   * 610013  游客信息如果被清理了   再进入详情或者分享就会报   页面会显示not found
   * 140012  google帐号但是使用了帐号密码登录
   */
  function reportSystemError(res: any, customData = true) {
    const email = useCrossDomainCookie('userInfoEmail');
    const url = res?.url;
    const headers = res?.headers || new Map();
    const data = res?._data;
    const exceptCodeFlag = (data?.code && exceptCode.includes(data?.code)) || false;
    if (exceptCodeFlag) {
      customData = true;
    }
    const webhook = getWebhookUrl(customData);
    if (!webhook) return;
    const connectionResult = getConnection();
    const buildInfo = getBuildInfo();
    let storageData = JSON.parse(JSON.stringify(window.localStorage));
    delete storageData.Blogs_response;
    let params: Record<string, any> = {
      访问服务: 'Nevercap Web',
      页面地址: location.href,
      cardType1: 'hr',
      接口地址: url,
      code: data?.code,
      message: data?.message || '',
      status: res?.status,
      statusText: res?.statusText,
      cardType3: 'hr',
      服务端debugID: headers?.get('x-debug-request-id'),
      服务端date: headers?.get('date'),
      cardType4: 'hr',
      客户端UTCTime: getUTCTime(),
      客户端LocalTime: timeUTCToLocal(getUTCTime()),
      cardType5: 'hr',
      接口数据: JSON.stringify(res),
      cardType6: 'hr',
      系统信息: window.navigator.userAgent,
      cardType7: 'hr',
      缓存数据: JSON.stringify(storageData),
      内部账号: TanmaUser.includes(email.value) ? `是【${email.value}】` : `否【${email.value}】`,
      cardType8: "hr",
      ...buildInfo,
      cardType9: "hr",
      ...connectionResult
    };
    if ((customData && !exceptCodeFlag) || (!url && !data)) {
      params = {
        访问服务: 'Nevercap Web',
        上报类型: 'customData',
        页面地址: location.href,
        cardType1: 'hr',
        客户端UTCTime: getUTCTime(),
        客户端LocalTime: timeUTCToLocal(getUTCTime()),
        cardType2: 'hr',
        系统信息: window.navigator.userAgent,
        cardType3: 'hr',
        缓存数据: JSON.stringify(storageData),
        内部账号: TanmaUser.includes(email.value) ? `是【${email.value}】` : `否【${email.value}】`,
        cardType4: 'hr',
        ...buildInfo,
        cardType5: "hr",
        ...connectionResult,
        cardType6: "hr"
      };
      try {
        for (let key in res) {
          params[key] = res[key]
        }
      } catch (err) {
        navigator.sendBeacon(webhook, JSON.stringify(res));
      }
    }
    logArr.value = [];
    for (const [label, value] of Object.entries(params)) {
      if (value === 'hr') {
        logArr.value.push({ tag: 'hr' });
      } else {
        logArr.value.push({
          tag: 'div',
          text: {
            tag: 'lark_md',
            content: `**${label}:** ${value}`
          }
        });
      }
    }
    logArr.value.push(
      { tag: 'hr' },
      {
        elements: [
          { content: '[来自系统报错日志通知]', tag: 'lark_md' }
        ],
        tag: 'note'
      }
    );
    const message = {
      msg_type: 'interactive',
      card: {
        config: {
          wide_screen_mode: true,
          enable_forward: true,
          update_multi: true
        },
        header: {
          title: {
            tag: 'plain_text',
            content: '系统报错日志通知'
          },
          template: 'red'
        },
        elements: logArr.value
      }
    };
    if (res['接口耗时'] && productionEnvHosts.includes(window.location.hostname)) {
      const fsWebhook = productionEnvHosts.includes(window.location.hostname) ? webhookUrl.customDataProduction_fs : webhookUrl.customDataTesting_fs;
      navigator.sendBeacon(fsWebhook, JSON.stringify(message));
    }

    navigator.sendBeacon(webhook, JSON.stringify(message));
    logArr.value = [];
  }

  function getConnection() {
    let connectionResult = {};
    try {
      // 更全面的检查确保 navigator 和 navigator.connection 存在
      if (typeof navigator !== "undefined" && "connection" in navigator) {
        const connection =
          (navigator as any)?.connection ||
          (navigator as any)?.mozConnection ||
          (navigator as any)?.webkitConnection;

        // 确保 connection 对象存在且有效
        if (connection) {
          connectionResult = {
            "Downlink speed: ": connection.downlink + "Mbps",
            "网络连接类型 Effective Type: ": connection.effectiveType,
            "往返时间 RTT: ": connection.rtt + "ms",
            "是否启用了数据节省模式 Save Data: ": connection.saveData
          };
        } else {
          connectionResult = {
            msg: "navigator.connection API is not supported or not available."
          };
        }
      } else {
        connectionResult = {
          msg: "navigator.connection API is not supported in this environment."
        };
      }
    } catch (error) {
      connectionResult = {
        msg: `navigator.connection API 报错: ${JSON.stringify(error)}`
      };
    }
    return connectionResult;
  }

  function getBuildInfo() {
    let buildInfo = {};
    try {
      const buildInfoStr = window.localStorage.getItem("buildInfo") || '{}';
      buildInfo = JSON.parse(buildInfoStr);
    } catch (error) {
      buildInfo = { msg: '获取构建信息报错' }
    }
    return buildInfo;
  }

  return {
    reportSystemError,
  };
}

export default useErrorReporting;


// import { useErrorReporting } from '~/utils/fsReport';
// const { reportSystemError } = useErrorReporting();
// // 系统报错
// reportSystemError(res, userInfo, introduction);
