function breakingTheRecords(scores) {
  let hightScore = scores[0];
  let lowScore = scores[0];
  let countHightScore = 0;
  let countLowScore = 0;

  for (let i = 1; i < scores.length; i += 1) {
    if (scores[i] > hightScore) {
      hightScore = scores[i];
      countHightScore += 1;
    }
    if (scores[i] < lowScore) {
      lowScore = scores[i];
      countLowScore += 1;
    }
  }
  return [countHightScore, countLowScore];
}
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

module.exports = breakingTheRecords;
