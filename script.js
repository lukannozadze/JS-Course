'use strict'
// let num = 3;
// let decNum = 3.14;

// console.log(typeof num);
// console.log(typeof decNum);

// // in javascript data type number deals with both integer and decimal numbers, so result will be number

// let mill = 1000000;
// console.log(mill);

// let expMill = 1e6;
// //1*(10**6) = 1000000
// console.log(expMill);

// let smallNum = 1e-6;
// console.log(smallNum);

// //behind the scenes primitive number is wrapped into built-in object to access all number methods and then is back to primitive type
// let score = new Number(100);
// console.log(typeof score);

// console.log(typeof score.valueOf());

// //score is an object, decNum is primitive type but both of them can access Number methods
// console.log(score.toFixed());
// console.log(decNum.toFixed());


// // ### TASK ### //

// // 1.Declare and initialise a variabe with value of 100,000, log this to console
// let taskNum = 1e5;
// console.log(taskNum);
// // 2.In the console, identify the data type of the variable
// console.log(typeof taskNum);
// // Create a float data type, and log this type of the console
// let taskFloatNum = 2.25;
// console.log(taskFloatNum);

// // NUMBER METHODS

// const PI = 3.141596254;

// let number = PI.toFixed(2);
// number = PI.toPrecision(5);
// console.log(number);

// let number2 = 10000000;
// console.log(number2.toExponential());
// let number3 = 0.0000005;
// console.log(number3.toExponential());

// // ### TASK ### //

// // 1.Create a variable called PI and set it's value to 3.14159. Use
// // the correct Number method to display only three digits after the
// // decimal point, log this to the console.
// const pi = 3.14159;
// console.log(pi.toFixed(3));
// // 2. Using the previous PI variable, create a new variable called num2 
// // and use the correct Number method to display a total of three digits only
// let num2 = pi.toPrecision(3);
// console.log(num2);
// // 3. Create a variable called lightSpeed and set it's value to 186999.
// // Use the .toExponential() method to log this new display in the console
// let lightSpeed = 186000;
// console.log(lightSpeed.toExponential());

// // STRINGS //

// // create primitive string type variable
// let str = 'Hello World!';
// console.log(typeof str); //would be string
// //create object type string variable
// let strObj = new String('Js is awesome');
// console.log(typeof strObj); //would be object

// // STRING METHODS//
// const myVariable = "Mathematics";
// console.log(myVariable.length); //11
// console.log(myVariable.charAt(6)); //a
// console.log(myVariable.charAt(9999)); //empty string
// console.log(myVariable.indexOf("Mat")); //returns index where 'Mat' starts with (0)
// console.log(myVariable.lastIndexOf("t")); //7

// console.log(myVariable.slice(2,5)); //the
// console.log(myVariable.toUpperCase()); //MATHEMATICS
// console.log(myVariable.toLowerCase()); //mathematics

// console.log(myVariable.includes('div')) //false
// console.log(myVariable.includes('math')) //false because it's case sensitive
// console.log(myVariable.includes('Math')) //true

// const newStr = 'my name is anton';
// console.log(newStr.split(' ')); // ['my', 'name', 'is', 'anton']

// const str1= '2+2';
// const str2 = new String('2+2');
// console.log(eval(str1),eval(str2));

// // VAR LET CONST
// //difference between var and let is that var is function-scoped which means that var is accessible everywhere inside function
// //when let is block-scoped - it is accessible only inside block
// function start(){
//     for(var i =0;i<5;i++){
//       if(true){
//         var color = 'red';
//       }
//     }
//     console.log(color);
// }
// start();

// // second problem of the var keyword is that when you declare variable it automatically assigns to the browser window object
// var name = 'luka'; //if i declare same variable in third-party library, this global variable will override it
// let age = 21;

// //this way of declaring function makes itselft global for browser object also
// function sayHello() {
//     console.log('hi');
// }

// //but if we assign it let keyword, this function will not be global 
// let bye = function sayBye(){
//  console.log('bye');
// }

// console.log(varVariable); //it will be undefined, but no error

// var varVariable = 'true';

// console.log(varVariable); //true



// // console.log(letVariable); //error

// let letVariable = 'false';

// console.log(letVariable) //false


// //HOISTING//


// const sumConst = (a,b)=>{
//     return a+b;
// }

// console.log(`sumFunc' => ${sumFunc(2,3)}`);
// console.log(`sumConst' => ${sumConst(1,5)}`);

// function sumFunc(a,b){
//     return a+b;
// }

// console.log(x);

// var x= 5;

// // {
// //     console.log(y);
// //     let y = 4;
// // }

// //this is nice example what will happen if we don't know hoisting concept in js
// // at first we might think deleteShoppingCart should not be executed
// // but because of hoisting javascript makes numProducts at the top, declares and initializes with value undefined
// // we know that undefined has false value, but !undefined becomes true => deleteShoppingCart() will be executed!
// if(!numProducts){
//     deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('all products deleted')
// }

// // CLOSURES
// // closure in environment which includes function and it's refferences
// // in other words, closure allows inner function to access outer data
// const myName = 'luka';

// const printName = () =>{
//     console.log(`my name is ${myName}`)
// }
// printName();

// //////
// function outerFunction(outerVariable){
//   const x = 'hi';
//     return function innerFunction(){
//         console.log('Outer Variable: ' + outerVariable)
//         console.log('Inner Variable: ' + x)
//         console.log(x);
//     }

// }
// const newFunction = outerFunction('outside');
// newFunction();

// // tricky example in js

// //output will be - 0 1 2
// for(let i = 0; i < 3; i++){

//     setTimeout(()=>{
//         //console.log(i);
//     },1000);
 
// }

// //if we change let i with var i output will become - 3 3 3
// //this is because when you use let js creates 3 different block-scope variables 0 1 2 and after for loop(syncronous code)
// //setTimeout arrow function starts execution
// // but when there is var instead of let, because it's function scoped
// // arrow function inside timeout always captures same variable which is 3 after for loop execution
// for(var i = 0; i < 3; i++){

//     setTimeout(()=>{
//         //console.log(i);
//     },3000);
 
// }

// // LOOPS

// const arr = ['badger','beaver','baboon'];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// // more sugary syntax for ordinary foor loop
// for(const item of arr){
//     console.log(item);
// }

// arr.forEach((item)=>console.log(item));


// // loop performance
// const mil = 1e6;
// const array = Array(mil);

// //looping with mill is much more faster than with array.length
// console.time();
// for(let i = 0; i < mill; i++){}
// console.timeEnd();

// // much more slower than ordiray for loop (in my case approximately 9 times)
// console.time();
// for(const x of array){}
// console.timeEnd();

// console.time();
// array.map(v=>v).map(v=>v).forEach(v=>v)
// console.timeEnd();

// const equine = {horse:'h',zebra:'z',unicorn:'u'};

// console.time();
// for(const key in equine){
//     console.log(equine[key]);
// }
// console.timeEnd();

// console.time();
// for(const val of Object.values(equine)){
//     console.log(val);
// }
// console.timeEnd();


// const equineMap = new Map(
//     Object.entries({horse:'h',zebra:'z',unicorn:'u'})

// )

// for(const v of equine.values()){
//     console.log(v);
// }

// let i = 1;
// while(i<10){
  
//     if(i%2!==0){
//     console.log(i);
// }
// i++

// }

function numberGenerator() {
    var num = 1;
    return () =>{return num++}
  }
  let number = numberGenerator();
  console.log(number());
  console.log(number());

///////////////////

function sayHello() {
    const say = () =>{console.log(hello)}
    // Local variable that ends up within the closure 
    let hello = 'Hello, world!';
    return say;
  }
  sayHello()();
//   var sayHelloClosure = sayHello(); 
//   sayHelloClosure(); // ‘Hello, world!’

//////////////////

function outer() {
    let outerVar = 'I am from outer!';
    return ()=> {
      console.log(outerVar);
    }   
  }
//   const closureExample = outer();
//   closureExample();
outer()();

///////////////////

function createFunctions() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
      functions.push(() => console.log(i));
    }
    return functions;
  }
  const closureArray = createFunctions();
  closureArray[0]();


  ///////////////////

  function outerFunction(base) {
    return function (exponent) {

      function power() {
        return Math.pow(base, exponent);
      }
  
      function logPower() {
        console.log(`Power of ${base} raised to ${exponent} is: ${power()}`);
      }
  
      return logPower;
    };
  }
  
//   const closureExample = outerFunction(2);
//   const closureWithExponent3 = closureExample(3);
//   closureWithExponent3();

//outerFunction(2)(3)(); //output is 8


//make last closure function optimization

function outerFunction(base) {
    return (exponent)=> {

      const power = () => {
        return Math.pow(base, exponent);
      }
  
      return () => {
          console.log(`Power of ${base} raised to ${exponent} is: ${power()}`);
      }
    
    };
  }
  
  //outerFunction(2)(3)();

  /////////////////////////////

  function outerFunction() {
    console.log(innerVar); //will be error because outer functions cant access variables from inner functions
    var outerVar = 'I am hoisted!'; 
  
    return ()=> {
      console.log(outerVar); //because of closure behavior innerFunction can access outer scope variable; so output will be - I am hoisted!
      console.log(innerVar); //undefined; innerVar will also be hoisted up but initial value will be undefined
      var innerVar = 'I am also hoisted!';
      console.log(innerVar); //output: I am also hoisted
    }
  
  }
  
//   const closureExample = outerFunction();
//   closureExample();

  //same example with let keyword

  
  function outerFunction() {
    // console.log(innerVar); //will be error because outer functions cant access variables from inner functions
     let outerVar = 'I am hoisted!'; 
   
     return ()=> {
       console.log(outerVar); //because of closure behavior innerFunction can access outer scope variable; so output will be - I am hoisted!
       console.log(innerVar); //error: can not access innerVar before initialization
       let innerVar = 'I am also hoisted!';
       console.log(innerVar); //output: I am also hoisted
     }
   
   }
   
//    const closureExample = outerFunction();
//    closureExample();

var a = 5;

function print(){
    console.log(a);
    var a =5;
    console.log(a);
}
print();

////////////////////////////

// Hoisting
// function codeHoist(){
//     a = 10;
//     let b = 50;
// }
// codeHoist();

// console.log(a); // 10
// console.log(b); // ReferenceError : b is not defined

//////////

function test(){
    console.log(a);
    if(true){
        var a = 1.1;
    }
}
test();

///
 // var code (global)
 let name;
 console.log(name); // undefined
name = 'Mukul Latiyan';

//////////

  // Function scoped
  function fun(){
    // console.log(name);
    let name = 'Mukul Latiyan'; 

    return name
}
fun(); // Undefined

///////////////////

function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure 
    let hello = 'Hello, world!';
    return say;
  }
  var sayHelloClosure = sayHello(); 
  sayHelloClosure(); // ‘Hello, world!’


  //output will be - 0 1 2
for(let i = 0; i < 3; i++){

    setTimeout(()=>{
        //console.log();
    },1000);
 
}

if(true){
    function print(){
        console.log('123');
    }
    print();
}


var x = 10;
function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure  
/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack (see the screenshot below)
*/
console.log(moar);

////////////////////////

// const a = 'luka';
// first();

// function first(){
//     const b = 'hello';
//     second();


// function second(){
//     const c = 'Hi';
//     third();
// }
// }

// function third(){
//     const d = 'hey';
//     console.log(d+c+b+a);
// }

////////////////////////

//1. in global execution context function boardPassengers will be declared, memory will be allocated
// const boardPassengers = function(n,wait) {
//     const perGroup = n/3; //in boardPassengers execution context

//     setTimeout(function(){ //5.after that this code is executed also
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`)
//     },wait * 1000) //3.function inside setTimeout will be replaced in macrotasks queue and waits wait*1000ms to be executed

//     console.log(`Will start boarding in ${wait} seconds`); //4. while code inside setTimeout is waiting for its start time, this code is executed
// }

// boardPassengers(180,3); //2. after that boardPassengers execution context will be created up to the global execution context
//in the call stack, informations about variable in it

//interesting part is that, function boardPassenger finishes execution before code inside setTimeout is starting execution
//but there is a question - How n and perGroup variables are accessible from inside, when outside function execution context is popped off of the call stack?
//this if because of closure concept in js, which means that inner function always has a reference to it's birthplace function execution's context variable environmet
//in other words, inner function always can access outer function's data, no matter if outer function's execution context is popped off.

//output will be :=> 1. Will start boarding in 3 seconds
//2. We are now boarding all 180 passengers
//3. There are 3 groups, each with 60 passengers

const str = '123456789';

//first method of reversing string
for(let i =str.length-1; i>=0;i--){
    console.log(str[i]);
}

//second method of reversing string
console.log(str.split('').reverse().join(''));

//palindrome

const isPalindrome = function(arg){
    if(typeof arg !== 'string'){
        return false;
    }
    if(arg.length === 0){
        return `Carielia`;
    }
    if(arg.length===1){
        return true;
    }

for(let i =0;i<arg.length/2;i++){
    if(arg[i]!==arg[arg.length-1-i]){
        return false;
    }
    return true;
}  
}

/////////////

const twoSum = function(nums,target){
    for(let i = 0; i<nums.length;i++){
        console.log(i);
        for(let j = 1; j<nums.length;j++){
            console.log(j);
            if(nums[i]+nums[j]===target && i!==j){
                return [i,j];
            }
        }
    }
}
console.log(twoSum([3,2,4],6));
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,3],6));
console.log(twoSum([2,5,5,3],10));

