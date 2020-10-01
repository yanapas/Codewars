//https://www.codewars.com/kata/55a75e2d0803fea18f00009d

function slope(points){
    let [a, b, c, d] = points;
    if (c - a === 0){
        return 'undefined';
    }
    return `${(d - b) / (c - a)}`;
}