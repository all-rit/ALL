import React, { Component, Fragment } from "react";
import AppInstructions from "../components/AppInstructions";
import { navigate } from "@reach/router";

class GameStart extends Component {
  handleStart() {
    navigate("/Lab5/Game/DyslexiaAccessible");
  }

  render() {
    // const { user, state, plays } = this.props;
    return (
      
      <Fragment>
        <div class="center-div">
          <AppInstructions />
          <button
              className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen  "
              onClick = {this.handleStart}
              key="start"
          >
            Start
          </button>
        </div>
      </Fragment>
    );
  }
}

export default GameStart;
