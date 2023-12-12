const myObj = { name: "Luka" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}!`;
  },
};
console.log(anotherObj.alive);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj.beverage.afternoon);
console.log(anotherObj["answer"]);
console.log(anotherObj.action());

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrrooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whoooooshh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
  return "Shhh...";
};
console.log(tesla.engine());
