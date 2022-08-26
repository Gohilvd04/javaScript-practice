const allBtn = document.querySelectorAll(".my-buttons button");

for(let btn of allBtn){
    btn.addEventListener("click",(e)=>{
        console.log(e.currentTarget)
    })
}