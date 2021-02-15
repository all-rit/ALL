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
    let startMessage = "Start";
    if (repairApplied) {
      startMessage = 'Start with PageLayoutRepair Applied'
    }
    else if (plays>0){
      startMessage = 'Next Play'
    }
    const repairButton = (
      <button className="btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton" onClick={openRepairHandler} key="repair">
        Repair
      </button>
    );
    const instructionsButton = (
      <button
        className="btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
        onClick={openInstructionsHandler}
        key="instructions"
      >
        How to Play?
      </button>
    );
    const startButton = (
      <button
        className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen rightButton"
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
