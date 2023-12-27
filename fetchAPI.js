//the simplest fetch you can use and still have error handling

// const url = "https://jsonplaceholder.typicode.com/usersasdasd";

// function getData(){
//     fetch(url)
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Invalid response status");
//         }
//         return response.json(); //mehod to extra
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.warn(err.message);
//     });
//  }
// getData();

// const url = "https://jsonplaceholder.typicode.com/usersasdasd";

// async function getData(){
//     try{
//         let response = await fetch(url);
//         if(!response.ok){
//             throw new Error("Invalid response status");
//         }
//         console.log(response);
//         let data = await response.json();
//         console.log(data);
//     } catch(err){
//         console.warn(err.message);
//     }
// }
// getData();

const str = 'https://jsonplaceholder.typicode.com/users';
function getData(){
    const url = new URL(str);
    const request = new Request(url,{
        headers:{'x-steve':'hello'},
        method:'GET',
        cache:'no-store'
    });
    console.log(url,url.hostname);
    fetch(request).then(response=>{
       if(!response.ok){
        throw new Error("Invalid response status");
       }
       return response.json();
    }).then(data=>{
        console.log(data);
    })
     .catch(err=>{
         console.warn(err.message);
     });
} 
getData();