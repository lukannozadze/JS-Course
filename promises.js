function getWeatcher() {
  return new Promise(function (resolve, reject) {
    resolve("sunny");
  });
}
function onSuccess(data) {
  console.log(`Success ${data}`);
}
function onError(data) {
  console.log(`Error ${data}`);
}
getWeatcher().then(onSuccess, onError);

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

const startTime = performance.now();

console.log("synchronous 1");
console.log(`sync1 - ${performance.now() - startTime}`);

Promise.resolve().then(() => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(`for loop - ${performance.now() - startTime}`);
});

console.log("synchronous 2");
console.log(`sync2 - ${performance.now() - startTime}`);
