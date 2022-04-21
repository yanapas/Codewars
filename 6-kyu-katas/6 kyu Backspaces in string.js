//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(s) {
    let newStr = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] !== '#'){
            newStr.push(s[i]);
        } else {
            newStr.pop();
        }

    }
    return newStr.join("");
};