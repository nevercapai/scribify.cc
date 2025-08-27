<template>
  <nav>
    <div class="container">
      <div class="nav-container min-h-8">
        <!-- Logo -->
        <div
          @click="goToHome"
          class="flex items-center space-x-2"
          :class="{
            'cursor-pointer': isShowIconPointer
          }"
        >
          <NuxtImg
            src="/assets/logo3.png"
            alt="NeverCap"
            class="no-drag h-6 w-auto sm:h-[1.875rem]"
            fit="contain"
            loading="eager"
          />
        </div>
        <button class="mobile-menu-btn order-1" @click="toggleMobileMenu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <template v-if="mobileMenuOpen">
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </template>
            <template v-else>
              <path
                d="M3 12H21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M3 6H21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </template>
          </svg>
        </button>
        <div class="nav-links is-PC">
          <template v-for="(menu, index) in menuList" v-if="isLargeScreen">
            <template v-if="menu?.children">
              <div class="dropdown">
                <a
                  href="javascript:void(0)"
                  class="dropdown-toggle underline"
                  :class="index === acitveId ? 'menu-acitve' : ''"
                >
                  {{ menu.name }}
                  <svg
                    width="100%"
                    height="24"
                    viewBox="0 0 36 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 12px; height: auto"
                  >
                    <path
                      d="M3 3L18 18L33 3"
                      stroke="currentColor"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <div class="dropdown-content">
                  <router-link
                    v-for="(child, ind) in menu.children"
                    :to="$localePath(child.link)"
                    class="underline"
                    :class="
                      index === acitveId && ind === acitveIdLevel2
                        ? 'menu-acitve'
                        : ''
                    "
                  >
                    {{ child.name }}
                  </router-link>
                </div>
              </div>
            </template>
            <template v-else>
              <router-link
                :to="$localePath(menu.link)"
                class="underline"
                :class="index === acitveId ? 'menu-acitve' : ''"
              >
                {{ menu.name }}
              </router-link>
            </template>
          </template>
        </div>
        <div
          class="nav-links is-mobile"
          :class="{ 'mobile-open': mobileMenuOpen }"
        >
          <template v-for="(menu, index) in menuList" v-if="mobileMenuOpen">
            <template v-if="menu?.children">
              <div class="dropdown" :class="{ open: dropdownOpen[index] }">
                <a
                  href="javascript:void(0)"
                  class="dropdown-toggle underline"
                  :class="index === acitveId ? 'menu-acitve' : ''"
                  @click="toggleDropdown(index)"
                >
                  {{ menu.name }}
                  <svg
                    width="100%"
                    height="24"
                    viewBox="0 0 36 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: 12px; height: auto"
                  >
                    <path
                      d="M3 3L18 18L33 3"
                      stroke="currentColor"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <div class="dropdown-content">
                  <router-link
                    v-for="(child, ind) in menu.children"
                    :to="$localePath(child.link)"
                    class="underline"
                    :class="
                      index === acitveId && ind === acitveIdLevel2
                        ? 'menu-acitve'
                        : ''
                    "
                    @click="closeMobileMenu"
                  >
                    {{ child.name }}
                  </router-link>
                </div>
              </div>
            </template>
            <template v-else>
              <router-link
                :to="$localePath(menu.link)"
                class="underline"
                :class="index === acitveId ? 'menu-acitve' : ''"
                @click="closeMobileMenu"
              >
                {{ menu.name }}
              </router-link>
            </template>
          </template>
        </div>
        <div class="index-right-wrap">
          <layout-header-index-new :show-home-icon="false" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const mobileMenuOpen = ref(false);
const dropdownOpen = ref<Record<number, boolean>>({});
const isShowIconPointer = computed(() => {
  return route.name && !(route.name as string)?.startsWith("index");
});
const isLargeScreen = useMediaQuery("(min-width: 768px)", { ssrWidth: 1280 });
// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // 关闭所有下拉菜单
  Object.keys(dropdownOpen.value).forEach((key) => {
    dropdownOpen.value[parseInt(key)] = false;
  });
};

// 点击菜单项后关闭移动端菜单
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// 切换下拉菜单
const toggleDropdown = (index: number) => {
  if (dropdownOpen.value[index]) {
    dropdownOpen.value[index] = !dropdownOpen.value[index];
  } else {
    dropdownOpen.value = {};
    dropdownOpen.value[index] = !dropdownOpen.value[index];
  }
};

// 监听窗口大小变化，在大屏幕上强制关闭移动端菜单
watchEffect(() => {
  if (window?.innerWidth >= 769) {
    mobileMenuOpen.value = false;
    // 关闭所有下拉菜单
    Object.keys(dropdownOpen.value).forEach((key) => {
      dropdownOpen.value[parseInt(key)] = false;
    });
  }
});

let menuList = ref([
  {
    name: t("HeadNavbar.Features"),
    key: "/features",
    children: [
      {
        name: t("HeadNavbar.UnlimitedTranscription"),
        link: "/features/unlimited-transcription"
      },
      {
        name: t("HeadNavbar.BulkUpload"),
        link: "/features/bulk-upload"
      },
      {
        name: t("HeadNavbar.Accuracy"),
        link: "/features/96-percent-accuracy"
      }
    ]
  },
  {
    name: t("HeadNavbar.Pricing"),
    key: "/pricing",
    link: "/pricing"
  },
  {
    name: t("HeadNavbar.UseCases"),
    key: "/use-cases",
    children: [
      {
        name: t("HeadNavbar.AllUseCases"),
        link: "/use-cases"
      },
      {
        name: t("HeadNavbar.Podcasters"),
        link: "/use-cases/podcasters"
      },
      {
        name: t("HeadNavbar.Journalists"),
        link: "/use-cases/journalists"
      },
      {
        name: t("HeadNavbar.ContentCreators"),
        link: "/use-cases/content-creators"
      },
      {
        name: t("HeadNavbar.Researchers"),
        link: "/use-cases/researchers"
      },
      {
        name: t("HeadNavbar.BusinessTeams"),
        link: "/use-cases/business-teams"
      },
      {
        name: t("HeadNavbar.Educators"),
        link: "/use-cases/educators"
      }
    ]
  },
  {
    name: t("HeadNavbar.Resources"),
    key: "/resources",
    children: [
      {
        name: t("HeadNavbar.YouTubetoMP4"),
        link: "/resources/youtube-to-mp4"
      }
    ]
  }
]);
const route = useRoute();

const acitveId = computed(() => {
  // 根据当前路径匹配激活菜单项的索引
  const currentPath = route.path;
  for (let i = 0; i < menuList.value.length; i++) {
    const menu = menuList.value[i];
    if (currentPath.includes(menu.key)) {
      return i;
    }
  }
  return -1; // 没有匹配项时返回无效索引
});

const acitveIdLevel2 = computed(() => {
  // 根据当前路径匹配激活菜单项的索引
  const currentPath = route.path;
  for (let i = 0; i < menuList.value.length; i++) {
    const menu = menuList.value[i];
    if (menu.children) {
      for (let j = 0; j < menu.children.length; j++) {
        const child = menu.children[j];
        if (locale.value === "en-US") {
          if (currentPath === `${child.link}`) {
            return j;
          }
        } else {
          if (currentPath === `/${locale.value}${child.link}`) {
            return j;
          }
        }
      }
    }
  }
  return -1; // 没有匹配项时返回无效索引
});
const router = useRouter();
provide("showLoginBtn", false);
const localePath = useLocalePath();
const { userInfo } = storeToRefs(useUserStore());
const { $mitt } = useNuxtApp();
const goToHome = () => {
  if (userInfo.value?.userInfoVO && (route.path.includes('terms-of-use') || route.path.includes('privacy'))) {
    $mitt.emit("goToEvent", { path: "/" });
    return
  }
  router.push({
    path: localePath("/")
  });
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.menu-acitve {
  color: var(--primary) !important;
}
/* Navigation */
nav {
  position: fixed;
  top: 0;
  width: 100vw;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 18px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--gray);
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--gray);
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--primary);
}

// 响应式设计 - 移动端
@media (max-width: 768px) {
  .is-PC {
    visibility: hidden !important;
    display: none !important;
  }
  .is-mobile {
    visibility: visible;
  }
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 0;
    transition: max-height 0.3s ease-out;
    align-items: stretch;
  }

  .nav-links.mobile-open {
    max-height: 1000px;
  }

  .nav-links > * {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .nav-links a:hover {
    color: var(--gray);
  }

  .dropdown {
    position: relative;
    &:not(.open) .dropdown-content {
      padding: 0;
    }
  }

  .dropdown-content {
    position: static;
    box-shadow: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .dropdown.open .dropdown-content {
    max-height: 800px;
    display: block !important;
  }

  .btn-primary {
    display: block;
    text-align: center;
  }
}

// 桌面端样式
@media (min-width: 769px) {
  .nav-links {
    display: flex !important;
  }
  .is-PC {
    visibility: visible;
  }
  .is-mobile {
    visibility: hidden !important;
    display: none !important;
  }
}

/* Dropdown Styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1001;
  top: 100%;
  left: 0;
  padding: 10px 0;
  margin-top: 5px;
}

.dropdown-content::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  height: 5px;
  background: transparent;
}

.dropdown-content a {
  color: var(--gray);
  padding: 12px 20px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
}

.dropdown-content a:hover {
  background-color: var(--light-gray);
  color: var(--primary) !important;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dropdown-toggle svg {
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-toggle svg {
  transform: rotate(180deg);
}

.nav-container {
  @media (max-width: 768px) {
    .index-right-wrap {
      position: absolute;
      right: 40px;
    }
    .dropdown-toggle svg {
      // transition: none;
    }

    .dropdown:hover .dropdown-toggle svg {
      transform: none;
    }
  }
}
[dir="rtl"] .nav-container {
  @media (max-width: 768px) {
    .index-right-wrap {
      position: absolute;
      left: 40px !important;
      right: unset;
    }
    .dropdown-toggle svg {
      // transition: none;
    }

    .dropdown:hover .dropdown-toggle svg {
      transform: none;
    }
  }
}
</style>
