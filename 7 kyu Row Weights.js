//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

function rowWeights(array){
    let firstTeam = 0;
    let secondTeam = 0;
    let arr = [];
    for (let i = 0; i < array.length; i++){
        if (i % 2 === 0){
            firstTeam += array[i];
        } else {
            secondTeam += array[i];
        }
    }
    return [firstTeam, secondTeam];
}