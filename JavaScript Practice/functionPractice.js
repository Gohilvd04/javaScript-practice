// let and const are block scope
// var is function scope

// {
//     let fname = "Vishal";
//     console.log(fname);
// }
// // console.log(fname); it will generate error


// // default paramerter

// function add(a,b=0){
//     return a+b;
// }

// let ans = add(3);
// console.log(ans);

// // Rest parameters

// function myFun(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
// }
// myFun(3,4,5,5,6,7,8);

// const addAll = (...numbers) => {
//     let total=0;
//     for(let num of numbers){
//       total=total+num;
//     }
//     return total;
//   }
  
//   let sum = addAll(1,3,2,4,5,6,7,8,9,10);
//   console.log(sum);


//   Parameter destructuring

const person = {
    firstName : "Vishal",
    age : 20,
    gender : "male",
  }
  
  function printDetails ({firstName,age, gender}){
    console.log(firstName);
    console.log(age);
    console.log(gender);
  }
  
  printDetails(person);


// Callback Function
                                // function as input ---> callback function

function myFun2() {
    console.log("inside my fun 2");
}
function myFun(callback) {
   
    callback();                      // act  as a function
}

myFun(myFun2);





