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