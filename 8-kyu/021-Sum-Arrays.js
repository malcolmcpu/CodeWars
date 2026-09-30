// Write a function that takes an array of numbers and returns the
// sum of the numbers. The numbers can be negative. If the array
// is empty, return 0.

function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}
