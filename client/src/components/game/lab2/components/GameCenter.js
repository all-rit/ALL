import React, { Component } from 'react';
import Game from './game.js';

/*
Class for connecting the game component to the main system
*/
class GameCenter extends Component {

  //Renderer for the game page
  render() {
    const {correctColor, incorrectColorOne, incorrectColorTwo, background,
      gameOption, resetOption, onChangeGameColors, colors, resetColors,
      selectOption, gameEnded, enterInfoState, enterSecondInfoState, gamesPlayed,
      enterThirdInfoState} = this.props;

    return (
      <Game
        gameEnded={gameEnded}
        correctColor={correctColor}
        incorrectColorOne={incorrectColorOne}
        incorrectColorTwo={incorrectColorTwo}
        background={background}
        gameOption={gameOption}
        selectOption={selectOption}
        resetOption={resetOption}
        onChangeGameColors={onChangeGameColors}
        colors={colors}
        resetColors={resetColors}
        enterInfoState={enterInfoState}
        enterSecondInfoState={enterSecondInfoState}
        gamesPlayed={gamesPlayed}
        enterThirdInfoState={enterThirdInfoState}
      />
    );
  }
}

export default GameCenter;
