import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';

export function findWinner(board) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return !board.includes(null) ? 'D' : null;
}

let defaultState = {
  board: new Array(9).fill(null),
  currentPlayer: 'X',
  winner: null
};

function App() {
  let [state, updateBoard] = useState(defaultState);

  function handleClick(squareIndex) {
    const { board, currentPlayer, winner } = state;

    if (winner) {
      return;
    }

    if (board[squareIndex]) {
      alert('Select again.');
      return;
    } else {
      board[squareIndex] = currentPlayer;
      const winner = findWinner(board);

      updateBoard({
        board,
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
        winner
      });
    }
  }

  function Result({result, resetGame }) {
    let text;
    if (result === 'X' || result === 'O') {
      text = `${result} won`;
    } else if (result === 'D') {
      text = 'The game is a draw.';
    }

    return (
      <div className="result">
        { result ? 
          [
            <h1 key={1}>{`${text}`}</h1>,
            <button key={2} onClick={resetGame}>Play again</button>
          ] 
        : null }
      </div>
    )
  }

  function resetGame() {
    updateBoard({   
      board: new Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    });
  }

  const { currentPlayer, winner } = state;

  return (
    <div className="App">
      <h1>{currentPlayer} turn</h1>
      <Board 
        {...state} 
        handleClick={handleClick}
      />
      <Result result={winner} resetGame={resetGame} />
    </div>
  );
}

export default App;
