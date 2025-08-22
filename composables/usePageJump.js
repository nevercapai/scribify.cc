export const usePageJump = () => {
  const { locale, defaultLocale } = useI18n();
  const getPrefix = () => {
    return locale.value === defaultLocale ? "" : "/" + locale.value;
  };
  const config = useRuntimeConfig();
  const jumpUrl = config.public.jumpUrl;

  const jumpPage = (target, newTab = false) => {
    if (!target.startsWith("/")) {
      target = "/" + target;
    }
    const targetUrl = getPrefix() + target;
    const url = `${jumpUrl}${targetUrl}`;
    if (newTab) {
      return window.open(url, "_blank");
    }
    window.open(url, "_parent");
  };
  return { jumpPage };
};
