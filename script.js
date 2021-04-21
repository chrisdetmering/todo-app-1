let todoList = [];

//function to add to-do item to the array then list them out
const addTodo = function () {
    const inputField = document.getElementById("todo-input");
    const todoText = inputField.value;

    if (todoText.length === 0){
        inputField.style = 'border: 1px solid red';
        return;
    }

    const todo = { 
        id: Date.now(), 
        text: todoText
    }

    todoList.push(todo);
    listTodos();

    inputField.value = "";
    inputField.style = 'border: 1px solid darkgray';
}

const deleteItem = function (id) {
    console.log(todoList);
    todoList = todoList.filter(todo => todo.id !== id);
    listTodos();
}

const listTodos = function(){
    document.getElementById("todo-items").textContent = "";

    todoList.forEach((todo) => {
        let itemsList = document.getElementById("todo-items");
        itemsList.appendChild(createNewElement(todo));
    })
}

const createNewElement = function (todo) {
    const todoText = todo.text;
    const index = todoList.indexOf(todoText);
    const todoDiv = document.createElement('div');
    todoDiv.id = todo.id; 
    todoDiv.class = 'todoitem-div';

    const label = createLabel(todoText);
    const checkbox = createCheckBox(index, todoText, label);
    
    const deleteButton = createDeleteIcon(todo.id);
 
    todoDiv.appendChild(label);
    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(deleteButton);

    return todoDiv;  
}

const createCheckBox = function(index, todoText, label) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${index}`;
    checkbox.name = todoText;

    checkbox.addEventListener('click', () =>  { 
        label.classList.toggle("done");
    })

    return checkbox; 
}

const createLabel = function(todoText) { 
    const label = document.createElement('label');
    label.for = todoText;
    label.class = 'sans-serif';
    label.textContent = todoText;
    return label;
}

const createDeleteIcon = function(id) {
    const span = document.createElement('span');
    const icon = document.createElement('i');
    icon.className = "fa fa-trash"; 

    icon.addEventListener('click', () => { 
        deleteItem(id);
    })

    span.append(icon);
    return span;
}