function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (arr[middle] < value) {
      low = middle + 1;
    } else if (arr[middle] > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

module.exports = binarySearch;
