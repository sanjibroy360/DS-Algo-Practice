function merge(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr.push(leftArr[i]);
      i++;
    } else {
      arr.push(rightArr[j]);
      j++;
    }
  }

  // Concat if there any array element left on right or left array.

  return arr.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length > 1) {
    let left = arr.slice(0, mid); // Divide the left part first
    let right = arr.slice(mid); // Then divide the right part

    // Merge the left and right part in sorted order.
    return merge(mergeSort(left), mergeSort(right));
  } else {
    return arr;
  }
}

let arr = [6, 5, 3, 1, 2, 4];
let ans = mergeSort(arr);
console.log(ans);
