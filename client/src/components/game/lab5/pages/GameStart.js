import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import {GAME_IDLE} from "../../../../constants/lab5";

class GameStart extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.updateState(GAME_IDLE);
  }

  handleStart() {
    navigate("/Lab5/Game/DyslexiaAccessible");
  }

  render() {
    // const { user, state, plays } = this.props;
    return (
      
      <Fragment>
        <div className="center-div">
          <p className="guidance margin-bottom-2">
              We will explore a series of cognitive anti-patterns that especially challenge cognitively impaired individuals.
              After each anti-pattern we will learn and correct our code to make it more accessible. Finally, we will view the updated experience.
              Click "Start" to begin!
          </p>
          <button
              className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
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
