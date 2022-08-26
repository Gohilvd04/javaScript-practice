const URL = "https://jsonplaceholder.typicode.com/posts";
function sendRequest (method , url){
    return new Promise((resolve , reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=()=>{
            if (xhr.status >= 200 && xhr.status <300) {
                resolve(xhr.response);
            }
            else{
                reject(new Error("Bad request"));
            }
        }
        xhr.send();
        xhr.onerror=()=>{
            reject(new Error("Bad request"));
        }
    })
}

sendRequest("GET",URL)
.then(response=>{
    const data = JSON.parse(response);
    console.log(data);
}).catch(error=>{
    console.log(error);
})