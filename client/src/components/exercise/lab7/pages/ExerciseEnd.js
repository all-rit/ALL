import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import { LAB_ID } from "../../../../constants/lab7";
import { Forum, EmojiObjects, Timer } from "@material-ui/icons";

class ExerciseEnd extends Component {
  handleHome() {
    navigate("/Lab7/Exercise/ExerciseStart");
  }

  componentDidMount() {
    const { user } = this.props;
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID)
    }
  }
  render() {
    // const { user, state, plays } = this.props;
    return (

      <Fragment>
        <div className="center-div">
          <p className="playthrough__sentence">
            Congratulations! You've finished the AI Cybersecurity Module.
          </p>
          <p className="playthrough__sentence">
            Click the 'Home' button to return to the Exercise start page or click the 'Next' button to continue onto the Reinforcement part of the lab.
          </p>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleHome}
            key="start"
          >
            Home
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ExerciseEnd;
