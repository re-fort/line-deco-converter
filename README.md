[![NPM package](https://badge.fury.io/js/line-deco-converter.svg)](https://www.npmjs.com/package/line-deco-converter)

line-deco-converter
======================

Lineのデコ文字とテキストを相互に変換します。

## デモ
https://re-fort.net/line-deco-converter/

## npm
```
npm install line-deco-converter
```

## 使い方
```
const ld = new LineDeco()
ld.text2deco('text', { alphaType: 'ALPHA1', kanaType: 'KANA1' })
ld.deco2text('􂨁􀄁あ􏿿')
```
