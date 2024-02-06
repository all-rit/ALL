import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import AppInstructions from "../components/AppInstructions";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Renders the ExerciseStart component.
 * This component displays the start page for the exercise.
 *
 * @returns {JSX.Element} The rendered ExerciseStart component.
 */
const ExerciseStart = () => {
  const { actions } = useMainStateContext();

  const handleSubmit = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate("/Lab3/Exercise/BeginnerExercise");
  };

  const handleSubmitAdv = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate("/Lab3/Exercise/AdvancedExercise");
  };

  /**
   * Style object for the left button.
   * @type {Object}
   */
  const buttonStyleLeft = {
    marginTop: 10,
    marginRight: 2,
  };

  /**
   * Style object for the right button.
   * @type {Object}
   */
  const buttonStyleRight = {
    marginTop: 10,
    marginLeft: 2,
  };

  return (
    <Fragment>
      <div className="center-div">
        <AppInstructions />

        <Button
          href="#"
          onClick={handleSubmit}
          variant={"contained"}
          color={"primary"}
          style={buttonStyleLeft}
        >
          Beginner Exercise
        </Button>
        <Button
          href="#"
          onClick={handleSubmitAdv}
          variant={"contained"}
          color={"secondary"}
          style={buttonStyleRight}
        >
          Advanced Exercise
        </Button>
      </div>
    </Fragment>
  );
};

export default ExerciseStart;
