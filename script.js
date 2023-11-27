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

//score is an object, decNum is primitive type but both of them can access Number methods
console.log(score.toFixed());
console.log(decNum.toFixed());