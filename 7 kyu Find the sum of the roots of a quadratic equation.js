//https://www.codewars.com/kata/57d448c6ba30875437000138

function roots(a,b,c){
    let d = b ** 2 - 4 * a * c;
    let x1 = (-b + d ** 0.5) / (2 * a);
    let x2 = (-b - d ** 0.5) / (2 * a);
    let result = 0;
    if(d < 0){
        return null;
    }
    else {
        result = x1 + x2;
        return Number(result.toFixed(2));
    }
}

