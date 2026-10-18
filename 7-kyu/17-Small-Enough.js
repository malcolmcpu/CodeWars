// You will be given an array and a limit value. You must check
// that all values in the array are below or equal to the limit
// value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  let limitCheck = [];

  for (const element of a) {
    if (element <= limit) limitCheck.push(element);
  }

  if (limitCheck.length === a.length) {
    return true;
  } else return false;
}

//REFACTORED SOLUTION - Alternative to doing the for-of loop and pushing into
// empty array, we can deploy .filter() method and check for the same condition,
// creating an array anyway. With that created array, we can compare the length
// of that array with the length of the original input array.

function smallEnough(a, limit) {
  let limitCheck = a.filter((element) => element <= limit);

  return limitCheck.length === a.length;
}

//SECOND REFACTORED SOLUTION - We can do a comparison check on one line with the
// filtered array w/o setting to a variable.

function smallEnough(a, limit) {
  return a.length === a.filter((element) => element <= limit).length;
}
