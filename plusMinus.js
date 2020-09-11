function plusMinus(arr) {
  let i = 0;
  let negativeCount = 0;
  let positiveCount = 0;
  let zeroCount = 0;
  while (i < arr.length) {
    if (arr[i] > 0) {
      positiveCount += 1;
    }
    if (arr[i] < 0) {
      negativeCount += 1;
    }
    if (arr[i] === 0) {
      zeroCount += 1;
    }
    i += 1;
  }
  const positive = parseFloat(positiveCount / arr.length).toFixed(6);
  // console.log(positive);
  const negative = parseFloat(negativeCount / arr.length).toFixed(6);
  // console.log(negative);
  const zero = parseFloat(zeroCount / arr.length).toFixed(6);
  // console.log(zero);
  return [positive, negative, zero];
}
// plusMinus([23, -43, 2, 0, -12, 78, 0]);

module.exports = plusMinus;
