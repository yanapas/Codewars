//https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    sumSomeone = 0;
    let averageSomeone = 0;
    for (let i = 0; i < classPoints.length; i++){
        sumSomeone += classPoints[i];
        averageSomeone = sumSomeone / classPoints.length;
    } if (averageSomeone < yourPoints) {
        return true;
    } else {
        return false;
    }
}