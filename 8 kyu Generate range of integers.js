//https://www.codewars.com/kata/55eca815d0d20962e1000106

function generateRange(min, max, step){
    let arr = [];
    for (i = min; i <= max; i = i + step){
        arr.push(i);
    }
    return arr;
}