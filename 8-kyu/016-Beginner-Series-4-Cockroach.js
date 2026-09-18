// The cockroach is one of the fastest insects. Write a function which
// takes its speed in km per hour and returns it in cm per second,
// rounded down to the integer (= floored).
function cockroachSpeed(s) {
  let kps = s / 60 / 60;
  return Math.floor(kps * 100000);
}
