import { createI18n } from 'vue-i18n'
import bus from '../bus'

// 直接导入翻译文件
import enTranslations from '../../../shared/i18n/locales/en.json'
import zhCNTranslations from '../../../shared/i18n/locales/zh-CN.json'
import zhTWTranslations from '../../../shared/i18n/locales/zh-TW.json'
import esTranslations from '../../../shared/i18n/locales/es.json'
import frTranslations from '../../../shared/i18n/locales/fr.json'
import deTranslations from '../../../shared/i18n/locales/de.json'
import jaTranslations from '../../../shared/i18n/locales/ja.json'
import koTranslations from '../../../shared/i18n/locales/ko.json'
import ptTranslations from '../../../shared/i18n/locales/pt.json'

// 获取当前语言设置
let currentLocale = 'en' // 默认为英文，与主进程保持一致

// 加载翻译数据
const messages = {
  en: enTranslations,
  'zh-CN': zhCNTranslations,
  'zh-TW': zhTWTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  pt: ptTranslations
}

// 创建Vue i18n实例
const i18n = createI18n({
  legacy: false,
  locale: currentLocale,
  fallbackLocale: 'en',
  messages,
  // 禁用链接功能以避免@符号被误解析
  modifiers: {
    '@': () => '@'
  },
  // 禁用复数解析功能
  pluralRules: {},
  // 自定义消息编译器来处理|字符
  messageCompiler: {
    compile: (message) => {
      // 如果消息包含|字符，直接返回原始字符串，不进行复数解析
      if (typeof message === 'string' && message.includes('|')) {
        return () => message
      }
      // 对于其他消息，使用默认编译
      return null
    }
  }
})

// 确保 i18n 实例使用正确的语言
i18n.global.locale.value = currentLocale

// 导出翻译函数 - 修复：正确处理Vue i18n v9+的global getter
export const t = (key, ...args) => {
  // 检查i18n实例是否可用
  if (!i18n) {
    console.warn('⚠️ i18n实例不可用，使用英文fallback')
    return key
  }
  
  try {
    // 正确访问global属性
    const global = i18n.global
    if (!global) {
      console.warn('⚠️ i18n.global不可用，使用英文fallback')
      return key
    }
    
    // 确保获取最新的语言设置
    const currentLanguage = global.locale.value || currentLocale
    if (currentLanguage !== currentLocale) {
      currentLocale = currentLanguage
      console.log(`🌍 翻译函数语言已更新: ${currentLocale}`)
    }
    
    return global.t(key, ...args)
  } catch (error) {
    console.error('❌ 翻译函数执行错误:', error)
    return key
  }
}

// 确保i18n实例挂载到window对象
if (typeof window !== 'undefined') {
  window.__VUE_I18N__ = i18n
  console.log('✅ i18n实例已挂载到window.__VUE_I18N__')
}

// 导出语言设置函数
export const setLanguage = (locale) => {
  if (locale && messages[locale]) {
    i18n.global.locale.value = locale
    currentLocale = locale
  }
}

// 导出获取当前语言函数
export const getCurrentLanguage = () => currentLocale

// 导出i18n实例（命名导出和默认导出）
export { i18n }
export default i18n

// 监听语言变化
if (window.electron && window.electron.ipcRenderer) {
  window.electron.ipcRenderer.on('language-changed', (event, newLocale) => {
    console.log('Received language-changed event:', newLocale)
    if (newLocale && messages[newLocale]) {
      i18n.global.locale.value = newLocale
      currentLocale = newLocale
      console.log('Language updated to:', newLocale)
      // 通知其他组件语言已改变
      bus.emit('language-changed', newLocale)
    }
  })
  
  // 启动时请求当前语言设置
  window.electron.ipcRenderer.send('mt::get-current-language')
  window.electron.ipcRenderer.on('mt::current-language', (event, language) => {
    console.log('Received current language:', language)
    if (language && messages[language]) {
      i18n.global.locale.value = language
      currentLocale = language
      console.log('Initial language set to:', language)
      // 通知其他组件语言已设置
      bus.emit('language-changed', language)
    }
  })
}