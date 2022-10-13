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
function migratoryBirds(arr) {
  var values = [0, 0, 0, 0, 0];
  arr = arr.sort((a, b) => a - b);
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
