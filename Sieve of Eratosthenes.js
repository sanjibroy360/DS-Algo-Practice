function primeInRange(n) {
  let primes = [];
  if (n == 1 || n == 0) return [];
  for (let i = 0; i <= n; i++) {
    if (n > 1) {
      primes[i] = true; // Assume all number is prime except 0 and 1;
    } else {
      primes[i] = false;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (primes[i] == true) {
      for (let j = 2; i * j <= n; j++) {
        // Loop over untill multiple of i is less than or equal to n
        primes[i * j] = false; // mark all multiples as non-prime.
      }
    }
  }
  return primes.reduce((acc, cv, index) => {
    if (index > 1 && cv) {
      acc.push(index);
    }
    return acc;
  }, []);
}

console.log(primeInRange(15));
console.log(primeInRange(1));
console.log(primeInRange(3));
