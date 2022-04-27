//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(arr){

  let newArr = arr.split(',')
  if(newArr.length <= 2) return null

  return newArr.slice(1, -1).join(' ')
}