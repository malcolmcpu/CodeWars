// This kata is about multiplying a given number by eight
// if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

//REFACTORED SOLUTION CODE - taking the same conditions we've set up in our if/else and employing
// them in a ternary to hit a one-liner

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
