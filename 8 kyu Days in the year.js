//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function isLeap(year) {
    return (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0));
}

function yearDays(year)
{
    const daysInYear = isLeap(year)? 366: 365;

    return `${year} has ${daysInYear} days`;
}