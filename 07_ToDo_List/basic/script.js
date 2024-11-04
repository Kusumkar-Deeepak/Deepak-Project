document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();
    
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        document.getElementById('todoList').appendChild(listItem);
        input.value = ''; // Clear the input field
    }
}
