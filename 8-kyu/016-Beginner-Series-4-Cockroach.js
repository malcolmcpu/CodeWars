// The cockroach is one of the fastest insects. Write a function which
// takes its speed in km per hour and returns it in cm per second,
// rounded down to the integer (= floored).
function cockroachSpeed(s) {
  let kps = s / 60 / 60;
  return Math.floor(kps * 100000);
}

//REFACTORED SOLUTION CODE

function cockroachSpeed(s) {
  let kps = s / 60 / 60;
  let cps = kps * 100000;

  return Math.floor(cps);
}

//SECOND REFACTORED SOLUTION CODE
function cockroachSpeed(s) {
  return Math.floor((s / 60 / 60) * 100000);
}
