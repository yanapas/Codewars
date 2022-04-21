//https://www.codewars.com/kata/58249d08b81f70a2fc0001a4

const closestMultiple10 = num => {
    let lastDigit = num % 10;
    if (lastDigit < 5){
        return num - lastDigit;
    } else {
        return (num - lastDigit) + 10;
    }
};