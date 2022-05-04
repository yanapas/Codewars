//https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

function getSumOfDigits(integer) {
  let sum = 0;
  let str = integer.toString()
  console.log(str);
  for(let el of str){
    sum += +(el)
  }
  return sum

}