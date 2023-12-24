const dude = {};
dude.name = "John";
dude.age = 43;

console.log(dude.__proto__); //Object.prototype
console.log(dude.__proto__ === Object.prototype); //true

const arr = [1, 2, 3];
console.log(arr.__proto__); //Array.prototype

console.log(String.prototype);
console.log(Number.prototype);
