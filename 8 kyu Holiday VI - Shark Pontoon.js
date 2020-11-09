//https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let yourTime = pontoonDistance / youSpeed;
    let sharkTime = sharkDistance / sharkSpeed;
    if (dolphin === true){
        sharkTime = sharkDistance / (sharkSpeed / 2);
    }
    return (yourTime < sharkTime) ? "Alive!" : "Shark Bait!";
}