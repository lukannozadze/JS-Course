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

console.log('initial');

const equipShelfA = ['baseball','football','volleyball'];
const equipShelfB = ['basketball','golf balls','tennis balls'];

const clothesShelfA = ['tank tops','t-shirts','jerseys'];
const clothesShelfB = ['sweat tops','sweat pants','hoodies'];

//referencing an element in one dimensional array
console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA,equipShelfB];
const clothesDept = [clothesShelfA,clothesShelfB];

//referencing an element in two dimensional array
console.log(equipDept[0][1]);
console.log(equipDept[1][0]);

const sportsStore = [equipDept,clothesDept];

//referencing an element in three dimensional array
console.log(sportsStore[1][0][1]);
