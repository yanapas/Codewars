//https://www.codewars.com/kata/582746fa14b3892727000c4f

function countDevelopers(list) {
  let obj = {}
  let counter = 0;
  for(let el of list){
    if(obj[el.continent]){
      obj[el.continent]++
      if (el.continent === 'Europe' && el.language === 'JavaScript')
        counter++
    } else {
      if (el.continent === 'Europe' && el.language === 'JavaScript'){
        obj[el.continent] = 1
        counter = 1
      }
    }
  }
  return counter > 0? counter : 0
}