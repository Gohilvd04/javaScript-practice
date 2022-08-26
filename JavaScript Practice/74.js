
// short syntex

const person = {
    firstName:"Vishal",
    age : 19,
    about : ()=>{
        console.log( this.firstName , this.age,);
    }
};

const person1 = {
    firstName:"Vishal",
    age : 19,
    about(){
        console.log( this.firstName , this.age,);
    }
};

// both are equivelent