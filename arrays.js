// //Arrays
// const myArray = [];

// //add elements to an array
// myArray[0] = "Luka";
// myArray[1] = 21;
// myArray[2] = true;

// //refer to an array
// console.log(myArray);

// //length property
// console.log(myArray.length);

// //last element in an array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);
// //add and remove elements from array

// //add and remove last element of an array
// myArray.push("school");

// console.log(myArray);

// const lastItem = myArray.pop();
// console.log(lastItem);

// //add and remove first element of an array
// //add
// myArray.unshift(42);
// console.log(myArray);

// //remove
// myArray.shift();
// console.log(myArray);

// console.log("initial");

// const equipShelfA = ["baseball", "football", "volleyball"];
// const equipShelfB = ["basketball", "golf balls", "tennis balls"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// //referencing an element in one dimensional array
// console.log(equipShelfA[1]);
// console.log(clothesShelfB[0]);

// const equipDept = [equipShelfA, equipShelfB];
// const clothesDept = [clothesShelfA, clothesShelfB];

// //referencing an element in two dimensional array
// console.log(equipDept[0][1]);
// console.log(equipDept[1][0]);

// const sportsStore = [equipDept, clothesDept];

// //referencing an element in three dimensional array
// console.log(sportsStore[1][0][1]);

// /////////////////////////////

// const people = ["Sally", "Kyle", "John"];

// //mutate original array
// people[0] = "Luka";

// //copy of people array
// const peopleCopy = [...people];

// //create copy and mutate so concept of immutability is protected
// peopleCopy[0] = "Luka";

// console.log(peopleCopy);

// //the same we can do with array.prototype.with function without mutating original array

// // const newCopy = people.with(2, "Jeremy");

// console.log(newCopy);
// ///////////////////////////////////////////////

// const sortedPeople = [...people].sort();

// console.log("sorted", sortedPeople);
// console.log("original", people);

// //because of sort function does not return new array we should make copy of original array and then sort it
// //this makes javascript iterate through array two times
// //to solve this there is toSorted() method which returns new array and avoids us making a copy. good for performance

// const sortedWithoutClone = people.toSorted();
// console.log(sortedWithoutClone);
// console.log(people);

// //////
// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //map performs as requested and returns new array
// const modifiedArr = numArr.map((item) => item * 2);

// console.log(modifiedArr);

// //foreach does not mutate original array it performs requested action on each item
// numArr.forEach((item) => console.log(item * 2));

// ////////////////////////
// //filter
// const evens = numArr.filter((item) => item % 2 === 0);

// console.log(evens);

// //concat
// concatedArr = evens.concat(people);
// console.log(concatedArr);

// //find
// const special = numArr.find((element) => element % 3 === 0 && element % 6 == 0);

// console.log(special);

// //findIndex

// const specialIndex = numArr.findIndex(
//   (element) => element % 3 === 0 && element % 6 === 0
// );
// console.log(numArr[specialIndex]);

// //indexOf && lastIndexOf
// const specIndex = numArr.indexOf(special);
// console.log(specIndex);
// console.log(numArr.indexOf(999));

// numArr.unshift(9);
// console.log(numArr);

// //difference between indexOf and lastIndexOf is that indexof always refers first required element index but lastIndexOf refers last required index of element
// console.log("IndexOf Method: ", numArr.indexOf(9));
// console.log("LastIndexOf Method: ", numArr.lastIndexOf(9));

// //some
// //Array.prototype.some() function will check if requested condition fits to any element from given array and returns true or false
// const hasEight = numArr.some((element) => element % 8 === 0);
// console.log(hasEight); //Output: true;

// //every
// //Array.prototype.every() function will check if requested condition fits to all element of the given array and returns true or false
// isOddNums = numArr.every((element) => element % 2 === 1);
// console.log(isOddNums); //Output: false;

// ///////////////////////////////////

// //includes
// const hasTwo = numArr.includes(2);
// console.log(hasEight);

// //toString
// const numString = numArr.toString();
// console.log(numString);

// //join
// const joinedStr = numArr.join("+");
// console.log(joinedStr);

// //fill
// numArr.fill(".", 2, 5);
// console.log(numArr); //Output: 9,1,.,.,.,5,6,7,8,9

// //slice

// const sliced = numArr.slice(2, 5);
// console.log(sliced); //Output:['.','.','.']

// //splice
// const months = ["Jan", "February", "March", "April"];

// const newMonths = months.splice(1, 1, "August");
// console.log(months);

// //sort
// const messedArr = [1, 5, 80, 9, 6];
// messedArr.sort();
// console.log(messedArr);

// messedArr.sort((a, b) => a - b); //asceding
// console.log(messedArr);

// //from
// str = "1234";

// const nums = Array.from(str);
// console.log(nums);

// //isArray
// const isArray = Array.isArray(nums);
// console.log(isArray);

// //entries
// console.log([...nums.entries()]);

// //keys
// numsArrkeys = [...nums.keys()];
// console.log(numsArrkeys);

// //values
// numsArrValues = [...nums.values()];
// console.log(numsArrValues);
// console.log(nums);

// //reduce
// //if we do not assign 0 or something as initial value
// //default it will be 1
// const numbers = [6, 6, 1, 2, 6, 21, 24, 2];
// const sum = numbers.reduce((prev, cur) => prev + cur);
// console.log(sum);

// //flat
// const n = [1, 2, 3, [4, [5, [6]]]];

// const newA = n.flat(1);
// console.log(newA);

// ///////

const removeDuplicates = function (nums) {
  nums.sort((a, b) => a - b);
  const newNums = [];
  let dubQuantity = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      newNums.push(nums[i]);
    } else {
      dubQuantity++;
    }
  }
  console.log(
    `${dubQuantity} Duplicates found! There is Array with no duplicates [${newNums}]`
  );
};
removeDuplicates([1, 3, 4, 1, 1, 4, 5, 12, 2, 4, 5, 2, 21, 2, 3]);

/////////
const findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  const mergedArrLength = mergedArr.length;
  if (mergedArrLength === 1) {
    return mergedArr[0];
  }
  if (mergedArrLength % 2 === 1) {
    return mergedArr[(mergedArrLength / 2 - 1).toFixed()];
  } else {
    return (
      (mergedArr[(mergedArrLength / 2).toFixed()] +
        mergedArr[(mergedArrLength / 2 - 1).toFixed()]) /
      2
    );
  }
};

console.log(findMedianSortedArrays([], [1]));

///////////////////////
//difference between deep copy and shallow copy on arrays
//shallow copy example
const testArr = [1, 2, 3, { name: "luka" }];
const shallow = [...testArr];

{
  name: "luka";
}
console.log("Original:", [testArr]);
console.log("Shallow:", shallow);

//deep copy example
const originalArray = [1, 2, { name: "luka" }];
const deepCopyArray = JSON.parse(JSON.stringify(originalArray));

// Modify the copied data
deepCopyArray[2].name = "john";

console.log(originalArray); // [1, 2, [3, 4]]
console.log(deepCopyArray); // [1, 2, [99, 4]]

//to sum up in shallow copy nested arrays is not duplicated and has reference to original array's nested array
//but in deep copy everything consider nested array's are duplicated

testArr.forEach((item, index, array) => {
  console.log(array);
});

//creating array via constructor
const a = new Array([1, 2]);
console.log(a);
