// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let sum = array.reduce((acc, currentVal) => acc + currentVal, 0);

  return sum % 2 === 0 ? 'even' : 'odd';
}

// REFACTORED SOLUTION - Rather than placing the reduce in sum, to decrease space complexity,
// we can just use the reduce in the ternary

function oddOrEven(array) {
  return array.reduce((acc, currentVal) => acc + currentVal, 0) % 2 === 0
    ? 'even'
    : 'odd';
}

// SECOND SOLUTION REFACTOR - From the first refactor, we don't even actually have
// to use an equals comparison, we automatically know that if the ternary condition
// returns a number, the reduce result is odd. So we'll then put 'odd' as the first
// return and 'even' as the second.

function oddOrEven(array) {
  return array.reduce((acc, currentVal) => acc + currentVal, 0) % 2
    ? 'odd'
    : 'even';
}
