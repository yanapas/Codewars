//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--){
        newString +=str[i];
    }
    return newString;
}