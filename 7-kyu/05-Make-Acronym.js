// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// 1. Split string to words by space char
// 2. Take every first letter from word in given string
// 3. Uppercase it
// 4. Join them toghether

function toAcronym(inp) {
  let acronyms = '';
  inp = inp.split(' ');

  for (let i = 0; i < inp.length; i++) {
    acronyms += inp[i][0].toUpperCase();
  }

  return acronyms;
}

//REFACTORED SOLUTION CODE - Other than the for loop, we can transform the
// string to an array then map thru the element, then perform the same
// action with adding first letters to the acronym empty string.

function toAcronym(inp) {
  let acronyms = '';
  inp.split(' ').map((element) => (acronyms += element[0].toUpperCase()));

  return acronyms;
}
