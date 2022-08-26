// Create your own method 

// method --> function inside object 

// const person = {
//     firstName:"Vishal",
//     age : 19,
//     about : function(){
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
//     }

const info = function(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const person = {
    firstName:"Vishal",
    age : 19,
    about : info,
}
const person1 = {
    firstName:"Parth",
    age : 19,
    about : info,
}
const person2 = {
    firstName:"Axit",
    age : 19,
    about : info,
}


person1.about();