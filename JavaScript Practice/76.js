const userMethods = {

    about : function() {
        return `${this.firstName} is ${this.age} year old`;
    },
    is18 : function(){
        return this.age>=18;
    }

};

function createUser(firstName, age, email, address){
    const user = {};

    user.firstName=firstName;
    user.age=age;
    user.email=email;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    return user;
}


// function createUser(firstName, age, email, address){
//     const user = {};

//     user.firstName=firstName;
//     user.age=age;
//     user.email=email;
//     user.address=address;
//     user.about = function() {
//         return `${this.firstName} is ${this.age} year old`;
//     }
//     user.is18=function(){
//         return this.age>=18;
//     }

//     return user;
// }

const user1=createUser("vishal",19,"vd04@gmail.com","rajkot");
const user2 = createUser("chirag",21,"cdgohil22@gmail.com","bhavnagar");
const user3 = createUser("Raju",25,"rajbha22@gmail.com","botad");

// there are functions always called instead of we need it only once though they are same 

console.log(user3.about());
