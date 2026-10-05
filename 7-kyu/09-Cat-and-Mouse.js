// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the
// string will be made up of '.'. The string will start with the cat, and end with the mouse.

// You need to find out if the cat can catch the mouse from its current position.
// The cat can jump over at most three characters. So:

// "C.....m" returns "Escaped!" <-- more than three characters between

// "C...m" returns "Caught!" <-- as there are three characters between the two,
// the cat can jump.

function catMouse(x) {
  let count = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === '.') {
      count++;
    }
  }

  if (count <= 3) {
    return 'Caught!';
  } else return 'Escaped!';
}

// REFACTORED SOLUTION - Instead of for looping, we can separate the characters,
// filter out for the periods and then check for just length. Using that value,
// we can set up the return strings within a ternary.

function catMouse(x) {
  return x.split('').filter((element) => element === '.').length <= 3
    ? 'Caught!'
    : 'Escaped!';
}
