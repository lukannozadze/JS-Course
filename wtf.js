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

 