const test = { name: "luka" };
const testProxy = new Proxy(test, {
  get: (obj, property) => {
    return property in obj ? obj[property] : "nothing found bratha";
  },
});
console.log(testProxy.name);
console.log(testProxy.age);
