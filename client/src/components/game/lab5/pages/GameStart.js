import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";

class GameStart extends Component {
  handleStart() {
    navigate("/Lab5/Game/DyslexiaAccessible");
  }

  render() {
    // const { user, state, plays } = this.props;
    return (
      
      <Fragment>
        <div className="center-div">
          <div className="playthrough">
            <h4>
              We will explore a series of cognitive antipatterns that especially challenge cognitively impaired individuals.
              After each antipattern we will learn and correct our code to make it more accessible. Finally, we will view the updated experience. Click "Start" to begin!
            </h4>
          </div>
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
