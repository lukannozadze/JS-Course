function* generateId(){
    let id = 1;

    while(true){
       console.log(2);
       const increment = yield id
       console.log(increment);
       if(increment!=null){
        console.log('babiddy');
        id+=increment
       }else{
        console.log('gigiddy')
        id++;
       }
    }
}

const generateObj = generateId();

console.log(generateObj.next());
 console.log(generateObj.next(5));
 console.log(generateObj.next());

function* test(){
    let id = 1; //5
    while(true){
        id = yield id;
    }
}

// const t1 = test();
// console.log(t1.next());
// console.log(t1.next(7));
// console.log(t1.next(10));


function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  const seq = generateSequence(1,5)


  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }


const pass = generatePasswordCodes();
console.log(pass.next());
  
   let str = '';
  
  for(let code of generatePasswordCodes()) {
    console.log(code)
    str += String.fromCharCode(code);
   }
   console.log(str);
  
//   alert(str); // 0..9A..Za..z