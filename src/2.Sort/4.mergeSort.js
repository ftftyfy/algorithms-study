function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const middle = Math.floor(len / 2);
  const sub1 = arr.slice(0, middle);
  const sub2 = arr.slice(middle);
  return merge(mergeSort(sub1), mergeSort(sub2));
}

function merge(arr1, arr2) {
  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  }
  const rest = arr1.length > 0 ? arr1 : arr2;
  while (rest.length > 0) {
    result.push(rest.shift());
  }
  return result;
}

module.exports = mergeSort;
