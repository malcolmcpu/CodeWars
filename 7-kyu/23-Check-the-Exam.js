// The first input array is the key to the correct answers to an
// exam, like ["a", "a", "b", "d"]. The second one contains a
// student's submitted answers.

// The two arrays are not empty and are the same length. Return the
// score for this array of answers, giving +4 for each correct answer,
// -1 for each incorrect answer, and +0 for each blank answer,
// represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(array1, array2) {
  let score = 0;

  for (const [index, element] of array2.entries()) {
    if (element === '') {
      score += 0;
    } else if (element === array1[index]) {
      score += 4;
    } else if (element !== array1[index]) {
      score -= 1;
    }
  }

  return score > 0 ? score : 0;
}
