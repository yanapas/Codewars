//https://www.codewars.com/kata/5733d6c2d780e20173000baa

function maxMin(arr1,arr2){

    const arr=arr2.map((v,i)=>v-arr1[i],0)
    return [Math.max(...arr.map(v=>Math.abs(v))),Math.min(...arr.map(v=>Math.abs(v)))]

}