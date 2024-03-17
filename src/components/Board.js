import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { squareClick, resetGame } from '../actions/actions';
import './styles.css';

// Define the winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  
  [0, 4, 8], [2, 4, 6]              
];

// Function to check for a winner
const checkForWinner = (squares) => {
  for (const [a, b, c] of winningCombinations) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; 
    }
  }
  return null; 
};

// Board component
const Board = () => {
  // Access Redux state
  const squares = useSelector(state => state.squares);
  const xIsNext = useSelector(state => state.xIsNext);
  const winner = useSelector(state => state.winner);

  // Access Redux dispatch
  const dispatch = useDispatch();

  // useEffect hook to check for winner after every state change
  useEffect(() => {
    const winner = checkForWinner(squares);
    if (winner) {
      dispatch({ type: 'SET_WINNER', payload: winner });
    }
  }, [squares, dispatch]);

  // Function to handle square click
  const handleClick = (index) => {
    dispatch(squareClick(index));
  };

  // Function to handle game reset
  const handleReset = () => {
    dispatch(resetGame());
  };

  // Function to render individual square
  const renderSquare = (index) => {
    let squareClass = "square";
    if (squares[index] === 'X') {
      squareClass += " x";
    } else if (squares[index] === 'O') {
      squareClass += " o";
    }
    
    return (
      <button
        className={squareClass}
        onClick={() => handleClick(index)}
        disabled={squares[index]}
      >
        {squares[index]}
      </button>
    );
  };

// Function to render game status
const renderStatus = () => {
  if (winner) { 
    return `Winner: ${winner === 'X' ? 'You' : 'Opponent'} won!`;
  } else if (squares.every(square => square !== null)) {
    return 'Draw!';
  } else {
    return `Next player: ${xIsNext ? 'You (X)' : 'Opponent (O)'}`;
  }
};

  // Render the board component
  return (
    <div className="board">
      <div className="status">{renderStatus()}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="button" onClick={handleReset}>Reset Game</button>
    </div>
  );
};

// Export the Board component
export default Board;
