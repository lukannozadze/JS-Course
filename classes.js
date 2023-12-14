class Rectangle {
  constructor(_width, _height, _color) {
    console.log("Rectangle is being created!");
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  getArea() {
    return this.width * this.height;
  }
  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`
    );
  }
}
let myRectangle1 = new Rectangle(1, 2, "red");
let myRectangle2 = new Rectangle(10, 5, "green");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
myRectangle2.printDescription();
