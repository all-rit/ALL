import React, { Component, Fragment } from "react";
import {navigate} from "@reach/router";

class GameButtons extends Component {
  render() {
    const {
      openRepairHandler,
      endEnabled
    } = this.props;
    let startMessage = "Play";
    const repairButton = (
      <button className="btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton" onClick={openRepairHandler} key="repair">
        Repair
      </button>
    );
    const startButton = (
      <button
        className="btn btn-primary btn-xl text-uppercase js-scroll-triggergreen rightButton"
        onClick={()=>navigate("/Lab3/Game/UserUpdatedGame", {state:{updated: true}})}
        key="start"
      >
        {startMessage}
      </button>
    );
    const endButton = (
        <button
            className="btn btn-success btn-xl text-uppercase js-scroll-triggergreen float-right"
            style={{marginRight:'15%'}}
            onClick={()=>navigate("/Lab3/Game/BeginnerGameConclusion")}
            key="start"
        >
          End Activity
        </button>
    );

    const buttons = [];
        if(endEnabled){
          buttons.push(endButton)
        }
	    buttons.push(repairButton);
		buttons.push(startButton);

    return <Fragment>{buttons}</Fragment>;
  }
}

export default GameButtons;
