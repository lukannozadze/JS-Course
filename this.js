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

function talk(lang, isPolite) {
  if (isPolite) {
    if (lang === "en") {
      console.log(`I am ${this.name}`);
    } else {
      console.log(`me var ${this.name}`);
    }
  }
}

me = {
  name: "luka",
};

talk.apply(me, ["en", true]);

function Person(name) {
  this.name = name;
  setTimeout(function () {
    //function declaration refers window object, arrow function refers current object
    console.log(this);
  }, 100);
}
let p = new Person("me");

// const button = document.querySelector(".btn");
// button.addEventListener("click", () => {
//   //in eventListener arrow function refers window object and function declaration refers current obj
//   console.log(this);
// });

function SuperElement(type, content) {
  this.el = document.createElement(type);
  this.el.textContent = content;
  document.body.append(this.el);
  this.el.addEventListener("click", () => {
    console.log(this);
  });
}
const h1 = new SuperElement("h1", "I am header");
