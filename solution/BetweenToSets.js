const arr = [];
let arrBCA = [];
let arrUCB = [];
// const count = 0;
for (let i = 1; i <= 100; i += 1) {
    arr.push(i);
}
let valid = true;
for (let i = 0; i <= 1000; i += 1) {
    for (let y = 0; y < arr.length; y += 1) {
        if (arr[i] % arr[y] !== 0) {
            valid = false;
        }
    }
    if (valid === true) {
        arrBCA.push(arr[i]);
    }
    valid = true;
}
const arrBCASet = new Set(arrBCA);
arrBCA = [...arrBCASet];
let valid1 = true;
for (let c = 0; c <= arrBCA.length; c += 1) {
    for (let d = 0; d < b.length; d += 1) {
        if (b[d] % arrBCA[c] !== 0) {
            valid1 = false;
        }
    }
    if (valid1 === true) {
        arrUCB.push(arrBCA[c]);
    }
    valid1 = true;
}
const arrUCBSet = new Set(arrUCB);
arrUCB = [...arrUCBSet];