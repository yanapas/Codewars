//https://www.codewars.com/kata/58381907f8ac48ae070000de
function isLanguageDiverse(list) {
  let obj = {}
  for(let el of list){
    if(obj[el.language]){
      obj[el.language]++
    } else {
      obj[el.language] = 1
    }
  }
  let arr = Object.values(obj)
  return Math.max(...arr) / Math.min(...arr) <= 2;

}