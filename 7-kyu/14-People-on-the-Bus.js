// There is a bus moving in the city which takes and drops some people at
// each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of
// each pair represent the number of people that get on the bus (the first
// item) and the number of people that get off the bus (the second item)
// at a bus stop.

// Your task is to return the number of people who are still on the bus
// after the last bus stop (after the last array). Even though it is the
// last bus stop, the bus might not be empty and some people might still
// be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people
// in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is
// empty in the first bus stop.

// EXAMPLES :

// number([[10,0],[3,5],[5,8]]) will yield a result of 5

// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) will yield a result of 17

var number = function (busStops) {
  // P - input will be an array, with each element being a two element array itself
  // R - output will be a single integer that represents the amount of left on the bus
  // E - number([[6,0], [8,4], [9,3], [7,4], [2,7]] => should return 14)
  //   P - 1. declare busOn and busOff variables defined at 0
  //       2. forEach thru input
  //       3. on each element place the first element into busOn and second into busOff
  //       4. return the busOn - busOff

  let busOn = 0;
  let busOff = 0;

  busStops.forEach((element) => {
    busOn += element[0];
    busOff += element[1];
  });

  console.log(busOn, busOff);
  return busOn - busOff;
};
