/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE, LAB_ID } from "../../../../constants/lab4";
import UserLabService from "../../../../services/UserLabService";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
class Finish extends Component {
  handleSubmit() {
    navigate("/Lab4/Exercise");
  }

  componentDidMount() {
    const { actions, user } = this.props;
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
    actions.updateState(EXERCISE_IDLE);
  }

  render() {
    /*const buttonStyle = { marginRight: "10px", marginLeft: "10px" };*/
    return (
      <Fragment>
        <div>
          <AppBar position="static" className="appBar tw-items-center">
            <Toolbar>
              <h4 className="flex-boxes tw-flex ">
                Congratulations! You have successfully completed the Dexterity Exercise!
              </h4>
            </Toolbar>
          </AppBar>
          <br />
          <h4 className="flex-boxes">
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
      </Fragment>
    );
  }
}

export default Finish;
