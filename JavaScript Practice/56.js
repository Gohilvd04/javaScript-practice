// important array methods

// foreach
// map
// filter 
// reduce


const numbers = [1,4,6,3,2];

// number.forEach(element => {
//     console.log(element);
// });

// numbers.forEach((number,index)=>{
//         console.log(number*2, index);
// });

const users = [
{firstName:"Vishal", age : 21},
{firstName:"Yash", age : 31},
{firstName:"Parth", age : 25},
{firstName:"Chirag", age : 23},
];

users.forEach(user =>{
    console.log(user.firstName);
});