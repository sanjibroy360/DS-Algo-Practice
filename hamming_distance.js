function hammingDistance(str1 = "", str2 = "") {
  str1 = str1 + "";
  str2 = str2 + "";
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) {
      count++;
    }
  }
  return count;
}

console.log(hammingDistance("karolin", "kathrin"));
console.log(hammingDistance("karolin", "kerstin"));
console.log(hammingDistance(1011101, 1001001));
console.log(hammingDistance(2173896, 2233796));