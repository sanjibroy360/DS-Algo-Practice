function pascalTriangle(n) {
  let triangleArr = [];
  for (let i = 0; i < n; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      let prevRow = triangleArr[i - 1];
      row[j] = prevRow[j] + prevRow[j - 1];
    }

    triangleArr[i] = row;
  }
  return triangleArr;
}
console.log(pascalTriangle(105));
