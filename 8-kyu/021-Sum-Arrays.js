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

//SOLUTION REFACTOR - To move around creating a total variable, we
// can apply the reduce method and move thru the numbers array.

function sum(numbers) {
  return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
}
