function birthdayCakeCandles(ar) {
    const max = Math.max(...ar);
    let countMax = 0;
    for (let i = 0; i < ar.length; i += 1) {
        if (max === ar[i]) {
            countMax += 1;
        }
    }
    return countMax;
}
// console.log(birthdayCakeCandles([23, 23, 34, 12, 56, 23]));

module.exports = birthdayCakeCandles;