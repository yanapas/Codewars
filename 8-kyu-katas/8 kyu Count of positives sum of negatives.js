//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return [];
    let count = 0;
    let sumOfNegative = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] > 0){
            count++;
        } else {
            sumOfNegative += input[i];

        }
    }
    return [count, sumOfNegative];
}