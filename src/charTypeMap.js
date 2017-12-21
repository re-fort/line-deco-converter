import { inverse } from './util'

export const charTypeMap =  {
  ALPHA1: 1058305,
  ALPHA2: 1058561,
  ALPHA3: 1058817,
  ALPHA4: 1059073,
  KANA1: 1059329,
  KANA2: 1059841,
  KANA3: 1059585,
  KANA4: 1060097,
}

export const inverseCharTypeMap = inverse(charTypeMap)
