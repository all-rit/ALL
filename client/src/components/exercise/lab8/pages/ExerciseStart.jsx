import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ExerciseStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "ExerciseStart",
    };
  }

  handleStart() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    navigate("/Lab8/Exercise/StreamSimulation");
  }

  render() {
    return (
      <Fragment>
        <div className="center-div">
          <div className="guidance margin-bottom-2">
            <p className="playthrough__sentence">
              In this exercise, you are taking the role of a chat moderator for
              a live stream, the streamer for which has recently taken a break
              and is away from their computer. You are testing a new moderation
              tool which uses AI to detect if a message should be removed for
              being inappropriate.{" "}
              <strong>
                Your task is to monitor the live chat and remove messages that
                you deem rude or inappropriate, while taking into consideration
                the AI’s recommendation for each message.
              </strong>
            </p>

            <p className="playthrough__sentence">
              Beside each chat message, you will see a recommendation from the
              AI, followed by buttons to either remove the message or keep it.
            </p>
          </div>

          <p className="playthrough__sentence">
            Click the &apos;<span className={"tw-font-bold"}>Start</span>&apos;
            button to move on to the simulation!
          </p>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleStart.bind(this)}
            key="start"
          >
            Start
          </button>
        </div>
      </Fragment>
    );
  }
}

ExerciseStart.propTypes = {
  actions: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ExerciseStart);
