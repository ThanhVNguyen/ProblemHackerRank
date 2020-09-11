function compareTriplets(a, b) {
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      countA += 1;
    }
    if (a[i] < b[i]) {
      countB += 1;
    }
  }
  const arr = [countA, countB];
  return arr;
}
// compareTriplets([2, 4, 6], [12, 34, 2]);

module.exports = compareTriplets;
