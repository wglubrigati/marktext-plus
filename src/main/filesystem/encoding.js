import chardet from 'chardet'

const ICONV_LITE_NAME = {
  // Unicode
  'UTF-8': 'utf8',
  'UTF-16LE': 'utf16le',
  'UTF-16BE': 'utf-16be',
  'UTF-32LE': 'UTF-32LE', // iconv-lite accepts these names directly
  'UTF-32BE': 'UTF-32BE',

  // Japanese
  Shift_JIS: 'Shift_JIS',
  'EUC-JP': 'EUC-JP',

  // Chinese
  // WHATWG treats many GB* labels as GBK; using GB18030 is safest for decoding
  GBK: 'GBK',
  GB18030: 'GB18030',

  // Korean
  'EUC-KR': 'EUC-KR',

  // Traditional Chinese
  Big5: 'Big5',

  // Western/others
  'windows-1250': 'windows-1250',
  'windows-1251': 'windows-1251',
  'windows-1252': 'windows-1252',
  'windows-1253': 'windows-1253',
  'windows-1254': 'windows-1254',
  'windows-1255': 'windows-1255',
  'windows-1256': 'windows-1256',
  'ISO-8859-1': 'ISO-8859-1',
  'ISO-8859-2': 'ISO-8859-2',
  'ISO-8859-5': 'ISO-8859-5',
  'ISO-8859-6': 'ISO-8859-6',
  'ISO-8859-7': 'ISO-8859-7',
  'ISO-8859-8': 'ISO-8859-8',
  'ISO-8859-9': 'ISO-8859-9',
  'KOI8-R': 'KOI8-R',
  // Treat all ASCII-ish detections as UTF-8 safely
  ASCII: 'utf8'
}

// Byte Order Mark's to detect endianness and encoding.
const BOM_ENCODINGS = {
  utf8: [0xef, 0xbb, 0xbf],
  utf16be: [0xfe, 0xff],
  utf16le: [0xff, 0xfe]
}

const checkSequence = (buffer, sequence) => {
  if (buffer.length < sequence.length) {
    return false
  }
  return sequence.every((v, i) => v === buffer[i])
}

/**
 * Guess the encoding from the buffer.
 *
 * @param {Buffer} buffer
 * @param {boolean} autoGuessEncoding
 * @returns {Encoding}
 */
export const guessEncoding = (buffer, autoGuessEncoding) => {
  let isBom = false
  let encoding = 'utf8'

  // Detect UTF8- and UTF16-BOM encodings.
  for (const [key, value] of Object.entries(BOM_ENCODINGS)) {
    if (checkSequence(buffer, value)) {
      return { encoding: key, isBom: true }
    }
  }

  // // Try to detect binary files. Text files should not containt four 0x00 characters.
  // let zeroSeenCounter = 0
  // for (let i = 0; i < Math.min(buffer.byteLength, 256); ++i) {
  //   if (buffer[i] === 0x00) {
  //     if (zeroSeenCounter >= 3) {
  //       return { encoding: 'binary', isBom: false }
  //     }
  //     zeroSeenCounter++
  //   } else {
  //     zeroSeenCounter = 0
  //   }
  // }

  // Auto guess encoding, otherwise use UTF8.
  if (autoGuessEncoding) {
    encoding = chardet.detect(buffer)
    if (ICONV_LITE_NAME[encoding]) {
      encoding = ICONV_LITE_NAME[encoding]
    } else {
      encoding = ICONV_LITE_NAME.toLowerCase().replace(/-_/g, '')
    }
  }
  return { encoding, isBom }
}
