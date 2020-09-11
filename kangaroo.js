// function isInt(number) {
//   if (number % 1 === 0) {
//     return true;
//   }
//   return false;
// }
// function kangaroo(x1, v1, x2, v2) {
//   const calDis = (x2 / (v1 - x1 - v2));
//   if (calDis > 0) {
//     const check = isInt(calDis);
//     if (check === true && (v1 - v2) >= 0) {
//       console.log('YES');
//       return 'YES';
//     }
//     console.log('NO');
//     return 'NO';
//   }
//   console.log('NO');
//   return 'NO';
// }
// kangaroo(0, 3, 4, 2);

function kangaroo(x1, v1, x2, v2) {
  if (v2 >= v1) {
    return 'NO';
  }
  if ((x2 - x1) % (v1 - v2) === 0) {
    return 'YES';
  }
  return 'NO';
}
kangaroo(12, 45, 34, 23);
