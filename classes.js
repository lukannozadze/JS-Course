class Rectangle {
  constructor(_width, _height, _color) {
    console.log("Rectangle is being created!");
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  getArea() {
    return this.width * this.height;
  }
  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`
    );
  }
}
let myRectangle1 = new Rectangle(1, 2, "red");
let myRectangle2 = new Rectangle(10, 5, "green");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
myRectangle2.printDescription();

////////
// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//     this.numOfRequestsForArea = 0;
//   }
//   get area() {
//     this.numOfRequestsForArea++;
//     return this.width * this.height;
//   }
//   set area(area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }
// let square1 = new Square(4);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// square1.area = 25;
// console.log(square1.height);
// console.log(square1.width);
// console.log(square1.numOfRequestsForArea);

///
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }
  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }
  static isValidDimensions(width, height) {
    return width === height;
  }
}
let square1 = new Square(8);
let square2 = new Square(8);
console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 6));

/////////////
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}
class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);
    this.yearsOfExperience = _yearsOfExperience;
  }
  code() {
    console.log(`${this.name} is coding`);
  }
}
const programmers = [
  new Programmer("Luka", 21, 2),
  new Programmer("Irakli", 26, 5),
];

let person1 = new Person("Jeff", 55);
let programmer1 = new Programmer("Dom", 45, 12);
programmer1.code();
programmer1.describe();
function developSoftware(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}
developSoftware(programmers);

//////
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log("Generic Animal Sound!!!");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    //this child method overrides parent makeSound methods and that is polymorphism
    super.makeSound();
    console.log("Woof! Woof!");
  }
}
const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");
a2.makeSound();
a1.makeSound();
