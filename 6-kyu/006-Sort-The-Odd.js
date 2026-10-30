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
