const obj1 = {
    key1:"value1",
    key2:"value2"
}
const obj2 = Object.create(obj1); // creates empty object
    obj2.key3="value3",

console.log(obj2);

console.log(obj2.__proto__); // this is happening in this case

