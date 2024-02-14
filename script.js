let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

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

function makeMove(cellIndex) {
  if (board[cellIndex] === '' && !isGameOver()) {
    board[cellIndex] = currentPlayer;
    renderBoard();
    if (hasWon()) {
      document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
    } else if (board.every(cell => cell !== '')) {
      document.getElementById('message').innerText = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function renderBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.innerText = board[index];
  });
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  renderBoard();
  document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
}

function hasWon() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return board[index] === currentPlayer;
    });
  });
}

function isGameOver() {
  return hasWon() || board.every(cell => cell !== '');
}

document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
