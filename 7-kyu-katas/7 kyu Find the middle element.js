//https://www.codewars.com/kata/545a4c5a61aa4c6916000755

var gimme = function (inputArray) {
    const sortArray = inputArray.slice().sort((a,b) => a - b);
    for (i in sortArray) {
        if (inputArray[i] === sortArray[1]) {
            return inputArray.indexOf(sortArray[1]);
        }
    }
};