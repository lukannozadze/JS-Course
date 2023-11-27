let num = 3;
let decNum = 3.14;

console.log(typeof num);
console.log(typeof decNum);

// in javascript data type number deals with both integer and decimal numbers, so result will be number

let mill = 1000000;
console.log(mill);

let expMill = 1e6;
//1*(10**6) = 1000000
console.log(expMill);

let smallNum = 1e-6;
console.log(smallNum);

//behind the scenes primitive number is wrapped into built-in object to access all number methods and then is back to primitive type
let score = new Number(100);
console.log(typeof score);

console.log(typeof score.valueOf());

//score is an object, decNum is primitive type but both of them can access Number methods
console.log(score.toFixed());
console.log(decNum.toFixed());


// ### TASK ### //

// 1.Declare and initialise a variabe with value of 100,000, log this to console
let taskNum = 1e5;
console.log(taskNum);
// 2.In the console, identify the data type of the variable
console.log(typeof taskNum);
// Create a float data type, and log this type of the console
let taskFloatNum = 2.25;
console.log(taskFloatNum);

// NUMBER METHODS

const PI = 3.141596254;

let number = PI.toFixed(2);
number = PI.toPrecision(5);
console.log(number);

let number2 = 10000000;
console.log(number2.toExponential());
let number3 = 0.0000005;
console.log(number3.toExponential());

// ### TASK ### //

// 1.Create a variable called PI and set it's value to 3.14159. Use
// the correct Number method to display only three digits after the
// decimal point, log this to the console.
const pi = 3.14159;
console.log(pi.toFixed(3));
// 2. Using the previous PI variable, create a new variable called num2 
// and use the correct Number method to display a total of three digits only
let num2 = pi.toPrecision(3);
console.log(num2);
// 3. Create a variable called lightSpeed abd set it's value to 186999.
// Use the .toExponential() method to log this new display in the console
let lightSpeed = 186000;
console.log(lightSpeed.toExponential());

