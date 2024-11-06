
document.addEventListener('DOMContentLoaded', loadTask);
document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();
    
    if (taskText !== '') {
        const listItem = createListItem(taskText);
        saveTask(taskText);
        document.getElementById('todoList').appendChild(listItem);
        input.value = ''; // Clear the input field
    }
}

function createListItem(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        deleteTask(taskText);
    });

    listItem.appendChild(deleteButton);
    return listItem;
}

function saveTask(taskText){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(taskText){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const listItem = createListItem(taskText);
        document.getElementById('todoList').appendChild(listItem);
    });
}