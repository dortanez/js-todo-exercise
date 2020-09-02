const todoInput = document.querySelector('input[type="text"]');
const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const lis = document.querySelectorAll('li');

const todoListStorage = [];

// adding new task to page and to storage array
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


// deleting task from page and from storage array
todoList.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        console.log(todoListStorage.indexOf(e.target.parentElement.innerHTML))
        console.log(e.target.parentElement.innerHTML)
        console.log(todoListStorage)
        todoListStorage.splice(todoListStorage.indexOf(e.target.parentElement.innerHTML),1)
        localStorage.setItem('tasks',JSON.stringify(todoListStorage))       
    } 
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('strike');
    }
})

// getting tasks from local storage and adding it to new page
const tasks = JSON.parse(localStorage.getItem('tasks'))

for(let task of tasks) {
    const newLi = document.createElement('li');
    newLi.innerHTML = task;
    todoList.appendChild(newLi);
    todoListStorage.push(newLi.innerHTML)
}



