// const userMethods = {

//     about : function() {
//         return `${this.firstName} is ${this.age} year old`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     }

// };

function createUser(firstName, age, email, address){
    const user = Object.create(createUser.prototype);

    user.firstName=firstName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user;
}

createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} year old`;
};

createUser.prototype.is18 = function(){
    return this.age>=18;
};

const user1=createUser("vishal",19,"vd04@gmail.com","rajkot");
const user2 = createUser("chirag",21,"cdgohil22@gmail.com","bhavnagar");
const user3 = createUser("Raju",25,"rajbha22@gmail.com","botad");

console.log(user1);
console.log(user2.is18());
console.log(user2.about());