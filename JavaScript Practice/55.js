// function returning function

const myFun = () => {
    return function(){
        return "Hello World";
    };

}

let ans = myFun();
console.log(ans());