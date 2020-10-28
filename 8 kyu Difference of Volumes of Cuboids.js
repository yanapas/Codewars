//https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
    let firstCuboid = a[0] * a[1] * a[2];
    let secondCuboid = b[0] * b[1] * b[2];
    return (secondCuboid > firstCuboid)? secondCuboid - firstCuboid : firstCuboid - secondCuboid;
}