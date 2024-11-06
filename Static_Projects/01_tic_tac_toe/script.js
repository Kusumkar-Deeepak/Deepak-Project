const board = document.getElementById('board');
const winnerMessage = document.getElementById('winnerMessage');
let currentPlayer = 'X';
let boardState = Array(9).fill(null);
const refreshButton = document.getElementById('refreshButton');

// Function to create cells for the game board
function createCell(index) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => makeMove(index, cell));
    board.appendChild(cell);
}

// Function to handle player moves
function makeMove(index, cell) {
    if (boardState[index] || checkWinner()) return; // Check if cell is already taken or if game is won
    boardState[index] = currentPlayer; // Set the board state
    cell.textContent = currentPlayer; // Display current player's mark
    cell.classList.add('taken'); // Add taken class

    if (checkWinner()) {
        winnerMessage.textContent = `Player ${currentPlayer} wins! 🎉`; // Display winner message
    } else if (!boardState.includes(null)) {
        winnerMessage.textContent = `It's a draw! 🤝`; // Check for draw
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
    }
}

// Function to check for a winner
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

// Function to reset the game
function resetGame() {
    boardState = Array(9).fill(null); // Reset the board state
    currentPlayer = 'X'; // Reset current player
    winnerMessage.textContent = ''; // Clear winner message
    board.innerHTML = ''; // Clear the board
    // Recreate the cells
    boardState.forEach((_, index) => createCell(index));
}

// Event listener for refresh button
refreshButton.addEventListener('click', resetGame);

// Initialize the board on load
resetGame();
