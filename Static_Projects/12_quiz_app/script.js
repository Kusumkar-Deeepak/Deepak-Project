const questions = [
    {
        title: 'WWW stands for ?',
        options: ['World Whole Web', 'Wide World Web', 'Web World Wide', 'World Wide Web'],
        answer: 3,
    },
    {
        title: 'Components of Central Processing Unit (CPU) ?',
        options: ['Arithmetic logic unit, Mouse', 'Arithmetic logic unit, Control unit', 'Arithmetic logic unit, Integrated Circuits', 'Control Unit, Monitor'],
        answer: 1,
    },
    {
        title: 'First generation of computers used ?',
        options: ['Vacuum Tubes and Magnetic Drum', 'Integrated Circuits', 'Magnetic Tape and Transistors', 'All of the above'],
        answer: 0,
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.querySelector('.options');
    optionsElement.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.title;

    currentQuestion.options.forEach((option, index) => {
        const optionHTML = `
            <label class="option-label">
                <input type="radio" name="option" value="${index}"> ${option}
            </label>
        `;
        optionsElement.innerHTML += optionHTML;
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');

    const resultElement = document.getElementById('result');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    const answerIndex = parseInt(selectedOption.value);
    if (answerIndex === questions[currentQuestionIndex].answer) {
        score++;
        resultElement.textContent = 'Correct!';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = `Incorrect! The correct answer is: ${questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer]}`;
        resultElement.className = 'incorrect';
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            resultElement.className = 'idle';
            displayQuestion();
        }, 2000);
    } else {
        setTimeout(() => {
            showResults();
        }, 2000);
    }
}

function showResults() {
    const questionCard = document.querySelector('.question-card');
    questionCard.innerHTML = `
        <h2>Your Score: ${score} out of ${questions.length}</h2>
    `;
    document.getElementById('restart-button').classList.remove('hidden');
}

document.getElementById('quiz-form').addEventListener('submit', handleSubmit);
document.getElementById('restart-button').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    document.getElementById('restart-button').classList.add('hidden');
    document.getElementById('result').className = 'idle';
});

displayQuestion();
