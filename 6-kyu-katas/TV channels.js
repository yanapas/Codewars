//https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript
function redarr(arr) {

  arr.sort()
  arr = arr.filter((el, i)=> i === arr.indexOf(el))
  let obj = {}
  for (let i = 0; i < arr.length; i++){
    obj[i] = arr[i]

  }
  return obj

}
