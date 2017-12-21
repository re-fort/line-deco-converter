import { inverse } from './util'

export const codeMapKana = {
  あ: 1048833,
  い: 1048834,
  う: 1048835,
  え: 1048836,
  お: 1048837,
  か: 1048838,
  き: 1048839,
  く: 1048840,
  け: 1048841,
  こ: 1048842,
  さ: 1048843,
  し: 1048844,
  す: 1048845,
  せ: 1048846,
  そ: 1048847,
  た: 1048848,
  ち: 1048849,
  つ: 1048850,
  て: 1048851,
  と: 1048852,
  な: 1048853,
  に: 1048854,
  ぬ: 1048855,
  ね: 1048856,
  の: 1048857,
  は: 1048858,
  ひ: 1048859,
  ふ: 1048860,
  へ: 1048861,
  ほ: 1048862,
  ま: 1048863,
  み: 1048864,
  む: 1048865,
  め: 1048866,
  も: 1048867,
  や: 1048868,
  ゆ: 1048869,
  よ: 1048870,
  ら: 1048871,
  り: 1048872,
  る: 1048873,
  れ: 1048874,
  ろ: 1048875,
  わ: 1048876,
  を: 1048877,
  ん: 1048878,
  ぁ: 1048879,
  ぃ: 1048880,
  ぅ: 1048881,
  ぇ: 1048882,
  ぉ: 1048883,
  っ: 1048884,
  ゃ: 1048885,
  ゅ: 1048886,
  ょ: 1048887,
  が: 1048888,
  ぎ: 1048889,
  ぐ: 1048890,
  げ: 1048891,
  ご: 1048892,
  ざ: 1048893,
  じ: 1048894,
  ず: 1048895,
  ぜ: 1048896,
  ぞ: 1048897,
  だ: 1048898,
  ぢ: 1048899,
  づ: 1048900,
  で: 1048901,
  ど: 1048902,
  ば: 1048903,
  び: 1048904,
  ぶ: 1048905,
  べ: 1048906,
  ぼ: 1048907,
  ぱ: 1048908,
  ぴ: 1048909,
  ぷ: 1048910,
  ぺ: 1048911,
  ぽ: 1048912,
  ア: 1048913,
  イ: 1048914,
  ウ: 1048915,
  エ: 1048916,
  オ: 1048917,
  カ: 1048918,
  キ: 1048919,
  ク: 1048920,
  ケ: 1048921,
  コ: 1048922,
  サ: 1048923,
  シ: 1048924,
  ス: 1048925,
  セ: 1048926,
  ソ: 1048927,
  タ: 1048928,
  チ: 1048929,
  ツ: 1048930,
  テ: 1048931,
  ト: 1048932,
  ナ: 1048933,
  ニ: 1048934,
  ヌ: 1048935,
  ネ: 1048936,
  ノ: 1048937,
  ハ: 1048938,
  ヒ: 1048939,
  フ: 1048940,
  ヘ: 1048941,
  ホ: 1048942,
  マ: 1048943,
  ミ: 1048944,
  ム: 1048945,
  メ: 1048946,
  モ: 1048947,
  ヤ: 1048948,
  ユ: 1048949,
  ヨ: 1048950,
  ラ: 1048951,
  リ: 1048952,
  ル: 1048953,
  レ: 1048954,
  ロ: 1048955,
  ワ: 1048956,
  ヲ: 1048957,
  ン: 1048958,
  ァ: 1048959,
  ィ: 1048960,
  ゥ: 1048961,
  ェ: 1048962,
  ォ: 1048963,
  ッ: 1048964,
  ャ: 1048965,
  ュ: 1048966,
  ョ: 1048967,
  ガ: 1048968,
  ギ: 1048969,
  グ: 1048970,
  ゲ: 1048971,
  ゴ: 1048972,
  ザ: 1048973,
  ジ: 1048974,
  ズ: 1048975,
  ゼ: 1048976,
  ゾ: 1048977,
  ダ: 1048978,
  ヂ: 1048979,
  ヅ: 1048980,
  デ: 1048981,
  ド: 1048982,
  バ: 1048983,
  ビ: 1048984,
  ブ: 1048985,
  ベ: 1048986,
  ボ: 1048987,
  パ: 1048988,
  ピ: 1048989,
  プ: 1048990,
  ペ: 1048991,
  ポ: 1048992,
  ー: 1048993,
}

export const inverseCodeMapKana = inverse(codeMapKana)