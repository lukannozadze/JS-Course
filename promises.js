// function getWeatcher() {
//   return new Promise(function (resolve, reject) {
//     resolve("sunny");
//   });
// }
// function onSuccess(data) {
//   console.log(`Success ${data}`);
// }
// function onError(data) {
//   console.log(`Error ${data}`);
// }
// getWeatcher().then(onSuccess, onError);

//
// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1ss");

// promise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Invalid response status");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

////

// const startTime = performance.now();

// console.log("synchronous 1");
// console.log(`sync1 - ${performance.now() - startTime}`);

// Promise.resolve().then(() => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(`for loop - ${performance.now() - startTime}`);
// });

// console.log("synchronous 2");
// console.log(`sync2 - ${performance.now() - startTime}`);

/////
// const getFruit = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         pineapple: "🍍",
//         peach: "🍑",
//         strawberry: "🍓",
//       });
//     }, 1000);
//   });
// };

// const makeSmoothie = async () => {
//   const fruits = await getFruit();
// };

// console.log(makeSmoothie());
////
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
// };
// getData();

////////////


//old way of doing asynchrnous operations is using callbacks
// createOrder(cart,function(){
    //     proceedToPayment(orderId);
    // })
    
    //new way of doing asynchronous operations is using promises
    // const promise = createOrder(cart);
    
    
    // promise.then(function(orderId){
        //     proceedToPayment(orderId);
        // }) 
        
        ///


const cart = ['shoes','pants','kurta','kurkuma'];
const GITHUB_API_URL = "https://api.github.com/users/bekkajava";

const user = fetch(GITHUB_API_URL);
user.then(function(response){
    return response.json();
}).then(function(data){   console.log(data)  });