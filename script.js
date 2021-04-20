let todoList = [];

const addTodo = function () {
    const item = document.getElementById("todo-input").value;

    todoList.push(item);
    listTodos();

    document.getElementById("todo-input").value = "";
}

const deleteItem = function (item) {
    todoList = todoList.filter((value) => value !== item);
    listTodos();
}

const checkBox = function(item) {
    const checkbox = document.getElementById(item+"-checkbox");
    const icon = document.getElementById(item + "-icon");
    if(checkbox.checked){
        icon.style = 'display: block'
    } else {
        icon.style = 'display: none'
    }
}

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