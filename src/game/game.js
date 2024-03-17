
import React from 'react';
import Board from '../components/Board';
import { useDispatch } from 'react-redux';
import { resetGame } from '../actions/actions';

const Game = () => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <button onClick={handleResetClick}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;
