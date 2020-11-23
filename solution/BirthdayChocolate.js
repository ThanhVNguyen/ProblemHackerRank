// function birthday(s, d, m) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if ((s[i] + s[i + 1]) === d) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(birthday([1, 2, 1, 4, 2, 1], 3, 2));

function birthdayChocolate(s, d, m) {
    let count = 0;
    for (let i = 0; i < s.length; i += 1) {
        const limit = i + m;
        if (limit > s.length) {
            break;
        }
        let sum = 0;
        for (let j = i; j < limit; j += 1) {
            sum += s[j];
        }
        if (sum === d) {
            count += 1;
        }
    }
    return count;
}
// console.log(birthday([1, 2, 1, 4, 2, 1], 3, 2));
module.exports = birthdayChocolate;