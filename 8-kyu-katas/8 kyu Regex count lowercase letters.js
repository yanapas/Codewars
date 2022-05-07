//https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript

function lowercaseCount(str){
  let count = 0;
  let newStr = str.toUpperCase()

  for(let i = 0; i < str.length; i++){
    if(str[i]!== newStr[i]){
      count++
    }
  }
  return count
}