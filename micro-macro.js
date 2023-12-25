// Promise.resolve("Will Start Soon").then((val) => console.log(val));

// function function1() {
//   const progress = document.querySelector(".progress");
//   let i = 0;
//   const interval = setInterval(() => {
//     progress.innerHTML = i;
//     i++;
//     if (i > 100) {
//       clearInterval(interval);
//     }
//   }, 100);
// }

// window.queueMicrotask(function1);
// console.log("Start");

// setTimeout(() => {
//   console.log("Macro timeout");
// }, 5000);

// queueMicrotask(func);

// function func() {
//   setTimeout(() => {
//     console.log("Micro timeout");
//   }, 5000);
// }

setTimeout(() => {
  console.log("Macro");
}, 0);
Promise.resolve().then(() => console.log("Micro"));
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  console.log("Promise");
});

console.log("Main thread");
