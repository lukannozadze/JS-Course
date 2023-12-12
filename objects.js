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
