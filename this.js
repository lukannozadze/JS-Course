const video = {
  title: "a",
  play: function () {
    console.log("play");
  },
};
video.stop = function () {
  console.log(this);
};
video.stop();

//function declaration always saves in window object, so this keyword inside that function always refers to window object
function Animal(name) {
  this.name = name;
  console.log(this);
}

const doggo = new Animal("Jack"); //new keyword makes new empty object and forces this keyword to refer this newly crated object and not window
