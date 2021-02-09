import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AppInstructions from "../components/AppInstructions";
import { navigate } from "@reach/router";

class GameStart extends Component {
  handleSubmit() {
    navigate("/Lab3/Game/BeginnerGame");
  }
  handleSubmitAdv() {
    navigate("/Lab3/Game/AdvancedGame");
  }
  render() {
    // const { user, state, plays } = this.props;
    return (
      
      <Fragment>
        <div class="center-div">
          <AppInstructions />
          <button
              className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen  "

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
