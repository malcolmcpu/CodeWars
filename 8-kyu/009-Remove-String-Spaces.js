// Challenge - Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x) {
  let string = '';

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== ' ') {
      string += x[i];
    }
  }

  return string;
}

//REFACTORED SOLUTION CODE
function countSheeps(sheep) {
  return sheep.filter((element) => element === true).length;
}
