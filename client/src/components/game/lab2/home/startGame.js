import React from 'react';
import Start from './start';
import Dropdown from './dropdown';
import './homeStyle.css';

/*
Start game component for rendering all of the instructions for starting a game
*/
const StartGame = ({selectOption, startGame, gameOption,
  onChangeGameColors, colors, gamesPlayed}) => {

  //Handles a game option changing in the dropdown
  const changeOption = (event) => {
    selectOption(event.target.value);
  }

  return (
    <div>
      <div className='center fourthTitle'>
        {gamesPlayed===0?
          <p style={{marginBottom: '10px', marginTop: '10px'}}>
            Click the button to start the game!
          </p>
          :
          <div>
          {gamesPlayed===1?
            <div>
              <p style={{marginBottom: '10px', marginTop: '10px'}}>
                You will now conduct the same game of clicking on the correct
                colored circle, but this time with a vision deficiency emulation
                feature turned on. You will now experience the game just as
                someone with colorblindness would.
              </p>
              <p>
                Click the button to start the game.
              </p>
            </div>
            :
            <div>
            {gamesPlayed===2?
              <div>
                <p style={{marginBottom: '10px', marginTop: '10px'}}>
                  Click the button to restart the game with the same color vision
                  deficiency!
                </p>
                <p>
                  The Colorblindness emulation feature will now be made active.
                  You will experience the game as someone with colorblindness would.
                </p>
              </div>
              :
              <p style={{marginBottom: '10px', marginTop: '10px'}}>
                Choose a color vision deficiency and click the button to start the
                game!
              </p>
            }
            </div>
          }
          </div>
        }
      </div>
      <div className='center'>
        {gamesPlayed===0?
          <div className='center'>
            <Start
              startGame={startGame}
              gameOption={gameOption}
              onChangeGameColors={onChangeGameColors}
              colors={colors}
            />
          </div>
          :
          <div>
          {gamesPlayed < 3?
            <div className='center'>
              <Start
                startGame={startGame}
                gameOption={gameOption}
                onChangeGameColors={onChangeGameColors}
                colors={colors}
              />
              </div>
            :
            <div className='center'>
              <Dropdown
                selectOption = {changeOption}
              />
              <Start
                startGame={startGame}
                gameOption={gameOption}
                onChangeGameColors={onChangeGameColors}
                colors={colors}
              />
            </div>
          }
          </div>
        }
      </div>
    </div>
  );
}

export default StartGame;
