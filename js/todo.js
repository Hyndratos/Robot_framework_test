var numbers = 0
function addTodo() {
    const todoContainer = document.getElementById("todo-container");
    
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter your task";
    inputField.id = `todo-item-${numbers}`;
    numbers += 1;


    todoItem.appendChild(inputField);

    todoContainer.prepend(todoItem);
}