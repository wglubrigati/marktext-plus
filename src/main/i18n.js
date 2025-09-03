import { getTranslation } from '../shared/i18n'

// 当前语言设置（可以从配置文件或用户设置中获取）
let currentLanguage = 'en'

/**
 * 获取翻译文本
 * @param {string} key - 翻译键
 * @param {object} params - 参数对象
 * @returns {string} 翻译后的文本
 */
export function t(key, params = {}) {
  return getTranslation(key, currentLanguage, params)
}

/**
 * 获取当前语言
 * @returns {string} 当前语言代码
 */
export function getCurrentLanguage() {
  return currentLanguage
}

/**
 * 设置语言
 * @param {string} language - 语言代码
 */
export function setLanguage(language) {
  currentLanguage = language
  
  // 通知所有渲染进程语言已改变
  const { BrowserWindow } = require('electron')
  const windows = BrowserWindow.getAllWindows()
  windows.forEach(window => {
    if (window && !window.isDestroyed()) {
      window.webContents.send('language-changed', language)
    }
  })
}