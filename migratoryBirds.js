function migratoryBirds(arr) {
  const type1 = 1;
  let count1 = 0;

  const type2 = 2;
  let count2 = 0;

  const type3 = 3;
  let count3 = 0;

  const type4 = 4;
  let count4 = 0;

  const type5 = 5;
  let count5 = 0;
  const arr1 = [];
  for (let i = 0; i <= arr.length; i += 1) {
    if (type1 === arr[i]) {
      count1 += 1;
    }
  }
  arr1.push(count1);

  for (let i = 0; i <= arr.length; i += 1) {
    if (type2 === arr[i]) {
      count2 += 1;
    }
  }
  arr1.push(count2);

  for (let i = 0; i <= arr.length; i += 1) {
    if (type3 === arr[i]) {
      count3 += 1;
    }
  }
  arr1.push(count3);

  for (let i = 0; i <= arr.length; i += 1) {
    if (type4 === arr[i]) {
      count4 += 1;
    }
  }
  arr1.push(count4);

  for (let i = 0; i <= arr.length; i += 1) {
    if (type5 === arr[i]) {
      count5 += 1;
    }
  }
  arr1.push(count5);

  console.log(arr1);

  let max = arr[0];
  for (let y = 0; y <= arr1.length; y += 1) {
    if (max <= arr1[y]) {
      max = arr1[y];
    }
  }
  for (let z = 0; z < arr1.length; z += 1) {
      if ( max == arr1[0]){
        return 1;
      }
      if (max == arr1[1]){
        return 2;
      }
      if (max == arr1[2]){
        return 3;
      }
      if (max == arr1[3]){
        return 4;
      }
      if (max == arr1[4]){
        return 5;
      }
  }
  return max;
}
console.log(migratoryBirds([1, 4, 4, 2, 5, 5, 4, 5, 5]));
