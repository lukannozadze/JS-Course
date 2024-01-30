//1. [] is truthy, but not true
console.log( [] ==true ); //false
console.log(!![]);  //true

/* Arrays are truthy, so on the right side, Opposite of the [] will be false, which will be coerced
to 0. On the left an empty array coerced to number without becoming boolean first, and empty araays
coerced to 0 despite being truthy */

console.log([] == ![]); //true

////////////////////////////////////////////////////////////

//2. true is not equal ![], but is not equal [] also
   console.log(true==[]); //false
   console.log(true==![]) //false
//false is equal to ![], but false is also equal to []
   console.log(false==![]); //true
   console.log(false==[]); //true

/* Despice of the fact that array is truthy, array is false
What does it mean? in condition if([]) will be true, but [] value is false */

//3. true is false
console.log(!!'false'==!!'true') //true
/* true is truthy and represents by value 1 but 'true' is NaN
*/
 console.log(true =='true') //false
 console.log(false == 'false') //false

 ///////////////////////////////////////

 // +'a' is converted in number by javascript and result is NaN
 console.log('b' + 'a' + + 'a' +'a'); // -> baNaNa

console.log('foo' + + 'bar');

//NaN is not a NaN
/////////////////////
console.log(NaN === NaN) // -> false
console.log(typeof NaN) // -> number

///////////////////////
// Object.is() determines if two values have the same value or not.
// It works similar to the === operator but there are a few weird cases:
console.log(Object.is(NaN,NaN)); // -> true
console.log(NaN === NaN); // -> false

console.log(Object.is(-0,0)); // -> false
console.log(-0 === 0); // -> true

Object.is(NaN, 0 / 0); // -> true
NaN === 0 / 0; // -> false