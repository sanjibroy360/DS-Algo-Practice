function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let valueAtMid = arr[mid];

        if(valueAtMid == key) {
            return mid;
        }else if(valueAtMid > start) {
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }
    return -1;
}

let arr = [1,2,3,4,5,6,7,8];

console.log( binarySearch(arr, 7) );
console.log( binarySearch(arr, 99) )