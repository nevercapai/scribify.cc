import "dayjs/locale/zh-cn"; // Chinese (China)
import "dayjs/locale/zh-tw"; // Chinese (Taiwan)
import "dayjs/locale/da"; // Danish
import "dayjs/locale/de"; // German
import "dayjs/locale/en"; // English
import "dayjs/locale/es"; // Spanish
import "dayjs/locale/fr"; // French
import "dayjs/locale/it"; // Italian
import "dayjs/locale/hu"; // Hungarian
import "dayjs/locale/nl"; // Dutch
import "dayjs/locale/nb"; // Norwegian Bokmål
import "dayjs/locale/pl";
import "dayjs/locale/pt";
import "dayjs/locale/fi";
import "dayjs/locale/sv";
import "dayjs/locale/tr";
import "dayjs/locale/el";
import "dayjs/locale/ru";
import "dayjs/locale/uk";
import "dayjs/locale/he";
import "dayjs/locale/ar";
import "dayjs/locale/ko";
import "dayjs/locale/ja";
import "dayjs/locale/el";

import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";

export const useTime = () => {
  const specialMappings = {
    "zh-CN": "zh-cn", // 简体中文
    "zh-TW": "zh-tw", // 繁体中文
    "da-DK": "da", // 丹麦语
    "de-DE": "de", // 德语
    "en-US": "en", // 英语（美国）
    "es-ES": "es", // 西班牙语
    "fr-FR": "fr", // 法语
    "it-IT": "it", // 意大利语
    "hu-HU": "hu", // 匈牙利语
    "nl-NL": "nl", // 荷兰语
    "no-NO": "nb", // 挪威语（Bokmål）
    "pl-PL": "pl", // 波兰语
    "pt-PT": "pt", // 葡萄牙语
    "fi-FI": "fi", // 芬兰语
    "sv-SE": "sv", // 瑞典语
    "tr-TR": "tr", // 土耳其语
    "el-GR": "el", // 希腊语
    "ru-RU": "ru", // 俄语
    "uk-UA": "uk", // 乌克兰语
    "he-IL": "he", // 希伯来语
    "ar-SA": "ar", // 阿拉伯语
    "ko-KR": "ko", // 韩语
    "ja-JP": "ja" // 日语
  };

  const dayjs = useDayjs();
  dayjs.extend(localizedFormat);
  dayjs.extend(timezone);

  const getTime = (
    utcTime: string,
    day?: any,
    monthAndDay?: any,
    yearMonthDay?: any
  ) => {
    const i18n = useI18n();
    const local = i18n.locale.value;
    // 1. 解析为 dayjs 对象（此时是 UTC 时间对象）
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const utcObj = dayjs.utc(utcTime).tz(userTimeZone);
    // 2. 转成本地时间对象
    const localObj = utcObj.locale(specialMappings?.[local] || "en");
    if (day) {
      const daySuffixes = Array.from({ length: 32 }, (_, day) => {
        if (day >= 11 && day <= 13) return "th";
        switch (day % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      });
      if (local === "en-US") {
        return (
          dayjs(localObj).format("D") +
          daySuffixes[Number(dayjs(localObj).format("D"))]
        );
      }
      return dayjs(localObj).format("D");
    }
    if (monthAndDay) {
      return formatMonthDay(localObj, local);
    }
    if (yearMonthDay) {
      console.log(dayjs(localObj).format("ll"), "🚀===");

      return dayjs(localObj).format("ll");
    }

    if (local === "he-IL") {
      return dayjs(localObj).format("D MMMM YYYY, HH:mm");
    }
    if (local === "uk-UA") {
      return dayjs(localObj).format("D MMM YYYY р., HH:mm");
    }
    if (local === "el-GR") {
      return formatGreekDateTime(utcTime);
    }

    return dayjs(localObj).format("lll");
  };

  function formatGreekDateTime(utcTime: any) {
    // 首先用英文格式化
    const dateObj = dayjs
      .utc(utcTime)
      .tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const formattedDate = dateObj.format("D MMM YYYY, h:mm");

    // 然后手动添加希腊语的上午/下午指示器
    const hour = dateObj.hour();
    const amPm = hour < 12 ? "π.μ." : "μ.μ.";

    return `${formattedDate} ${amPm}`;
  }
  function formatMonthDay(date: any, browserLocale = "en-US") {
    type LocaleCode = keyof typeof specialMappings;
    // 获取对应的dayjs语言环境
    const dayjsLocale = specialMappings[browserLocale as LocaleCode];
    // 创建dayjs实例并设置语言环境
    const d = dayjs(date);
    // 根据语言环境选择格式
    switch (dayjsLocale) {
      case "zh-cn":
      case "zh-tw":
        return d.format("M月D"); // 中文格式: 7月28日

      case "ja":
        return d.format("M月D"); // 日语格式: 7月28日

      case "ko":
        return d.format("M월 D일"); // 韩语格式: 7월 28일

      case "ar":
        return d.format("D MMMM"); // 阿拉伯语: 28 يوليو

      case "he":
        return d.format("D בMMMM"); // 希伯来语: 28 ביולי

      case "uk":
      case "ru":
        return d.format("D MMM"); // 乌克兰语/俄语: 28 июл.

      default:
        // 大部分西方语言使用月+日格式
        return d.format("MMM D"); // 英语等: Jul 28
    }
  }

  return {
    getTime
  };
};
