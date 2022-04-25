//https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

function checkThreeAndTwo(array) {
  let obj = {}
  for(let el of array){
    if(obj[el]){
      obj[el]++
    } else {
      obj[el] = 1;
    }
  }

  let arr = Object.values(obj)
  return Math.abs(arr[0] - arr[1]) === 1 && arr.length === 2
}