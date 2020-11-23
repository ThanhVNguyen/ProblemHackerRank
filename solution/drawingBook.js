// // eslint-disable-next-line consistent-return
// function pageCount(n, p) {
//   let count = 0;
//   if (n % 2 === 0 && (n - p) >= 2) {
//     for (let i = p; i < n; i += 2) {
//       count += 1;
//     }
//     return count - 1;
//   }
//   if (n % 2 === 0 && (n - p) >= 2) {
//     for (let i = n; i > p; i -= 2) {
//       count += 1;
//     }
//     return count - 1;
//   }
//   if (n % 2 !== 0 && (n - p) >= 2) {
//     for (let i = p; i < (n - 1); i += 2) {
//       count += 1;
//     }
//     return count - 1;
//   }
//   if (n % 2 !== 0 && (n - p) >= 2) {
//     for (let i = (n - 1); i > p; i -= 2) {
//       count += 1;
//     }
//     return count - 1;
//   }
//   if (n - p < 2) {
//     return 0;
//   }
// }
// console.log(pageCount(11, 4));

function pageCount(n, p) {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);
    return Math.min(pageTurns, totalTurns - pageTurns);
}
console.log(pageCount(6, 5));