function linearSearch(list, key) {
    for(let i = 0; i < list.length; i++) {
        if(list[i] === key) {
            return i;
        }
    }
    return -1;
}

let arr = [1,2,3,4,5,6,7,8,9];

console.log(linearSearch(arr,7)); //6
console.log(linearSearch(arr,11))// -1