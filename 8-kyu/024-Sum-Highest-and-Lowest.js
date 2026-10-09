// Sum all the numbers of a given array ( cq. list ), except the highest
// and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each
// edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  console.log(array);
  if (array === null || array === undefined || array.length < 3) {
    return 0;
  } else {
    array = array.sort((a, b) => a - b);
    array.pop();
    array.shift();

    return array.reduce((acc, curr) => acc + curr, 0);
  }
}
