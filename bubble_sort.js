function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) { 
      return array;
    }
  }
  return array;
}

let arr = [6, 1, 3, 4, 7, 2, 5];
console.log(bubbleSort(arr));
