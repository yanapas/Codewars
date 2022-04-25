https://www.codewars.com/kata/557b5e0bddf29d861400005d

function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    let kmspl = mpg * 0.354006043538;
    return parseFloat(kmspl.toFixed(2))
}