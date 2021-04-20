let todoList = [];

//function to add to-do item to the array then list them out
const addTodo = function () {
    const inputField = document.getElementById("todo-input");
    const item = inputField.value;

    //validating that user entered text into field, otherwise add red border & exit
    if(item.length === 0){
        inputField.style = 'border: 1px solid red';
        return;
    }

    todoList.push(item);
    listTodos();

    //clearing text in input field and reseting border
    //styling in case it was changed to red
    inputField.value = "";
    inputField.style = 'border: 1px solid darkgray';
}

//deletes and item from the array then re-lists todo items
const deleteItem = function (todoItem) {
    todoList = todoList.filter((value) => value !== todoItem);
    listTodos();
}

//will display trash icon if box is checked
//or hid icon if box is unchecked
const checkBox = function(todoItem) {
    const checkbox = document.getElementById(todoItem+"-checkbox");
    const icon = document.getElementById(todoItem + "-icon");
    
    if(checkbox.checked){
        icon.style = 'display: block'
    } else {
        icon.style = 'display: none'
    }
}

//creates HTML as string for each todo item then appends to todo-items DIV box
const listTodos = function(){
    document.getElementById("todo-items").innerHTML = "";

    todoList.forEach((item) => {
        let itemsList = document.getElementById("todo-items");
        itemsList.innerHTML += `<div class=item-div>
                                    <input type=checkbox id='${item}-checkbox' name=${item} onclick="checkBox('${item}')">
                                    <label for=${item}>${item}</label>
                                    <span><i id='${item}-icon' class='fa fa-trash' style='display: none' aria-hidden='true' onclick="deleteItem('${item}')"></i></span>
                                </div>`
    })
}