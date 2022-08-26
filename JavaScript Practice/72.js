// call , apply ,bind 

const person = {
        firstName:"Vishal",
        age : 19,
        about : function(hobby , musician){
            console.log( this.firstName , this.age, hobby , musician);
        }       // we can write this method as seprate means outside of the object and no need to write 
                // person.about just write about.call
};
const person1 = {
        firstName:"Chirag",
        age : 21,      // it doesn't have about method 
       
};

person.about.call(person1, "cricket","Arjit singh");   //without having method about we can call it by call function

   //  borrow method from person

// apply

person.about.apply(person1, ["cricket","Arjit singh"]);

//bind 

const personFun = person.about.bind(person1,"cricket","Arjit singh");

personFun();





 
