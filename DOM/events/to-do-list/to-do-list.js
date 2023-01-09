"use strict";

var todoList = document.getElementById("todo-list");
var newTodo = document.getElementById("new-todo");
var addButton = document.getElementById("add-button");
var todoItems = document.getElementById("todo-items");

addButton.addEventListener("click", function() {
    var todoText = newTodo.value;
    if(todoText.length === 0){
        alert("Please enter a task");
        return;
    };
    newTodo.value = "";
    var todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    todoItem.innerHTML = '<input type="checkbox" class="checkbox">' + '<span class="close"></span>' + '<label class="todo-text">' + todoText + '</label>';
    span.appendChild(txt);
    todoItem.appendChild(span);
    todoItems.appendChild(todoItem);
    todoItem.querySelector(".checkbox").addEventListener("change", function() {
        todoItem.querySelector(".todo-text").classList.toggle("completed");
    });
});

todoList.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
        var todoItem = event.target.parentElement;
        todoItem.remove();
    };
});


