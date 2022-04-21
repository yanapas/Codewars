//https://www.codewars.com/kata/55afed09237df73343000042

function isLucky(n) {
    let sum = 0;
    let arr = [n]
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];

    }
    return (sum % 9 === 0 || sum === 0)? true : false;
}