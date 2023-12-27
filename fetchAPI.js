//the simplest fetch you can use and still have error handling

const url = "https://jsonplaceholder.typicode.com/usersasdasd";

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

async function getData(){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("Invalid response status");
        }
        console.log(response);
        let data = await response.json();
        console.log(data);
    } catch(err){
        console.warn(err.message);
    }
}
getData();