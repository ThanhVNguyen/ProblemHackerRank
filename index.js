// // function sum(a, b) {
// //   return a + b;
// // }
// // console.log(sum(4, 5));

// // function sub(a, b) {
// //   return a - b;
// // }
// // console.log(sub(12, 20));

// // function sumThenSub(c, d) {
// //   return sum(c, d) + sub(c, d);
// // }
// // console.log(sumThenSub(3, 5));

// const arrA = [2, 4, 5, 6, 66, 34, 23];
// const arrB = [2, 4, 23, 54, 34, 23, 23];
// const arr = [];
// let valid = false;
// for (let i = 0; i < arrA.length; i++) {
//   for (let y = 0; y < arrB.length; y++) {
//     if (arrA[i] === arrB[y]) {
//       valid = true;
//     }
//   }
//   if (valid === true) {
//     arr.push(arrA[i]);
//   }
// valid = false;
// }
// console.log(arr);
const gradingStudents = require('./GradingStudents');
const miniMaxSum = require('./mini-max-sum');
const birthdayCakeCandles = require('./birthdayCakeCandles');
const birthdayChocolate = require('./BirthdayChocolate');
const breakingTheRecords = require('./BreakingTheRecords');
const compareTriplets = require('./CompareTriplets');
const diagonalDifference = require('./diagnonalDifference');
const timeConversion = require('./timeCoversion');
const stairCase = require('./Staircase');
const plusMinus = require('./plusMinus');

// console.log(gradingStudents([23, 34, 99]));
// console.log(miniMaxSum(gradingStudents([23, 34, 99])));
// console.log(birthdayCakeCandles([23, 23, 34, 12, 56, 23]));
// console.log(birthdayChocolate([1, 2, 1, 4, 2, 1], 3, 2));
// console.log(breakingTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
// console.log(compareTriplets([2, 4, 6], [12, 34, 2]));
// console.log(diagonalDifference([[2, 3, 4], [5, 6, 8], [4, 45, 23]]));
// console.log(plusMinus([23, -43, 2, 0, -12, 78, 0]));
// console.log(timeConversion('12:05:34PM'));
// stairCase(5);

module.exports = {
  gradingStudents,
  miniMaxSum,
  plusMinus,
  stairCase,
};
