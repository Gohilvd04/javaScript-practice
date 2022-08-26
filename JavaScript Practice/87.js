class Animal {
    constructor(animalName, age){
        this.animalName = animalName;
        this.age = age; 
    }
    eat(){
        return `${this.animalName} is eating`;
    }
    old(){
        return `${this.animalName} is ${this.age} year old`;
    }
}


// const animal1 = new Animal("tonny", 3);
// console.log(animal1.eat());
// console.log(animal1.old());

//  Inheritance

class Dog extends Animal{
    bark(){
        return  `${this.animalName} is barking`;
    }
}

const tom = new Dog("tom", 3);

console.log(tom.eat());