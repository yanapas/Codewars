//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
  let res = ''

  for(let i = 0; i < str.length; i++){
    res += str[i] + str[i]
  }
  return res
}