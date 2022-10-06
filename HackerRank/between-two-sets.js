function getTotalX(a, b) {
  var output = 0;
  var min_a = Math.min(...a);
  for (let i = min_a; i <= Math.max(...b); i += min_a) {
    if (b.every((item) => item % i === 0)) {
      if (a.every((item) => i % item === 0)) {
        output++;
      }
    }
  }
  return output;
}
console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([3, 4], [24, 48]));
