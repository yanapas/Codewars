//https://www.codewars.com/kata/58c9322bedb4235468000019

function isVeryEvenNumber(n) {
    while (n > 9){
        let str = n + ' ';
        let sum = 0;
        for(let i = 0; i < str.length; i++){
            sum += +str[i]
        }
        n = sum;
    }
    return (n % 2 === 0)? true : false ;
}