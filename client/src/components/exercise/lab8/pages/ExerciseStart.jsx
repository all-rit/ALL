import React from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ExerciseStart = ({ actions }) => {
  const handleStart = () => {
    actions.updateState(EXERCISE_PLAYING);
    navigate("/Lab8/Exercise/StreamSimulation");
  };

  return (
    <>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <p className="playthrough__sentence">
            In this exercise, you are taking the role of a chat moderator
            for a live stream, the streamer for which has recently taken a
            break and is away from their computer. You are testing a new
            moderation tool which uses AI to detect if a message should be
            removed for being inappropriate.{" "}
            <strong>
              Your task is to monitor the live chat and either keep or
              remove messages based on their level of appropriateness.
              You should take the AI’s recommendation into consideration
              for each message.
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
          onClick={handleStart}
          key="start"
        >
          Start
        </button>
      </div>
    </>
  );
};

ExerciseStart.propTypes = {
  actions: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ExerciseStart);
