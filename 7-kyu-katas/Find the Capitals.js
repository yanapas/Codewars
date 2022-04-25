//https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript
function capital(capitals){
  let arr = []

  for(let el of capitals){
    arr.push(`The capital of ${el.country || el.state} is ${el.capital}`)
  }
  return arr
}