
import { actionTypes } from '../actions/actions';

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null
};

const calculateWinner = (squares) => {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  
    [0, 4, 8], [2, 4, 6]              
  ];

  for (const [a, b, c] of winningCombinations) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ( 'X' or 'O')
    }
  }
  return null; // no winner
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SQUARE_CLICK:
      if (state.winner || state.squares[action.payload.index]) {
        return state;
      }
      const squares = [...state.squares];
      squares[action.payload.index] = state.xIsNext ? 'X' : 'O';
      return {
        ...state,
        squares,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(squares) 
      };
    case actionTypes.RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default reducer;