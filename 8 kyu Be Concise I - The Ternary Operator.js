//https://www.codewars.com/kata/56f3f6a82010832b02000f38

function describeAge(age) {
    return `You're a(n) ${age<13?'kid':age<18?'teenager':age<65?'adult':'elderly'}`;
}