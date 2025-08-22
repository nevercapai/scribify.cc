declare global {
  interface Window {
    CryptoJS: any;
  }
}
const CryptoJS = (window as any)?.CryptoJS;
const JSEncrypt = (window as any)?.JSEncrypt;
const EncryptRSAPublicKey = [
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxf6qmWmIgdttnhWPUXTbqKKXeoIn",
  "B5otnjB7elwAESf4m7rKKlnUC4",
  "Gf+LU5mFJ8zDqN5PhcucKj9i3FIG3HBx6j6vt8gR+m2sIEkintIXOGJY7PpN8pDzpE4N44fqgxiTKKefH9D8uGDGAwf9maL2gYXKW5BMuShWYSItjh9gnhPRW+xhCuLm1ERzJJVnPR+WM4NHw56c2cnRCwv7zGkGCm",
  "8GC",
  "5GT00y1ZCZilV6WBY4Kw2",
  "TehMhK0LbtL9ESe83e7ZuZhEcs8uHhwip3FrhHf8jPkRrxj4C4",
  "CDy3641RTEaEsCJxBocDwm2QYkNq0Z7hbrTqFB7dVKtuGQIDAQAB"
].join("/");

/**
 * RSA加密函数
 * @param {string} str - 要加密的字符串
 * @returns {string} 加密后的字符串
 */
export function EncryptRSA(str: string) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(EncryptRSAPublicKey);
  return encrypt.encrypt(str);
}

/**
 * 获取授权信息
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @returns {string} 授权信息
 */
export function getAuthorization(username: string, password: string) {
  let str = `${username}:uKE8e1${password}`;
  return "rsa " + EncryptRSA(str);
}

/**
 * 将UTC时间转换为本地时间
 * @param {string} utcTime - UTC时间字符串
 * @param {string} format - 时间格式，默认为"YYYY-MM-DD HH:mm:ss"
 * @returns {string} 本地时间字符串
 */
export function timeUTCToLocal(utcTime: string, format: string = "YYYY-MM-DD HH:mm:ss") {
  if (!utcTime) {
    return utcTime;
  }
  const dayjs = useDayjs();
  const utcObj = dayjs.utc(utcTime);
  const localObj = utcObj.local();
  const localDateTime = localObj.format(format);
  return localDateTime;
}

/**
 * 获取当前UTC时间
 * @returns {string} 当前UTC时间字符串
 */
export function getUTCTime() {
  const dayjs = useDayjs();
  const localObj = dayjs();
  const utcObj = localObj.utc();
  const utcTime = utcObj.format();
  return utcTime;
}

/**
 * 解密函数
 * @param {string} content - 要解密的内容
 * @returns {string} 解密后的内容
 */
export function Decrypt(content: string) {
  const config = {
    key: ["4", "%Y", "kW!", "@g5L", "Gcf", "9Ut"].join("")
  };
  try {
    return CryptoJS?.Decrypt(content, config);
  } catch (e) {
    return content;
  }
}

/**
 * 判断是否为移动设备
 * @returns {boolean} 是否为移动设备
 */
export function isMobile() {
  return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * 使用Object.prototype.toString.call判断对象类型
 * @param {any} obj - 要判断类型的对象
 * @returns {string} 对象类型
 */
export function getObjType(obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * 显示通知消息 https://element-plus.org/zh-CN/component/notification.html
 */
export function Msg(options: {
  title?: string;
  message: string;
  dangerouslyUseHTMLString?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  duration?: number;
  showClose?: boolean;
  type?: 'success' | 'warning' | 'info' | 'error';
  customClass?: string;
  appendTo?: any;
}) {
  const defaultOptions = {
    dangerouslyUseHTMLString: false,
    position: 'bottom-right',
    duration: 4500,
    showClose: true,
    type: 'info'
  };

  const mergedOptions = { ...defaultOptions, ...options };

  ElNotification({
    ...mergedOptions
  });
}

const Utils = {
  EncryptRSA,
  getAuthorization,
  timeUTCToLocal,
  getUTCTime,
  Decrypt,
  isMobile,
  getObjType,
  Msg
};

export default Utils;
