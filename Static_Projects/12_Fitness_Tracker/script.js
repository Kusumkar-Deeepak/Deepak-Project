document.getElementById('addExerciseButton').addEventListener('click', addExercise);

let totalDuration = 0;

function addExercise() {
    const exerciseInput = document.getElementById('exerciseInput');
    const durationInput = document.getElementById('durationInput');
    const exerciseText = exerciseInput.value.trim();
    const durationText = durationInput.value.trim();

    if (exerciseText === '' || durationText === '' || durationText <= 0) {
        alert('Please enter valid exercise and duration!');
        return;
    }

    const exerciseList = document.getElementById('exerciseList');
    const listItem = document.createElement('li');

    listItem.textContent = `${exerciseText} - ${durationText} minutes`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        totalDuration -= parseInt(durationText);
        document.getElementById('totalDuration').innerText = `Total Duration: ${totalDuration} minutes`;
        exerciseList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    exerciseList.appendChild(listItem);

    totalDuration += parseInt(durationText);
    document.getElementById('totalDuration').innerText = `Total Duration: ${totalDuration} minutes`;

    exerciseInput.value = '';
    durationInput.value = '';
}
