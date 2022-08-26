const body = document.body;
const Btn = document.querySelector("button");
// const t = document.getElementsByClassName("btn");

    const interval = setInterval(() => {

        const red = Math.floor(Math.random() * 120);
        const green = Math.floor(Math.random() * 120);
        const blue = Math.floor(Math.random() * 120);
        
        const randomBg = () => {
            return `rgb(${red},${green},${blue})`;
        }
        body.style.background = randomBg();
    }, 1000);

   
//     const interval = setInterval(() => {

//     const red = Math.floor(Math.random() * 120);
//     const green = Math.floor(Math.random() * 120);
//     const blue = Math.floor(Math.random() * 120);
    
//     const randomBg = () => {
//         return `rgb(${red},${green},${blue})`;
//     }
//     body.style.background = randomBg();
// }, 1000);

Btn.addEventListener("click", () => {
    clearInterval(interval);
    Btn.textContent=body.style.background;
    // Btn.textContent="Start Changing";

});


