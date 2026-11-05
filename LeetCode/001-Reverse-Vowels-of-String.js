// Prompt - Given a string s, reverse only all the vowels in the string
// and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in
// both lower and upper cases, more than once.

//  P - function will take in a string parameter
//  R - function should output a string
//  E - reverseVowels('apple') should out put => 'eppla'
//  P - 1. create a variable that holds all existing vowels in a string for reference
//      2. initialize an empty array for holding the confirmed vowels from out input string
//      3. iterate thru input string and run conditional check if current character is in vowel variable
//      4. if iterated character is a vowels, push to empty array and replace that character w/ placeholder
//      5. reverse order of vowels in your array
//      6. loop through the input string again and now replace placeholder characters with elements from array, then remove that char from the array
//      7. return the edited version of the string

var reverseVowels = function (s) {
  const allVowels = 'aeiouAEIOU';
  let vowelTrack = [];
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (allVowels.includes(s[i])) {
      vowelTrack.push(s[i]);
      s[i] = '~';
    }
  }

  vowelTrack = vowelTrack.reverse();
  console.log('this is vowel track: ', vowelTrack);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '~') {
      console.log(vowelTrack);
      s[i] = vowelTrack.shift();
    }
  }
  return s.join('');
};
