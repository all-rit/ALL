import React from 'react';
import Button from '../header/buttons/button';

const Conclusion = ({resetSystem}) => {

  const resetFullSystem = () => {
    resetSystem();
  }

  return (
    <div>
      <p className='secondInstructionTitle'>Conclusion</p>
      <p className='instructionInfo'>
        Thank you for using our system to advance your understanding of software
        accessibility. Here is a short recap of what we covered:
      </p>
      <p className='instructionInfo'>
        1) How inaccessible software can be detrimental to users with color vision deficiencies.
      </p>
      <p className='instructionInfo'>
        2) Some proper techniques to create software that is accessible to all
        users, including those with color vision deficiencies.
      </p>
      <p className='instructionInfo'>
        If you would like to play through this again, click the button below:
      </p>
      <div className='center'>
        <Button
          clickMethod={resetFullSystem}
          message={"Play Again!"}
          fontSizing={"25px"}
        />
      </div>
    </div>
  );
}

export default Conclusion;
