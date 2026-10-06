// In this Kata, you will be given a string that may have mixed uppercase
// and lowercase letters and your task is to convert that string to either
// lowercase only or uppercase only based on:

// • make as few changes as possible.
// • if the string contains equal number of uppercase and lowercase letters,
//   convert the string to lowercase.

function solve(s) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === s[i].toLowerCase() ? lowerCaseCount++ : upperCaseCount++;
  }

  return lowerCaseCount >= upperCaseCount ? s.toLowerCase() : s.toUpperCase();
}

//REFACTORED SOLUTION CODE - As an alternative to running the for-loop, we can split input,
// then filter by casing logic and still store amounts for both in lowerCaseCount and upperCaseCount.

function solve(s) {
  console.log(s);
  let lowerCaseCount = s
    .split('')
    .filter((element) => element == element.toLowerCase()).length;
  let upperCaseCount = s
    .split('')
    .filter((element) => element == element.toUpperCase()).length;

  if (lowerCaseCount >= upperCaseCount) {
    return s.toLowerCase();
  } else return s.toUpperCase();
}

//SECOND REFACTORED SOLUTION - We can replace the if-else logic in our refactor with a
// ternary operator, to make the lines just a little shorter.

function solve(s) {
  let lowerCaseCount = s
    .split('')
    .filter((element) => element == element.toLowerCase()).length;
  let upperCaseCount = s
    .split('')
    .filter((element) => element == element.toUpperCase()).length;

  return lowerCaseCount >= upperCaseCount ? s.toLowerCase() : s.toUpperCase();
}
