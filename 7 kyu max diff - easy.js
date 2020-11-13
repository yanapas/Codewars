//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

function maxDiff(list) {
    if (list.length <= 1){
        return 0;
    }
    let max = Math.max(...list);
    let min = Math.min(...list)
    return max - min;
};