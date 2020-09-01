const todoInput = document.querySelector('input[type="text"]');
const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');

todoListStorage = [];

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    newItem.innerText = todoInput.value + ' ';
    newItem.appendChild(deleteBtn);
    todoList.appendChild(newItem);
    todoInput.value = '';
    todoListStorage.push(newItem.innerHTML)
    localStorage.setItem('tasks',JSON.stringify(todoListStorage))
})

const tasks = JSON.parse(localStorage.getItem('tasks'))
for(let task of tasks) {
    todoListStorage.push(task)
    var newLi = document.createElement('li');
    newLi.innerHTML = task;
    todoList.appendChild(newLi);
}

todoList.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        for(let t of todoListStorage) {
            if(todoListStorage.indexOf(e.target.parentElement.innerHTML) !== -1) {
                todoListStorage.splice(todoListStorage.indexOf(e.target.parentElement.innerHTML),1)
            }
        }
    }
    
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('strike');
    }
})

console.log(todoListStorage)
console.log(localStorage.getItem('tasks'))