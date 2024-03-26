import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Renders the exercise buttons component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.plays - The number of plays.
 * @param {boolean} props.visible - Indicates if the buttons are visible.
 * @param {boolean} props.repairApplied - Indicates if repair is applied.
 * @param {Function} props.openRepairHandler - The handler for opening repair.
 * @param {Function} props.openInstructionsHandler - The handler for opening instructions.
 * @param {Function} props.startExerciseHandler - The handler for starting the exercise.
 * @returns {JSX.Element|null} The rendered component.
 */
const ExerciseButtons = ({
  plays,
  visible,
  repairApplied,
  openRepairHandler,
  openInstructionsHandler,
  startExerciseHandler,
}) => {
  const [startMessage, setStartMessage] = useState("Start");

  useEffect(() => {
    if (repairApplied) {
      setStartMessage("Start with Repair Applied");
    } else if (plays > 0) {
      setStartMessage("Next Play");
    }
  }, [repairApplied, plays]);

  const repairButton = (
    <button
      className="btn btn-second btn-xl text-uppercase  leftButton"
      onClick={openRepairHandler}
      key="repair"
    >
      Repair
    </button>
  );
  const instructionsButton = (
    <button
      className="btn btn-second btn-xl text-uppercase  leftButton"
      onClick={openInstructionsHandler}
      key="instructions"
    >
      How to Play?
    </button>
  );
  const startButton = (
    <button
      className="btn btn-primary text-black btn-xl text-uppercase  rightButton"
      onClick={startExerciseHandler}
      key="start"
    >
      {startMessage}
    </button>
  );
  const buttons = [];

  if (!visible) return null;

  if (plays >= 2) buttons.push(repairButton);
  if (plays === 0) buttons.push(instructionsButton);
  buttons.push(startButton);

  return <>{buttons}</>;
};

ExerciseButtons.propTypes = {
  plays: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  repairApplied: PropTypes.bool.isRequired,
  openRepairHandler: PropTypes.func.isRequired,
  openInstructionsHandler: PropTypes.func.isRequired,
  startExerciseHandler: PropTypes.func.isRequired,
};

export default ExerciseButtons;
