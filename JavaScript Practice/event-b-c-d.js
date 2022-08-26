// event bubbling , event capturing ,event delegation


// const grandParent = document.querySelector(".grandparent");
// const Parent = document.querySelector(".parent");
// const Child = document.querySelector(".child");
// const body = document.body;

// event capturing
// Child.addEventListener("click",()=>{
//     console.log("capture!!! on child!!");
// },true
// );
// Parent.addEventListener("click",()=>{
//     console.log("capture!!! on parent!!");
// },true
// );
// grandParent.addEventListener("click",()=>{
//     console.log("capture!!! on grand parent!!");
// },true
// );
// body.addEventListener("click",()=>{
//     console.log("capture!!! on body!!");
// },true
// );

// // event bubbling / event propogation
// Child.addEventListener("click",()=>{
//     console.log("you clicked on child!!");
// });
// Parent.addEventListener("click",()=>{
//     console.log("you clicked on parent!!");
// });
// grandParent.addEventListener("click",()=>{
//     console.log("you clicked on grand parent!!");
// });
// body.addEventListener("click",()=>{
//     console.log("you clicked on body!!");
// });

// event delegation 

const grandParent = document.querySelector(".grandparent");

grandParent.addEventListener("click",(e)=>{
    console.log(e.target);
})

