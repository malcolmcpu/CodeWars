// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words
// in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a
// single space.

// Note that s may contain leading or trailing spaces or multiple spaces
// between two words. The returned string should only have a single space
// separating the words. Do not include any extra spaces.

//PREP Methodology
// P - function will take in a singular string
// R - function will output a singular string that is the input string in reverse
// E - reverseWords('pick up the phone') => will return 'phone the up pick'
// P - 1. we first want to trim off any outside spaces
//     2. initialize an empty string
//     3. we can then separate our words in the string into an array for referencing
//     4. with that array, remove any elements that are just spaces or iterate and only push non space elements
//     5. push non space elements to the empty array
//     6. put array together with space as a parameter
