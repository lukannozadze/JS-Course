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

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};
delete band.drums;
console.log(band);

console.log(Object.keys(band));
console.log(Object.values(band));

for (const job in band) {
  console.log(`On ${job}, It's ${band[job]}`);
}

//destructuring
const { guitar: myvariable, bass, myBass } = band;
console.log(myvariable);
console.log(myBass);
function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
