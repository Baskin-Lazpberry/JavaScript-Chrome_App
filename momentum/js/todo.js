const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let todos = [];

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);


    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;

    todoList.appendChild(li);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((item) =>  item.id != li.id);
    console.log(todos);
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos){
    todos = JSON.parse(savedTodos);
    todos.forEach(paintTodo);
}