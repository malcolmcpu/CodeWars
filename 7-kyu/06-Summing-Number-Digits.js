// Challenge => Write a function which takes a number as input and
// returns the sum of the absolute value of each of the number's
// decimal digits.

function sumDigits(number) {
  let numArr = String(Math.abs(number))
    .split('')
    .map((element) => Number(element));

  return numArr.reduce((accum, currentVal) => accum + currentVal, 0);
}

//REFACTORED SOLUTION => We can also actually append turn the number into
// a string and then append the reduce method to the end of our array methods
// turning it into a one liner.

function sumDigits(number) {
  return String(Math.abs(number))
    .split('')
    .reduce((acc, currentVal) => acc + Number(currentVal), 0);
}
