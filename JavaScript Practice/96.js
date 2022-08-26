// get and set attributes

// let navItems = document.getElementsByTagName('a'); //HTMLCollection

// for(let i=0; i<navItems.length; i++){
    
//     const navItem=navItems[i];

//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }


// navItems = Array.from(navItems); // Converts HTMLCollection into array
// // we cannot use forEach loop in HTMLCollection
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// });

const navItems = document.querySelectorAll('a');//Node list
console.log(navItems)
// for(let i=0; i<navItems.length; i++){
    
//         const navItem=navItems[i];
    
//         navItem.style.backgroundColor="#fff";
//         navItem.style.color="green";
//         navItem.style.fontWeight="bold";
//     }

// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }


navItems.forEach(navItem => {
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
    navItem.style.fontWeight="bold";
});
