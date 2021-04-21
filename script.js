let todoList = [];

//function to add to-do item to the array then list them out
const addTodo = function () {
    const inputField = document.getElementById("todo-input");
    const todoItem = inputField.value;

    if(todoItem.length === 0){
        inputField.style = 'border: 1px solid red';
        return;
    }

    todoList.push(todoItem);
    listTodos();

    inputField.value = "";
    inputField.style = 'border: 1px solid darkgray';
}

//deletes and item from the array then re-lists todo items
const deleteItem = function (todoItem) {
    todoList = todoList.filter((value) => value !== todoItem);
    listTodos();
}

//display trash icon if box is checked, or hid of unchecked
const checkBox = function(itemIndex) {
    const checkbox = document.getElementById(`checkbox-${itemIndex}`);
    const icon = document.getElementById(`icon-${itemIndex}`);

    checkbox.checked ? icon.style = 'display: block' : icon.style = 'display: none';
}

//creates HTML as string for each todo item then appends to todo-items DIV box
const listTodos = function(){
    document.getElementById("todo-items").textContent = "";

    todoList.forEach((item) => {
        let itemsList = document.getElementById("todo-items");
        itemsList.appendChild(createNewElement(item));
    })
}
const createNewElement = function (todoText) {
    const index = todoList.indexOf(todoText);
    const div = document.createElement('div');
    div.class = 'todoitem-div';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${index}`;
    checkbox.name = todoText;
    checkbox.onclick = function() {
        const icon = document.getElementById(`icon-${index}`);
        checkbox.checked ? icon.style = 'display: block' : icon.style = 'display: none';
    }

    div.appendChild(checkbox);

    const label = document.createElement('label');
    label.for = todoText;
    label.class = 'sans-serif';
    label.textContent = todoText;

    div.appendChild(label);

    const span = document.createElement('span');
    const icon = `<i id=icon-${index} 
                     class='fa fa-trash'  
                     aria-hidden='true' 
                     style='display: none'
                     onclick='deleteItem("${todoText}")'></i>`
    span.innerHTML = icon;
    div.appendChild(span);

    return div;  
}