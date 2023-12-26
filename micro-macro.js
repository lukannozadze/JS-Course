console.log('A Stack');

queueMicrotask(() => console.log('B Queue Microtask'));

requestAnimationFrame(() => console.log('C Request Animation Frame'));

console.log('D Stack');

setTimeout(() => console.log('E Timeout'), 0);

console.log('F Stack');

Promise.resolve().then(() => console.log('G Promise'));

console.log('H Stack');

requestAnimationFrame(() => console.log('I Request Animation Frame'));

console.log('J Stack');

setTimeout(() => console.log('K Timeout'), 0);

queueMicrotask(() => console.log('L Queue Microtask'));

console.log('M Stack');



///
console.log('start');

fetch('https://jsonplaceholder.typicode.com/todos/1').then(response=>response.json()).then(data=>console.log(data));

setTimeout(()=>console.log('setTimeout'),0);