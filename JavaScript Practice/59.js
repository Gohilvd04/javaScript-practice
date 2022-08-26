// reduce method 

const numbers = [1,2,4,3,5,6,7,8,9,10];

// aim : sum of all the numbers 

const sum = numbers.reduce((accumulator, currentValue)=>{
    
    return accumulator+currentValue;

});

console.log(sum);


const userCart = [
    {pid:1, pName: "Laptop" , pPrice : 39000},
    {pid:2, pName: "Airbuds" , pPrice : 5430},
    {pid:3, pName: "Jeans" , pPrice : 300},
    {pid:4, pName: "Shoes" , pPrice : 3000},
];

const sumOfCart = userCart.reduce( (totalPrice , currentPrice) => {
    
    return totalPrice + currentPrice.pPrice;

},0);


// initially total price set to 0

console.log(sumOfCart);
