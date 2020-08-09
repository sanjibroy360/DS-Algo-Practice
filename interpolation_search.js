function interpolationSearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end && key >= arr[start] && key <= arr[end]) {
    let pos = Math.floor(
      start + ((end - start) / (arr[end] - arr[start])) * (key - arr[start])
    );

    let valueAtPos = arr[pos];

    if (valueAtPos == key) {
      return pos;
    } else if (key > valueAtPos) {
      start = pos + 1;
    } else {
      end = pos + 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(interpolationSearch(arr, 7));
console.log(interpolationSearch(arr, 99));

// It only works for sorted array.
// Best Case: O(log log n)
// Worst Case: O(n)
