const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET",URL);
// xhr.onreadystatechange=(function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState==4){
//         const respons = xhr.response;
//         const data = JSON.parse(respons);
//         console.log(data);
//     }
// })

xhr.onload=function(){
const respons = xhr.response;
const data = JSON.parse(respons);
console.log(data);
}

xhr.send();