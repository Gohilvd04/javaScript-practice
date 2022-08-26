// map 
// store data in ordered fashion
// store key value pair like object 
// iterable
// duplicate keys are not allowed like object
// key of map can be any type -->string array  etc

const person = new Map();

person.set('firstName','Vishal');
person.set('age',19);
person.set(1,'one');

console.log(person.get('age'));
// console.log(person.keys());

for(let key of person.keys()){
    console.log(key);
}