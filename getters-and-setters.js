person = {
  firstName: "luka",
  lastName: "nozadze",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(value) {
    this.firstName = value.split(" ")[0];
    this.lastName = value.split(" ")[1];
  },
};

person.getFullName();
person.setFullName("John Doe");
