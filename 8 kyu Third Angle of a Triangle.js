//https://www.codewars.com/kata/5a023c426975981341000014

function otherAngle(a, b) {
    if (a < 0 || b < 0){
        return 0;
    }
    return 180 - (a + b);
}