// const arr = [1, 3, 5, 7, 9];
// const min = Math.min(...arr);
// const max = Math.max(...arr);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// const Min = sum - max;
// const Max = sum - min;
// console.log(Min);
// console.log(Max);

function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const Min = sum - max;
  const Max = sum - min;
  const MinMax = [Min, Max];
  return MinMax;
}
module.exports = miniMaxSum;
