// Find the most common letter (not a space) in the given string
// (comprised of at least 3 lowercase words) and replace it with
// the given letter.

// If such letters are two or more, choose the one that appears
// earliest in the string.

function replaceCommon(string, letter) {
  //P - a string with at least 3 lower case letter words, another string with just one letter
  //R - the given string of words, where the letter most used is replaced by the single letter parameter
  //E - 'i am using a lot of words here', 'w' => 'i am using a lwt wf wwrds here'
  //P - 1. remove the spaces in the string parameter
  //      2. iterate thru the string and keep a count of all of the letter instances
  //      3. check for the key with the greatest value
  //      4. whichever letter, we will replace that letter with the "letter" parameter

  let letterCount = {};
  let spacesRemoved = string.replaceAll(' ', '');

  for (const element of spacesRemoved) {
    if (!letterCount[element]) {
      letterCount[element] = 1;
    } else letterCount[element]++;
  }

  let characterOrder = Object.keys(letterCount);
  let firstMax = Object.values(letterCount).indexOf(
    Math.max(...Object.values(letterCount)),
  );

  return string.replaceAll(characterOrder[firstMax], letter);
}
