function getLCM(num1, num2) {
  let gcd = getGCD(num1, num2);
  let lcm = (num1 * num2) / gcd;
  return lcm;
}

function getGCD(a, b) {
  if (!b) {
    return a;
  } else {
    return getGCD(b, b % a);
  }
}

console.log(getLCM(4, 6));
