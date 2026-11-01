// Your team is writing a fancy new text editor and you've been
// tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each
// line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the
// olon and space in between.

// Examples: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function (array) {
  let newArr = [];

  array.forEach((element, index) => {
    newArr.push(`${index + 1}: ${element}`);
  });

  return newArr;
};

//REFACTORED SOLUTION - We can employ the .map() method because it automatically
// creates a new array, removing the need for an empty array/any push method line.
// While also being able to access the indeces, we can use the same template
// literal logic.

var number = function (array) {
  return array.map((element, index) => `${index + 1}: ${element}`);
};
