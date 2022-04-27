//https://www.codewars.com/kata/5a61a846cadebf9738000076/train/javascript

function peak(arr){
  let leftToRight = []
  let rightToLeft = []
  let sumL = 0
  let sumR = 0
  let index

  for(let i =0; i < arr.length; i++){
    sumL += arr[i]
    leftToRight.push(sumL)
  }
  for(let i = arr.length -1; i >= 0 ; i--){
    sumR += arr[i]
    rightToLeft.unshift(sumR)

  }
  for(let i = 0; i < leftToRight.length; i++){
    for(let j = 0; j < rightToLeft.length; j++){
      if(leftToRight[i] === rightToLeft[j] && i === j){
        index = i
        return index
      }

    }

  }

  return -1
}