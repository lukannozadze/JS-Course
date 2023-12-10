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

/////////////////////////////

const people = ['Sally','Kyle','John'];

//mutate original array
people[0] = 'Luka';

//copy of people array
const peopleCopy = [...people];

//create copy and mutate so concept of immutability is protected
peopleCopy[0] = 'Luka';

console.log(peopleCopy);

//the same we can do with array.prototype.with function without mutating original array

const newCopy=people.with(2,"Jeremy");

console.log(newCopy);
///////////////////////////////////////////////

const sortedPeople = [...people].sort();

console.log('sorted',sortedPeople);
console.log('original',people);


//because of sort function does not return new array we should make copy of original array and then sort it
//this makes javascript iterate through array two times
//to solve this there is toSorted() method which returns new array and avoids us making a copy. good for performance

const sortedWithoutClone = people.toSorted();
console.log(sortedWithoutClone);
console.log(people);