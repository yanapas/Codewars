//https://www.codewars.com/kata/5748838ce2fab90b86001b1a

function squareArea(A){
    let square = (2 * A / Math.PI) ** 2;
    return Number(square.toFixed(2));
}