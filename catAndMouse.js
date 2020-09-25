function catAndMouse(x, y, z) {
  const catAMouse = Math.abs(x - z);
  const catBMouse = Math.abs(y - z);
  if (catAMouse > catBMouse) {
    return 'Cat B';
  } if (catAMouse < catBMouse) {
    return 'Cat A';
  }
  return 'Mouse C';
}
console.log(catAndMouse(1, 2, 3));
