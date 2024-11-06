document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('clearCompletedButton').addEventListener('click', clearCompletedTasks);
loadTasks();

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskDueDate = document.getElementById('taskDueDate').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `<span class="task-text">${taskText}</span> - Due: <span class="due-date">${taskDueDate}</span> - Priority: <span class="priority">${taskPriority}</span>`;
    listItem.className = taskPriority; // Set class based on priority

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
        listItem.classList.toggle('completed');
        saveTasks();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        editTask(listItem, taskText, taskDueDate, taskPriority);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        saveTasks();
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    document.getElementById('taskDueDate').value = '';
    document.getElementById('taskPriority').value = 'low'; // Reset priority to default

    saveTasks();
}

function editTask(listItem, oldTaskText, oldDueDate, oldPriority) {
    const taskInput = document.getElementById('taskInput');
    const taskDueDate = document.getElementById('taskDueDate');
    const taskPriority = document.getElementById('taskPriority');

    taskInput.value = oldTaskText;
    taskDueDate.value = oldDueDate;
    taskPriority.value = oldPriority;

    listItem.remove(); // Remove the old task
    saveTasks(); // Save changes
}

function clearCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(task => taskList.removeChild(task));
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    const taskList = document.getElementById('taskList');
    taskList.querySelectorAll('li').forEach(item => {
        const taskText = item.querySelector('.task-text').textContent;
        const dueDate = item.querySelector('.due-date').textContent;
        const priority = item.className;
        tasks.push({ taskText, dueDate, priority, completed: item.classList.contains('completed') });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `<span class="task-text">${task.taskText}</span> - Due: <span class="due-date">${task.dueDate}</span> - Priority: <span class="priority">${task.priority}</span>`;
        listItem.className = task.priority;
        if (task.completed) {
            listItem.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            saveTasks();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editTask(listItem, task.taskText, task.dueDate, task.priority);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
            saveTasks();
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}
