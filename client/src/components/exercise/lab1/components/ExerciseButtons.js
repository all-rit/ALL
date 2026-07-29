/* eslint-disable react/prop-types */
import React, { Component, Fragment } from "react";
import LabButton from "../../../all-components/LabButton";

class ExerciseButtons extends Component {
  render() {
    const {
      plays,
      visible,
      repairApplied,
      openRepairHandler,
      openInstructionsHandler,
      startExerciseHandler,
    } = this.props;
    let startMessage = "Start";
    if (repairApplied) {
      startMessage = "Start with Repair Applied";
    } else if (plays > 0) {
      startMessage = "Next Play";
    }
    const repairButton = (
      <LabButton onClick={openRepairHandler} key="repair" label={"Repair"} />
    );
    const instructionsButton = (
      <LabButton
        onClick={openInstructionsHandler}
        key="instructions"
        label={"How to Play?"}
      />
    );
    const startButton = (
      <LabButton
        onClick={startExerciseHandler}
        key="start"
        label={startMessage}
      />
    );
    const buttons = [];

    if (!visible) return null;

    if (plays >= 2) buttons.push(repairButton);
    if (plays === 0) buttons.push(instructionsButton);
    buttons.push(startButton);

    return <Fragment>{buttons}</Fragment>;
  }
}

export default ExerciseButtons;
