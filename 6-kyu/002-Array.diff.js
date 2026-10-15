//Implement a function that computes the difference between two lists.
// The function should remove all occurrences of elements from the
// first list (a) that are present in the second list (b). The order
// of elements in the first list should be preserved in the result.

function arrayDiff(a, b) {
  let unique = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      unique.push(a[i]);
    }
  }
  return unique;
}

//REFACTOR - Alternative to for-loop, we can use filter to iterate through
// the "a" array and still apply the b.includes logic. We'll be set up to
// still only return the a elements that aren't inlcuded in "b"

function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}
