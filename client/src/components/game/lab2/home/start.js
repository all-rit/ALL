import React from 'react';
import './homeStyle.css';
import ColorVision from '../colors/colorVision';

/*
Component for starting the game
*/
const Start = ({startGame, gameOption, onChangeGameColors, colors}) => {

  //Handles the click of the button and changes the colors for the game
  //if the game option is not the default or hex options
  const startClick = () => {
    if (gameOption !== 'Main' && gameOption !== 'hex') {
      ColorVision(onChangeGameColors, gameOption, colors);
    };
    startGame();
  }

  return (
      <button
        className='start center inline'
        type='submit'
        onClick={startClick}
        aria-label="move your mouse slightly over to the left."
      >
        Start
      </button>
  );
}

export default Start;
