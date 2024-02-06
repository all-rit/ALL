import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

/**
 * Renders the exercise buttons component.
 * @param {Object} props - The component props.
 * @param {Function} props.openRepairHandler - The handler function for opening the repair section.
 * @param {boolean} props.endEnabled - Indicates whether the end button is enabled.
 * @param {boolean} props.disabled - Indicates whether the buttons are disabled.
 * @returns {JSX.Element} The exercise buttons component.
 */
const ExerciseButtons = ({ openRepairHandler, endEnabled, disabled }) => {
  const startMessage = "Play";

  const repairButton = (
    <button
      className="btn btn-second btn-xl text-uppercase  leftButton"
      onClick={openRepairHandler}
      key="repair"
    >
      Repair
    </button>
  );

  const startButton = (
    <button
      className="btn btn-primary btn-xl text-uppercase  rightButton"
      onClick={() => navigate("/Lab3/Exercise/UserUpdatedExercise")}
      key="start"
      disabled={disabled}
    >
      {startMessage}
    </button>
  );

  const endButton = (
    <button
      className="btn btn-success btn-xl text-uppercase  float-right"
      style={{ marginRight: "15%" }}
      onClick={() => navigate("/Lab3/Exercise/BeginnerExerciseConclusion")}
      key="end"
      disabled={disabled}
    >
      End Activity
    </button>
  );

  const buttons = [];
  if (endEnabled) {
    buttons.push(endButton);
  }
  buttons.push(repairButton);
  buttons.push(startButton);

  return <Fragment>{buttons}</Fragment>;
};

ExerciseButtons.propTypes = {
  openRepairHandler: PropTypes.func.isRequired,
  endEnabled: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ExerciseButtons;
