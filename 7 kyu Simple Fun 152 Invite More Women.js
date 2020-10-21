//https://www.codewars.com/kata/58acfe4ae0201e1708000075

function inviteMoreWomen(L) {
    let sumOfeveryone = 0;
    for (let i = 0; i < L.length; i++){
        sumOfeveryone += L[i]
    }
    if (sumOfeveryone > 0) {
        return true;
    } else {
        return false;
    }
}