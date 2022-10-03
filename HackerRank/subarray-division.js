function birthday(s, d, m) {
  var output = 0;
  for (let index = 0; index <= s.length - m; index++) {
    if (s.slice(index, index + m).reduce((sum, x) => sum + x) === d) {
      output++;
    }
  }
  return output;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
