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
const { guitar: myvariable, bass: myBass } = band;
console.log(myvariable);
console.log(myBass);
function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));

/// when we use arrow function, this keyword there always refers global window object, not local object
var myNum = 0;
const obj = {
  myNum: 5,
  increaseNum: () => {
    this.myNum++;
  },
};
obj.increaseNum();
console.log(myNum); //output: 1

///
const a = {
  x: 5,
};

const b = a; // a and b references same object in heap memory

b.x = 3;
console.log(a.x); //output: 3

// with Object.assign clone is created which refers other object in heap memory so if you change first object it does not affect to the second
const x = {
  a: 1,
  obj: {
    o: "hi",
  },
};

const y = Object.assign({}, x);
x.a = 9;
x.obj = { o: "hello" };
console.log(y);

//Factory Function
const circle = function (radius) {
  return {
    radius,
    draw: function () {
      console.log(`draw a circle with radius of ${radius}`);
    },
  };
};

const circle1 = circle(5);
circle1.draw();

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`draw a circle with radius of ${radius}`);
  };
}
const circle2 = new Circle(10); //without new keyword 'this' inside constructor function refers to global window object

//Function is object
//creating a function Rectangle from Function constructor and then create rectangle1 object from newly created Rectangle Function constructor
const Rectangle = new Function(
  ["height", "width"],
  `this.height=height; this.width=width; return this;`
);
const rectangle1 = new Rectangle(1, 2);
console.log(rectangle1);

//we can also not use new keyword and instead of use  call or apply method to call constructor function and create object
const rectangle2 = Rectangle.apply({}, [3, 5]);
console.log(rectangle2);

function Circ(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  this.draw = function () {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location!");
      }
      defaultLocation = value;
    },
  });
}
const circ1 = new Circ(10);
circ1.draw();
console.log(circ1.defaultLocation);
circ1.defaultLocation = { x: 2, y: 4 };

///////////////task
const StopWatch = function () {
  this.duration = 0;
  this.timer;
  this.isOn = false;
  this.start = function () {
    if (this.isOn) {
      throw new Error("StopWatch has already started");
    }
    this.isOn = !this.isOn;
    this.timer = setInterval(() => {
      this.duration = this.duration + 1;
    });
  };
  this.stop = function () {
    if (!this.isOn) {
      throw new Error("StopWatch has already stopped");
    }
    this.isOn = !this.isOn;
    clearInterval(this.timer);
  };
  this.reset = function () {
    this.duration = 0;
  };
};
