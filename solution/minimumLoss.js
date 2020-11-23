function minimumLoss(price) {
    // if (2 <= price.length <= 1000) {
    //     let arr = [];
    //     for (let i = 0; i < price.length - 1; i++) {
    //         for (let y = i + 1; y < price.length; y++) {
    //             let a = price[i] - price[y];
    //             if (a >= 0) {
    //                 arr.push(a);
    //             }
    //         }
    //     }
    //     let min = arr[0]
    //     for (let z = 0; z < arr.length; z++) {
    //         if (min > arr[z]) {
    //             min = arr[z]
    //         }
    //     }
    //     return min;
    // }
    let numberYear = Object.assign({}, price)
    console.log(typeof(numberYear));
    console.log(Object.keys(numberYear));
}
minimumLoss([10, 7, 20, 2, 5]);