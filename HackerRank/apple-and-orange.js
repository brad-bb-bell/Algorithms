function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var fallenApples = 0;
  var fallenOranges = 0;
  apples.forEach((apple) => {
    if (apple + a >= s && apple + a <= t) {
      fallenApples++;
    }
  });
  oranges.forEach((orange) => {
    if (orange + b >= s && orange + b <= t) {
      fallenOranges++;
    }
  });
  console.log(fallenApples);
  console.log(fallenOranges);
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
