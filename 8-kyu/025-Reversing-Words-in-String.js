// You need to write a function that reverses the words in a given string.
// Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore
// unneccesary whitespace.

function reverse(string) {
  let revStr = [];

  for (const element of string.split(' ').reverse()) {
    revStr.push(element);
  }
  return revStr.join(' ');
}

//REFACTORED SOLUTION - Because we're only reversing the position of the words
// and NOT the letters in each word, we can just break up the letters by space
// and then append .reverse() and .join()

function reverse(string) {
  return string.split(' ').reverse().join(' ');
}
