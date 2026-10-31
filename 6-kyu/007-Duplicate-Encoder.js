// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character
// appears only once in the original string, or ")" if that character
// appears more than once in the original string. Ignore capitalization
// when determining if a character is a duplicate.

// EXAMPLES:

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let newStr = '';
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      newStr += '(';
    } else newStr += ')';
  }

  return newStr;
}

//REFACTORED SOLUTION - Instead of the full for-loop, we can split up the input string and run map method. Within the map, we can shorten the if-conditional with a one line ternary. In the ternary, we then add the parentheses to the newStr variable.
