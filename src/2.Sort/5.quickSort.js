function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return arr;
  }
  const pivot = partition(arr, startIndex, endIndex);
  quickSort(arr, startIndex, pivot - 1);
  quickSort(arr, pivot + 1, endIndex);
  return arr;
}

function partition(arr, startIndex, endIndex) {
  const pivot = endIndex;
  let index = startIndex;
  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[pivot], arr[index]] = [arr[index], arr[pivot]];
  return index;
}

module.exports = quickSort;
