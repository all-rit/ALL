/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import { LAB_ID } from "../../../../constants/lab7";
import { connect } from "react-redux";

class ExerciseEnd extends Component {
  handleHome() {
    navigate("/Lab7/Exercise/ExerciseStart");
  }

  componentDidMount() {
    const { user } = this.props;
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="center-div">
          <p className="playthrough__sentence">
            Congratulations! You&lsquo;ve finished the AI Cybersecurity Module.
          </p>
          <p className="playthrough__sentence">
            Click the &lsquo;Home&lsquo; button to return to the Exercise start
            page or click the &lsquo;Next&lsquo; button to continue onto the
            Reinforcement part of the lab.
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

const mapStateToProps = (state) => {
  const { user } = state.main;
  return { user };
};

export default connect(mapStateToProps)(ExerciseEnd);
