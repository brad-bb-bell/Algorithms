// This code works but times out with a large arr

// function migratoryBirds(arr) {
//   var birdType = arr[0];
//   var birdSightings = 0;
//   for (let index = 0; index < arr.length; index++) {
//     var tempBird = arr[index];
//     var tempSightings = 0;
//     arr.forEach((item) => {
//       if (arr[index] === item) {
//         tempSightings++;
//       }
//     });
//     if (tempSightings > birdSightings) {
//       birdSightings = tempSightings;
//       birdType = tempBird;
//     }
//   }
//   return birdType;
// }

// arr = arr.sort((a, b) => a - b);

function migratoryBirds(arr) {
  var values = [0, 0, 0, 0, 0];
  var bird = 1;
  var sightings = 0;
  for (let index = 1; index < 6; index++) {
    var num = arr.filter((x) => x === index);
    values[index - 1] = num.length;
  }
  for (let index = 1; index < 6; index++) {
    if (values[values.length - index] > sightings) {
      sightings = values[values.length - index];
      bird = values.indexOf(sightings) + 1;
    }
  }
  return bird;
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
