//https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/train/javascript
function countWins(winnerList, country) {
  return winnerList.filter(el => el.country === country).length
}