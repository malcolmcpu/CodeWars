// You like building blocks. You especially like building blocks
// that are squares. And what you even like more, is to arrange
// them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead,
// you end up with an ordinary rectangle! Those blasted things! If you
// just had a way to know, whether you're currently working in vain…
// Wait! That's it! You just have to check if your number of building
// blocks is a perfect square.

// Given an integral number, determine if it's a square number

var isSquare = function (n) {
  if (n < 0) {
    return false;
  } else if (n === 0) {
    return true;
  } else {
    return Number.isInteger(Math.sqrt(n));
  }
};

//REFACTORED SOLUTION CODE - We can cut the else-if and if down some, let's
// leave the if and inside of else, we can place a ternary.

var isSquare = function (n) {
  if (n < 0) {
    return false;
  } else {
    return n === 0 ? true : Number.isInteger(Math.sqrt(n));
  }
};

//SECOND REFACTOR - We can make the first refactor even shorter by starting with
// one ternary checking the logic inside of the if conditional. The second expression
// then leads into another conditional to check with two remaining expressions.

var isSquare = function (n) {
  return n < 0 ? false : n === 0 ? true : Number.isInteger(Math.sqrt(n));
};

//SECOND REFACTOR - We can split up the two ternaries in another way to make the
// final return a little shorter. The second one gets placed into a helper function.
// This allows to only need to show one ternary on the final line, where the second
// conditional check only gets called on if the input passed is greater than 0.

var isSquare = function (n) {
  function hasQuotient(num) {
    return num === 0 ? true : Number.isInteger(Math.sqrt(num));
  }

  return n < 0 ? false : hasQuotient(n);
};
