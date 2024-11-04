document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    listItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}
