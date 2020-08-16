const radianToDegree = (radian) => 57.3 * radian
const degreeToRadian = (degree) => (Math.PI/180) * degree

console.log(radianToDegree(2*Math.PI))
console.log(degreeToRadian(90))