//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
    if (numbers.length === 0 ){
        return [];
    }

    const min = Math.min(...numbers);
    const result = [];
    let minHasBeenRemoved = false;

    for(const number of numbers) {
        if(number === min && minHasBeenRemoved === false) {
            minHasBeenRemoved = true;
            continue;
        }
        result.push(number);
    }



    return result;
}