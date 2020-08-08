function jumpSearch(arr, key) {
    let size = arr.length;
    let start = 0;
    let end = Math.floor(size/ Math.sqrt(size));

    while(end < size && arr[end] <= key) {
        start = end;
        end += end;
        if(end > size - 1) {
            end = size;
        }
    }

    for(let i = start; i < end; i++) {
        if(arr[i] == key) {
            return i;
        }
    }

    return -1;
}

let arr = [1,2,3,4,5,6,7,8,9];

console.log(jumpSearch(arr,7)); //6
console.log(jumpSearch(arr,11)) // -1