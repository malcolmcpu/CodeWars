//STORY - Ben has a very simple idea to make some profit: he buys something
// and sells it again. Of course, this wouldn't give him any profit at all
// if he was simply to buy and sell it at the same price. Instead, he's
// going to buy it for the lowest possible price and sell it at the highest.

//TASK - Write a function that returns both the minimum and maximum number
// of the given list/array.

//REMARKS - All arrays or lists will always have at least one element, so
// you don't need to check the length. Also, your function will always get
// an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr) {
  let extremes = {
    min: null,
    max: null,
  };

  for (const element of arr) {
    if (extremes.min === null) {
      extremes.min = element;
    } else if (element < extremes.min) {
      extremes.min = element;
    }
  }

  for (const element of arr) {
    if (extremes.max === null) {
      extremes.max = element;
    } else if (element > extremes.max) {
      extremes.max = element;
    }
  }
  return [extremes.min, extremes.max];
}

//REFACTORED SOLUTION - Rather than doing two loops thru the same array, we can run
// Math.min and Math.max methods on shallow copies of the input array.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
