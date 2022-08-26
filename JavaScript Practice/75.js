// write a function that creates the object 

function createUser(firstName, age, email, address){
    const user = {};

    user.firstName=firstName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about = function() {
        return `${this.firstName} is ${this.age} year old`;
    }
    user.is18=function(){
        return this.age>=18;
    }

    return user;
}

const user1=createUser("vishal",19,"vd04@gmail.com","rajkot");
console.log(user1);

const is18 = user1.is18();
console.log(is18);

const user2 = createUser("chirag",21,"cdgohil22@gmail.com","bhavnagar");
console.log(user2);

const about = user2.about();
console.log(about);

