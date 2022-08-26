// every method 

// return true if all the values are true 


const numbers = [2,4,6,8,10];

const ans = numbers.every(number=>number%2==0);

console.log(ans);

// check whether all the price are less than 50000;


const products = [
    {pid:1, pName: "Laptop" , pPrice : 39000},
    {pid:2, pName: "Airbuds" , pPrice : 5430},
    {pid:3, pName: "Jeans" , pPrice : 300},
    {pid:4, pName: "Shoes" , pPrice : 3000},
];

const check = products.every(product=>{
    return product.pPrice<50000;
});

console.log(check);


