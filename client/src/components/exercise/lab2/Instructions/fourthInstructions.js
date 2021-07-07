import React from 'react';
import Button from '../components/header/buttons/button';
import UserLabService from '../../../../services/UserLabService';
import './secondaryInstructions.css';
import { LAB_ID } from '../../../../constants/lab2';

/*
Responible for displaying the fourth and final page of instructions to the users
*/
const FourthInstructions = ({closePage, activatePopup, endSystem,
  toWhiteBackground, background}) => {

  const endExercise = () => {
    endSystem();
    closePage();
    UserLabService.complete_exercise(LAB_ID);
  }

  if (background !== 'white') {
    toWhiteBackground();
  }

  const closeInstructions = () => {
    closePage();
  }

  return (
    <div className="instructionsContainer">
      <p className='secondInstructionTitle'>Nice work!</p>
      <div>
        <p className='instructionInfo'>
          Now that you've made some adjustments and played the exercise again,
          it's time to make one last decision:
        </p>
        <ul>
          <li>
            <br/>
              <p className='instructionInfo'>
              Option #1: You can click the "Continue Playing!" button to try and
              get a higher score with your current color configuration. You will also be
              able to try out other color vision deficiencies with your color configuration.
            </p>
          </li>
          <li>
          <br/>
            <p className='instructionInfo'>
              Option #2: You can click the "I'm Finished!" button to finalize the
              application and see the conclusion (you can play more but all of your
              work will be reset to the beginning).
            </p>
            <br/>
          </li>
          <li>
          <p className='instructionInfo'>
            Option #3: You can click the "Make Adjustments!" button to change the
            colors you are using in the system to attempt to get a higher score
            or to improve the contrast in the colors you are using.
            </p>
            <br/>
          </li>
      </ul>
      
      </div>
      <div className='center'>
        <Button
          clickMethod={closeInstructions}
          message={"Continue Playing!"}
          fontSizing={"25px"}
        />
        <Button
          clickMethod={endExercise}
          message={"I'm Finished!"}
          fontSizing={"25px"}
        />
        <Button
          clickMethod={activatePopup}
          message={"Make Changes!"}
          fontSizing={"20px"}
        />
      </div>
    </div>
  );
}

export default FourthInstructions;
