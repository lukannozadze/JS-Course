const dude = {};
dude.name = "John";
dude.age = 43;

console.log(dude.__proto__); //Object.prototype
console.log(dude.__proto__ === Object.prototype); //true

const arr = [1, 2, 3];
console.log(arr.__proto__); //Array.prototype

console.log(String.prototype);
console.log(Number.prototype);

/////////////////
const human = {
  kind: "human",
};
const luka = Object.create(human);
luka.age = 21;
console.log(luka);

console.log(luka.kind); //firstly js searches kind property in object from it's called, when property is not found, js will search in it's prototype
//(in our case human is luka's prototype)
