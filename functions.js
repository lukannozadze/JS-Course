print();
// x();
//Difference between function declaration and function expression is hoisting function declaration always hoisted and function expression hoisted as
//variable, so we can invoke variable as a function
//Function Statement aka Function Declaration
function print() {
  console.log("Namaste Kurkuma!");
}

//Function Expression
const x = function print() {
  console.log("Hello World!");
};

//Anonymous function
//anonymous function does not have  name and behaves like value
//main usecase of anonymous function is when it passes as argument to another function
setTimeout(() => {
  console.log("I am anonymous function");
}, 100);

//Name function expression
//Same as function expression but on the right side we have named function not anonymous one
const y = function xyx() {
  console.log("Hi");
};

y();

//arrow function
const test = () => {
  console.log("I am arrow function");
};

//immediately invoked function => IIF
(() => {
  console.log("I will never run again");
})();

function operate(operation, a, b) {
  return operation(a, b);
}

const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;

const resultAdd = operate(addition, 8, 3);
const resultSubtract = operate(subtraction, 8, 3);

console.log(resultAdd); // Output: 11
console.log(resultSubtract); // Output: 5
