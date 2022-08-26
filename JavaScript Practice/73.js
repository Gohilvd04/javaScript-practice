// arrow function does not have this keyword




const person = {
    firstName:"Vishal",
    age : 19,
    about : ()=>{
        console.log( this.firstName , this.age,);
    }
};

person.about(); // it will print undefined undefined

