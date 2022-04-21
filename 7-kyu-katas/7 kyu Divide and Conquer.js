//https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x){
    countSrings = '';
    countNumbers = 0;
    for (let i = 0; i < x.length; i++){
        if (typeof x[i] === 'number'){
            countNumbers+= x[i]
        } if (typeof x[i] === 'string'){
            countSrings= Number(countSrings) + Number(x[i]);
        }

    }
    return countNumbers - countSrings;
}