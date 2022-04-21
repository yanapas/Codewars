//https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }
    let max = 0;
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            let diff = Math.abs(a1[i].length - a2[j].length);
            if (diff > max) {
                max = diff;
            }
        }
    } return max;
}