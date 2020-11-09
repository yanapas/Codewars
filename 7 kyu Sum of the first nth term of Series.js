//https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n)
{
    let result = 1;

    if(n===0) {
        result = 0;
    }


    let divider = 1;
    for (let i = 1; i < n; i++) {
        divider += 3;
        result += (1 / divider);
    }

    return result.toFixed(2);
};