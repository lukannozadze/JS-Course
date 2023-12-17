const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video.showTags();
//function declaration always saves in window object, so this keyword inside that function always refers to window object
function Animal(name) {
  this.name = name;
  console.log(this);
}

const doggo = new Animal("Jack"); //new keyword makes new empty object and forces this keyword to refer this newly crated object and not window

///

obj = {
  print() {
    console.log(this);
  },
};

person = {
  ...obj,
  name: "luka",
};
person.print(); //this refers to object from where method is called

function talk(lang) {
  if (lang === "en") {
    console.log(`I am ${this.name}`);
  } else {
    console.log(`me var ${this.name}`);
  }
}

me = {
  name: "luka",
};

talk.call(me, "en");
