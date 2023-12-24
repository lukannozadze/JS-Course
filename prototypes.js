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
class Human {
  constructor() {
    this.kind = "human";
  }
}
class SuperHuman extends Human {
  constructor(kind, ability) {
    super(kind);
    this.ability = ability;
  }
}
const h1 = new Human();
const s1 = new SuperHuman("flying");
console.log(SuperHuman.prototype);
console.log(SuperHuman.__proto__);

///////
const parent = { name: "parent" };
const child = {};
Object.setPrototypeOf(child, parent);
console.log(child.__proto__);
