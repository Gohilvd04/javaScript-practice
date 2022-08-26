// find method 

// const myArray = ["car","horse","mouse","cat","dog"];

// const findString = myArray.find(string =>{
//     return string.length===3;
// });

// console.log(findString);

const users = [
    {uId:1, uName:"Vishal"},
    {uId:2, uName:"Vivek"},
    {uId:3, uName:"parth"},
    {uId:4, uName:"Yash"},
    {uId:5, uName:"Axit"},
];

const findUser = users.find(user=>{
   return user.uId===1;
});
 
console.log(findUser);
