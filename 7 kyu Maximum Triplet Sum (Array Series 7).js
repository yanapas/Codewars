//https://www.codewars.com/kata/5aa1bcda373c2eb596000112

function maxTriSum(numbers){
    let sum = 0;
    for (let i = 0; i < 3; i++){

        let max = Math.max(...numbers);
        numbers = numbers.filter(
            (number) => {
                return number !== max;
            }
        ); sum += max;
    }
    return sum;
}