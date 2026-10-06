// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = 0;
  str.split('').forEach((element) => {
    if (
      element.toLowerCase() === 'a' ||
      element.toLowerCase() === 'e' ||
      element.toLowerCase() === 'i' ||
      element.toLowerCase() === 'o' ||
      element.toLowerCase() === 'u'
    ) {
      vowels++;
    }
  });
  return vowels;
}

//REFACTORED SOLUTION CODE

function getCount(str) {
  let vowels = 'aeiou';
  let vowelCount = 0;

  str.split('').forEach((element) => {
    if (vowels.includes(element)) {
      vowelCount++;
    }
  });
  return vowelCount;
}

//SECOND REFACTORED SOLUTION - We'll make use of regex in this instance and check
// for what vowel array returns. If no vowels are in the match array, we return
// "null." If vowels are the array, we'll return the length.

function getCount(str) {
  let regexTest = /[aeiou]/g;
  return str.match(regexTest) ? str.match(regexTest).length : 0;
}
