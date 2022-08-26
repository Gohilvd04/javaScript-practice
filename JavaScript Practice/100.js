// add HTML element using javaScript

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);

todoList.innerHTML +="<li>New todo</li>"
todoList.innerHTML +="<li>More tasks</li>"

console.log(todoList.innerHTML);
