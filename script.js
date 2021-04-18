const todoList = [];

const addTodo = function () {
    const item = document.getElementById("todo-input").value;
    todoList.push(item);
    listTodos();

    document.getElementById("todo-input").value = "";
}

const listTodos = function(){
    document.getElementById("todo-items").innerHTML = "";
    todoList.forEach((item) => {
        document.getElementById("todo-items").innerHTML += `<p>${item}</p>`
    })
}