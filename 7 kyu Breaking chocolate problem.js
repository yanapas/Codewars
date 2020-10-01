//https://www.codewars.com/kata/534ea96ebb17181947000ada

function breakChocolate(n,m) {
    if((n>1 && m>1) || (n>1 && m==1) || (n==1 && m>1))
        return m*n-1;
    else
        return 0;
}