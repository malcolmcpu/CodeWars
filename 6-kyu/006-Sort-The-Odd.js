// You will be given an array of numbers. You have to sort the odd
// numbers in ascending order while leaving the even numbers at
// their original positions.

function sortArray(array) {
  let oddNums = array.filter((element) => element % 2).sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      array[i] = oddNums[0];
      oddNums.shift();
    }
  }
  return array;
}

//REFACTORED SOLUTION - After initializing our array of sorted odd integer elements.
// We can map thru our original array and use a ternary as the callback function.
// Whenever we encounter an number during map, we can call on the .shift() method to
// pull the odd number in correct order; because this will also remove that same
// number from oddNums array afterward. The shift method will also keep us from
// repeating any already added numbers for the oddNums order.

function sortArray(array) {
  let oddNums = array.filter((element) => element % 2).sort((a, b) => a - b);

  return array.map((element) => (element % 2 ? oddNums.shift() : element));
}
