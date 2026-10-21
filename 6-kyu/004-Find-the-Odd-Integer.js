// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let numbers = {};

  for (const element of A) {
    if (!numbers[element]) {
      numbers[element] = 1;
    } else {
      numbers[element]++;
    }
  }

  for (const number in numbers) {
    if (numbers[number] % 2) {
      return parseInt(number);
    }
  }
}
