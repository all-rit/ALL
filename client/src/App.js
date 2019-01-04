import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { STARTED } from './game/GameConstants';

import Game from './game/Game';
import CodeEditor from './codeeditor/CodeEditor';

import Conditional from './helpers/Conditional';

const mapStateToProps = (state) => {
  return {
    gameState: state.game.gameState
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeEditorOpen: false
    };
  }

  toggleCodeEditor() {
    this.setState({
      codeEditorOpen: !this.state.codeEditorOpen
    });
  }

  render() {
    const { codeEditorOpen } = this.state;
    const { gameState } = this.props;

    return (
      <div className="App">
        <h1>Accessibility Lab #1 {gameState !== STARTED && <span className="code_editor__link" onClick={this.toggleCodeEditor.bind(this)}>[Repair]</span>}</h1>

        <Game></Game>

        <Conditional if={codeEditorOpen && gameState !== STARTED}>
          <CodeEditor closeHandler={this.toggleCodeEditor.bind(this)}></CodeEditor>
        </Conditional>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
