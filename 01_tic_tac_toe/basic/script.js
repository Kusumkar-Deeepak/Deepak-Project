const board = document.getElementById('board');
const winnerMessage = document.getElementById('winnerMessage');
let currentPlayer = 'X';
let boardState = Array(9).fill(null);

function createCell(index) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => makeMove(index, cell));
    board.appendChild(cell);
}

function makeMove(index, cell) {
    if (boardState[index] || checkWinner()) return;
    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');

    if (checkWinner()) {
        winnerMessage.textContent = `Player ${currentPlayer} wins! 🎉`;
    } else if (!boardState.includes(null)) {
        winnerMessage.textContent = `It's a draw! 🤝`;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return true; // A winning combination is found
        }
    }
    return false; // No winner found
}

// Initialize the board
boardState.forEach((_, index) => createCell(index));
