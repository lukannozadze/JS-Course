person = {
  firstName: "luka",
  lastName: "nozadze",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    this.firstName = value.split(" ")[0];
    this.lastName = value.split(" ")[1];
  },
};

console.log(person.fullName);
person.fullName = "John Doe";
console.log(person);
