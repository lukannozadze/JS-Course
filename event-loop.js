console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 5000);

console.log("End");

//in the call stack global execution context appears first
//then first console log executes
//after that settimeout function is called and it is sent to web api
//then second console log executes
//after 5 seconds callback function is sent to callback queue
//event loop checks if call stack is empty, it will sent callback function in the call stack
//callback function execution will start and callback will be printed in the console

console.log("Start");
document.getElementById("btn").addEventListener("click", () => {
  console.log("Callback");
});
console.log("End");

//in the call stack global execution context appears first
//then first console log executes
//after that addEventListener function is called and it is sent to web api
//in web api callback function is registered and click event is attached to it
//then second console log executes
//after user click the button callback function is sent to callback queue
//event loop checks, if call stack is empty callback function from callback queue will be sent to call stack and start executing
//callback will be printed in the console
