print();
x();
//Difference between function declaration and function expression is hoisting function declaration always hoisted and function expression hoisted as
//variable, so we can invoke variable as a function
//Function Statement aka Function Declaration
function print() {
  console.log("Namaste Kurkuma!");
}

//Function Expression
var x = function print() {
  console.log("Hello World!");
};
