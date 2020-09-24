function getMoneySpent(keyboards, drives, b) {
  const arr = [];
  for (let i = 0; i < keyboards.length; i += 1) {
    for (let y = 0; y < drives.length; y += 1) {
      const sum = keyboards[i] + drives[y];
      if (sum <= b) {
        arr.push(sum);
      }
    }
  }
  if (arr.length > 0) {
    let max = arr[0];
    for (let z = 0; z < arr.length; z += 1) {
      if (arr[z] > max) {
        max = arr[z];
      }
    }
    return max;
  }
  return -1;
}
console.log(getMoneySpent([5, 2, 8], [3, 1], 10));
