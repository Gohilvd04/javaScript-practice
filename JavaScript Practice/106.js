const allBtn = document.querySelectorAll(".my-buttons button");

// for(let btn of allBtn){
//     btn.addEventListener("click",function(){
//         console.log(this.innerText);
//     })
// }

// allBtn.forEach(function(btn){
//     btn.addEventListener("click",function(){
//         console.log(this.innerText);
//     })
// })

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click",function(){
        console.log(this.innerText);
    })
    
}