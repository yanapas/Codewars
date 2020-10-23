//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
    let average = 0
    for (let i = 0; i < array.length; i++){
        average += array[i];
    }
    return average / array.length;
}