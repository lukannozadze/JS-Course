const test = { name: "luka" };
const testProxy = new Proxy(test, {
  get: (obj, property) => {
    return property in obj ? obj[property] : "nothing found bratha";
  },
  set: (obj, property, value) => {
    property in obj ? (obj[property] = value) : "ver daemata";
  },
});
console.log(testProxy.name);
console.log(testProxy.age);

testProxy.age = 1000;
console.log(testProxy.age);
