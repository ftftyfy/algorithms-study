const array = [5, 9, 2, 1, 6, 10, 4, 8, 7, 3];
console.log(array);

function insertion(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(insertion(array));
