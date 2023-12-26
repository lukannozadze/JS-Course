function getWeatcher(){
    return new Promise(function(resolve,reject){
         resolve('sunny');
    })
}
function onSuccess(data){
    console.log(`Success ${data}`);
}
function onError(data){
    console.log(`Error ${data}`);
}
getWeatcher().then(onSuccess,onError);