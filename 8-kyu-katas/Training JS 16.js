//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr){
  var newArray = [];
  var shortest = "";

  for (var i = 0; i < arr.length ; i++) {
    var currentStr = arr[i];

    if (currentStr.length < shortest.length || shortest.length === 0) {
      shortest = currentStr;
    }
  }

  for (var j = 0; j < arr.length; j++) {
    var currentStr2 = arr[j];
    newArray.push(currentStr2.slice(0, shortest.length));
  }
  return newArray;
}