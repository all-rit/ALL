import React from 'react';
import './homeStyle.css'
import Instructions from '../Instructions/instructions';
import StartGame from './startGame';

/*
Component for the main home page
*/
const Home = ({correctColor, incorrectColorOne, incorrectColorTwo,
  startGame, selectOption, background, gameOption, onChangeGameColors,
  enterInfoState, gamesPlayed, enterSecondInfoState, alreadyCalled,
  resetBackground, baseBackground}) => {

  const colors = [background, correctColor, incorrectColorOne, incorrectColorTwo];

  //Handles switching the colors to a simulation for a selected game option
  if(gameOption !== 'default') {
    onChangeGameColors(colors);
  }

  if (background === 'white') {
    resetBackground(baseBackground);
  }

  return (
    <div>
      <div>
        <StartGame
          selectOption = {selectOption}
          startGame = {startGame}
          gameOption = {gameOption}
          onChangeGameColors = {onChangeGameColors}
          colors = {colors}
          enterInfoState = {enterInfoState}
          gamesPlayed={gamesPlayed}
          enterSecondInfoState={enterSecondInfoState}
          alreadyCalled={alreadyCalled}
        />
      </div>
      <Instructions
        correctColor={correctColor}
        incorrectColorOne={incorrectColorOne}
        incorrectColorTwo={incorrectColorTwo}
      />
      <br/>
      <p className='fourthTitle'>
        For educational purposes, we record all scores and actions taken in the
        game, along with any information you choose to give us from our forum.<br/>

        For further information and to see the other labs
        currently in development for this project, visit
        <a href="http://all.rit.edu" className='allLink'>
          http://all.rit.edu
        </a>
      </p>
    </div>
  );
}

export default Home;
