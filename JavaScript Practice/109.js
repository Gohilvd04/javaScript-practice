const allBtn = document.querySelectorAll(".my-buttons button");

allBtn.forEach(button=>{
    button.addEventListener("click",(e)=>{
        e.target.style.color="red";
        e.target.style.backgroundColor="yellow";
    });
});