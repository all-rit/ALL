/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../constants/lab7";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab7/ExerciseReducer";
import { connect } from "react-redux";

class ExerciseStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "ExerciseStart",
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  handleStart() {
    navigate("/Lab7/Exercise/AISimulation");
  }

  render() {
    return (
      <Fragment>
        <div className="center-div">
          <div className="guidance margin-bottom-2">
            <p className="playthrough__sentence">
              In this exercise, you will be watching simulation of an autonomous
              system responding to threats within the system by appropriately
              managing access to sensitive files.
            </p>

            <ul className="playthrough__list">
              <li className="sim-description-item">
                <b>Five files</b> will be present on your screen.
              </li>
              <ul>
                <li className="sim-description-item">
                  Each file will have: a file name, the information that it
                  contains, access status (OPEN or LOCKED), and sensitivity file
                  (low:1 - high:5)
                </li>
              </ul>
              <li className="sim-description-item">
                The simulation will consist of <b>ten rounds</b>
              </li>
              <ul>
                <li>
                  For each round, a <b>threat level</b> (low/medium/high) will
                  be detected in the system.
                </li>
                <li>
                  Based on the <b>threat level</b> and the{" "}
                  <b>file's sensitivity level</b>, the autonomous system will
                  appropriately restrict the file access of each file in the
                  system.
                </li>
                <ul>
                  <li>
                    If the threat level is <b>high</b>, files with{" "}
                    <b>sensitivity levels 4 and 5</b> will have their access
                    restricted.
                  </li>
                  <li>
                    If the threat level is <b>medium</b>, files with{" "}
                    <b>sensitivity levels 2 and 3</b> will have their access
                    restricted.
                  </li>
                  <li>
                    If the threat level is <b>low</b>, files with{" "}
                    <b>sensitivity level 1</b> will have their access
                    restricted.
                  </li>
                </ul>
                <li>
                  The simulation will notify you of whether the autonomous
                  system made the correct restriction for each file by
                  displaying <b>"AI Correct"</b> or <b>"AI Incorrect"</b>.
                </li>
                <li>
                  The autonomous system's mistakes can be categorized into two
                  types:
                </li>
                <ul>
                  <li>
                    An <b>intrusion</b> occurs when a file is accessed when it
                    should have been restricted.
                  </li>
                  <ul>
                    <li>
                      If an intrusion occurs, a message describing the impact of
                      the data breach will appear on the screen for 30 seconds
                      before the next round. This message will also be available
                      for viewing after the simulation is over.
                    </li>
                  </ul>
                  <li>
                    An <b>incorrect decision</b> or <b>false positive (FP)</b>{" "}
                    occurs when a file is restricted when it should have been
                    accessible.
                  </li>
                </ul>
              </ul>
              <li>
                After the simulation runs through all ten rounds, there will be
                a <b>summary report</b> of the total score, count of
                intrusions/protected/incorrect restrictions, and a recap of the
                messages from each round.
              </li>
            </ul>
          </div>

          <p className="playthrough__sentence">
            <b>Note</b>: Everything in the simulation will be done by an
            autonomous system (AI) and does not require human intervention. You
            will NOT be able to interact with the simulation once it starts.
          </p>

          <p className="playthrough__sentence">
            Click the '<span className={"tw-font-bold"}>Start</span>' button to
            move on to the simulation!
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ExerciseStart);
