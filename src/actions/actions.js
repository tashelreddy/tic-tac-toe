

export const actionTypes = {
  SQUARE_CLICK: 'SQUARE_CLICK',
  RESET_GAME: 'RESET_GAME'
};

export const squareClick = (index) => ({
  type: actionTypes.SQUARE_CLICK,
  payload: { index }
});

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
});
