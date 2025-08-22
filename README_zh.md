🌍 [简体中文](README_zh.md)

# WhisperX: 服务端渲染 SSR · Vue3 · Nuxt3 · TypeScript · 多语言 i18n · Element Plus · rem 自适应 · 支付 · SEO

WhisperX 是一款基于 Nuxt3 的 AI 转录项目，预集成全球支付网关（Stripe/Cream）、谷歌 OAuth、多语言路由和 SEO 优化工具。

- [👉 源码地址](http://source.aihujing.com/weber/WhisperX)

---

## ✨ 产品特点

- 🌐 **NuxtJs3**：开源的全栈生产级 NuxtJs 框架
- 🌈 **Vue 3**：现代 Web 和原生用户界面开发
- 🔒 **BetterAuth**：高效的开源认证授权框架
- 🎨 **Tailwindcss**：快速 UI 开发的 CSS 框架
- 💰 **Stripe**：全球领先的在线支付服务
- 👄 **i18n**：轻松为 Nuxt 项目添加国际化支持
- 💨 **Google Analytics**：隐私友好的 Google Analytics

---

## 🚀 快速开始

### 1. 克隆仓库

> 环境要求：Node.js 22.6.0，npm 10.8.2

```bash
git clone http://source.aihujing.com/weber/WhisperX
```

### 2. 安装依赖

```bash
npm install
# 或
yarn
# 或
pnpm install
```

### 3. 配置环境变量

复制 `.env.example` 并重命名为 `.env`，填写对应内容：

```bash
cp .env.example .env
```

### 4. 启动开发服务

```bash
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000) 查看应用。

---

## 🚀 服务器部署指南

### 一、环境准备

1. **开放端口**  
   确保 80（HTTP）、443（HTTPS）及 Nuxt 服务端口（如 3000）可用。

2. **安装必要软件**

   ```bash
   # Node.js（建议 22.6.0 及以上）
   # npm（建议 10.8.2 及以上）
   # PM2 进程管理器
   npm install -g pm2
   ```

---

### 二、项目部署流程

1. **上传项目代码**
   - 将本地项目（排除 node_modules）上传至服务器目录
   - 进入项目目录安装依赖

   ```bash
   npm install
   ```

2. **构建 SSR 项目**
   - 执行构建命令生成服务端渲染所需文件

   ```bash
   npm run build:prod
   # 输出目录为 .output
   ```

3. **启动服务（使用 PM2 守护）**

   ```bash
   pm2 start npm --name "whisperx" -- run start:prod
   # "whisperx" 可自定义，用于 PM2 进程管理
   ```
   - 验证服务是否运行

   ```bash
   pm2 list           # 查看进程状态
   curl http://localhost:3000  # 测试本地访问
   ```

---

### 三、Nginx 反向代理配置

1. **配置代理规则**

   修改 Nginx 站点配置文件（如 `/etc/nginx/conf.d/nuxt.conf`），将请求转发至 Nuxt 服务端口（默认 3000）：

   ```nginx
   server {
     listen 80;
     server_name your-domain.com;  # 替换为你的域名或IP

     location / {
       proxy_pass http://127.0.0.1:3000;  # 指向 Nuxt 服务
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```
   - 重载 Nginx 使配置生效

   ```bash
   nginx -s reload
   ```

2. **HTTPS 配置**

   在 Nginx 中启用 HTTPS 并强制跳转（可参考 [Let's Encrypt](https://letsencrypt.org/) 免费证书）。

---

### 四、高级优化与监控

1. **进程管理**

   ```bash
   pm2 save      # 保存 PM2 进程列表
   pm2 startup   # 设置开机自启
   ```

2. **性能调优**
   - **Nginx 缓存**：为静态资源（如图片、CSS/JS）配置浏览器缓存
   - **Gzip 压缩**：在 Nginx 中启用以减少传输体积
   - **CDN 加速**：将 static/ 或 assets/ 目录托管至 CDN

---

## ★ 最小启动项配置示例

```ini
NODE_ENV=development
NUXT_PUBLIC_ENV=development
PORT=3000
NUXT_PUBLIC_BASE_URL=http://localhost:3000
NUXT_RESEND_API_KEY=
DATABASE_URL=
BETTER_AUTH_SECRET=B3E4q0JYr3pRpQkwvxo9jfOLz41TKrNM
BETTER_AUTH_URL=http://localhost:3000
```

> 如未注册 Stripe，请注释掉 `index.vue` 里的以下两行：  
> `const { stripe,loadStripe  } = useClientStripe();`  
> `stripe.value = await loadStripe(config.public.stripe.key);`

---

## ⚙️ 配置说明

### 1. i18n 配置

- 在 `i18n/lang/` 下新增或修改语言文件
- 在 `i18n/config.ts` 中配置新增/修改的语言
- 在 `i18n/index.ts` 中加载 `i18n/lang/` 文件实现国际化

---

## 🔍 SEO 支持

- 服务器端渲染和静态生成
- 自动生成 sitemap.xml
- robots.txt 配置
- 元数据优化
- 支持 Open Graph
- 多语言 SEO 支持

---

## 🌐 选择收款方式

在 `.env` 文件中配置：

```ini
PAYMENT_METHOD=   # 选择收款方式：1、stripe；2、paddle(暂未支持)；3、creem
```

---

## 💰 Stripe 全球化支付支持

在 `.env` 文件中配置：

```ini
NUXT_STRIPE_SECRET_KEY=                # Stripe 密钥
NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=    # Stripe 公钥
NUXT_STRIPE_WEBHOOK_SECRET=            # Stripe webhook 密钥
```

---

## 💳 Creem 支付支持

在 `.env` 文件中配置：

```ini
NUXT_CREEM_API_KEY=        # Creem API 密钥
NUXT_PUBLIC_CREEM_URL=     # Creem 基础 URL 示例: https://test-api.creem.io
NUXT_CREEM_WEBHOOK_SECRET= # Creem webhook 密钥
```

---

## ✉️ 邮件 API 服务支持

在 `.env` 文件中配置：

```ini
NUXT_RESEND_API_KEY= # Resend API 密钥
```

---

## 🔒 BetterAuth 认证授权支持

在 `.env` 文件中配置：

```ini
BETTER_AUTH_SECRET=      # BetterAuth 32位随机密钥
BETTER_AUTH_URL=         # BetterAuth 访问URL 示例: http://localhost:3000
GOOGLE_CLIENT_ID=        # Google client id
GOOGLE_CLIENT_SECRET=    # Google client 密钥
GITHUB_CLIENT_ID=        # Github client id
GITHUB_CLIENT_SECRET=    # Github client 密钥
```

---

## 🌙 谷歌搜索控制台支持

在 `.env` 文件中配置：

```ini
GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE= # Google 搜索控制台验证码
```

---

## 🛠️ 一键部署

如需一键部署或有疑问，欢迎联系：365398920@qq.com

- [Github](http://source.aihujing.com/weber/WhisperX)


