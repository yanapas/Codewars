//https://www.codewars.com/kata/558f9f51e85b46e9fa000025

function differenceOfSquares(n){
    let sum1 = 0;
    let sum2 = 0;
    let i = 1;
    while (i <= n){
        sum1 +=  i;
        sum2 += i ** 2;
        i++;
    }
    sum1 = sum1 ** 2;
    return sum1 - sum2;

}