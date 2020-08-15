function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partioning(array, low, high) {
  let pivot = array[Math.floor((low + high) / 2)];
  while (low <= high) {
    // Find the element in left side whose value is greater than pivot
    while (array[low] < pivot) {
      low++;
    }

    // Find the element in right side whose value is smaller than pivot
    while (array[high] > pivot) {
      high--;
    }

    // swap these to value
    if (low <= high) {
      swap(array, low, high);
      low++;
      high--;
    }
  }
  return low;
}

function quicksort(array, left, right) {
  let partionIndex;
  if (array.length > 1) {
    partionIndex = partioning(array, left, right);
    if (left < partionIndex - 1) {
      quicksort(array, left, partionIndex - 1);
    }

    if (partionIndex < right) {
      quicksort(array, partionIndex, right);
    }
  }
  return array;
}
