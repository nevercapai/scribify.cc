// import en_US from "./lang/en-US"; // 英语（美国）
// import es_ES from "./lang/es-ES"; // 西班牙语（西班牙）
// import it_IT from "./lang/it-IT"; // 意大利语（意大利）
// import fr_FR from "./lang/fr-FR"; // 法语（法国）
// import de_DE from "./lang/de-DE"; // 德语（德国）
// import zh_CN from "./lang/zh-CN"; // 中文（简体）
// import zh_TW from "./lang/zh-TW"; // 中文（繁体）
// import ja_JP from "./lang/ja-JP"; // 日语（日本）
// import ko_KR from "./lang/ko-KR"; // 韩语（韩国）
// import nl_NL from "./lang/nl-NL"; // 荷兰语（荷兰）
// import pl_PL from "./lang/pl-PL"; // 波兰语（波兰）
// import da_DK from "./lang/da-DK"; // 丹麦语（丹麦）
// import hu_HU from "./lang/hu-HU"; // 匈牙利语（匈牙利）
// import no_NO from "./lang/no-NO"; // 挪威语（挪威）
// import pt_PT from "./lang/pt-PT"; // 葡萄牙语（葡萄牙）
// import fi_FI from "./lang/fi-FI"; // 芬兰语（芬兰）
// import sv_SE from "./lang/sv-SE"; // 瑞典语（瑞典）
// import ru_RU from "./lang/ru-RU"; // 俄语（俄罗斯）
// import tr_TR from "./lang/tr-TR"; // 土耳其语（土耳其）
// import el_GR from "./lang/el-GR"; // 希腊语（希腊）
// import uk_UA from "./lang/uk-UA"; // 乌克兰语（乌克兰）
// import he_IL from "./lang/he-IL"; // 希伯来语（以色列）
// import ar_SA from "./lang/ar-SA"; // 阿拉伯语（沙特阿拉伯）
/**------------------------------以上是界面语言23种----**/

// 定义国际化内容类型 | 只包含已启用的语言
export type LocaleKey =
  | "en-US"
  | "es-ES"
  | "it-IT"
  | "fr-FR"
  | "de-DE"
  | "zh-CN"
  | "zh-TW"
  | "ja-JP"
  | "ko-KR"
  | "nl-NL"
  | "pl-PL"
  | "da-DK"
  | "hu-HU"
  | "no-NO"
  | "pt-PT"
  | "fi-FI"
  | "sv-SE"
  | "ru-RU"
  | "tr-TR"
  | "el-GR"
  | "uk-UA"
  | "he-IL"
  | "ar-SA";

// export interface LocaleConfig {
//   code: LocaleKey;
//   name: string; // 原始语言
//   file?: any;
// }

// const messages = {} as Record<LocaleKey, any>;
// export const LocaleLangs: LocaleConfig[] =
//   [
//     { lang: "en-US", langName: "English" },
//     { lang: "zh-CN", langName: "简体中文" }
//   ];

// [
//   { lang: "en-US", langName: "English", file: en_US },
//   { lang: "es-ES", langName: "Español", file: es_ES },
//   { lang: "it-IT", langName: "Italiano", file: it_IT },
//   { lang: "fr-FR", langName: "Français", file: fr_FR },
//   { lang: "de-DE", langName: "Deutsch", file: de_DE },
//   { lang: "zh-CN", langName: "简体中文", file: zh_CN },
//   { lang: "zh-TW", langName: "繁體中文", file: zh_TW },
//   { lang: "ja-JP", langName: "日本語", file: ja_JP },
//   { lang: "ko-KR", langName: "한국어", file: ko_KR },
//   { lang: "nl-NL", langName: "Nederlands", file: nl_NL },
//   { lang: "pl-PL", langName: "Polski", file: pl_PL },
//   { lang: "da-DK", langName: "Dansk", file: da_DK },
//   { lang: "hu-HU", langName: "Magyar", file: hu_HU },
//   { lang: "no-NO", langName: "Norsk", file: no_NO },
//   { lang: "pt-PT", langName: "Português", file: pt_PT },
//   { lang: "fi-FI", langName: "Suomi", file: fi_FI },
//   { lang: "sv-SE", langName: "Svenska", file: sv_SE },
//   { lang: "ru-RU", langName: "Русский", file: ru_RU },
//   { lang: "tr-TR", langName: "Türkçe", file: tr_TR },
//   { lang: "el-GR", langName: "Ελληνικά", file: el_GR },
//   { lang: "uk-UA", langName: "Українська", file: uk_UA },
//   { lang: "he-IL", langName: "עברית", file: he_IL },
//   { lang: "ar-SA", langName: "بالعربية", file: ar_SA }
// ];

// LocaleLangs.map((item) => {
//   messages[item.lang] = item.file;
// });

// import { runI18nCheck } from "./check";
// runI18nCheck(en_US, LocaleLangs);

// export const defaultLocale = LocaleLangs[0].lang || "en-US";
// export default defineI18nConfig(() => ({
//   legacy: false,
//   missingWarn: false,
//   fallbackWarn: false,
//   fallbackLocale: defaultLocale as any,
//   messages
// }));
