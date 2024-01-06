localStorage.setItem('name','Bob');
localStorage.setItem('lastname','Smith');
localStorage.setItem('age','32');
console.log(localStorage.getItem('name'));


const person = {
    name: 'John',
    lastname: 'Doe',
    age: 45
};

localStorage.setItem('person',JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem('person')))
localStorage.removeItem('name');


//////////////////

sessionStorage.setItem('name','Luka');
console.log(sessionStorage.getItem('name'));
