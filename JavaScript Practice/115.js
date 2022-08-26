// promise
const bucket = ["rice","salt","sugar","vegetables","chilli"];
const friedRice = new Promise((resolve, reject) => {
    if(bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetables")){
        resolve("Fried rice is ready");
    }
    else{
        reject("couldn't make fried rice");
    }
});

// friedRice.then((eat)=>{
//     console.log("lets eat",eat)
// },
// (error)=>{
//     console.log(error);
// });

// we can write 

friedRice.then((eat)=>{
    console.log("lets eat",eat)
}).catch(
    (error)=>{
    console.log(error);
});