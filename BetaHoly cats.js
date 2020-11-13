//https://www.codewars.com/kata/58ebfa6ef7cda1a3d4000048

function holycats(input){
    let arr = [...input];
    let arr1 = []

    for (let el of arr){
        if (el !== 'wicked' && el !== 'normal'){
            arr1.push(el)
        }
    }
    return arr1;

}