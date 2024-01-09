function* simpleGenerator(){
    console.log('Before 1')
    yield 1
    console.log('After1')
    console.log('Before')
    yield 2
    console.log('After2');
    console.log('Before3');
    yield 3
    console.log('After3');
}

const generatorObject = simpleGenerator();
const generatorObject2 = simpleGenerator();

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject2.next());
console.log(generatorObject2.next());