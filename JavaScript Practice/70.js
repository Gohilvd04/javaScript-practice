// Optional chaining 
// if object is exist then check for its key 

const user = {
    firstName : "Vishal",
    addres : {homeNumber : 112},
}

console.log(user?.firstName);
console.log(user?.addres?.homeNumber);