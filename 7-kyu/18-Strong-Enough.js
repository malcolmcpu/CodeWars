// Write a function that takes an array of strings as an argument and returns a
// sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  // P - function takes in a single array of strings
  // R - function will output a single array of strings
  // E - sortByLength(['word', 'recruiter', 'shape', 'call', 'by']) will
  //     return ['by', 'call', 'word', 'shape', 'recruiter']
  // P - 1. reach into input array and sort the elements by element.length

  return array.sort((a, b) => a.length - b.length);
}
