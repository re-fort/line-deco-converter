import { charTypeMap, inverseCharTypeMap } from './charTypeMap'
import { codeMapAlpha, inverseCodeMapAlpha } from './codeMapAlpha'
import { codeMapKana, inverseCodeMapKana } from './codeMapKana'

const finalChar = 1114111

/**
 * LineDeco テキストをLineのデコ文字に変換、またはその逆の変換を行うクラス
 * @class LineDeco
 */
export default class LineDeco {
  // デコ文字の構造
  // サンプル: 􂨁􀄁あ􏿿
  //
  // 1文字目: デコ文字の種類
  // 2文字目: どの文字か
  // 3文字目: 補助文字(どの文字かを識別するための文字、なくてもよいのでこのライブラリでは除外して出力する)
  // 4文字目: 終端文字

  /**
   * テキストをLineのデコ文字に変換
   * @param {string} text
   * @param {string} alphaType
   * @param {string} kanaType
   * @returns {string}
   */
  text2deco(text = '', { alphaType = 'ALPHA1', kanaType = 'KANA1' } = {}) {
    if (!charTypeMap[alphaType]) {
      throw new Error('文字タイプが不正です。選択可能な値: ALPHA1-4')
    }
    if (!charTypeMap[kanaType]) {
      throw new Error('文字タイプが不正です。選択可能な値: KANA1-4')
    }

    const charaTypeAlpha = charTypeMap[alphaType]
    const charaTypeKana = charTypeMap[kanaType]
    const decoratedString = Array.from(text)
      .reduce((combinedStr, currentStr) => {
        if (codeMapAlpha[currentStr]) return `${combinedStr}${String.fromCodePoint(charaTypeAlpha, codeMapAlpha[currentStr], finalChar)}`
        if (codeMapKana[currentStr]) return `${combinedStr}${String.fromCodePoint(charaTypeKana, codeMapKana[currentStr], finalChar)}`
        return `${combinedStr}${currentStr}`
      }, '')

    return decoratedString
  }

  /**
   * デコ文字をテキストに変換
   * @param {string} deco
   * @returns {string}
   */
  deco2text(deco = '') {
    const arraySeparatedFinalChar = deco.split(String.fromCodePoint(finalChar))
    const plainString = arraySeparatedFinalChar.reduce((combinedString, currentString) => {
      let convertedString = ''
      let codeMap

      for (let char of currentString) {
        if (inverseCharTypeMap[char.codePointAt(0)]) {
          codeMap = this._getInverseCodeMap(inverseCharTypeMap[char.codePointAt(0)])
        } else if (codeMap && codeMap[char.codePointAt(0)]) {
          convertedString += codeMap[char.codePointAt(0)]
          break
        } else {
          convertedString += char
        }
      }

      return `${combinedString}${convertedString}`
    }, '')

    return plainString
  }

  _getInverseCodeMap(type) {
    return type.includes('ALPHA') ? inverseCodeMapAlpha : inverseCodeMapKana
  }
}

module.exports = exports['default']
