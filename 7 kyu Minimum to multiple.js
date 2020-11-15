//https://www.codewars.com/kata/5e030f77cec18900322c535d

function minimum(a, x) {
    const mod = a % x;

    if(mod > x/2) {
        return x - mod;
    }

    return mod;
}