// static methods and property

// we can refer it through class name 

class Person {
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        console.log("this is person class");
    }
    static variable = "This is static variable";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ");
        this.firstName=firstName;
        this.lastName= lastName;
    }
    
}

Person.classInfo();
console.log(Person.variable);
