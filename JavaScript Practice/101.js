// document.createElement()
// append
// prepend 
// remove 
// const newTodoItem = document.createElement("li");
// newTodoItem.innerText = "Create todo";
// const todoList = document.querySelector(".todo-list");
// // todoList.append(newTodoItem); // add into last

// todoList.prepend(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// // console.log(todo1);
// todo1.remove();

// before
// after

const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.innerText = "Create todo";

todoList.before(newTodoItem);