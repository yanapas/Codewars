//https://www.codewars.com/kata/58287977ef8d4451f90001a0

function isSameLanguage(list) {
  let obj = {}

  for(let el of list){
    if(obj[el.language]){
      obj[el.language]++
    } else {
      obj[el.language] = 1
    }
  }
  return Object.keys(obj).length === 1
}