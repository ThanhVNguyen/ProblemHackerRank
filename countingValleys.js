function countingValleys(step, path) {
  const arrPath = path.split('');
  console.log(arrPath);
  let countValley = 0;
  let level = 0;
  for (let i = 0; i <= arrPath.length; i += 1) {
    if (arrPath[i] === 'U') {
      level += 1;
      if (level === 0) {
        countValley += 1;
      }
    } else {
      level -= 1;
    }
  }
  return countValley;
}
console.log(countingValleys(8, 'UDDDUDUU'));
