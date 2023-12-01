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
// 3. Create a variable called lightSpeed and set it's value to 186999.
// Use the .toExponential() method to log this new display in the console
let lightSpeed = 186000;
console.log(lightSpeed.toExponential());

// STRINGS //

// create primitive string type variable
let str = 'Hello World!';
console.log(typeof str); //would be string
//create object type string variable
let strObj = new String('Js is awesome');
console.log(typeof strObj); //would be object

// STRING METHODS//
const myVariable = "Mathematics";
console.log(myVariable.length); //11
console.log(myVariable.charAt(6)); //a
console.log(myVariable.charAt(9999)); //empty string
console.log(myVariable.indexOf("Mat")); //returns index where 'Mat' starts with (0)
console.log(myVariable.lastIndexOf("t")); //7

console.log(myVariable.slice(2,5)); //the
console.log(myVariable.toUpperCase()); //MATHEMATICS
console.log(myVariable.toLowerCase()); //mathematics

console.log(myVariable.includes('div')) //false
console.log(myVariable.includes('math')) //false because it's case sensitive
console.log(myVariable.includes('Math')) //true

const newStr = 'my name is anton';
console.log(newStr.split(' ')); // ['my', 'name', 'is', 'anton']

const str1= '2+2';
const str2 = new String('2+2');
console.log(eval(str1),eval(str2));

// VAR LET CONST
//difference between var and let is that var is function-scoped which means that var is accessible everywhere inside function
//when let is block-scoped - it is accessible only inside block
function start(){
    for(var i =0;i<5;i++){
      if(true){
        var color = 'red';
      }
    }
    console.log(color);
}
start();

// second problem of the var keyword is that when you declare variable it automatically assigns to the browser window object
var name = 'luka'; //if i declare same variable in third-party library, this global variable will override it
let age = 21;

//this way of declaring function makes itselft global for browser object also
function sayHello() {
    console.log('hi');
}

//but if we assign it let keyword, this function will not be global 
let bye = function sayBye(){
 console.log('bye');
}

console.log(varVariable); //it will be undefined, but no error

var varVariable = 'true';

console.log(varVariable); //true



// console.log(letVariable); //error

let letVariable = 'false';

console.log(letVariable) //false


//HOISTING//


const sumConst = (a,b)=>{
    return a+b;
}

console.log(`sumFunc' => ${sumFunc(2,3)}`);
console.log(`sumConst' => ${sumConst(1,5)}`);

function sumFunc(a,b){
    return a+b;
}

console.log(x);

var x= 5;

// {
//     console.log(y);
//     let y = 4;
// }

//this is nice example what will happen if we don't know hoisting concept in js
// at first we might think deleteShoppingCart should not be executed
// but because of hoisting javascript makes numProducts at the top, declares and initializes with value undefined
// we know that undefined has false value, but !undefined becomes true => deleteShoppingCart() will be executed!
if(!numProducts){
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log('all products deleted')
}

// CLOSURES
// closure in environment which includes function and it's refferences
// in other words, closure allows inner function to access outer data
const myName = 'luka';

const printName = () =>{
    console.log(`my name is ${myName}`)
}
printName();

//////
function outerFunction(outerVariable){
  const x = 'hi';
    return function innerFunction(){
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + x)
        console.log(x);
    }

}
const newFunction = outerFunction('outside');
newFunction();

// tricky example in js

//output will be - 0 1 2
for(let i = 0; i < 3; i++){

    setTimeout(()=>{
        //console.log(i);
    },1000);
 
}

//if we change let i with var i output will become - 3 3 3
//this is because when you use let js creates 3 different block-scope variables 0 1 2 and after for loop(syncronous code)
//setTimeout arrow function starts execution
// but when there is var instead of let, because it's function scoped
// arrow function inside timeout always captures same variable which is 3 after for loop execution
for(var i = 0; i < 3; i++){

    setTimeout(()=>{
        //console.log(i);
    },3000);
 
}

// LOOPS

const arr = ['badger','beaver','baboon'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// more sugary syntax for ordinary foor loop
for(const item of arr){
    console.log(item);
}

arr.forEach((item)=>console.log(item));


