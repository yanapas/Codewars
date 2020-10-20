//https://www.codewars.com/kata/5704aea738428f4d30000914

function tripleTrouble(one, two, three){
    let newStr = '';
    for (let i = 0; i < one.length; i++){
        newStr += one[i] + two[i] + three[i];
    }
    return newStr;
}