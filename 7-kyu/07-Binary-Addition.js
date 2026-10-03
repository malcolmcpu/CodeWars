// Challenge - Implement a function that adds two numbers together
// and returns their sum in binary. The conversion can be done
// before, or after the addition.

// The binary number returned should be a string.
function addBinary(a, b) {
  let sum = a + b;

  return sum.toString(2);
}

// REFACTOR SOLUTION - Rather than storing sum in a variable, we can
// simple add the function inputs in parentheses and append for a
// simple one liner.

function addBinary(a, b) {
  return (a + b).toString(2);
}
