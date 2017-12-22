[![NPM package](https://badge.fury.io/js/line-deco-converter.svg)](https://www.npmjs.com/package/line-deco-converter)

line-deco-converter
======================

LINEのデコ文字とテキストを相互に変換します。  
変換された文字列をLINEのテキスト欄に貼り付けるとデコ文字として表示されます。

## デモ
https://re-fort.net/line-deco-converter/

## npm
```
npm install line-deco-converter
```

## CDN
```
<script src="https://cdn.jsdelivr.net/npm/line-deco-converter/dist/build.min.js"></script>
```


## 使い方
```
const ld = new LineDeco()
ld.text2deco('text', { alphaType: 'ALPHA1', kanaType: 'KANA1' })
ld.deco2text('􂨁􀄁あ􏿿')
```
