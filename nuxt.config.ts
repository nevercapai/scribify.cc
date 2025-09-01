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
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // 预加载关键字体
        { rel: "preload", as: "font", href: "/assets/iconfont/iconfont.woff2", type: "font/woff2", crossorigin: "anonymous" },
        // 预加载关键CSS
        { rel: "preload", as: "style", href: "~/assets/css/tailwind.css" },
        { rel: "preload", as: "style", href: "~/assets/css/element.scss" }
      ],
      script: [
        // 使用 defer 延迟执行非关键脚本，不阻塞 DOM 解析
        { src: "/assets/iconfont/iconfont.js", defer: true },
        { src: "/assets/js/aes.js", defer: true },
        { src: "/assets/js/jsencrypt.js", defer: true }
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
    // 仅在开发环境加载调试工具
    ...(process.env.NODE_ENV !== 'production' ? [{ src: "~/plugins/vconsole.js", mode: "client" as const }] : [])
    // { src: "~/plugins/vconsole.js", mode: "client" }
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
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
    ],
    // 优化构建输出
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 分离第三方库到单独的chunk
            if (id.includes('node_modules')) {
              if (id.includes('element-plus')) {
                return 'element-plus';
              } else if (id.includes('@vue') || id.includes('vue')) {
                return 'vue';
              } else if (id.includes('@nuxt')) {
                return 'nuxt';
              } else if (id.includes('pinia')) {
                return 'pinia';
              } else {
                return 'vendor';
              }
            }
          }
        }
      }
    }
  },
  elementPlus: {
    /** Options */
    importStyle: "scss",
    cache: true
  }
});
