//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    let reverse = '';
    x = x.toLowerCase();
    for (let i = x.length - 1; i >= 0; i--){
        reverse +=  x[i];
    }

    return reverse === x;
}