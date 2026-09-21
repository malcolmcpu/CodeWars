// Given an array of integers.

// Return an array, where the first element is the count of positives
// numbers and the second element is sum of negative numbers. 0 is
// neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  console.log(input);
  let positives = 0;
  let negatives = 0;

  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((element) => {
      Math.sign(element) === 1 ? positives++ : (negatives += element);
    });
    return [positives, negatives];
  }
}
