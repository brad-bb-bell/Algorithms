function breakingRecords(scores) {
  var highScore = scores[0];
  var lowScore = scores[0];
  var highOutput = 0;
  var lowOutput = 0;
  for (let index = 1; index < scores.length; index++) {
    if (scores[index] > highScore) {
      highScore = scores[index];
      highOutput++;
    } else if (scores[index] < lowScore) {
      lowScore = scores[index];
      lowOutput++;
    }
  }
  return [highOutput, lowOutput];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
