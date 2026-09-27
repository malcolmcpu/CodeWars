//The two oldest ages function/method needs to be completed. It should take an
// array of numbers as its argument and return the two highest numbers within
// the array. The returned value should be an array in the format [second oldest age,  oldest age].

//The order of the numbers passed in could be any order. The array will always
// include at least 2 items. If there are two or more oldest age, then return
// both of them in array format.

function twoOldestAges(ages) {
  let first = ages.sort((a, b) => a - b).pop();
  let second = ages.pop();

  return [second, first];
}

//REFACTORED SOLUTION CODE - We can instead sort the original input and in our return
// refer to the indices of the last and second to last elements of the sorted array
// for the two oldest.

function twoOldestAges(ages) {
  ages = ages.sort((a, b) => a - b);

  return [ages[ages.length - 2], ages[ages.length - 1]];
}

//SECOND REFACTORED SOLUTION - We can actually initialize an empty array to hold our two
// oldest age elements. After sorting the input array, we then pop and push that element
// to the empty array. Next we push in the next element at the end of the original sorted
// array because the first one was already popped off. With the second oldest age being
// the first element in the new initialized array, and the prompt asking for the oldest
// first, we can perform .reverse() method to satisfy the required return format.

function twoOldestAges(ages) {
  let oldest = [];

  oldest.push(ages.sort((a, b) => a - b).pop());
  oldest.push(ages.pop());

  return oldest.reverse();
}
