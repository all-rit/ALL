/* eslint-disable react/prop-types */
import React from "react";

/*
Component for the home reset button
*/
const HomeReset = ({ exerciseEnded, changeExerciseColors, colors }) => {
  // Handles a click of the button
  const handleClick = () => {
    changeExerciseColors(colors);
    exerciseEnded();
  };

  return (
    <button
      type="submit"
      className="btn btn-second btn-lg text-uppercase "
      onClick={handleClick}
    >
      Back
    </button>
  );
};

export default HomeReset;
