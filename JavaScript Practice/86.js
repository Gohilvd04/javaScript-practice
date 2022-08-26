// class keyword 

class CreateUser{
    constructor(firstName, age, email, address){
        this.firstName=firstName;
        this.age=age;
        this.email=email;
        this.address=address;
    }

    about(){
        return `${this.firstName} is ${this.age} year old`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "lalalalala";
    }
}


const user1 = new CreateUser("vishal",19,"vd04@gmail.com","rajkot");
const user2 = new CreateUser("chirag",21,"cdgohil22@gmail.com","bhavnagar");
const user3 = new CreateUser("Raju",25,"rajbha22@gmail.com","botad");

console.log(user1.firstName);
