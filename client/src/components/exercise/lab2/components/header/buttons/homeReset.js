/* eslint-disable react/prop-types */
import React from "react";
import LabButton from "../../../../../all-components/LabButton";

/*
Component for the home reset button
*/
const HomeReset = ({ exerciseEnded, changeExerciseColors, colors }) => {
  // Handles a click of the button
  const handleClick = () => {
    changeExerciseColors(colors);
    exerciseEnded();
  };

  return <LabButton type="submit" onClick={handleClick} label={"Back"} />;
};

export default HomeReset;
