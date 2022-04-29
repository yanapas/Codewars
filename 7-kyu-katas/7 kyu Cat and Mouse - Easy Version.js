//https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript

function catMouse(x){
  let counter = 0;
  for(let el of x){
    if(el === '.'){
      counter++
    }
  }
  return counter > 3? "Escaped!" : "Caught!"
}