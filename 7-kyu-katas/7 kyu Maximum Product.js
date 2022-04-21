//https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
    let max = array[0] * array[1];
    for (let i = 1; i < array.length - 1; i++){
        let current = array[i] * array[i + 1]
        if (max < current){
            max = current;
        }
    }
    return max;
}