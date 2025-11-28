<template>
  <nav>
    <div class="container">
      <div class="nav-container min-h-8">
        <!-- Logo -->
        <a :href="HomeUrl" class="logo" style="text-decoration: none">
          <NuxtImg
            src="/assets/logo2.svg"
            alt="NeverCap Logo"
            class="no-drag h-6 w-auto sm:h-[1.875rem]"
            fit="contain"
            loading="eager"
          />
        </a>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <NuxtImg
            v-show="mobileMenuOpen"
            src="/assets/images/menu/menu-close.svg"
            class="h-[1rem] w-[1rem]"
            alt="nevercap menu"
          ></NuxtImg>
          <NuxtImg
            v-show="!mobileMenuOpen"
            src="/assets/images/menu/menu.svg"
            class="h-[1rem] w-[1rem]"
            alt="nevercap menu"
          ></NuxtImg>
        </button>
        <div class="nav-links is-PC">
          <template v-for="(menu, index) in menuList" :key="'pc' + index" v-if="isLargeScreen">
            <template v-if="menu?.children">
              <div class="dropdown">
                <a
                  href="javascript:void(0)"
                  class="dropdown-toggle underline"
                  :class="index === acitveId ? 'menu-acitve' : ''"
                >
                  {{ menu.name }}
                  <NuxtImg src="/assets/images/menu/arrow.svg" class="w-[0.75rem]" alt="nevercap menu"></NuxtImg>
                </a>
                <div v-if="menu.key === '/resources'" class="dropdown-content dropdown-content-pc-resources">
                  <div class="menu-category" v-for="(child, index1) in menu.children" :key="'pc1' + index + index1">
                    <template v-if="child.children.length">
                      <span class="menu-category-name">{{ child.name }}</span>
                      <router-link
                        v-for="(item, index2) in child.children"
                        :key="'pc2' + index + index1 + index2"
                        :to="$localePath(item.link)"
                        class="leaf-menu underline"
                        :class="
                          index === acitveId && index1 === acitveIdCenterId && index2 === acitveIdLevel2
                            ? 'menu-acitve'
                            : ''
                        "
                      >
                        {{ item.name }}
                      </router-link>
                    </template>
                  </div>
                </div>
                <div v-else class="dropdown-content">
                  <router-link
                    v-for="(child, ind) in menu.children"
                    :to="$localePath(child.link)"
                    class="underline"
                    :class="index === acitveId && ind === acitveIdLevel2 ? 'menu-acitve' : ''"
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
        <div class="nav-links is-mobile" :class="{ 'mobile-open': mobileMenuOpen }">
          <template v-for="(menu, index) in menuList" :key="'mobile_' + index" v-if="mobileMenuOpen">
            <template v-if="menu?.children">
              <div class="dropdown" :class="{ open: dropdownOpen[index] }">
                <a
                  href="javascript:void(0)"
                  class="dropdown-toggle underline"
                  :class="index === acitveId ? 'menu-acitve' : ''"
                  v-on="mobileDropdownOpen(index)"
                >
                  {{ menu.name }}
                  <NuxtImg src="/assets/images/menu/arrow.svg" class="w-[0.75rem]" alt="nevercap menu"></NuxtImg>
                </a>
                <div v-if="menu.key === '/resources'" class="dropdown-content">
                  <router-link
                    v-for="(child, ind) in menu.children"
                    :to="$localePath(child.link)"
                    class="underline"
                    :class="index === acitveId && ind === acitveIdLevel2 ? 'menu-acitve' : ''"
                  >
                    <template v-if="child.children.length">
                      <span class="menu-category-name">{{ child.name }}</span>
                      <router-link
                        v-for="(item, ind) in child.children"
                        :to="$localePath(item.link)"
                        class="leaf-menu underline"
                        :class="index === acitveId && ind === acitveIdLevel2 ? 'menu-acitve' : ''"
                      >
                        {{ item.name }}
                      </router-link>
                    </template>
                  </router-link>
                </div>
                <div v-else class="dropdown-content">
                  <router-link
                    v-for="(child, ind) in menu.children"
                    :to="$localePath(child.link)"
                    class="underline"
                    :class="index === acitveId && ind === acitveIdLevel2 ? 'menu-acitve' : ''"
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
          <client-only>
            <layout-header-index-new :show-home-icon="false" />
          </client-only>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { useClickHandler } from "~/hooks/useClickHandler";
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

const mobileDropdownOpen = (index: number) => useClickHandler(() => toggleDropdown(index));

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

const menuList = computed(() => [
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
        name: t("HeadNavbar.Transcription"),
        children: [
          {
            name: t("HeadNavbar.VideoTranscription"),
            link: "/resources/video-transcription"
          }
        ]
      },
      // {
      //   name: "Summary",
      //   children: []
      // },
      // {
      //   name: "Flashcard",
      //   children: []
      // },
      // {
      //   name: "Citation generator",
      //   children: []
      // },
      {
        name: t("HeadNavbar.Other"),
        children: [
          {
            name: t("HeadNavbar.YouTubetoMP4"),
            link: "/resources/youtube-to-mp4"
          },
          {
            name: t("HeadNavbar.YouTubetoMP3"),
            link: "/resources/youtube-to-mp3"
          }
        ]
      }
    ]
  },
  {
    name: t("HeadNavbar.Blog"),
    key: "/blog",
    link: "/blog"
  }
]);
const route = useRoute();

let acitveIdCenterId = ref(-1);
const acitveId = computed(() => {
  // 根据当前路径匹配激活菜单项的索引
  const currentPath = route.path;
  for (let i = 0; i < menuList.value.length; i++) {
    const menu = menuList.value[i];
    if (currentPath.includes(menu.key)) {
      if (menu.children) {
        acitveIdCenterId.value = menu.children.findIndex((item) => {
          for (let i = 0; i < item.children?.length; i++) {
            let child = item.children[i];
            if (currentPath.includes(child.link)) {
              return item;
            }
          }
        });
      }
      return i;
    }
  }
  return -1; // 没有匹配项时返回无效索引
});

const acitveIdLevel2 = computed(() => {
  // 使用更简洁的方法获取当前页面链接在菜单项中的编号
  const currentPath = route.path;
  const activeMenuIndex = acitveId.value;

  // 如果没有找到一级菜单，则直接返回-1
  if (activeMenuIndex === -1) {
    return -1;
  }

  const activeMenu = menuList.value[activeMenuIndex];

  // 如果当前激活的一级菜单没有子菜单，则返回-1
  if (!activeMenu || !activeMenu.children) {
    return -1;
  }

  // 查找当前路径对应的二级菜单索引
  // 简化逻辑，不区分语言环境，直接使用路径包含关系进行判断
  return activeMenu.children.findIndex((child) => {
    // 处理可能的嵌套子菜单
    if (child.children && child.children.length > 0) {
      return child.children.some((item) => currentPath.includes(item.link));
    }
    // 处理直接的二级菜单
    return currentPath.includes(child.link);
  });
});
const router = useRouter();
provide("showLoginBtn", false);
const localePath = useLocalePath();
const { userInfo } = storeToRefs(useUserStore());
const { $mitt } = useNuxtApp();
const goToHome = () => {
  if ((userInfo.value as any)?.userInfoVO && (route.path.includes("terms-of-use") || route.path.includes("privacy"))) {
    $mitt.emit("goToEvent", { path: "/" });
    return;
  }
  router.push({
    path: localePath("/")
  });
};

const config = useRuntimeConfig();
let currentWebSite = config.public.currentWebSite;
let jumpUrl = config.public.jumpUrl;

const HomeUrl = computed(() => {
  if ((userInfo.value as any)?.userInfoVO && (route.path.includes("terms-of-use") || route.path.includes("privacy"))) {
    return (jumpUrl += "/");
  } else {
    return currentWebSite + "/";
  }
});
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

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--gray);
    font-weight: 500;
    &:hover {
      color: var(--primary);
    }
  }
}
.menu-category {
  display: block;
  padding: 12px 20px;
  padding-left: 0px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:first-child {
    padding-left: 20px;
  }
}
.menu-category-name {
  color: var(--dark);
  cursor: default;
  font-weight: 500;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--gray);
  cursor: pointer;
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
    align-items: stretch;

    a:hover {
      color: var(--gray);
    }
  }

  .nav-links.mobile-open {
    max-height: 1000px;
  }

  .nav-links > * {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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
    a {
      color: var(--gray);
      padding: 12px 20px;
      text-decoration: none;
      display: block;
    }
  }

  .dropdown.open .dropdown-content {
    max-height: 800px;
    display: block !important;
  }

  .btn-primary {
    display: block;
    text-align: center;
  }

  .leaf-menu {
    padding-left: 0 !important;
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

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content a {
    color: var(--gray);
    padding: 12px 20px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s;
  }

  .dropdown-toggle img {
    transition: transform 0.3s ease;
  }

  .dropdown:hover .dropdown-content-pc-resources {
    display: grid;
  }
}

/* Dropdown Styles */
.dropdown {
  position: relative;
  display: inline-block;
  &:hover .dropdown-toggle img {
    transform: rotate(180deg);
  }
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
  :before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    height: 5px;
    background: transparent;
  }
  a:hover {
    &:not(:has(.leaf-menu)) {
      background-color: var(--light-gray);
      color: var(--primary) !important;
    }
  }
}

.dropdown-content-pc-resources {
  left: -308px;
  width: 600px;
  max-width: 1200px;
  // display: grid;
  column-gap: 16px;
  row-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  .leaf-menu {
    padding-left: 0 !important;
  }
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-container {
  @media (max-width: 768px) {
    .index-right-wrap {
      position: absolute;
      right: 40px;
    }

    .dropdown:hover .dropdown-toggle img {
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

    .dropdown:hover .dropdown-toggle img {
      transform: none;
    }
  }
}
</style>
