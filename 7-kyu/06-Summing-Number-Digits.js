// Challenge => Write a function which takes a number as input and
// returns the sum of the absolute value of each of the number's
// decimal digits.

function sumDigits(number) {
  let numArr = String(Math.abs(number))
    .split('')
    .map((element) => Number(element));

  return numArr.reduce((accum, currentVal) => accum + currentVal, 0);
}
