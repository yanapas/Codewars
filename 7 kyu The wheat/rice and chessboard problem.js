//https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

function squaresNeeded(grains){
    let sum = 0;
    let a = 0;
    while (sum < grains){
        sum += 2 ** a;
        a++;

    }
    return a;
}
