import React from "react";
import "./homeStyle.css";
import ColorVision from "../colors/colorVision";

/*
Component for starting the exercise
*/
const Start = ({
  startExercise,
  exerciseOption,
  onChangeExerciseColors,
  colors,
}) => {
  //Handles the click of the button and changes the colors for the exercise
  //if the exercise option is not the default or hex options
  const startClick = () => {
    if (exerciseOption !== "Main" && exerciseOption !== "hex") {
      ColorVision(onChangeExerciseColors, exerciseOption, colors);
    }
    startExercise();
  };

  return (
    <button
      className="start center inline btn-second btn btn-xl text-uppercase "
      type="submit"
      onClick={startClick}
      aria-label="move your mouse slightly over to the left."
    >
      Start
    </button>
  );
};

export default Start;
