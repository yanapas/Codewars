//https://www.codewars.com/kata/582887f7d04efdaae3000090
function findSenior(list) {
  let max = Math.max(...list.map(v=>v.age))
  return list.filter(v=>v.age===max)
}