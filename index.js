function rotLeft(a, d) {
  let size = a.length;
  let newArr = [];
  let rotateLeftIdx = d;

  let i = 0;
  while (rotateLeftIdx < size) {
    newArr[i] = a[rotateLeftIdx];
    i++;
    rotateLeftIdx++;
  }

  //set rotateLeftIdx back to 0
    
  rotateLeftIdx = 0;
  while (rotateLeftIdx < d) {
    newArr[i] = a[rotateLeftIdx];
    i++;
    rotateLeftIdx++;
  }
  return newArr;
}
const array = [1, 2, 3, 4, 5];

console.log(rotLeft(array, 4));
