<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>NeverCap</h3>
          <p>
            {{ $t("Footer.des") }}
          </p>
          <div
            style="
              display: flex;
              gap: 20px;
              margin-top: 20px;
              align-items: center;
            "
          >
            <a
              v-for="(item, index) in sociaIconList"
              :key="item.id"
              :href="item.url"
              target="_blank"
              class="inline-block"
            >
              <el-image
                :src="`/assets/images/index/sociaIcon/${item.img}.png`"
                class="h-[1.25rem] w-[1.25rem] rounded-md"
                fit="contain"
              ></el-image>
            </a>
          </div>
        </div>
        <div class="footer-column">
          <h4>{{ $t("Footer.Features") }}</h4>
          <ul>
            <li v-for="(menu, index) in featureMenus" :key="index">
              <router-link :to="$localePath(menu.link)" class="underline">
                <!-- {{ menu.name }} -->
                {{ $t("Footer.featureMenus[" + index + "]") }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>{{ $t("Footer.UseCases") }}</h4>
          <ul>
            <li v-for="(menu, index) in useCaseMenus" :key="index">
              <router-link :to="$localePath(menu.link)" class="underline">
                <!-- {{ menu.name }} -->
                {{ $t("Footer.useCaseMenus[" + index + "]") }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>{{ $t("Footer.Company") }}</h4>
          <ul>
            <!-- <li>
              <a
                href="https://nevercap.ai/privacy"
                target="_blank"
                class="underline"
              >
                privacy policy
              </a>
            </li>
            <li>
              <a
                href="https://nevercap.ai/terms-of-use"
                target="_blank"
                class="underline"
              >
                terms of service
              </a>
            </li> -->
            <li v-for="(menu, index) in companyMenus" :key="index">
              <router-link :to="$localePath(menu.link)" class="underline">
                <!-- {{ menu.name }} -->
                {{ $t("Footer.companyMenus[" + index + "]") }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 NeverCap. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/* Footer 组件 */
const sociaIconList = ref([
  { id: 1, img: "x", title: "𝕏", url: "https://x.com/NeverCapAI" },
  {
    id: 2,
    img: "y",
    url: "https://youtube.com/@nevercapai"
  },
  {
    id: 3,
    img: "o",
    url: "https://www.instagram.com/nevercap.ai"
  },
  {
    id: 4,
    img: "t",
    url: "https://www.tiktok.com/@nevercap.ai"
  }
  // { id: 1, img: "x", title: "𝕏", url: "https://x.com/scribify_ai" },
  // { id: 2, img: "y", url: "https://www.youtube.com/@aiscribify" },
  // { id: 3, img: "o", url: "https://www.instagram.com/scribifyai/" },
  // {
  //   id: 4,
  //   img: "t",
  //   url: "https://www.tiktok.com/@scribify.ai?is_from_webapp=1&sender_device=pc"
  // }
  // { id: 5, img: "p", url: "https://www.producthunt.com/@scribify" }
  // { id: 6, img: "i", url: "https://www.linkedin.com/in/scribify-marcus" }
]);
let featureMenus = ref([
  {
    name: "Unlimited Transcription",
    link: "/features/unlimited-transcription"
  },
  {
    name: "Bulk Upload",
    link: "/features/bulk-upload"
  },
  {
    name: "96% Accuracy",
    link: "/features/96-percent-accuracy"
  }
]);
let useCaseMenus = ref([
  {
    name: "All Use Cases",
    link: "/use-cases/"
  },
  {
    name: "Podcasters",
    link: "/use-cases/podcasters"
  },
  {
    name: "Journalists",
    link: "/use-cases/journalists"
  },
  {
    name: "Content Creators",
    link: "/use-cases/content-creators"
  },
  {
    name: "Researchers",
    link: "/use-cases/researchers"
  },
  {
    name: "Business Teams",
    link: "/use-cases/business-teams"
  },
  {
    name: "Educators",
    link: "/use-cases/educators"
  }
]);
let companyMenus = ref([
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Pricing",
    link: "/pricing"
  },
  {
    name: "Privacy",
    link: "/privacy"
  },
  {
    name: "Terms",
    link: "/terms-of-use"
  }
]);
</script>

<style scoped lang="scss">
/* Footer */
footer {
  background: var(--dark);
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand h3 {
  font-size: 28px;
  margin-bottom: 16px;
  font-weight: bold;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

.footer-column h4 {
  margin-bottom: 20px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}

/* 移动端自适应 */
@media (max-width: 768px) {
  footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }

  .footer-brand h3 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .footer-brand p {
    font-size: 14px;
  }

  .footer-column h4 {
    margin-bottom: 15px;
    font-size: 14px;
    margin-top: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-column ul li {
    margin-bottom: 10px;
  }

  .footer-column ul li a {
    font-size: 14px;
  }

  .footer-bottom {
    padding-top: 20px;
    font-size: 12px;
  }

  /* 社交图标在移动端的调整 */
  .footer-brand > div {
    gap: 15px !important;
    margin-top: 15px !important;
  }

  .footer-brand > div a {
    transform: scale(0.9);
    transition: transform 0.2s;
  }

  .footer-brand > div a:active {
    transform: scale(0.8);
  }
}
</style>
