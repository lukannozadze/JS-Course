// function* generateId(){
//     let id = 1;

//     while(true){
//        console.log(2);
//        const increment = yield id
//        console.log(increment);
//        if(increment!=null){
//         console.log('babiddy');
//         id+=increment
//        }else{
//         console.log('gigiddy')
//         id++;
//        }
//     }
// }

// const generateObj = generateId();

// console.log(generateObj.next());
//  console.log(generateObj.next(5));
//  console.log(generateObj.next());

// function* test(){
//     let id = 1; //5
//     while(true){
//         id = yield id;
//     }
// }

// // const t1 = test();
// // console.log(t1.next());
// // console.log(t1.next(7));
// // console.log(t1.next(10));


// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
//   }
  
//   const seq = generateSequence(1,5)


//   function* generatePasswordCodes() {
  
//     // 0..9
//     yield* generateSequence(48, 57);
  
//     // A..Z
//     yield* generateSequence(65, 90);
  
//     // a..z
//     yield* generateSequence(97, 122);
  
//   }


// const pass = generatePasswordCodes();
// console.log(pass.next());
  
//    let str = '';
  
//   for(let code of generatePasswordCodes()) {
//     console.log(code)
//     str += String.fromCharCode(code);
//    }
//    console.log(str);
  
// //   alert(str); // 0..9A..Za..z


// function* gen() {
//     // Pass a question to the outer code and wait for an answer
//      const result = yield "2 + 2 = ?"; // (*)
//      console.log(result)
//   }
  
//   let generator = gen();
  
//   console.log(generator.next())
//   console.log(generator.next(4))
  
 
//   function* gen() {
//     try {
//       let result = yield "2 + 2 = ?"; // (1)
//       alert("The execution does not reach here, because the exception is thrown above");
//     } catch(e) {
//       alert(e); // shows the error
//     }
//   }
  
//   let generator = gen();
 
//   let question = generator.next().value;
  
//   //const DATABASE_ANSWER = 4;
//   //console.log(`The answer of the ${question} is ${generator.next(DATABASE_ANSWER).value}`)
//   /generator.throw(new Error("The answer is not found in my database")); // (2)

// const getData = function*(){
//     const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = yield response.json();
//     return data;
// }

// const data = getData();
// data.next().value.then(res=>data.next(res).value.then(d=>console.log(d)))


// const fibonacci = function*(){
//     let first = 0; //1
//     let second = 1; //1
//     let third=0; //2
//     while(third <= 144){
//         yield third;
//         first = second; 
//         second = third; 
//         third = first+second;
//     }
//     if(third>144){
//         return;
//     }

// }
// const f = fibonacci();
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())

// function* range(start,end){
//     for(let i =start; i<= end; i++){
//         yield i
//     }
// }
// for (let number of range(1, 5)) {
//     console.log(number); // Should print numbers from 1 to 5
// }

// function* arrayIterator(array){

//     for(let el of array){
//         yield el;
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// let iterator = arrayIterator(arr);

// console.log(iterator.next().value); // Should print 1
// console.log(iterator.next().value); // Should print 2