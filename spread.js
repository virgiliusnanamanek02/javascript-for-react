// Spread Operator

const members = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const [one, two, ...rest] = members;
console.log(one, two, rest);

const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);

const [x, ...y] = [1, 2, 3, 4, 5];
console.log(x, y);
