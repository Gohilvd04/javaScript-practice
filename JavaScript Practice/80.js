function hello(){
    console.log("hello vishal");
}
hello();

// javascript function act as function and object both 
// we can add our own properties to that function 

hello.prototype.sing= function(){
    console.log("lalalalal");
}

hello.prototype.abc="abc";

hello.prototype.sing();