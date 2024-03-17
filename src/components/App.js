// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Board from './Board';
import './styles.css'; // Import the CSS file

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1 className="center">Tic Tac Toe</h1>
      <Board />
    </div>
  </Provider>
);

export default App;
