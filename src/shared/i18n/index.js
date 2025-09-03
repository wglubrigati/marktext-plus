import fs from 'fs'
import path from 'path'

// 支持的语言列表
const SUPPORTED_LANGUAGES = ['en', 'zh-CN', 'zh-TW', 'es', 'fr', 'de', 'ja', 'ko', 'pt']

// 翻译数据缓存
let translationsCache = {}

/**
 * 加载指定语言的翻译文件
 * @param {string} language - 语言代码
 * @returns {object} 翻译数据
 */
function loadTranslations(language) {
  if (translationsCache[language]) {
    return translationsCache[language]
  }

  try {
    // 尝试多个可能的路径
    let translationPath
    const possiblePaths = [
      // 构建后的路径（主进程）
      path.join(process.cwd(), 'out', 'main', 'locales', `${language}.json`),
      // 开发环境路径
      path.join(__dirname, 'locales', `${language}.json`),
      path.join(__dirname, '..', '..', 'shared', 'i18n', 'locales', `${language}.json`),
      path.join(process.cwd(), 'src', 'shared', 'i18n', 'locales', `${language}.json`)
    ]
    
    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        translationPath = possiblePath
        break
      }
    }
    
    if (!translationPath) {
      throw new Error(`Translation file not found for language: ${language}`)
    }
    
    const content = fs.readFileSync(translationPath, 'utf8')
    
    let translationData
    try {
      translationData = JSON.parse(content)
    } catch (error) {
      throw error
    }
    
    translationsCache[language] = translationData
    return translationData
  } catch (error) {
    // 回退到英文
    if (language !== 'en') {
      return loadTranslations('en')
    }
    return {}
  }
}

/**
 * 获取翻译文本
 * @param {string} key - 翻译键，支持点分隔的嵌套键
 * @param {string} language - 语言代码
 * @param {object} params - 参数替换对象
 * @returns {string} 翻译后的文本
 */
function getTranslation(key, language = 'en', params = {}) {
  const translations = loadTranslations(language)

  // 支持点分隔的嵌套键
  const keys = key.split('.')
  let value = translations

  for (const k of keys) {
    if (value && typeof value === 'object' && value.hasOwnProperty(k)) {
      value = value[k]
    } else {
      // 如果找不到翻译，返回键本身
      return key
    }
  }

  if (typeof value !== 'string') {
    return key
  }

  // 参数替换
  let result = value
  for (const [param, replacement] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{\\{${param}\\}\\}`, 'g'), replacement)
  }

  return result
}

/**
 * 获取支持的语言列表
 * @returns {string[]} 支持的语言代码数组
 */
function getSupportedLanguages() {
  return [...SUPPORTED_LANGUAGES]
}

/**
 * 检查语言是否支持
 * @param {string} language - 语言代码
 * @returns {boolean} 是否支持
 */
function isLanguageSupported(language) {
  return SUPPORTED_LANGUAGES.includes(language)
}

/**
 * 清除翻译缓存
 */
function clearCache() {
  translationsCache = {}
}

/**
 * 获取指定语言的所有翻译数据
 * @param {string} language - 语言代码
 * @returns {object} 完整的翻译数据对象
 */
function getAllTranslations(language) {
  return loadTranslations(language)
}

export {
  getTranslation,
  getSupportedLanguages,
  isLanguageSupported,
  clearCache,
  getAllTranslations,
  loadTranslations
}
