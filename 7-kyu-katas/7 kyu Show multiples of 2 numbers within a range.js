//https://www.codewars.com/kata/583989556754d6f4c700018e

function multiples(s1,s2,s3){
    const result = [];
    for (let i = Math.max(s1, s2); i < s3; i++){
        if(i % s1 === 0 && i % s2 === 0){
            result.push(i);
        }
    }
    return result;
}

