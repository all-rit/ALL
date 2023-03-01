import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../constants/lab7";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab7/ExerciseReducer";
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

            <ul className="playthrough__list tw-space-y-9">
              <li>
                <b>Five files</b> will be displayed on the screen, each of which will have the following:
                <ul className={"tw-space-y-1.5"}>
                  <li>A file name</li>
                  <li>Sensitive or nonsensitive content</li>
                  <li>A level of sensitivity that is dependent on the contents of the file</li>
                  <li>An access status assigned by the system</li>
                </ul>
              </li>
              <li>
                The simulation will consist of <b>ten rounds</b>
                <ul className={"tw-space-y-1.5"}>
                  <li>
                    For each round, a <b>threat level</b> will
                    be detected in the system
                  </li>
                  <li>
                    The system will restrict file access based on the <b>threat level</b> and
                    the <b>file&lsquo;s sensitivity level</b>:
                  </li>
                    <div className={"tw-py-3"}>
                      <table className={"tw-border-solid"}>
                        <thead className={"tw-border-solid"}>
                        <tr>
                          <th className={"tw-px-16"}>Threat Level</th>
                          <th className={"tw-px-16"}>Restricted Files</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr >
                          <td className={"tw-text-center"}>High</td>
                          <td className={"tw-text-center"}>Sensitivity Levels 4 and 5</td>
                        </tr>
                        <tr>
                          <td className={"tw-text-center"}>Medium</td>
                          <td className={"tw-text-center"}>Sensitivity Levels 2 and 3</td>
                        </tr>
                        <tr>
                          <td className={"tw-text-center"}>Low</td>
                          <td className={"tw-text-center"}>Sensitivity Level 1</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  <li>
                    The simulation will notify you of whether the autonomous
                    system made the correct restriction for each file by
                    displaying <b>&quot;AI Correct&quot;</b> or{" "}
                    <b>&quot;AI Incorrect&quot;</b>.
                  </li>
                  <li>
                    The autonomous system&apos;s mistakes can be categorized into
                    two types:
                  </li>
                  <ul className={"tw-py-1.5"}>
                    <li>
                      An <b>intrusion</b> occurs when a file is accessed when it
                      should have been restricted.
                    </li>
                    <li>
                      An <b>incorrect decision</b>, or <b>false positive (FP)</b>,{" "}
                      occurs when a file is restricted when it should have been
                      accessible.
                    </li>
                  </ul>
                </ul>
              </li>
              <li>
                At the end, a summary report containing all of the information displayed throughout the simulation
                will be displayed
              </li>
            </ul>
          </div>

          <p className="playthrough__sentence">
            <b>Note</b>: The simulation will be done by the
            autonomous system. You will <b>NOT</b> be able to interact with the simulation once it starts.
          </p>

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
