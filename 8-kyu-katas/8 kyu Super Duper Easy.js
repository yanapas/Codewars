//https://www.codewars.com/kata/55a5bfaa756cfede78000026

function problem(x){
    if (typeof x === "string"){
        return "Error";
    }
    if (typeof x === "number"){
        return x * 50 + 6;
    }
}

