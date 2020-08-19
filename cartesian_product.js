function cartesianProduct(set1, set2) {
  let prod = [];
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      prod.push([set1[i], set2[j]]);
    }
  }
  return prod;
}

let set1 = [a, b, c];
let set2 = [1, 2, 3];

console.log(cartesianProduct(set1, set2));
