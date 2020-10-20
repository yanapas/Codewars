//https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
    let maskCard = '';
    for  (let i = 0; i < cc.length; i++){
        if (i < cc.length - 4){
            maskCard += "#";
        } else {
            maskCard += cc[i];
        }
    }
    return maskCard;
}