/* eslint-disable react/prop-types */
import React from 'react';

/*
Component for the home reset button
*/
const HomeReset = ({exerciseEnded, changeExerciseColors, colors}) => {
  // Handles a click of the button
  const handleClick = () => {
    changeExerciseColors(colors);
    exerciseEnded();
  };

  return (
    <div>
      <button
        type="submit"
        className="backButton btn btn-second btn-xl text-uppercase "
        onClick={handleClick}
      >
        Back
      </button>
    </div>
  );
};

export default HomeReset;
