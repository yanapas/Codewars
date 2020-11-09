//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function(humanYears) {
    return [ humanYears,
        ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
        ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
    ];

}

