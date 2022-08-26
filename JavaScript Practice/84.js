function CreateUser(firstName, age, email, address){
    this.firstName=firstName;
    this.age=age;
    this.email=email;
    this.address=address;
}

CreateUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} year old`;
};

CreateUser.prototype.is18 = function(){
    return this.age>=18;
};

const user1= new CreateUser("vishal",19,"vd04@gmail.com","rajkot");
const user2 = new CreateUser("chirag",21,"cdgohil22@gmail.com","bhavnagar");
const user3 = new CreateUser("Raju",25,"rajbha22@gmail.com","botad");

for(let key in user1){
    // console.log(key);                
    if(user1.hasOwnProperty(key)){       // show only objects property not show it's prototype's property
        console.log(key);
    }
}