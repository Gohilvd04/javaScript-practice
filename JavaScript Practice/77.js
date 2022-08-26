// difficult to add more methods in this

// create object using object.create method

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} year old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, age, email, address) {
  const user = Object.create(userMethods); // it will create empty object and reference to userMethod
  user.firstName = firstName;               // it owns the methods of userMethod object
  user.age = age;
  user.email = email;
  user.address = address;
  return user;
}

const user1 = createUser("vishal", 19, "vd04@gmail.com", "rajkot");
const user2 = createUser("chirag", 21, "cdgohil22@gmail.com", "bhavnagar");
const user3 = createUser("Raju", 25, "rajbha22@gmail.com", "botad");

console.log(user3.about());
