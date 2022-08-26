// Map method 

// map returning new array 

const numbers = [3,5,2,1];

// const square=(number)=>{
//     return number * number;
// }

// const squareNum = numbers.map(square);
// console.log(squareNum);

const sqrt = numbers.map(number => {
    return number*number;  // needed to write return statement here
});

console.log(sqrt);

const users = [
    {firstName:"Vishal", age : 21},
    {firstName:"Yash", age : 31},
    {firstName:"Parth", age : 25},
    {firstName:"Chirag", age : 23},
    ];

const userNames = users.map(user=>{
        return user.firstName;          // username array created from object 
});

console.log(userNames);
