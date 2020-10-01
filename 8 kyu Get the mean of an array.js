//https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks){
    let amountOfMarks = marks.length;
    let sum = 0;
    for (let i = 0; i < amountOfMarks; i++) {
        sum = sum + marks[i];
    }
    let result = Math.floor(sum / amountOfMarks);
    return result;
}