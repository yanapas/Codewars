//https://www.codewars.com/kata/582642b1083e12521f0000da

function arrayMash (array1, array2) {
    let result = [];
    for (i = 0; i < array1.length; i++){
        let first = array1[i];
        let second = array2[i];
        result.push(first);
        result.push(second)
    }
    return result;
}