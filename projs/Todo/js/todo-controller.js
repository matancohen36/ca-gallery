'use strict'

console.log('Hi');


function onInit() {
    renderTodos();
}


function renderTodos() {
    var strHTML = ''
    var todos = getTodosForDisplay(); 
    todos.forEach(function(todo){
        strHTML += 
        `<li class="${(todo.isDone)? 'done' : ''}" onclick="onToggleTodo('${todo.id}')">
            ${todo.txt} <span> Curr Priorety : ${todo.prio}</span>
            <button onclick="onRemoveTodo(event,'${todo.id}')">Delete Task</button> 
        </li>`
    })
    if (!todos.length) strHTML = 'No Todos';
    document.querySelector('.todo-list').innerHTML = strHTML;

    document.querySelector('.total').innerText = getTodosCount()
    document.querySelector('.active').innerText = getActiveTodosCount()
}

function onAddTodo() {
    var elNewTodoTxt = document.querySelector('.new-todo-txt');
    var txt = elNewTodoTxt.value
    addTodo(txt);
    renderTodos();
    elNewTodoTxt.value = '';
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation();
    var isApproved = confirm('are you sure?');
    removeTodo(todoId,isApproved);
    renderTodos();
}
function onToggleTodo(todoId) {
    toggleTodo(todoId);
    renderTodos();
}

function onSetFilter(filterBy) {
    setFilter(filterBy)
    renderTodos();
}
function onSetSort(SortBy) {
    setSort(SortBy);
    renderTodos();
}

function onSetPrio(prio) {
    setPrio(prio)
    renderTodos();
}