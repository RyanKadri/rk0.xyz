const myInput = document.getElementById("todo-input");
const myList = document.getElementById("todo-list");
const todos = [];

async function addTodo() {
    const resp = await fetch(`/todo?item=${myInput.value}`, { method: "POST" })
    const data = await resp.json();
    todos.push(data);
    renderTodos();
}

async function fetchTodos() {
    const resp = await fetch(`/todo`, { method: "GET" });
    const data = await resp.json();
    todos.push(...data);
    renderTodos();
}

function renderTodos() {
    let listHTML = "";
    for(const item of todos) {
        listHTML += `<li>${ item.item } <button onclick="deleteTodo(${item.id})">Done</button></li>`
    }
    myList.innerHTML = listHTML; 
}

function deleteTodo(id) {
    fetch(`/todo?id=${id}`, { method: "DELETE" })
}

fetchTodos();