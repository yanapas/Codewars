//https://www.codewars.com/kata/58291fea7ff3f640980000f9

function allContinents(list) {
  let obj = {

  }
  for(let el of list){
    if(obj[el.continent]){
      obj[el.continent]++
    } else {
      obj[el.continent] = 1
    }
  }
  return Object.keys(obj).length === 5 ? true : false
}