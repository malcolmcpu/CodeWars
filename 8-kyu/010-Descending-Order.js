// Your task is to make a function that can take any non-negative integer as
// an argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  n = String(n).split('');

  return Number(
    n
      .sort((a, b) => a - b)
      .reverse()
      .join(''),
  );
}

//FIRST REFACTORED SOLUTION
function descendingOrder(n) {
  n = String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');

  return Number(n);
}

//SECOND REFACTORED SOLUTION
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );
}
