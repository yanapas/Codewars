//https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
    let squareSumm = 0;
    for (let i = 0; i < numbers.length; i++){
        squareSumm += numbers[i] ** 2;
    }
    return squareSumm;
}