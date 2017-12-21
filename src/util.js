export const inverse = obj => {
  let newObj = {}
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    newObj[value] = key
  })
  return newObj
}
