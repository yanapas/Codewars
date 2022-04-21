//https://www.codewars.com/kata/57a049e253ba33ac5e000212

function factorial(n){
    let result = 1;
    let i = 1;
    while(i <= n){
        result = result * i;
        i++;
    }
    return result;
}