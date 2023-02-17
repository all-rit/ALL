/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE, LAB_ID } from "../../../../../constants/lab3/index";
import UserLabService from "../../../../../services/UserLabService";
class AdvancedExerciseConclusion extends Component {
  handleSubmit() {
    navigate("/Lab3/Exercise");
  }
  componentDidMount() {
    const { actions, user } = this.props;
    actions.updateState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
  }
  render() {
    return (
      <div>
        <AppBar position="static" className="appBar">
          <h4 className="flex-boxes ">
            Congratulations! You have succesfully completed the Screen Readers Exercise!
          </h4>
        </AppBar>
        <br />
        <h4 className="flex-boxes" >
          Click the button below to restart the exercise.
        </h4>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={this.handleSubmit}
          key="start"
        >
          Return to Exercise Start

        </button>
      </div>

    );
  }
}

export default AdvancedExerciseConclusion;
