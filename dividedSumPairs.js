function divideSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i <= n; i += 1) {
    for (let y = i + 1; y <= n; y += 1) {
      const sum = ar[i] + ar[y];
      if (sum % k === 0) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(divideSumPairs(6, 3, [1, 3, 4, 5, 4, 3]));
