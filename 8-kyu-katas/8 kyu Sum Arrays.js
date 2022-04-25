//https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum (numbers) {
    let sumNum = 0;
    if (numbers === []){
        return 0;
    }
    for (let i = 0; i < numbers.length; i++){
        sumNum+= numbers[i];
    }
    return sumNum;
};