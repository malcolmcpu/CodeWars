// TASK => You get an array of numbers, return the sum of all of the positives ones.

// EXAMPLE => [1, -4, 7, 12] => 1 + 7 + 12 = 20

// NOTE => If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;

  for (const element of arr) {
    if (element > 0) {
      sum += element;
    }
  }
  return sum;
}

//REFACTORED SOLUTION - In place of doing for-of loop where we apply conditional,
// we can run the .filter() method to weed out our positive numbers with the same
// condition from our previous if. Afterward we can apply .reduce() method to replace
// the adding of elements to a sum variable.
