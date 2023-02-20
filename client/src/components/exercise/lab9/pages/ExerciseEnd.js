/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { AppBar } from "@material-ui/core";

class ExerciseEnd extends Component {
  handleHome() {
    navigate("/Lab9/Exercise");
  }

  render() {
    // const { user, state, plays } = this.props;
    return (
      <Fragment>
        <div className="center-div">
          <div className="cognitive_instructions">
            <div>
              <AppBar position="static" className="appBar">
                <h4 className="flex-boxes ">
                  Congratulations! You have succesfully completed the MAPE-K Exercise!
                </h4>
              </AppBar>
            </div>
          </div>
          <h4 className="flex-boxes" >
            Click the button below to restart the exercise.
          </h4>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleHome}
            key="start"
          >
            Return to Exercise Start

          </button>
        </div>
      </Fragment>
    );
  }
}

export default ExerciseEnd;
