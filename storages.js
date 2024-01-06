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


///////////////////////

document.cookie = 'name=someone; expires=' + new Date(2025, 0, 1).toUTCString();

document.cookie = 'lastName=Smith; expires=' + new Date(2025, 0, 1).toUTCString();

document.cookie = 'other='+JSON.stringify(person) + ';' + 'expires' + new Date(2026,0,5).toUTCString();


console.log(document.cookie)