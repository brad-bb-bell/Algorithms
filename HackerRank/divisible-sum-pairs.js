function divisibleSumPairs(n, k, ar) {
  var output = [];
  for (let index = 0; index < n; index++) {
    for (let inner = 0; inner < n; inner++) {
      if ((ar[index] + ar[inner]) % k === 0 && index !== inner) {
        output++;
      }
    }
  }
  return output / 2;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
