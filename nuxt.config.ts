import i18nConfig from "./i18Config";
import removeConsole from "vite-plugin-remove-console";
console.log(
  process.env.NUXT_PUBLIC_ENV,
  "---NUXT_PUBLIC_GTAG_ID---gtagId---",
  process.env.NUXT_PUBLIC_GTAG_ID,
  process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID
);
export default defineNuxtConfig({
  appConfig: {
    // useAppConfig 获取
    title:
      "Transcribe Meetings & Audio: Speaker Identification, Translate, Share | 100+ Languages - Nevercap",
    version: "1.0.0"
  },
  app: {
    head: {
      title:
        "Transcribe Meetings & Audio: Speaker Identification, Translate, Share | 100+ Languages - Nevercap",
      meta: [
        {
          name: "description",
          content:
            "Nevercap converts speech (meetings, interviews, videos, podcasts) into searchable, translatable, shareable transcripts. Identify speakers automatically, generate subtitles, & break language barriers in 100+ languages. Try Free!"
        },
        {
          name: "keywords",
          content:
            "Nevercap, audio to text, transcription service, speaker diarization, meeting transcription, speech to text 100+ languages, transcribe meetings with multiple speakers, best transcription service for interviews"
        },
        {
          name: "format-detection",
          content: "telephone=no, email=no, address=no"
        }
      ],
      link: [
        { rel: "stylesheet", href: "/assets/iconfont/iconfont.css" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
      script: [
        { src: "/assets/iconfont/iconfont.js" },
        { src: "/assets/js/aes.js" },
        { src: "/assets/js/jsencrypt.js" }
      ]
    }
  },

  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  nitro: {
    // preset: 'vercel-static', // 强制 SSG 模式
    routeRules: {
      '/assets/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/pics/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/favicon.ico': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
    },
    // 开发环境代理配置
    devProxy: {
      "/wapi": {
        target: "https://app.scribify.cc/wapi",
        changeOrigin: true,
        prependPath: true,
        secure: false
      }
    }
  },
  css: [
    //指定全局css  注意顺序下覆盖上
    "~/assets/css/tailwind.css",
    "~/assets/css/element.scss"
  ],
  plugins: [
    { src: "~/plugins/gtag.js", mode: "client" },
    { src: "~/plugins/global-error.js", mode: "client" },
    { src: "~/plugins/vconsole.js", mode: "client" }
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@unlok-co/nuxt-stripe",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "dayjs-nuxt",
    "@nuxt/image"
  ],
  piniaPluginPersistedstate: {
    storage: "localStorage",
    cookieOptions: {
      maxAge: 7 * 24 * 60 * 60
    },
    debug: true
  },
  i18n: i18nConfig,
  //运行时全局变量
  runtimeConfig: {
    //此处定义的属性只能在服务端获取到
    // Server
    name: "NeverCap",
    environment: process.env.NODE_ENV || "production",
    stripe: {
      key: process.env.NUXT_STRIPE_SECRET_KEY,
      options: {}
    },
    // ipinfo 获取Ip信息
    ipinfoToken: process.env.IPINFO_TOKEN,
    //public中定义的属性既可以在服务端，也可以在客户端获取到
    public: {
      env: process.env.NUXT_PUBLIC_ENV || "production",
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      jumpUrl: process.env.NUXT_JUPM_BASE_URL,
      cookieDomain: process.env.NUXT_COOKIE_DOMAIN,
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      cosDomain: process.env.NUXT_COS_DOMAIN,
      stripe: {
        key: process.env.NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        options: {}
      }
    }
  },
  devServer: {
    host: "0.0.0.0" // 允许所有 IP 访问
  },
  vite: {
    server: {
      allowedHosts: true // 允许指定域名
    },
    plugins: [
      ...(process.env.NUXT_PUBLIC_ENV === "production"
        ? [removeConsole({ includes: ["log", "info", "warn", "error"] })]
        : [])
    ]
  },
  elementPlus: {
    /** Options */
    importStyle: "scss",
    cache: true
  }
});
