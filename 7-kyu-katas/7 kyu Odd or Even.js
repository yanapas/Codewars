//https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
    let sumOfElements = 0
    for ( let i = 0; i < array.length; i++){
        sumOfElements += array[i]
    }
    return sumOfElements % 2 === 0 ? 'even' : 'odd'

}