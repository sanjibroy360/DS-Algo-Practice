function fibonacci(limit) {
    let a = 0;
    let b = 1;
    let fiboSeries = [a,b];
    let sum = 0;
    for(let i = 0; i <= limit; i++) {
        sum = a + b;
        fiboSeries.push(sum);
        a = b;
        b = sum;
    }
    return fiboSeries;
}

let tenFiboNums = fibonacci(10);
console.log(tenFiboNums);