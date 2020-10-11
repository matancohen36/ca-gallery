const STORAGE_KEY = 'todoDB';
var gSortBy = 'TXT'
var gFilterBy = 'ALL';
var gPrio;
var gTodos = _createTodos();


function getTodosForDisplay() {
    if (gFilterBy === 'ALL') return getTodosSorttedBy(gTodos);
    var res = gTodos.filter(function (todo) {
        return (
            gFilterBy === 'DONE' && todo.isDone ||
            gFilterBy === 'ACTIVE' && !todo.isDone
        )
    })
    res = getTodosSorttedBy(res)
    return res;
}


function addTodo(txt) {
    if (txt.length > 0) {
        gTodos.unshift(_createTodo(txt))
        saveToStorage(STORAGE_KEY, gTodos);
    }
}

function removeTodo(id,isApproved) {
    if(!isApproved) return
    var idx = gTodos.findIndex(function (todo) {
        return todo.id === id
    })
    gTodos.splice(idx, 1);
    saveToStorage(STORAGE_KEY, gTodos);
}

function toggleTodo(id) {
    var todo = gTodos.find(function (todo) {
        return todo.id === id
    })
    todo.isDone = !todo.isDone;
    saveToStorage(STORAGE_KEY, gTodos);
}

function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function setSort(sortBy) {
    gSortBy = sortBy;
}

function setPrio(prio) {
    gPrio = +prio;
}

function getTodosCount() {
    return gTodos.length
}
function getActiveTodosCount() {
    var count = gTodos.reduce(function (count, todo) {
        if (!todo.isDone) count += 1
        return count;
    }, 0)
    return count;
}
function getActiveTodosCount1() {
    var activeTodos = gTodos.filter(function (todo) {
        return !todo.isDone
    })
    return activeTodos.length;
}

function getTodosSorttedBy(todos) {
    if (gSortBy === 'TXT') return sortTodoByTxt(todos)
    if (gSortBy === 'DATE') return sortTodoByDate(todos)
    if (gSortBy === 'PRIO') return sortTodoByPrio(todos)
}

function sortTodoByDate(todos) {
    return todos.sort(function (todo1, todo2) {
        return todo1.createdAt - todo2.createdAt;
    })
}

function sortTodoByTxt(todos) {
    return todos.sort(function (todo1, todo2) {
        if (todo1.txt.toLowerCase() < todo2.txt.toLowerCase()) return -1;
        if (todo1.txt.toLowerCase() > todo2.txt.toLowerCase()) return 1;
        return 0;
    })
}

function sortTodoByPrio(todos) {
    return todos.sort(function (todo1, todo2) {
        return todo1.prio - todo2.prio;
    })
}



// Those functions are PRIVATE - not to be used outside this file!
function _createTodo(txt) {
    return {
        id: makeId(),
        txt: txt,
        isDone: false,
        createdAt: getTime(),
        prio: (gPrio) ? gPrio : 1
    };
}
function _createTodos() {
    var todos = loadFromStorage(STORAGE_KEY);
    if (!todos) {
        todos = []
        todos.push(_createTodo('Learn HTML'))
        todos.push(_createTodo('Master CSS'))
        todos.push(_createTodo('Become JS Ninja'))
    }
    return todos;
}



