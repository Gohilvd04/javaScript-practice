// new keyword

const createUser=function(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

const user1 = new createUser("Vishal",20);
createUser.prototype.about=function () {
    console.log(this.firstName, this.age);
    
}



console.log(user1);
user1.about();


