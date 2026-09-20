// CALCULATE AVERAGE -

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let sum = 0;
  if (array.length) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  } else {
    return 0;
  }
}

//REFACTORED SOLUTION CODE - from building out the brute force method with a for loop,
// we can see that it's also possible to apply the reduce method to our input array and
// then just divide by the input array's length to retrieve the same result

function findAverage(array) {
  // your code here
  return array.length
    ? array.reduce((acc, currentVal) => acc + currentVal, 0) / array.length
    : 0;
}
