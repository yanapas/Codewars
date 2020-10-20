//https://www.codewars.com/kata/57f8ee485cae443c4d000127

function spacify(str) {
    let result = '';
    for (let i = 0; i < str.length; i++){
        if (i < str.length - 1){
            result += str[i] + ' ';
        } else {
            result+= str[i]
        }
    }
    return result;
}