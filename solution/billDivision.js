function bonAppetit(bill, k, b) {
    let sum = 0;
    for (let i = 0; i < bill.length; i += 1) {
        sum += bill[i];
    }
    const billAnna = sum - bill[k];
    const billThem = billAnna / 2;
    if (billThem < b) {
        const payMoney = b - billThem;
        console.log(payMoney);
    }
    if (billThem === b) {
        console.log('Bon Appetit');
    }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 7));