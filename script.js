//Arrays
const myArray = [];

//add elements to an array
myArray[0] = 'Luka';
myArray[1] = 21;
myArray[2] = true;

//refer to an array
console.log(myArray);

//length property
console.log(myArray.length)

//last element in an array
console.log(myArray[myArray.length-1]);

console.log(myArray[1]);
//add and remove elements from array

//add and remove last element of an array
myArray.push("school");

console.log(myArray);

const lastItem = myArray.pop();
console.log(lastItem);

//add and remove first element of an array
//add
myArray.unshift(42);
console.log(myArray);

//remove
myArray.shift();
console.log(myArray);