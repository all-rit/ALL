import React, { Component, Fragment } from "react";

class GameButtons extends Component {
  render() {
    const {
      plays,
      visible,
      repairApplied,
      openRepairHandler,
      openInstructionsHandler,
      startGameHandler
    } = this.props;
    const startMessage = repairApplied ? "Start with Repair Applied" : "Start";
    const repairButton = (
      <button className="button" onClick={openRepairHandler} key="repair">
        Repair
      </button>
    );
    const instructionsButton = (
      <button
        className="btn btn-second btn-xl text-uppercase js-scroll-trigger"
        onClick={openInstructionsHandler}
        key="instructions"
      >
        How to Play?
      </button>
    );
    const startButton = (
      <button
        className="btn btn-primary btn-xl text-uppercase js-scroll-triggergreen"
        onClick={startGameHandler}
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

    return <Fragment>{buttons}</Fragment>;
  }
}

export default GameButtons;
