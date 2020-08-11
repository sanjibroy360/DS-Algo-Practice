function selectionSort(array) {
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

let arr = [6, 1, 3, 4, 7, 2, 5];
console.log(selectionSort(arr));
