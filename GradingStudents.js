// const grades = [4, 73, 67, 38, 33];
// let number = 0;
// for (let i = 0; i < grades.length; i++) {
//   if (grades[i] % 5 !== 2 && grades[i] >= 38) {
//     number = (Math.floor(grades[i] / 5)) * 5 + 5;
//     console.log(number);
//   } else if (grades[i] < 38 && grades[i] >= 5) {
//     number = grades[i];
//     console.log(number);
//   } else if (grades[i] % 5 === 2 && grades[i] >= 38) {
//     number = grades[i];
//     console.log(number);
// }
// }
// console.log
function gradingStudents(grades) {
  const gradingScore = [];
  let score = 0;
  for (let i = 0; i < grades.length; i += 1) {
    if (grades[i] % 5 >= 3 && grades[i] >= 38) {
      score = (Math.floor(grades[i] / 5)) * 5 + 5;
    } else {
      score = grades[i];
    }
    gradingScore.push(score);
  }
  return gradingScore;
}

module.exports = gradingStudents;
