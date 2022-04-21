//https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n){
    let power = 0;
    while (2 ** power <= n){

        if( 2 ** power === n ) return true;
        power ++;

    }

    return false;
}