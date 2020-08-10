function factorial(n) {
    let fact = 1;
    for(let i = n; i >= 1 ; i--) {
        fact = fact * i;
    }
    return fact;
}

let fact = factorial(4);
console.log(fact)