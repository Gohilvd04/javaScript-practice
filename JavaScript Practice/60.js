// sort method  

const numbers = [2,5,65,1,3,20,15];

// simple sort function only sort ascii values
// numbers.sort();


numbers.sort((a,b)=>{       //Ascending order
    return a-b;
})

// numbers.sort((a,b)=>{
//     return b-a;          //descending order
// })

console.log(numbers);

const names=["Vishal","Vivek","Parth","Yash","Axit"];

names.sort();
console.log(names);

const product = [
    {pid:1, pName: "Laptop" , pPrice : 39000},
    {pid:2, pName: "Airbuds" , pPrice : 5430},
    {pid:3, pName: "Jeans" , pPrice : 300},
    {pid:4, pName: "Shoes" , pPrice : 3000},
];

const lowToHigh = product.slice(0).sort((a,b)=>{ //clone array in to lowToHigh variable
    return a.pPrice-b.pPrice;                       // rest array remain same 
});

const highToLow = product.slice(0).sort((a,b)=>{        //clone array in to lowToHigh variable
    return b.pPrice-a.pPrice;                       // rest array remain same 
})



console.log(highToLow);