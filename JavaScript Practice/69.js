// clone using Object 
// using spread operator 

const person = {
    id : 1,
    firstName : "Vishal",
};

const person1= {...person}; //clone

const person2 = Object.assign({},person); // clone

console.log(person1);