function gcd(a, b) {
    if(!b) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(10,15));
console.log(gcd(2,0));
console.log(gcd(0,2));
console.log(gcd(3,7));

