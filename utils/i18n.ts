import { useI18n } from 'vue-i18n'

/**
 * 创建模块化的 i18n 翻译别名
 * @param module 模块名称，如 'IdentityInfoManage'
 * @param key 除去IdentityInfoManage.后的剩下key
 * @returns 包含翻译函数的计算属性
 * 比如翻译a.b.c,module和key可以随意组合。
 */
export function useI18nModule(module: string) {
  const { t } = useI18n()

  module = module;
  return function I18n(key: string) {
    if (module && !key) {
      return t(`${module}`)
    } else if (!module && key) {
      return t(`${key}`)
    } else {
      return t(`${module}.${key}`)
    }
  };
}
