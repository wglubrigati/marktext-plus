import { getTranslation } from '../shared/i18n'
import { getCurrentLanguage as getRendererCurrentLanguage } from './src/i18n'

// 当前语言设置（从渲染进程的 i18n 系统获取）
let currentLanguage = 'en'

/**
 * 获取翻译文本
 * @param {string} key - 翻译键
 * @param {object} params - 参数对象
 * @returns {string} 翻译后的文本
 */
export function t(key, params = {}) {
  // 动态获取当前语言
  const currentLang = getRendererCurrentLanguage() || currentLanguage
  return getTranslation(key, currentLang, params)
}

/**
 * 获取当前语言
 * @returns {string} 当前语言代码
 */
export function getCurrentLanguage() {
  // 优先返回渲染进程 i18n 系统的当前语言
  return getRendererCurrentLanguage() || currentLanguage
}

/**
 * 设置语言
 * @param {string} language - 语言代码
 */
export function setLanguage(language) {
  currentLanguage = language
  // 同时更新渲染进程的 i18n 系统
  try {
    const { setLanguage: setRendererLanguage } = require('./src/i18n')
    setRendererLanguage(language)
  } catch (error) {
    console.warn('Failed to update renderer i18n language:', error)
  }
}

// Vue 插件形式的翻译系统
export default {
  install(app) {
    // 全局属性
    app.config.globalProperties.$t = t
    app.config.globalProperties.$getCurrentLanguage = getCurrentLanguage
    app.config.globalProperties.$setLanguage = setLanguage
    
    // 提供/注入
    app.provide('t', t)
    app.provide('getCurrentLanguage', getCurrentLanguage)
    app.provide('setLanguage', setLanguage)
  }
}