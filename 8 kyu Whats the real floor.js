//https://www.codewars.com/kata/574b3b1599d8f897470018f6

function getRealFloor(n) {
    if (n <= 0) {
        return n;
    }
    return (n > 13)? n - 2 : n - 1;
}