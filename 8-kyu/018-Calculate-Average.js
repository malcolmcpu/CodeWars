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
