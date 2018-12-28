import React, { Component } from 'react';
import './App.css';

import Game from '../game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Accessibility Lab #1</h1>
        <Game></Game>
      </div>
    );
  }
}

export default App;
