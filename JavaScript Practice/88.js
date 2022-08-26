// super keyword

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

class Dog extends Animal{
    constructor(animalName,age,speed){
        super(animalName,age);
        this.speed=speed;
    }  
    run(){
        return `${this.animalName}'s speed is ${this.speed} km/h`;
    }
    bark(){
        return  `${this.animalName} is barking`;
    }
}

const tom = new Dog("tom", 3,76);

console.log(tom.run());