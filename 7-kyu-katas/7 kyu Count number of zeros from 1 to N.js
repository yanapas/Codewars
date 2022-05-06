//https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript

function countZerosForNumber(num) {

  let countOfZeros = 0;
  while(num !== 0 ) {
    const lastDigit = num % 10;
    if (lastDigit == 0) {
      countOfZeros +=1;
    }
    num -= lastDigit;
    num /= 10;
  }

  return countOfZeros;
}

function countZeros(n) {
  let count = 0;
  for(let i = 1; i <= n; i++){
    count += countZerosForNumber(i);
  }
  return count;
}
