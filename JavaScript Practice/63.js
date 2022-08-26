// some method 

// some number in array are even/odd 

const numbers = [2,4,5,6,8];

const any=numbers.some(number=>{
    return number%2!=0;
});

console.log(any);

const products = [
    {pid:1, pName: "Laptop" , pPrice : 39000},
    {pid:2, pName: "Airbuds" , pPrice : 5430},
    {pid:3, pName: "Jeans" , pPrice : 300},
    {pid:4, pName: "Shoes" , pPrice : 3000},
];

const high = products.some(product=>product.pPrice>30000);

console.log(high);





