// fetch 

const URL = "https://jsonplaceholder.typicode.com/postss";
const whatisthis = fetch(URL)
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error);
})
