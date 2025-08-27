import type { CookieOptions, CookieRef } from "nuxt/app";

interface CrossDomainCookieOptions extends CookieOptions<string> {
  // 是否设置为跨域cookie（自动设置domain为顶级域名）
  crossDomain?: boolean;
}

export const useCrossDomainCookie = <T = string>(
  name: string,
  options: CrossDomainCookieOptions = {}
): CookieRef<T> => {
  // 获取顶级域名
  const getTopDomain = (): string => {
    const config = useRuntimeConfig();
    return config.public.cookieDomain as string;
  };

  // 默认配置
  const defaultOptions: CookieOptions<T> = {
    default: options.default || (() => ""),
    maxAge: options.maxAge || 60 * 60 * 24 * 7, // 7天
    secure: options.secure ?? process.env.NODE_ENV === "production",
    sameSite: options.sameSite || "lax",
    ...options
  };

  // 如果启用跨域，设置domain
  if (options.crossDomain !== false) {
    defaultOptions.domain = getTopDomain();
  }

  return useCookie<T>(name, defaultOptions);
};
