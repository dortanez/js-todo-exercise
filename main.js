const todoInput = document.querySelector('input[type="text"]');
const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');

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
    todoListStorage.push(newItem.innerHTML);
    localStorage.setItem('tasks',JSON.stringify(todoListStorage))
    todoForm.reset();
})

// deleting task from page and from storage array
todoList.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        const indexx = todoListStorage.findIndex((val) => {
            return val === e.target.parentElement.innerHTML;
        })
        todoListStorage.splice(indexx,1)
    } 
    // completing task when clicked
    if(e.target.tagName === 'LI') {
        let old = e.target.innerHTML;
        e.target.classList.toggle('strike');
        e.target.children[0].classList.toggle('completed')
        todoListStorage[todoListStorage.indexOf(old)] = e.target.innerHTML;
        if(e.target.children[0].classList != 'completed') {
            e.target.children[0].classList == '';
        } 
    } 
    localStorage.setItem('tasks',JSON.stringify(todoListStorage))    
})

// adding local storage tasks to new page
let tasks = JSON.parse(localStorage.getItem('tasks'))

for(let task of tasks) {
    const newLi = document.createElement('li');
    newLi.innerHTML = task;
   if(newLi.children[0].classList == 'completed') {
       newLi.classList = 'strike';
   }
    todoList.appendChild(newLi);
    todoListStorage.push(newLi.innerHTML)
}
