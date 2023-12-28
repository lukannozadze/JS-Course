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

// const str = 'https://jsonplaceholder.typicode.com/users';
// function getData(){
//     const url = new URL(str);
//     const request = new Request(url,{
//         headers:{'x-steve':'hello'},
//         method:'GET',
//         cache:'no-store'
//     });
//     console.log(url,url.hostname);
//     fetch(request).then(response=>{
//        if(!response.ok){
//         throw new Error("Invalid response status");
//        }
//        return response.json();
//     }).then(data=>{
//         console.log(data);
//     })
//      .catch(err=>{
//          console.warn(err.message);
//      });
// }
// getData();

// let obj = {
//   id: 1,
//   name: "Steve",
//   favoriteColor: "blue",
// };

// let jsonToString = JSON.stringify(obj);
// let file = new File([jsonToString], "test.json", { type: "application/json" });
// console.log(file);

// let response = new Response(file, {
//   status: 200,
//   statusText: "OK",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": file.size,
//     "x-steve": "hello",
//   },
// });
// console.log(response.json().then((data) => console.log(data)));

// const imgStr =
//   "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

// fetch(imgStr)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Invalid response status");
//     }
//     return response.blob();
//   })
//   .then((blob) => {
//     const url = URL.createObjectURL(blob);
//     const img = document.getElementsByTagName("img")[0];
//     img.src = url;
//   })
//   .catch((err) => console.warn(err));

// const getData = () => {
//   let str = "http://127.0.0.1:5500/";
//   let url = new URL(str);
//   let sp = url.searchParams;
//   sp.append("hello", "world");
//   sp.append("api-key", "kakaskdkaksdjkqweqwe");
//   // console.log(url.searchParams.get("hello"));
//   console.log(url);
//   let h = new Headers();
//   h.append("Content-type", "application/json");
//   h.append("x-api-key", "kakaskdkaksdjkqweqwe");
//   let request = new Request(url, {
//     method: "POST",
//     headers: h,
//     cache: "default",
//     credentials: "omit",
//   });
//   fetch(request)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error("Invalid response status");
//       }
//       return response.text();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.warn(err.message);
//     });
// };
// getData();
imgInput = document.getElementById("imgInput");
sendBtn = document.querySelector(".send");
// const obj = {
//   id: 1,
//   name: "Steve",
//   favoriteColor: "blue",
// };

const getData = () => {
  let str = "http://127.0.0.1:5500/";
  let url = new URL(str);
  let fd = new FormData();
  fd.append("file", imgInput.files[0], imgInput.files[0].name);
  let request = new Request(url, {
    method: "POST",
    headers: {
      "content-type": "multipart/form-data",
    },
    body: fd,
  });
  fetch(request)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid response status");
      }
      return response.text();
    })
    .then((data) => {})
    .catch((err) => console.warn(err.message));
};
sendBtn.addEventListener("click", getData);
