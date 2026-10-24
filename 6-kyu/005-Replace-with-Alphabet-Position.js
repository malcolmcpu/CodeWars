// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  // P - function will take in a sentence string
  // R - function will return a string of individual numbers representing alphabet placements
  // E - alphabetPosition("Ball") => "2 1 17 17"
  // P - 1. start off an alphabet including each letter and a space to account for 0-indexing
  //     2. create an empty array to hold the all of our position numbers
  //     3. break up the input string and morph into an array for iterating
  //     4. move thru the array, and check each letter's position against the alphabet and push
  //        the positions into the empty array
  //     5. put the elements of the new array back together into a string

  let alphabet = ' abcdefghijklmnopqrstuvwxyz';
  let strArr = [];

  text = text.toLowerCase().split('');
  for (const element of text) {
    if (alphabet.includes(element) && element !== ' ') {
      strArr.push(alphabet.indexOf(element));
    }
  }
  return strArr.join(' ');
}
