//https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        const oldValue = array[i];
        const newValue = squareOrSquareRootElement(oldValue);
        arr.push(newValue);
    }
    return arr;
}

function squareOrSquareRootElement(element) {
    const sqrtOfElement = element ** 0.5;

    if (isInteger(sqrtOfElement)) {
        return sqrtOfElement;
    } else {
        return element ** 2;
    }

}

function isInteger(number) {
    return (number - Math.trunc(number)) === 0;
}