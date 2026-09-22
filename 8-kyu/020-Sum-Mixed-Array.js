// Given an array of integers as strings and numbers, return
// the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let sum = 0;

  x.forEach((element) => {
    sum += Number(element);
  });

  return sum;
}

//REFACTORED SOLUTION - To replace the forEach method, we can employ map() to iterate thru and convert all
// elements to numbers. We can then employ the reduce() method to gather the sum then return.

function sumMix(x) {
  return x
    .map((element) => Number(element))
    .reduce((acc, currVal) => acc + currVal, 0);
}
