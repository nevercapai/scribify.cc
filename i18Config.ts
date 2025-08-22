import { type NuxtI18nOptions, type LocaleObject } from '@nuxtjs/i18n'
import { type LocaleKey } from "~/i18n/index";
let i18nLocales = [
  { code: "en-US", name: "English" },
  { code: "es-ES", name: "Español" },
  { code: "it-IT", name: "Italiano" },
  { code: "fr-FR", name: "Français" },
  { code: "de-DE", name: "Deutsch" },
  { code: "zh-CN", name: "简体中文" },
  { code: "zh-TW", name: "繁體中文" },
  { code: "ja-JP", name: "日本語" },
  { code: "ko-KR", name: "한국어" },
  { code: "nl-NL", name: "Nederlands" },
  { code: "pl-PL", name: "Polski" },
  { code: "da-DK", name: "Dansk" },
  { code: "hu-HU", name: "Magyar" },
  { code: "no-NO", name: "Norsk" },
  { code: "pt-PT", name: "Português" },
  { code: "fi-FI", name: "Suomi" },
  { code: "sv-SE", name: "Svenska" },
  { code: "ru-RU", name: "Русский" },
  { code: "tr-TR", name: "Türkçe" },
  { code: "el-GR", name: "Ελληνικά" },
  { code: "uk-UA", name: "Українська" },
  { code: "he-IL", name: "עברית" },
  { code: "ar-SA", name: "بالعربية" }
];
const isDev = process.env.NODE_ENV === 'development'
if (isDev) {
  // i18nLocales = [
  //   { code: 'en-US', name: "English" },
  //   { code: 'zh-CN', name: "简体中文" }
  // ]
}

const getTopDomain = (): string => {
  // 开发环境返回 localhost
  if (process.env.NODE_ENV === 'development') {
    // ip地址手动改
    return 'localhost'
  }

  // const config = useRuntimeConfig();
  const redirectUrl = process.env.NUXT_JUPM_BASE_URL as string;

  if (redirectUrl) {
    const domain = redirectUrl.split('//')[1]
    const parts = domain.split('.')
    if (parts.length >= 2) {
      // 取最后两段作为顶级域名
      return parts.slice(-2).join('.')
    }
    return `.${domain}`
  }

  console.error('NUXT_JUPM_BASE_URL 未配置')
  return ''
}

const i18nConfig: NuxtI18nOptions = {
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'lang',
  locales: i18nLocales.map(({ code, name }) => ({
    code,
    name,
    file: `${code}.ts`
  })) as LocaleObject<LocaleKey>[],
  defaultLocale: i18nLocales[0].code as LocaleKey,
  vueI18n: '~/i18n/i18n.config.ts',
  bundle: {
    optimizeTranslationDirective: !isDev
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_localLanguage',
    fallbackLocale: i18nLocales[0].code as LocaleKey,
    redirectOn: 'root',
    cookieDomain: getTopDomain(),
    cookieSecure: process.env.NODE_ENV !== "development"
  }
}
export default i18nConfig
