//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj){
  let arr = []

  for(let el in obj){
    if (el.length === 5){
      arr.push(el)
    }
    if (obj[el].length===5){
      arr.push(obj[el])
    }
  }
  return arr
}