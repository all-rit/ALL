/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import { LAB_ID } from "../../../../constants/lab5";
import { Forum, EmojiObjects, Timer } from "@material-ui/icons";
import { AppBar } from "@material-ui/core";

class ExerciseEnd extends Component {
  handleHome() {
    navigate("/Lab5/Exercise/ExerciseStart");
  }

  componentDidMount() {
    const { user } = this.props;
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
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
                  Congratulations! You have succesfully completed the Cognitive
                  Impairment Exercise!
                </h4>
              </AppBar>
            </div>
            <h4 className="margin-bottom">Here are some key takeaways:</h4>
            <div className="flex-boxes">
              <div>
                <div className="icon">
                  <EmojiObjects fontSize="large" />
                </div>
                Use proper headings and subheadings to reduce cognitive load
              </div>
              <div>
                <div className="icon">
                  <Timer fontSize="large" />
                </div>
                Allow users to have enough time to read
              </div>
              <div>
                <div className="icon">
                  <Forum fontSize="large" />
                </div>
                Provide clear descriptive feedback on forms
              </div>
            </div>
          </div>
          <h4 className="flex-boxes">
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
