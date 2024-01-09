function* generateId(){
    while(true){
        yield  window.crypto.randomUUID();
    }
}

const generateObj = generateId();
console.log(generateObj.next());
console.log(generateObj.next());