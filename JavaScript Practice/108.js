const allBtn = document.querySelectorAll(".my-buttons button");
// console.log(allBtn)
// for(let btn of allBtn){
//     btn.addEventListener()
// }

allBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target.textContent)
    })
})