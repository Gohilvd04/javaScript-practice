const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })

const mainBtn= document.querySelector(".btn-headline");
console.log(mainBtn);
mainBtn.addEventListener("mouseover",(e)=>{
    console.log("mouseover event!!");
})
mainBtn.addEventListener("mouseleave",(e)=>{
    console.log("mouseleave event!!");
})