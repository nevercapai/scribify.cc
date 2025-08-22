import type { CookieOptions, CookieRef } from 'nuxt/app'

interface CrossDomainCookieOptions extends CookieOptions<string> {
    // 是否设置为跨域cookie（自动设置domain为顶级域名）
    crossDomain?: boolean
}

export const useCrossDomainCookie = <T = string>(
    name: string,
    options: CrossDomainCookieOptions = {}
): CookieRef<T> => {
    // 获取顶级域名
    const getTopDomain = (): string => {
        // 开发环境返回 localhost
        if (process.env.NODE_ENV === 'development') {
            // ip地址手动改
            return 'localhost'
        }

        const config = useRuntimeConfig();
        const redirectUrl = config.public.jumpUrl as string;

        if (redirectUrl) {
            const parts = redirectUrl.split('.')
            if (parts.length >= 2) {
                // 取最后两段作为顶级域名
                return parts.slice(-2).join('.')
            }
            return `.${redirectUrl}`
        }

        console.error('NUXT_JUPM_BASE_URL 未配置')
        return ''
    }

    // 默认配置
    const defaultOptions: CookieOptions<T> = {
        default: options.default || (() => ''),
        maxAge: options.maxAge || 60 * 60 * 24 * 7, // 7天
        secure: options.secure ?? (process.env.NODE_ENV === 'production'),
        sameSite: options.sameSite || 'lax',
        ...options
    }

    // 如果启用跨域，设置domain
    if (options.crossDomain !== false) {
        defaultOptions.domain = getTopDomain()
    }

    return useCookie<T>(name, defaultOptions)
}
