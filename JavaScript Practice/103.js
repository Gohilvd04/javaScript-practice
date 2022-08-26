// how to get dimension of html elements 
// heigth 
// width
const sectionTodo = document.querySelector(".section-todo");
const dimensions = sectionTodo.getBoundingClientRect();
console.log(dimensions.width);
console.log(dimensions.height);