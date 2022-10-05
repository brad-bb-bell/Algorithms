// function getTotalX(a, b) {
//   var output = 0;
//   var factors = [];
//   for (let index = 2; index <= b[0]; index++) {
//     if (b[0] % index === 0) {
//       factors.push(index);
//     }
//   }
//   factors.forEach((factor) => {
//     var istrue = [];
//     for (let index = 0; index < b.length; index++) {
//       if (b[index] % factor === 0 && factor !== 2 && factor !== 1) {
//         istrue.push(b[index]);
//       }
//     }
//     if (istrue.length === b.length) {
//       output++;
//     }
//   });
//   return output;
// }
function getTotalX(a, b) {
  var output = 0;
  for (let i = Math.min(...a); i <= Math.max(...b); i += Math.min(...a)) {
    b.array.forEach(element => {
      a.forEach((x => 
        ))
      
    });
  }
}
console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([3, 4], [24, 48]));
