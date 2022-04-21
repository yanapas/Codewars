//https://www.codewars.com/kata/5546180ca783b6d2d5000062

function squares(x, n) {
    const result = [x];
    if (n <= 0) {
        return [];
    }
    for (let i = 1; i < n; i++){
        const lastNumber = result[result.length - 1];
        result.push(lastNumber ** 2)
    }
    return result;
}