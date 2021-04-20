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

const listTodos = function(){
    document.getElementById("todo-items").innerHTML = "";
    let itemCheckbox, itemIcon;
    todoList.forEach((item) => {
        let itemsList = document.getElementById("todo-items");
        itemCheckbox = `<input type=checkbox name=${item}'>`
        itemsList.innerHTML += `<div class=item>${itemCheckbox}
                                    <label for=${item}>${item}</label>
                                    <i class='fa fa-trash' aria-hidden='true' onclick='deleteItem(${item})'></i>
                                </div>`
    })
}