function sumLeftDiagonal(arr) {
  let sumX = 0;
  for (let x = 0; x <= arr.length - 1; x += 1) {
    sumX += arr[x][x];
  }
  return sumX;
}

function sumRightDiagonal(arr) {
  let sumY = 0;
  for (let y = 0; y <= arr.length - 1; y += 1) {
    sumY += arr[arr.length - 1 - y][y];
  }
  return sumY;
}

function diagonalDifference(arr) {
  const diff = sumRightDiagonal(arr) - sumLeftDiagonal(arr);
  return Math.abs(diff);
}

// const arr = [
//   [2, 3, 4],
//   [5, 6, 8],
//   [4, 45, 23],
// ];
// console.log(sumLeftDiagonal(arr));
// console.log(sumRightDiagonal(arr));
// console.log(diagonalDifference(arr));
module.exports = diagonalDifference;
