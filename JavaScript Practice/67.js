// sets are iterable
// not based on index 
// store data 
// no duplicates allowed

const items = ["item1","item2","item3"];

const numbers = new Set([1,4,2,5]);

// add method in set  to add element into set 
numbers.add(3);
numbers.add(items);
console.log(numbers);
// for(let num of numbers){
//     console.log(num);
// }

// has method into set for check presense of element 

if(numbers.has(1))
{
    console.log("1 is present in set");
}
else{
    console.log("1 is not present in set")
}

// length property is not applicable
// uniqe element find 
const elements = [1,4,5,2,3,1,3,5];
const unique = new Set(elements);

console.log(unique);
// to find length of set 

let length = 0;
for(let element of unique){
    length++;
}

console.log(length);
