const test = { name: "luka", age: 20 };
const testProxy = new Proxy(test, {
  get: (obj, property) => {
    return property in obj ? obj[property] : "nothing found bratha";
  },
  set: (obj, property, value) => {
    property in obj && value < 30
      ? (obj[property] = value)
      : console.error("Asaki unda iyos below 30");
  },
});

testProxy.age = 55;
console.log(testProxy.age);
